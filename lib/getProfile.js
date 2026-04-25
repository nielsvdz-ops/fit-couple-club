import { createClient } from "./supabase/server";

const PROFILE_SELECT =
  "id, email, full_name, membership_type, is_active, stripe_customer_id";

export async function getCurrentUserAndProfile() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("GET USER ERROR:", userError);
  }

  if (!user) {
    return { user: null, profile: null, supabase };
  }

  const userEmail = String(user.email || "").toLowerCase().trim();

  let profile = null;

  const { data: profileById, error: idError } = await supabase
    .from("profiles")
    .select(PROFILE_SELECT)
    .eq("id", user.id)
    .maybeSingle();

  if (idError) {
    console.error("PROFILE BY ID ERROR:", idError);
  }

  profile = profileById || null;

  if (!profile && userEmail) {
    const { data: profileByEmail, error: emailError } = await supabase
      .from("profiles")
      .select(PROFILE_SELECT)
      .eq("email", userEmail)
      .maybeSingle();

    if (emailError) {
      console.error("PROFILE BY EMAIL ERROR:", emailError);
    }

    profile = profileByEmail || null;
  }

  if (!profile) {
    const { data: createdProfile, error: createError } = await supabase
      .from("profiles")
      .insert({
        id: user.id,
        email: userEmail,
        membership_type: "free",
        is_active: false,
      })
      .select(PROFILE_SELECT)
      .single();

    if (createError) {
      console.error("CREATE PROFILE ERROR:", createError);
    }

    profile = createdProfile || null;
  }

  return { user, profile, supabase };
}
