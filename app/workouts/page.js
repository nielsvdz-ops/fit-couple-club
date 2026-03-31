export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import DashboardLayout from "../../components/DashboardLayout";
import { getCurrentUserAndProfile } from "../../lib/getProfile";
import { canAccessStarterPages } from "../../lib/access";

const workoutPrograms = [
  {
    slug: "booty-builder",
    title: "Booty Builder",
    subtitle: "Shape, grow, and strengthen the glutes with a structured lower-body emphasis.",
    starterVisible: 4,
    variations: [
      {
        name: "Variation 1 — Glute Foundation",
        tier: "Starter",
        goal: "Build shape, strength, and better mind-muscle connection.",
        weeklySplit: "3 days / week",
        days: [
          {
            day: "Day 1 — Heavy Glutes",
            warmup: ["5 min incline walk", "Glute band abductions x 20", "Bodyweight squats x 15"],
            finisher: "Banded frog pumps x 30 + abduction pulses x 20 for 2 rounds",
            exercises: [
              {
                name: "Barbell Hip Thrust",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Drive through the heels and hold the squeeze at the top for 1 second.",
                mistakes: "Overextending the lower back instead of finishing with the glutes.",
                substitute: "Smith Hip Thrust",
              },
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Push hips back and keep the bar close to the legs.",
                mistakes: "Turning it into a squat and losing hamstring tension.",
                substitute: "Dumbbell Romanian Deadlift",
              },
              {
                name: "Bulgarian Split Squat",
                sets: "3",
                reps: "10 each leg",
                rest: "75 sec",
                cue: "Lean slightly forward to bias the glutes.",
                mistakes: "Staying too upright and shifting everything into the quad.",
                substitute: "Walking Lunge",
              },
              {
                name: "Cable Kickback",
                sets: "3",
                reps: "15 each leg",
                rest: "45 sec",
                cue: "Slow and controlled, full stretch and full squeeze.",
                mistakes: "Using momentum and shortening the range.",
                substitute: "Band Kickback",
              },
            ],
          },
          {
            day: "Day 2 — Upper Balance",
            warmup: ["5 min bike", "Band pull-aparts x 20", "Shoulder circles x 20"],
            finisher: "Face pulls x 20 + lateral raises x 15 for 2 rounds",
            exercises: [
              {
                name: "Lat Pulldown",
                sets: "4",
                reps: "10–12",
                rest: "75 sec",
                cue: "Pull elbows down toward your hips.",
                mistakes: "Yanking with the arms and shrugging.",
                substitute: "Assisted Pull-Up",
              },
              {
                name: "Seated Cable Row",
                sets: "3",
                reps: "10–12",
                rest: "75 sec",
                cue: "Lead with the elbows and finish with the back, not the hands.",
                mistakes: "Leaning too far back and swinging.",
                substitute: "Chest Supported Row",
              },
              {
                name: "Dumbbell Shoulder Press",
                sets: "3",
                reps: "10",
                rest: "60 sec",
                cue: "Brace core and press in a controlled line.",
                mistakes: "Arching the lower back.",
                substitute: "Machine Shoulder Press",
              },
              {
                name: "Lateral Raise",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Lead with elbows and keep tension throughout.",
                mistakes: "Swinging the dumbbells up.",
                substitute: "Cable Lateral Raise",
              },
            ],
          },
          {
            day: "Day 3 — Glute Volume",
            warmup: ["5 min treadmill walk", "Bodyweight lunges x 10 each leg", "Glute bridge x 15"],
            finisher: "Seated abduction x 25 + pulse hold 20 sec for 2 rounds",
            exercises: [
              {
                name: "Smith Squat",
                sets: "4",
                reps: "10–12",
                rest: "90 sec",
                cue: "Sit into depth with control and push through midfoot.",
                mistakes: "Rushing the lowering phase.",
                substitute: "Goblet Squat",
              },
              {
                name: "Walking Lunge",
                sets: "3",
                reps: "20 steps",
                rest: "60 sec",
                cue: "Long stride and stable torso.",
                mistakes: "Tiny steps that shift emphasis away from glutes.",
                substitute: "Reverse Lunge",
              },
              {
                name: "Step-Up",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Drive through the lead leg only.",
                mistakes: "Pushing too much from the back foot.",
                substitute: "Split Squat",
              },
              {
                name: "Glute Bridge",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Posterior pelvic tilt before driving up.",
                mistakes: "Lifting ribs and arching.",
                substitute: "Frog Pump",
              },
            ],
          },
        ],
      },

      {
        name: "Variation 2 — Curves & Control",
        tier: "Starter",
        goal: "Improve shape and glute isolation with moderate volume.",
        weeklySplit: "3 days / week",
        days: [
          {
            day: "Day 1 — Glute Strength",
            warmup: ["5 min stairmaster", "Banded side walks x 20", "Air squats x 15"],
            finisher: "Banded glute bridge pulses x 25 for 2 rounds",
            exercises: [
              {
                name: "Hip Thrust",
                sets: "5",
                reps: "6–8",
                rest: "120 sec",
                cue: "Explode up, pause hard, control down.",
                mistakes: "Turning every rep into a bounce.",
                substitute: "Machine Hip Press",
              },
              {
                name: "Sumo Deadlift",
                sets: "4",
                reps: "6–8",
                rest: "120 sec",
                cue: "Push knees out and keep chest proud.",
                mistakes: "Starting with hips too high.",
                substitute: "Kettlebell Sumo Deadlift",
              },
              {
                name: "Reverse Lunge",
                sets: "3",
                reps: "10 each leg",
                rest: "60 sec",
                cue: "Step back long and stay balanced.",
                mistakes: "Short steps that over-bias the quad.",
                substitute: "Split Squat",
              },
            ],
          },
          {
            day: "Day 2 — Upper Tighten",
            warmup: ["5 min rower", "Band pull-aparts x 20", "Light rows x 15"],
            finisher: "Hammer curl x 15 + tricep rope x 15 for 2 rounds",
            exercises: [
              {
                name: "Incline Dumbbell Press",
                sets: "3",
                reps: "10",
                rest: "60 sec",
                cue: "Lower under control and drive evenly.",
                mistakes: "Letting elbows flare aggressively.",
                substitute: "Machine Chest Press",
              },
              {
                name: "Assisted Pull-Up",
                sets: "3",
                reps: "8–10",
                rest: "75 sec",
                cue: "Think chest up and elbows down.",
                mistakes: "Kipping or swinging.",
                substitute: "Lat Pulldown",
              },
              {
                name: "Rear Delt Fly",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Open with the upper back, not traps.",
                mistakes: "Shrugging shoulders up.",
                substitute: "Cable Rear Delt Fly",
              },
            ],
          },
          {
            day: "Day 3 — Glute Pump",
            warmup: ["Bike 5 min", "Banded abductions x 20", "Glute bridge hold 20 sec"],
            finisher: "Abductor machine x 30 + bodyweight squat pulses x 20",
            exercises: [
              {
                name: "Leg Press (Glute Bias)",
                sets: "4",
                reps: "10–12",
                rest: "75 sec",
                cue: "Feet high and slightly wider to hit more glute.",
                mistakes: "Cutting range short.",
                substitute: "Smith Squat",
              },
              {
                name: "Dumbbell RDL",
                sets: "4",
                reps: "10",
                rest: "75 sec",
                cue: "Stretch hamstrings, maintain neutral spine.",
                mistakes: "Curling shoulders and rounding down.",
                substitute: "Cable Pull Through",
              },
              {
                name: "Curtsy Lunge",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Stay controlled and stable through the hip.",
                mistakes: "Moving too fast and losing alignment.",
                substitute: "Reverse Lunge",
              },
            ],
          },
        ],
      },

      {
        name: "Variation 3 — Elite Glute Density",
        tier: "Premium",
        goal: "Premium glute growth phase with heavier top sets and advanced structure.",
        weeklySplit: "4 days / week",
        days: [
          {
            day: "Day 1 — Lower Strength",
            warmup: ["5 min incline walk", "Banded bridge x 20", "Single-leg hinge x 10 each"],
            finisher: "Frog pumps x 40",
            exercises: [
              {
                name: "Barbell Hip Thrust",
                sets: "5",
                reps: "5–8",
                rest: "120 sec",
                cue: "Build tension before the rep starts.",
                mistakes: "Relaxing at bottom and bouncing.",
                substitute: "Smith Hip Thrust",
              },
              {
                name: "Romanian Deadlift",
                sets: "4",
                reps: "6–8",
                rest: "120 sec",
                cue: "Slow negative, strong hip drive forward.",
                mistakes: "Letting bar drift away from body.",
                substitute: "Dumbbell RDL",
              },
              {
                name: "Smith Split Squat",
                sets: "4",
                reps: "8–10 each leg",
                rest: "75 sec",
                cue: "Stay loaded over the front glute.",
                mistakes: "Too much push from the back leg.",
                substitute: "Bulgarian Split Squat",
              },
            ],
          },
          {
            day: "Day 2 — Upper Definition",
            warmup: ["Row 5 min", "Band face pulls x 20", "Scap push-up x 12"],
            finisher: "Lateral raise drop set",
            exercises: [
              {
                name: "Single-Arm Row",
                sets: "4",
                reps: "10 each side",
                rest: "60 sec",
                cue: "Drive elbow back toward hip.",
                mistakes: "Twisting torso hard.",
                substitute: "Chest Supported Row",
              },
              {
                name: "Incline Dumbbell Press",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Press up and slightly in.",
                mistakes: "Rushing the bottom.",
                substitute: "Machine Incline Press",
              },
              {
                name: "Shoulder Press",
                sets: "3",
                reps: "10",
                rest: "60 sec",
                cue: "Keep rib cage down.",
                mistakes: "Hyperextending back.",
                substitute: "Arnold Press",
              },
            ],
          },
          {
            day: "Day 3 — Lower Volume",
            warmup: ["Bike 5 min", "Bodyweight squat x 15", "Banded abduction x 20"],
            finisher: "Abduction machine x 30 + pulse hold",
            exercises: [
              {
                name: "Hack Squat",
                sets: "4",
                reps: "10–12",
                rest: "90 sec",
                cue: "Deep, controlled, full-foot pressure.",
                mistakes: "Half reps.",
                substitute: "Leg Press",
              },
              {
                name: "Walking Lunge",
                sets: "3",
                reps: "24 steps",
                rest: "60 sec",
                cue: "Long glute-biased steps.",
                mistakes: "Tiny steps and falling forward.",
                substitute: "Reverse Lunges",
              },
              {
                name: "Cable Kickback",
                sets: "3",
                reps: "15–20 each leg",
                rest: "45 sec",
                cue: "Own the squeeze.",
                mistakes: "Swinging the leg.",
                substitute: "Band Kickback",
              },
            ],
          },
          {
            day: "Day 4 — Core + Shape",
            warmup: ["Treadmill walk 5 min", "Dead bug x 10 each", "Glute bridge x 15"],
            finisher: "Cable crunch x 20 + plank 30 sec x 2",
            exercises: [
              {
                name: "Cable Crunch",
                sets: "4",
                reps: "15",
                rest: "45 sec",
                cue: "Curl spine down, don’t just hinge.",
                mistakes: "Pulling only with arms.",
                substitute: "Machine Crunch",
              },
              {
                name: "Hanging Knee Raise",
                sets: "3",
                reps: "12",
                rest: "45 sec",
                cue: "Lift with abs, not momentum.",
                mistakes: "Swinging through reps.",
                substitute: "Reverse Crunch",
              },
            ],
          },
        ],
      },

      {
        name: "Variation 4 — Premium Sculpt Phase",
        tier: "Premium",
        goal: "Shape-focused block with higher volume and tempo control.",
        weeklySplit: "4 days / week",
        days: [
          {
            day: "Day 1 — Glutes + Hamstrings",
            warmup: ["Stairmaster 5 min", "Band hinge x 15", "Glute bridge x 20"],
            finisher: "Ham curl partials x 20",
            exercises: [
              {
                name: "Smith Hip Thrust",
                sets: "4",
                reps: "10",
                rest: "90 sec",
                cue: "1-second squeeze every rep.",
                mistakes: "Losing glute tension at bottom.",
                substitute: "Barbell Hip Thrust",
              },
              {
                name: "Seated Leg Curl",
                sets: "4",
                reps: "10–12",
                rest: "60 sec",
                cue: "Control the return fully.",
                mistakes: "Letting the weight slam back.",
                substitute: "Lying Leg Curl",
              },
            ],
          },
          {
            day: "Day 2 — Upper Tighten",
            warmup: ["Rower 5 min", "Band external rotation x 15", "Push-up hold 20 sec"],
            finisher: "Rear delt fly x 20",
            exercises: [
              {
                name: "Lat Pulldown",
                sets: "4",
                reps: "10",
                rest: "75 sec",
                cue: "Initiate with shoulder blades.",
                mistakes: "Pulling with wrists and forearms.",
                substitute: "Assisted Pull-Up",
              },
              {
                name: "Lateral Raise",
                sets: "4",
                reps: "12–15",
                rest: "45 sec",
                cue: "Float elbows outward.",
                mistakes: "Shrugging traps up.",
                substitute: "Cable Lateral Raise",
              },
            ],
          },
          {
            day: "Day 3 — Quads + Glutes",
            warmup: ["Bike 5 min", "Air squat x 15", "Walking lunge x 10 each"],
            finisher: "Bodyweight squat pulse x 30",
            exercises: [
              {
                name: "Leg Press",
                sets: "4",
                reps: "12",
                rest: "75 sec",
                cue: "Stay smooth and deep.",
                mistakes: "Locking knees hard.",
                substitute: "Hack Squat",
              },
              {
                name: "Step-Up",
                sets: "3",
                reps: "12 each leg",
                rest: "60 sec",
                cue: "Drive up from the front leg only.",
                mistakes: "Jumping from the back foot.",
                substitute: "Reverse Lunge",
              },
            ],
          },
          {
            day: "Day 4 — Core + Conditioning",
            warmup: ["Fast walk 5 min", "Toe reach x 15", "Dead bug x 10 each"],
            finisher: "Mountain climbers 30 sec x 3",
            exercises: [
              {
                name: "Plank",
                sets: "3",
                reps: "45 sec",
                rest: "30 sec",
                cue: "Ribs down, squeeze glutes.",
                mistakes: "Hips sagging.",
                substitute: "Knee Plank",
              },
              {
                name: "Reverse Crunch",
                sets: "3",
                reps: "15",
                rest: "30 sec",
                cue: "Curl pelvis up, not just legs.",
                mistakes: "Throwing legs with momentum.",
                substitute: "Dead Bug",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    slug: "upper-body-sculpt",
    title: "Upper Body Sculpt",
    subtitle: "Build a lean, defined upper body with shape, posture, and strength.",
    starterVisible: 4,
    variations: [
      {
        name: "Variation 1 — Push & Pull Foundation",
        tier: "Starter",
        goal: "Build posture, shoulder shape, and upper-body confidence.",
        weeklySplit: "2 days / week",
        days: [
          {
            day: "Day 1 — Push",
            warmup: ["Band pull-aparts x 20", "Wall slides x 15", "Push-up hold 20 sec"],
            finisher: "Lateral raise x 20",
            exercises: [
              {
                name: "Dumbbell Press",
                sets: "4",
                reps: "8–12",
                rest: "75 sec",
                cue: "Lower with control and keep shoulders stable.",
                mistakes: "Dropping too fast.",
                substitute: "Machine Chest Press",
              },
              {
                name: "Shoulder Press",
                sets: "3",
                reps: "10",
                rest: "60 sec",
                cue: "Brace the core before pressing.",
                mistakes: "Arching the lower back.",
                substitute: "Arnold Press",
              },
            ],
          },
          {
            day: "Day 2 — Pull",
            warmup: ["Rower 5 min", "Band rows x 20", "Scap squeeze x 15"],
            finisher: "Face pulls x 20",
            exercises: [
              {
                name: "Lat Pulldown",
                sets: "4",
                reps: "10–12",
                rest: "75 sec",
                cue: "Drive elbows down, chest up.",
                mistakes: "Shrugging and leaning too far back.",
                substitute: "Assisted Pull-Up",
              },
              {
                name: "Cable Row",
                sets: "3",
                reps: "10–12",
                rest: "75 sec",
                cue: "Pull to the lower ribs.",
                mistakes: "Using momentum.",
                substitute: "Machine Row",
              },
            ],
          },
        ],
      },

      {
        name: "Variation 2 — Sculpt & Tighten",
        tier: "Starter",
        goal: "Refine shape with balanced push, pull, and arm work.",
        weeklySplit: "2 days / week",
        days: [
          {
            day: "Day 1 — Upper Push",
            warmup: ["Bike 5 min", "Shoulder circles x 20", "Band press x 15"],
            finisher: "Push-up burnout",
            exercises: [
              {
                name: "Incline Dumbbell Press",
                sets: "4",
                reps: "10",
                rest: "60 sec",
                cue: "Drive evenly through both hands.",
                mistakes: "Losing tension at bottom.",
                substitute: "Machine Incline Press",
              },
              {
                name: "Lateral Raise",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Lead with elbows.",
                mistakes: "Swinging body to lift.",
                substitute: "Cable Lateral Raise",
              },
            ],
          },
          {
            day: "Day 2 — Upper Pull",
            warmup: ["Rower 5 min", "Band face pulls x 15", "Light rows x 15"],
            finisher: "Hammer curls x 20",
            exercises: [
              {
                name: "Seated Row",
                sets: "4",
                reps: "10",
                rest: "75 sec",
                cue: "Lead with elbows and squeeze upper back.",
                mistakes: "Pulling only with hands.",
                substitute: "Chest Supported Row",
              },
              {
                name: "Rear Delt Fly",
                sets: "3",
                reps: "15",
                rest: "45 sec",
                cue: "Open wide through shoulders.",
                mistakes: "Shrugging traps up.",
                substitute: "Reverse Pec Deck",
              },
            ],
          },
        ],
      },

      {
        name: "Variation 3 — Premium Upper Definition",
        tier: "Premium",
        goal: "Premium upper-body development with more volume and density.",
        weeklySplit: "3 days / week",
        days: [
          {
            day: "Day 1 — Chest + Shoulders",
            warmup: ["Band external rotations x 15", "Push-up x 10", "Wall slides x 15"],
            finisher: "Lateral raise drop set",
            exercises: [
              {
                name: "Bench Press",
                sets: "5",
                reps: "5–8",
                rest: "120 sec",
                cue: "Strong base, controlled descent.",
                mistakes: "Bouncing bar and flaring elbows.",
                substitute: "Machine Chest Press",
              },
              {
                name: "Incline Dumbbell Press",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Stay locked through the upper back.",
                mistakes: "Loose shoulders.",
                substitute: "Incline Machine Press",
              },
              {
                name: "Lateral Raise",
                sets: "4",
                reps: "12–15",
                rest: "45 sec",
                cue: "Pause slightly at top.",
                mistakes: "Turning it into a swing.",
                substitute: "Cable Lateral Raise",
              },
            ],
          },
          {
            day: "Day 2 — Back + Rear Delts",
            warmup: ["Rower 5 min", "Band row x 20", "Straight-arm pulldown x 15"],
            finisher: "Face pulls x 20",
            exercises: [
              {
                name: "Pull-Up Assist",
                sets: "4",
                reps: "8–10",
                rest: "90 sec",
                cue: "Pull chest to the bar path.",
                mistakes: "Swinging hips.",
                substitute: "Lat Pulldown",
              },
              {
                name: "Chest Supported Row",
                sets: "4",
                reps: "10",
                rest: "75 sec",
                cue: "Elbows slightly out to hit upper back.",
                mistakes: "Half reps.",
                substitute: "Cable Row",
              },
            ],
          },
          {
            day: "Day 3 — Arms + Shape",
            warmup: ["Bike 5 min", "Band curls x 20", "Rope pushdowns x 15 light"],
            finisher: "Curl + pushdown superset x 2",
            exercises: [
              {
                name: "Hammer Curl",
                sets: "4",
                reps: "10–12",
                rest: "45 sec",
                cue: "Control both up and down.",
                mistakes: "Swinging torso.",
                substitute: "Cable Curl",
              },
              {
                name: "Tricep Rope Pushdown",
                sets: "4",
                reps: "10–12",
                rest: "45 sec",
                cue: "Open rope at bottom and lock triceps.",
                mistakes: "Using shoulders to finish.",
                substitute: "Overhead Cable Extension",
              },
            ],
          },
        ],
      },

      {
        name: "Variation 4 — Premium Posture & Shape",
        tier: "Premium",
        goal: "Improve posture, shoulder caps, and back detail.",
        weeklySplit: "3 days / week",
        days: [
          {
            day: "Day 1 — Shoulders",
            warmup: ["Band pull-aparts x 20", "Shoulder circles x 20", "Light press x 12"],
            finisher: "Rear delt burnout",
            exercises: [
              {
                name: "Machine Shoulder Press",
                sets: "4",
                reps: "8–10",
                rest: "75 sec",
                cue: "Keep neck relaxed and core braced.",
                mistakes: "Pressing with shrugged shoulders.",
                substitute: "Dumbbell Shoulder Press",
              },
              {
                name: "Cable Lateral Raise",
                sets: "4",
                reps: "12–15",
                rest: "45 sec",
                cue: "Stay smooth and controlled.",
                mistakes: "Leaning hard to cheat reps.",
                substitute: "Dumbbell Lateral Raise",
              },
            ],
          },
          {
            day: "Day 2 — Back Width",
            warmup: ["Row 5 min", "Scap pulldown x 15", "Band rows x 20"],
            finisher: "Straight-arm pulldown x 20",
            exercises: [
              {
                name: "Wide Grip Pulldown",
                sets: "4",
                reps: "10",
                rest: "75 sec",
                cue: "Pull from the elbows, not hands.",
                mistakes: "Too much lean-back.",
                substitute: "Assisted Pull-Up",
              },
              {
                name: "Single-Arm Cable Row",
                sets: "3",
                reps: "12 each side",
                rest: "60 sec",
                cue: "Reach fully, then drive elbow back.",
                mistakes: "Cutting the stretch short.",
                substitute: "Dumbbell Row",
              },
            ],
          },
          {
            day: "Day 3 — Shape & Arms",
            warmup: ["Bike 5 min", "Band curls x 15", "Band pushdowns x 15"],
            finisher: "Rope hammer curl x 15 + dips x AMRAP",
            exercises: [
              {
                name: "Cable Curl",
                sets: "4",
                reps: "12",
                rest: "45 sec",
                cue: "Keep upper arm fixed.",
                mistakes: "Swinging elbows forward.",
                substitute: "EZ Bar Curl",
              },
              {
                name: "Overhead Cable Extension",
                sets: "4",
                reps: "12",
                rest: "45 sec",
                cue: "Stretch fully behind the head.",
                mistakes: "Shortening the range.",
                substitute: "Skull Crusher",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default async function WorkoutsPage() {
  const { user, profile } = await getCurrentUserAndProfile();

  if (!user) redirect("/login");
  if (!canAccessStarterPages(profile)) redirect("/pricing");

  const membership = String(profile?.membership_type || "").toLowerCase();
  const isStarter = membership === "starter";

  return (
    <DashboardLayout
      title="Workouts"
      subtitle="Exclusive training systems with exercise coaching, progression intent, and premium-level structure."
      membershipType={profile?.membership_type}
    >
      <div style={{ display: "grid", gap: "30px" }}>
        <section style={heroCard}>
          <div style={eyebrow}>Exclusive Training Library</div>
          <h2 style={heroTitle}>Private coaching feel, built into every session</h2>
          <p style={heroText}>
            Every workout includes warm-up structure, fully programmed exercises, coaching cues,
            common mistakes, substitutions, and session finishers. Starter unlocks a refined
            introduction. Premium and VIP unlock the full elite library.
          </p>
        </section>

        {workoutPrograms.map((program) => {
          const visibleVariations = isStarter
            ? program.variations.slice(0, program.starterVisible)
            : program.variations;

          return (
            <section key={program.slug} style={programWrap}>
              <div style={programHead}>
                <div>
                  <div style={eyebrow}>{program.title}</div>
                  <h2 style={programTitle}>{program.subtitle}</h2>
                </div>
                <div style={programCount}>
                  {visibleVariations.length}/{program.variations.length} variations visible
                </div>
              </div>

              <div style={{ display: "grid", gap: "18px" }}>
                {visibleVariations.map((variation) => (
                  <div key={variation.name} style={variationCard}>
                    <div style={variationTop}>
                      <div>
                        <div style={tierBadge}>{variation.tier}</div>
                        <h3 style={variationTitle}>{variation.name}</h3>
                        <p style={variationGoal}>{variation.goal}</p>
                      </div>
                      <div style={splitBadge}>{variation.weeklySplit}</div>
                    </div>

                    <div style={{ display: "grid", gap: "18px" }}>
                      {variation.days.map((day) => (
                        <div key={day.day} style={dayCard}>
                          <div style={dayHeader}>
                            <h4 style={dayTitle}>{day.day}</h4>
                          </div>

                          <div style={blockCard}>
                            <div style={miniLabel}>Warm-up</div>
                            <ul style={bulletList}>
                              {day.warmup.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div style={{ display: "grid", gap: "12px", marginTop: "14px" }}>
                            {day.exercises.map((exercise) => (
                              <div key={exercise.name} style={exerciseCard}>
                                <div style={exerciseTop}>
                                  <div>
                                    <div style={exerciseName}>{exercise.name}</div>
                                    <div style={exerciseMeta}>
                                      {exercise.sets} sets · {exercise.reps} · Rest {exercise.rest}
                                    </div>
                                  </div>
                                  <div style={demoPlaceholder}>Demo</div>
                                </div>

                                <div style={detailGrid}>
                                  <div style={detailItem}>
                                    <div style={detailLabel}>Cue</div>
                                    <div style={detailText}>{exercise.cue}</div>
                                  </div>
                                  <div style={detailItem}>
                                    <div style={detailLabel}>Common mistake</div>
                                    <div style={detailText}>{exercise.mistakes}</div>
                                  </div>
                                  <div style={detailItem}>
                                    <div style={detailLabel}>Substitute</div>
                                    <div style={detailText}>{exercise.substitute}</div>
                                  </div>
                                  {!isStarter && (
                                    <div style={detailItem}>
                                      <div style={detailLabel}>Progression</div>
                                      <div style={detailText}>
                                        Add 1 rep or a small weight increase once top reps are achieved with clean form.
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div style={{ ...blockCard, marginTop: "14px" }}>
                            <div style={miniLabel}>Finisher</div>
                            <div style={detailText}>{day.finisher}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {isStarter && program.variations.length > program.starterVisible && (
                <div style={lockedBox}>
                  <div style={lockedTitle}>Premium library locked</div>
                  <p style={lockedText}>
                    Unlock the full advanced exercise library, progression guidance, and deeper
                    variation structure with Premium or VIP.
                  </p>
                  <a href="/pricing" style={unlockButton}>Unlock Full Workout System</a>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </DashboardLayout>
  );
}

const heroCard = {
  background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "28px",
};

const eyebrow = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const heroTitle = {
  margin: 0,
  fontSize: "36px",
  fontWeight: "900",
};

const heroText = {
  marginTop: "12px",
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  maxWidth: "900px",
};

const programWrap = {
  display: "grid",
  gap: "18px",
};

const programHead = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  alignItems: "end",
  flexWrap: "wrap",
};

const programTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "800",
  color: "white",
  maxWidth: "800px",
};

const programCount = {
  padding: "10px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "700",
  color: "rgba(255,255,255,0.78)",
};

const variationCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "22px",
};

const variationTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "18px",
  alignItems: "start",
  flexWrap: "wrap",
  marginBottom: "18px",
};

const tierBadge = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: "10px",
  background: "white",
  color: "black",
  fontWeight: "800",
  marginBottom: "10px",
};

const variationTitle = {
  margin: 0,
  fontSize: "26px",
  fontWeight: "800",
};

const variationGoal = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  marginTop: "8px",
  marginBottom: 0,
  maxWidth: "760px",
};

const splitBadge = {
  padding: "10px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontWeight: "700",
};

const dayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const dayHeader = {
  marginBottom: "12px",
};

const dayTitle = {
  margin: 0,
  fontSize: "22px",
  fontWeight: "800",
};

const blockCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "14px",
};

const miniLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "8px",
};

const bulletList = {
  margin: 0,
  paddingLeft: "18px",
  color: "rgba(255,255,255,0.75)",
  lineHeight: 1.8,
};

const exerciseCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "16px",
};

const exerciseTop = {
  display: "flex",
  justifyContent: "space-between",
  gap: "14px",
  alignItems: "start",
  flexWrap: "wrap",
  marginBottom: "12px",
};

const exerciseName = {
  fontSize: "20px",
  fontWeight: "800",
  marginBottom: "6px",
};

const exerciseMeta = {
  color: "rgba(255,255,255,0.68)",
  fontSize: "14px",
};

const demoPlaceholder = {
  minWidth: "110px",
  textAlign: "center",
  padding: "12px 14px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.06)",
  border: "1px dashed rgba(255,255,255,0.18)",
  color: "rgba(255,255,255,0.7)",
  fontWeight: "700",
};

const detailGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "12px",
};

const detailItem = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.04)",
  borderRadius: "12px",
  padding: "12px",
};

const detailLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "6px",
};

const detailText = {
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.7,
};

const lockedBox = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "20px",
  padding: "22px",
  textAlign: "center",
};

const lockedTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "8px",
};

const lockedText = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
  maxWidth: "760px",
  margin: "0 auto 16px auto",
};

const unlockButton = {
  display: "inline-block",
  padding: "14px 18px",
  background: "white",
  color: "black",
  borderRadius: "12px",
  fontWeight: "800",
  textDecoration: "none",
};
