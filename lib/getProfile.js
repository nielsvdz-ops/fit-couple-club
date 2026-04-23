import { createClient } from "./supabase/server";

export async function getCurrentUserAndProfile() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { user: null, profile: null, supabase };
  }

  // Try by user.id (preferred)
  let { data: profile } = await supabase
    .from("profiles")
    .select("id, email, full_name, membership_type, is_active")
    .eq("id", user.id)
    .single();

  // Fallback: try by email (important for Stripe sync safety)
  if (!profile && user.email) {
    const { data: profileByEmail } = await supabase
      .from("profiles")
      .select("id, email, full_name, membership_type, is_active")
      .eq("email", user.email.toLowerCase())
      .single();

    profile = profileByEmail || null;
  }

  return { user, profile, supabase };
}
