import { createClient } from "./supabase/server";

export async function getCurrentUserAndProfile() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { user: null, profile: null, supabase };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, full_name, membership_type, is_active")
    .eq("id", user.id)
    .single();

  return { user, profile, supabase };
}import { redirect } from "next/navigation";
import { createClient } from "./supabase/server";

export async function getProfileOrRedirect() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile) redirect("/pricing");

  return { user, profile };
}
