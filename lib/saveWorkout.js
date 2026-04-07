import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function saveWorkout(userId, workout) {
  return await supabase.from("user_workouts").insert([
    {
      user_id: userId,
      week: new Date().getWeek?.() || 1,
      workout,
    },
  ]);
}
