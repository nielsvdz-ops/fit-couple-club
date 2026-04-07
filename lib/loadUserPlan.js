import { createClient } from "@supabase/supabase-js";

// ✅ Use your existing env variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

/**
 * Get latest workout plan for a user
 */
export async function getUserWorkout(userId) {
  if (!userId) return null;

  const { data, error } = await supabase
    .from("user_workouts")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    console.error("Error loading user workout:", error);
    return null;
  }

  return data?.[0] || null;
}
