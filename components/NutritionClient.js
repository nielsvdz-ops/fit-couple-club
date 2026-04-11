"use client";

import { useMemo, useState } from "react";

const nutritionPlans = {
  "Lose Fat": {
    summary:
      "Prioritize a calorie deficit, high protein, filling meals, and repeatable structure. Portions scale based on profile selection so the same day feels realistic for both men and women.",
    caloriesGuide: {
      men: "Usually 2,100–2,500 kcal depending on size and activity",
      women: "Usually 1,500–1,900 kcal depending on size and activity",
    },
    proteinGuide: {
      men: "170–210g protein",
      women: "110–145g protein",
    },
    carbsGuide: "Moderate carbs around training and active periods",
    fatsGuide: "Moderate fats from whole-food sources",
    hydration: {
      men: "3–4L water daily",
      women: "2.2–3L water daily",
    },
    timing: [
      "Protein in every meal",
      "Use high-volume foods to stay fuller for longer",
      "Keep snacks planned instead of random",
      "Place more carbs around training if preferred",
    ],
    grocery: [
      "Chicken breast or thigh",
      "Lean beef or turkey",
      "Eggs / egg whites",
      "Greek yogurt / skyr / cottage cheese",
      "Rice / oats / potatoes / wraps",
      "Berries / bananas / apples",
      "Frozen vegetables / salad mixes",
      "Avocado / olive oil / nuts in moderation",
    ],
    sampleDays: [
      {
        title: "Day 1 — Lean reset",
        variants: {
          men: {
            totalCalories: "2,280 kcal",
            totalProtein: "196g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Greek Yogurt Berry Bowl",
                calories: "500 kcal",
                protein: "42g",
                ingredients: [
                  "350g Greek yogurt",
                  "100g berries",
                  "40g granola",
                  "15g chia seeds",
                ],
                method:
                  "Add yogurt to a bowl, top with berries, granola, and chia seeds.",
              },
              {
                label: "Lunch",
                title: "Chicken Rice Bowl",
                calories: "650 kcal",
                protein: "58g",
                ingredients: [
                  "220g chicken breast",
                  "220g cooked rice",
                  "180g mixed vegetables",
                  "1 tbsp light sauce",
                ],
                method:
                  "Cook chicken, serve over rice with vegetables, and drizzle with light sauce.",
              },
              {
                label: "Snack",
                title: "Protein Shake + Apple",
                calories: "280 kcal",
                protein: "32g",
                ingredients: ["1.5 scoops whey", "1 apple", "Water or almond milk"],
                method: "Blend or shake the whey, then eat the apple on the side.",
              },
              {
                label: "Dinner",
                title: "Salmon with Potatoes",
                calories: "850 kcal",
                protein: "64g",
                ingredients: [
                  "220g salmon",
                  "300g potatoes",
                  "180g green beans",
                  "1 tsp olive oil",
                ],
                method:
                  "Bake salmon and potatoes, steam green beans, then plate together.",
              },
            ],
          },
          women: {
            totalCalories: "1,760 kcal",
            totalProtein: "140g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Greek Yogurt Berry Bowl",
                calories: "380 kcal",
                protein: "29g",
                ingredients: [
                  "220g Greek yogurt",
                  "80g berries",
                  "25g granola",
                  "10g chia seeds",
                ],
                method:
                  "Add yogurt to a bowl, top with berries, granola, and chia seeds.",
              },
              {
                label: "Lunch",
                title: "Chicken Rice Bowl",
                calories: "500 kcal",
                protein: "42g",
                ingredients: [
                  "150g chicken breast",
                  "140g cooked rice",
                  "150g mixed vegetables",
                  "1 tbsp light sauce",
                ],
                method:
                  "Cook chicken, serve over rice with vegetables, and drizzle with light sauce.",
              },
              {
                label: "Snack",
                title: "Protein Shake + Apple",
                calories: "220 kcal",
                protein: "24g",
                ingredients: ["1 scoop whey", "1 apple", "Water or almond milk"],
                method: "Blend or shake the whey, then eat the apple on the side.",
              },
              {
                label: "Dinner",
                title: "Salmon with Potatoes",
                calories: "660 kcal",
                protein: "45g",
                ingredients: [
                  "170g salmon",
                  "200g potatoes",
                  "150g green beans",
                  "1 tsp olive oil",
                ],
                method:
                  "Bake salmon and potatoes, steam green beans, then plate together.",
              },
            ],
          },
        },
      },
      {
        title: "Day 2 — Higher volume",
        variants: {
          men: {
            totalCalories: "2,220 kcal",
            totalProtein: "192g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Egg White Omelet",
                calories: "430 kcal",
                protein: "40g",
                ingredients: [
                  "260g egg whites",
                  "2 whole eggs",
                  "Spinach",
                  "Mushrooms",
                  "2 slices toast",
                ],
                method: "Cook eggs with spinach and mushrooms. Serve with toast.",
              },
              {
                label: "Lunch",
                title: "Turkey Wrap",
                calories: "590 kcal",
                protein: "55g",
                ingredients: [
                  "220g turkey breast",
                  "2 wraps",
                  "Lettuce",
                  "Tomato",
                  "Light yogurt dressing",
                ],
                method:
                  "Fill wraps with turkey and vegetables, then add dressing and roll tightly.",
              },
              {
                label: "Snack",
                title: "Cottage Cheese Pineapple Cup",
                calories: "260 kcal",
                protein: "30g",
                ingredients: ["250g cottage cheese", "120g pineapple"],
                method: "Combine in a bowl and serve cold.",
              },
              {
                label: "Dinner",
                title: "Lean Beef Stir-Fry",
                calories: "940 kcal",
                protein: "67g",
                ingredients: [
                  "220g lean beef",
                  "220g cooked jasmine rice",
                  "220g stir-fry vegetables",
                  "Soy or teriyaki light sauce",
                ],
                method:
                  "Cook beef, stir-fry vegetables, and serve over rice with sauce.",
              },
            ],
          },
          women: {
            totalCalories: "1,720 kcal",
            totalProtein: "146g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Egg White Omelet",
                calories: "320 kcal",
                protein: "30g",
                ingredients: [
                  "180g egg whites",
                  "1 whole egg",
                  "Spinach",
                  "Mushrooms",
                  "1 slice toast",
                ],
                method: "Cook eggs with spinach and mushrooms. Serve with toast.",
              },
              {
                label: "Lunch",
                title: "Turkey Wrap",
                calories: "430 kcal",
                protein: "38g",
                ingredients: [
                  "150g turkey breast",
                  "1 wrap",
                  "Lettuce",
                  "Tomato",
                  "Light yogurt dressing",
                ],
                method:
                  "Fill wrap with turkey and vegetables, then add dressing and roll tightly.",
              },
              {
                label: "Snack",
                title: "Cottage Cheese Pineapple Cup",
                calories: "210 kcal",
                protein: "24g",
                ingredients: ["180g cottage cheese", "100g pineapple"],
                method: "Combine in a bowl and serve cold.",
              },
              {
                label: "Dinner",
                title: "Lean Beef Stir-Fry",
                calories: "760 kcal",
                protein: "54g",
                ingredients: [
                  "170g lean beef",
                  "160g cooked jasmine rice",
                  "180g stir-fry vegetables",
                  "Soy or teriyaki light sauce",
                ],
                method:
                  "Cook beef, stir-fry vegetables, and serve over rice with sauce.",
              },
            ],
          },
        },
      },
      {
        title: "Day 3 — Simple office day",
        variants: {
          men: {
            totalCalories: "2,260 kcal",
            totalProtein: "188g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Overnight Protein Oats",
                calories: "520 kcal",
                protein: "43g",
                ingredients: [
                  "70g oats",
                  "1.5 scoops whey",
                  "220g Greek yogurt",
                  "100g blueberries",
                ],
                method: "Mix all ingredients and leave in the fridge overnight.",
              },
              {
                label: "Lunch",
                title: "Chicken Pasta Salad",
                calories: "650 kcal",
                protein: "56g",
                ingredients: [
                  "220g chicken breast",
                  "200g cooked pasta",
                  "Cucumber",
                  "Cherry tomatoes",
                  "Light dressing",
                ],
                method:
                  "Slice cooked chicken and combine with pasta, vegetables, and dressing.",
              },
              {
                label: "Snack",
                title: "Boiled Eggs + Fruit",
                calories: "280 kcal",
                protein: "18g",
                ingredients: ["3 boiled eggs", "1 orange", "1 banana"],
                method: "Boil eggs ahead of time and serve with fruit.",
              },
              {
                label: "Dinner",
                title: "White Fish & Sweet Potato",
                calories: "810 kcal",
                protein: "71g",
                ingredients: [
                  "280g white fish",
                  "320g sweet potato",
                  "180g broccoli",
                  "1 tsp olive oil",
                ],
                method:
                  "Bake fish and sweet potato, steam broccoli, then plate together.",
              },
            ],
          },
          women: {
            totalCalories: "1,760 kcal",
            totalProtein: "145g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Overnight Protein Oats",
                calories: "390 kcal",
                protein: "32g",
                ingredients: [
                  "50g oats",
                  "1 scoop whey",
                  "150g Greek yogurt",
                  "80g blueberries",
                ],
                method: "Mix all ingredients and leave in the fridge overnight.",
              },
              {
                label: "Lunch",
                title: "Chicken Pasta Salad",
                calories: "500 kcal",
                protein: "41g",
                ingredients: [
                  "150g chicken breast",
                  "140g cooked pasta",
                  "Cucumber",
                  "Cherry tomatoes",
                  "Light dressing",
                ],
                method:
                  "Slice cooked chicken and combine with pasta, vegetables, and dressing.",
              },
              {
                label: "Snack",
                title: "Boiled Eggs + Fruit",
                calories: "220 kcal",
                protein: "13g",
                ingredients: ["2 boiled eggs", "1 orange"],
                method: "Boil eggs ahead of time and serve with fruit.",
              },
              {
                label: "Dinner",
                title: "White Fish & Sweet Potato",
                calories: "650 kcal",
                protein: "59g",
                ingredients: [
                  "220g white fish",
                  "220g sweet potato",
                  "150g broccoli",
                  "1 tsp olive oil",
                ],
                method:
                  "Bake fish and sweet potato, steam broccoli, then plate together.",
              },
            ],
          },
        },
      },
      {
        title: "Day 4 — Controlled comfort day",
        variants: {
          men: {
            totalCalories: "2,240 kcal",
            totalProtein: "184g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Lean Smoothie",
                calories: "430 kcal",
                protein: "40g",
                ingredients: [
                  "1.5 scoops whey",
                  "1 banana",
                  "Spinach",
                  "350ml almond milk",
                  "Ice",
                ],
                method: "Blend until smooth.",
              },
              {
                label: "Lunch",
                title: "Tuna Rice Bowl",
                calories: "600 kcal",
                protein: "50g",
                ingredients: [
                  "1.5 cans tuna",
                  "220g cooked rice",
                  "Corn",
                  "Cucumber",
                  "Lettuce",
                ],
                method: "Drain tuna and layer all ingredients into a bowl.",
              },
              {
                label: "Snack",
                title: "Greek Yogurt Pot",
                calories: "250 kcal",
                protein: "28g",
                ingredients: ["280g Greek yogurt", "Cinnamon"],
                method: "Serve chilled with cinnamon.",
              },
              {
                label: "Dinner",
                title: "Chicken Burger Bowl",
                calories: "960 kcal",
                protein: "66g",
                ingredients: [
                  "240g chicken mince or chicken breast",
                  "300g potatoes",
                  "Lettuce",
                  "Tomato",
                  "Pickles",
                ],
                method:
                  "Cook chicken, roast potatoes, and serve over salad vegetables.",
              },
            ],
          },
          women: {
            totalCalories: "1,730 kcal",
            totalProtein: "141g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Lean Smoothie",
                calories: "320 kcal",
                protein: "29g",
                ingredients: [
                  "1 scoop whey",
                  "1 banana",
                  "Spinach",
                  "250ml almond milk",
                  "Ice",
                ],
                method: "Blend until smooth.",
              },
              {
                label: "Lunch",
                title: "Tuna Rice Bowl",
                calories: "460 kcal",
                protein: "37g",
                ingredients: [
                  "1 can tuna",
                  "140g cooked rice",
                  "Corn",
                  "Cucumber",
                  "Lettuce",
                ],
                method: "Drain tuna and layer all ingredients into a bowl.",
              },
              {
                label: "Snack",
                title: "Greek Yogurt Pot",
                calories: "180 kcal",
                protein: "20g",
                ingredients: ["200g Greek yogurt", "Cinnamon"],
                method: "Serve chilled with cinnamon.",
              },
              {
                label: "Dinner",
                title: "Chicken Burger Bowl",
                calories: "770 kcal",
                protein: "55g",
                ingredients: [
                  "180g chicken mince or chicken breast",
                  "220g potatoes",
                  "Lettuce",
                  "Tomato",
                  "Pickles",
                ],
                method:
                  "Cook chicken, roast potatoes, and serve over salad vegetables.",
              },
            ],
          },
        },
      },
      {
        title: "Day 5 — Training support",
        variants: {
          men: {
            totalCalories: "2,320 kcal",
            totalProtein: "201g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Oats with Whey and Strawberries",
                calories: "520 kcal",
                protein: "42g",
                ingredients: [
                  "75g oats",
                  "1.5 scoops whey",
                  "120g strawberries",
                  "Cinnamon",
                ],
                method: "Cook oats and stir whey in after cooking.",
              },
              {
                label: "Lunch",
                title: "Lean Beef Rice Bowl",
                calories: "700 kcal",
                protein: "60g",
                ingredients: [
                  "220g lean beef",
                  "220g cooked rice",
                  "Mixed vegetables",
                ],
                method: "Cook beef and combine with rice and vegetables.",
              },
              {
                label: "Snack",
                title: "Rice Cakes and Cottage Cheese",
                calories: "280 kcal",
                protein: "24g",
                ingredients: ["4 rice cakes", "220g cottage cheese"],
                method: "Top rice cakes with cottage cheese or eat alongside.",
              },
              {
                label: "Dinner",
                title: "Chicken Fajita Bowl",
                calories: "820 kcal",
                protein: "75g",
                ingredients: [
                  "240g chicken",
                  "Peppers",
                  "Onion",
                  "220g rice",
                  "Salsa",
                ],
                method:
                  "Cook chicken with peppers and onion, then serve over rice with salsa.",
              },
            ],
          },
          women: {
            totalCalories: "1,820 kcal",
            totalProtein: "154g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Oats with Whey and Strawberries",
                calories: "410 kcal",
                protein: "33g",
                ingredients: [
                  "55g oats",
                  "1 scoop whey",
                  "100g strawberries",
                  "Cinnamon",
                ],
                method: "Cook oats and stir whey in after cooking.",
              },
              {
                label: "Lunch",
                title: "Lean Beef Rice Bowl",
                calories: "540 kcal",
                protein: "45g",
                ingredients: [
                  "160g lean beef",
                  "160g cooked rice",
                  "Mixed vegetables",
                ],
                method: "Cook beef and combine with rice and vegetables.",
              },
              {
                label: "Snack",
                title: "Rice Cakes and Cottage Cheese",
                calories: "220 kcal",
                protein: "18g",
                ingredients: ["3 rice cakes", "150g cottage cheese"],
                method: "Top rice cakes with cottage cheese or eat alongside.",
              },
              {
                label: "Dinner",
                title: "Chicken Fajita Bowl",
                calories: "650 kcal",
                protein: "58g",
                ingredients: [
                  "180g chicken",
                  "Peppers",
                  "Onion",
                  "150g rice",
                  "Salsa",
                ],
                method:
                  "Cook chicken with peppers and onion, then serve over rice with salsa.",
              },
            ],
          },
        },
      },
      {
        title: "Day 6 — Fast prep day",
        variants: {
          men: {
            totalCalories: "2,180 kcal",
            totalProtein: "185g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Scrambled Eggs and Kiwi",
                calories: "470 kcal",
                protein: "36g",
                ingredients: ["4 eggs", "2 slices toast", "2 kiwi fruits"],
                method: "Scramble the eggs and serve with toast and kiwi.",
              },
              {
                label: "Lunch",
                title: "Meal Prep Chicken Box",
                calories: "630 kcal",
                protein: "58g",
                ingredients: [
                  "220g chicken breast",
                  "280g potatoes",
                  "Greens",
                ],
                method:
                  "Cook all items in advance and portion into a container.",
              },
              {
                label: "Snack",
                title: "Protein Pudding",
                calories: "240 kcal",
                protein: "24g",
                ingredients: ["1 protein pudding cup", "Optional berries"],
                method: "Serve chilled.",
              },
              {
                label: "Dinner",
                title: "Turkey Meatballs with Zucchini",
                calories: "840 kcal",
                protein: "67g",
                ingredients: [
                  "240g turkey meatballs",
                  "Tomato sauce",
                  "Zucchini noodles",
                  "Parmesan sprinkle",
                ],
                method:
                  "Cook turkey meatballs, heat sauce, and serve over zucchini noodles.",
              },
            ],
          },
          women: {
            totalCalories: "1,700 kcal",
            totalProtein: "142g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Scrambled Eggs and Kiwi",
                calories: "350 kcal",
                protein: "26g",
                ingredients: ["3 eggs", "1 slice toast", "2 kiwi fruits"],
                method: "Scramble the eggs and serve with toast and kiwi.",
              },
              {
                label: "Lunch",
                title: "Meal Prep Chicken Box",
                calories: "490 kcal",
                protein: "42g",
                ingredients: [
                  "150g chicken breast",
                  "200g potatoes",
                  "Greens",
                ],
                method:
                  "Cook all items in advance and portion into a container.",
              },
              {
                label: "Snack",
                title: "Protein Pudding",
                calories: "210 kcal",
                protein: "24g",
                ingredients: ["1 protein pudding cup", "Optional berries"],
                method: "Serve chilled.",
              },
              {
                label: "Dinner",
                title: "Turkey Meatballs with Zucchini",
                calories: "650 kcal",
                protein: "50g",
                ingredients: [
                  "180g turkey meatballs",
                  "Tomato sauce",
                  "Zucchini noodles",
                  "Parmesan sprinkle",
                ],
                method:
                  "Cook turkey meatballs, heat sauce, and serve over zucchini noodles.",
              },
            ],
          },
        },
      },
      {
        title: "Day 7 — Weekend structure",
        variants: {
          men: {
            totalCalories: "2,260 kcal",
            totalProtein: "190g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Yogurt Parfait",
                calories: "500 kcal",
                protein: "40g",
                ingredients: [
                  "320g Greek yogurt",
                  "Berries",
                  "Flax seeds",
                  "45g granola",
                ],
                method: "Layer ingredients in a glass or bowl.",
              },
              {
                label: "Lunch",
                title: "Grilled Chicken Sandwich",
                calories: "610 kcal",
                protein: "56g",
                ingredients: [
                  "220g grilled chicken",
                  "3 thin bread slices",
                  "Salad",
                  "Tomato",
                ],
                method: "Assemble into a sandwich and serve with salad.",
              },
              {
                label: "Snack",
                title: "Protein Bar + Orange",
                calories: "260 kcal",
                protein: "20g",
                ingredients: ["1 protein bar", "1 orange"],
                method: "Serve as a quick snack.",
              },
              {
                label: "Dinner",
                title: "Shrimp Rice Bowl",
                calories: "890 kcal",
                protein: "74g",
                ingredients: [
                  "300g shrimp",
                  "220g cooked rice",
                  "Vegetables",
                  "1 tsp oil",
                ],
                method: "Cook shrimp and vegetables, then serve over rice.",
              },
            ],
          },
          women: {
            totalCalories: "1,780 kcal",
            totalProtein: "149g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Yogurt Parfait",
                calories: "380 kcal",
                protein: "30g",
                ingredients: [
                  "250g Greek yogurt",
                  "Berries",
                  "Flax seeds",
                  "25g granola",
                ],
                method: "Layer ingredients in a glass or bowl.",
              },
              {
                label: "Lunch",
                title: "Grilled Chicken Sandwich",
                calories: "470 kcal",
                protein: "40g",
                ingredients: [
                  "150g grilled chicken",
                  "2 thin bread slices",
                  "Salad",
                  "Tomato",
                ],
                method: "Assemble into a sandwich and serve with salad.",
              },
              {
                label: "Snack",
                title: "Protein Bar + Orange",
                calories: "230 kcal",
                protein: "20g",
                ingredients: ["1 protein bar", "1 orange"],
                method: "Serve as a quick snack.",
              },
              {
                label: "Dinner",
                title: "Shrimp Rice Bowl",
                calories: "700 kcal",
                protein: "59g",
                ingredients: [
                  "220g shrimp",
                  "160g cooked rice",
                  "Vegetables",
                  "1 tsp oil",
                ],
                method: "Cook shrimp and vegetables, then serve over rice.",
              },
            ],
          },
        },
      },
      {
        title: "Day 8 — Higher satiety",
        variants: {
          men: {
            totalCalories: "2,240 kcal",
            totalProtein: "188g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Veggie Omelet with Avocado Toast",
                calories: "520 kcal",
                protein: "34g",
                ingredients: [
                  "4 eggs",
                  "Spinach",
                  "Tomato",
                  "2 toast slices",
                  "70g avocado",
                ],
                method: "Cook omelet and serve with avocado toast.",
              },
              {
                label: "Lunch",
                title: "Lean Beef Burrito Bowl",
                calories: "670 kcal",
                protein: "58g",
                ingredients: [
                  "220g lean beef",
                  "Lettuce",
                  "220g rice",
                  "Salsa",
                  "Beans",
                ],
                method: "Assemble into a bowl after cooking beef.",
              },
              {
                label: "Snack",
                title: "Skyr and Berries",
                calories: "240 kcal",
                protein: "28g",
                ingredients: ["280g skyr", "100g berries"],
                method: "Combine and serve chilled.",
              },
              {
                label: "Dinner",
                title: "Baked Cod with Asparagus",
                calories: "810 kcal",
                protein: "68g",
                ingredients: [
                  "280g cod",
                  "300g potatoes",
                  "Asparagus",
                  "1 tsp oil",
                ],
                method:
                  "Bake cod and potatoes, roast asparagus, and serve together.",
              },
            ],
          },
          women: {
            totalCalories: "1,760 kcal",
            totalProtein: "146g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Veggie Omelet with Avocado Toast",
                calories: "390 kcal",
                protein: "24g",
                ingredients: [
                  "3 eggs",
                  "Spinach",
                  "Tomato",
                  "1 toast slice",
                  "50g avocado",
                ],
                method: "Cook omelet and serve with avocado toast.",
              },
              {
                label: "Lunch",
                title: "Lean Beef Burrito Bowl",
                calories: "500 kcal",
                protein: "43g",
                ingredients: [
                  "160g lean beef",
                  "Lettuce",
                  "150g rice",
                  "Salsa",
                  "Beans",
                ],
                method: "Assemble into a bowl after cooking beef.",
              },
              {
                label: "Snack",
                title: "Skyr and Berries",
                calories: "190 kcal",
                protein: "22g",
                ingredients: ["200g skyr", "80g berries"],
                method: "Combine and serve chilled.",
              },
              {
                label: "Dinner",
                title: "Baked Cod with Asparagus",
                calories: "680 kcal",
                protein: "57g",
                ingredients: [
                  "220g cod",
                  "220g potatoes",
                  "Asparagus",
                  "1 tsp oil",
                ],
                method:
                  "Bake cod and potatoes, roast asparagus, and serve together.",
              },
            ],
          },
        },
      },
      {
        title: "Day 9 — Light but filling",
        variants: {
          men: {
            totalCalories: "2,200 kcal",
            totalProtein: "186g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Chia Protein Pudding",
                calories: "460 kcal",
                protein: "38g",
                ingredients: [
                  "1.5 scoops whey",
                  "20g chia seeds",
                  "250ml almond milk",
                  "Fruit topping",
                ],
                method:
                  "Mix and chill until thick, then top with fruit.",
              },
              {
                label: "Lunch",
                title: "Chicken Caesar Wrap",
                calories: "650 kcal",
                protein: "56g",
                ingredients: [
                  "220g chicken",
                  "2 wraps",
                  "Lettuce",
                  "Parmesan",
                  "Light Caesar dressing",
                ],
                method: "Wrap ingredients tightly and slice in half.",
              },
              {
                label: "Snack",
                title: "Edamame + Shake",
                calories: "300 kcal",
                protein: "34g",
                ingredients: ["140g edamame", "1 scoop whey"],
                method: "Cook edamame and drink the shake alongside.",
              },
              {
                label: "Dinner",
                title: "Turkey Chili with Rice",
                calories: "790 kcal",
                protein: "58g",
                ingredients: [
                  "220g turkey mince",
                  "Beans",
                  "Tomato sauce",
                  "180g cooked rice",
                ],
                method:
                  "Cook turkey with tomato sauce and beans, then serve over rice.",
              },
            ],
          },
          women: {
            totalCalories: "1,720 kcal",
            totalProtein: "145g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Chia Protein Pudding",
                calories: "350 kcal",
                protein: "29g",
                ingredients: [
                  "1 scoop whey",
                  "15g chia seeds",
                  "200ml almond milk",
                  "Fruit topping",
                ],
                method:
                  "Mix and chill until thick, then top with fruit.",
              },
              {
                label: "Lunch",
                title: "Chicken Caesar Wrap",
                calories: "500 kcal",
                protein: "42g",
                ingredients: [
                  "150g chicken",
                  "1 wrap",
                  "Lettuce",
                  "Parmesan",
                  "Light Caesar dressing",
                ],
                method: "Wrap ingredients tightly and slice in half.",
              },
              {
                label: "Snack",
                title: "Edamame + Shake",
                calories: "240 kcal",
                protein: "27g",
                ingredients: ["100g edamame", "1 scoop whey"],
                method: "Cook edamame and drink the shake alongside.",
              },
              {
                label: "Dinner",
                title: "Turkey Chili with Rice",
                calories: "630 kcal",
                protein: "47g",
                ingredients: [
                  "170g turkey mince",
                  "Beans",
                  "Tomato sauce",
                  "130g cooked rice",
                ],
                method:
                  "Cook turkey with tomato sauce and beans, then serve over rice.",
              },
            ],
          },
        },
      },
      {
        title: "Day 10 — Restaurant-style control",
        variants: {
          men: {
            totalCalories: "2,300 kcal",
            totalProtein: "194g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Oatmeal with Whey and Banana",
                calories: "520 kcal",
                protein: "40g",
                ingredients: ["75g oats", "1.5 scoops whey", "1 banana"],
                method: "Cook oats and mix in whey. Top with sliced banana.",
              },
              {
                label: "Lunch",
                title: "Grilled Chicken Bowl",
                calories: "650 kcal",
                protein: "57g",
                ingredients: [
                  "220g grilled chicken",
                  "220g rice",
                  "Vegetables",
                ],
                method: "Layer ingredients into a bowl.",
              },
              {
                label: "Snack",
                title: "Greek Yogurt + Apple",
                calories: "260 kcal",
                protein: "28g",
                ingredients: ["280g Greek yogurt", "1 apple"],
                method: "Serve cold with sliced apple.",
              },
              {
                label: "Dinner",
                title: "Steak with Roasted Vegetables",
                calories: "870 kcal",
                protein: "69g",
                ingredients: [
                  "240g lean steak",
                  "240g vegetables",
                  "250g baked potato",
                ],
                method:
                  "Cook steak to preference and roast vegetables and potato.",
              },
            ],
          },
          women: {
            totalCalories: "1,800 kcal",
            totalProtein: "149g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Oatmeal with Whey and Banana",
                calories: "400 kcal",
                protein: "30g",
                ingredients: ["55g oats", "1 scoop whey", "1 banana"],
                method: "Cook oats and mix in whey. Top with sliced banana.",
              },
              {
                label: "Lunch",
                title: "Grilled Chicken Bowl",
                calories: "500 kcal",
                protein: "43g",
                ingredients: [
                  "160g grilled chicken",
                  "150g rice",
                  "Vegetables",
                ],
                method: "Layer ingredients into a bowl.",
              },
              {
                label: "Snack",
                title: "Greek Yogurt + Apple",
                calories: "210 kcal",
                protein: "21g",
                ingredients: ["200g Greek yogurt", "1 apple"],
                method: "Serve cold with sliced apple.",
              },
              {
                label: "Dinner",
                title: "Steak with Roasted Vegetables",
                calories: "690 kcal",
                protein: "55g",
                ingredients: [
                  "180g lean steak",
                  "200g vegetables",
                  "180g baked potato",
                ],
                method:
                  "Cook steak to preference and roast vegetables and potato.",
              },
            ],
          },
        },
      },
      {
        title: "Day 11 — Repeatable cut day",
        variants: {
          men: {
            totalCalories: "2,240 kcal",
            totalProtein: "192g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Eggs, Fruit, and Toast",
                calories: "450 kcal",
                protein: "33g",
                ingredients: ["4 eggs", "2 toast slices", "1 apple"],
                method: "Cook eggs and serve with toast and fruit.",
              },
              {
                label: "Lunch",
                title: "Tuna Potato Salad Bowl",
                calories: "640 kcal",
                protein: "52g",
                ingredients: [
                  "1.5 cans tuna",
                  "300g potatoes",
                  "Greens",
                  "Light dressing",
                ],
                method: "Cook potatoes and combine with tuna and greens.",
              },
              {
                label: "Snack",
                title: "Cottage Cheese Berries",
                calories: "240 kcal",
                protein: "28g",
                ingredients: ["250g cottage cheese", "100g berries"],
                method: "Serve together in a bowl.",
              },
              {
                label: "Dinner",
                title: "Chicken Stir-Fry",
                calories: "910 kcal",
                protein: "79g",
                ingredients: [
                  "260g chicken",
                  "Vegetables",
                  "220g cooked rice",
                  "Soy sauce",
                ],
                method: "Stir-fry chicken and vegetables, then serve over rice.",
              },
            ],
          },
          women: {
            totalCalories: "1,740 kcal",
            totalProtein: "149g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Eggs, Fruit, and Toast",
                calories: "350 kcal",
                protein: "24g",
                ingredients: ["3 eggs", "1 toast slice", "1 apple"],
                method: "Cook eggs and serve with toast and fruit.",
              },
              {
                label: "Lunch",
                title: "Tuna Potato Salad Bowl",
                calories: "500 kcal",
                protein: "39g",
                ingredients: [
                  "1 can tuna",
                  "220g potatoes",
                  "Greens",
                  "Light dressing",
                ],
                method: "Cook potatoes and combine with tuna and greens.",
              },
              {
                label: "Snack",
                title: "Cottage Cheese Berries",
                calories: "190 kcal",
                protein: "22g",
                ingredients: ["180g cottage cheese", "80g berries"],
                method: "Serve together in a bowl.",
              },
              {
                label: "Dinner",
                title: "Chicken Stir-Fry",
                calories: "700 kcal",
                protein: "64g",
                ingredients: [
                  "200g chicken",
                  "Vegetables",
                  "150g cooked rice",
                  "Soy sauce",
                ],
                method: "Stir-fry chicken and vegetables, then serve over rice.",
              },
            ],
          },
        },
      },
      {
        title: "Day 12 — Low-chaos day",
        variants: {
          men: {
            totalCalories: "2,170 kcal",
            totalProtein: "182g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Protein Yogurt Cup",
                calories: "420 kcal",
                protein: "39g",
                ingredients: ["320g Greek yogurt", "Berries", "15g seeds"],
                method: "Mix and serve cold.",
              },
              {
                label: "Lunch",
                title: "Turkey Rice Salad",
                calories: "620 kcal",
                protein: "55g",
                ingredients: ["220g turkey", "220g rice", "Salad mix"],
                method: "Combine turkey, rice, and salad into a bowl.",
              },
              {
                label: "Snack",
                title: "Boiled Eggs + Banana",
                calories: "250 kcal",
                protein: "18g",
                ingredients: ["3 eggs", "1 banana"],
                method: "Serve prepared eggs with banana.",
              },
              {
                label: "Dinner",
                title: "Baked Fish Plate",
                calories: "880 kcal",
                protein: "70g",
                ingredients: ["280g fish", "300g potatoes", "Broccoli"],
                method: "Bake fish and potatoes, steam broccoli.",
              },
            ],
          },
          women: {
            totalCalories: "1,690 kcal",
            totalProtein: "141g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Protein Yogurt Cup",
                calories: "310 kcal",
                protein: "29g",
                ingredients: ["250g Greek yogurt", "Berries", "10g seeds"],
                method: "Mix and serve cold.",
              },
              {
                label: "Lunch",
                title: "Turkey Rice Salad",
                calories: "480 kcal",
                protein: "41g",
                ingredients: ["150g turkey", "140g rice", "Salad mix"],
                method: "Combine turkey, rice, and salad into a bowl.",
              },
              {
                label: "Snack",
                title: "Boiled Eggs + Banana",
                calories: "210 kcal",
                protein: "13g",
                ingredients: ["2 eggs", "1 banana"],
                method: "Serve prepared eggs with banana.",
              },
              {
                label: "Dinner",
                title: "Baked Fish Plate",
                calories: "690 kcal",
                protein: "58g",
                ingredients: ["220g fish", "220g potatoes", "Broccoli"],
                method: "Bake fish and potatoes, steam broccoli.",
              },
            ],
          },
        },
      },
      {
        title: "Day 13 — Cleaner carb split",
        variants: {
          men: {
            totalCalories: "2,260 kcal",
            totalProtein: "197g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Protein Oats Bowl",
                calories: "510 kcal",
                protein: "41g",
                ingredients: ["75g oats", "1.5 scoops whey", "Blueberries"],
                method: "Cook oats and stir in whey after heating.",
              },
              {
                label: "Lunch",
                title: "Chicken Wrap Meal",
                calories: "650 kcal",
                protein: "57g",
                ingredients: ["220g chicken", "2 wraps", "Lettuce", "Tomato"],
                method: "Assemble into wrap and serve.",
              },
              {
                label: "Snack",
                title: "Skyr Cup",
                calories: "220 kcal",
                protein: "26g",
                ingredients: ["260g skyr", "Cinnamon"],
                method: "Serve cold.",
              },
              {
                label: "Dinner",
                title: "Lean Beef Plate",
                calories: "880 kcal",
                protein: "73g",
                ingredients: ["230g lean beef", "Rice", "Vegetables"],
                method: "Cook beef and serve with rice and vegetables.",
              },
            ],
          },
          women: {
            totalCalories: "1,760 kcal",
            totalProtein: "151g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Protein Oats Bowl",
                calories: "390 kcal",
                protein: "32g",
                ingredients: ["50g oats", "1 scoop whey", "Blueberries"],
                method: "Cook oats and stir in whey after heating.",
              },
              {
                label: "Lunch",
                title: "Chicken Wrap Meal",
                calories: "500 kcal",
                protein: "43g",
                ingredients: ["150g chicken", "1 wrap", "Lettuce", "Tomato"],
                method: "Assemble into wrap and serve.",
              },
              {
                label: "Snack",
                title: "Skyr Cup",
                calories: "180 kcal",
                protein: "20g",
                ingredients: ["200g skyr", "Cinnamon"],
                method: "Serve cold.",
              },
              {
                label: "Dinner",
                title: "Lean Beef Plate",
                calories: "690 kcal",
                protein: "56g",
                ingredients: ["180g lean beef", "Rice", "Vegetables"],
                method: "Cook beef and serve with rice and vegetables.",
              },
            ],
          },
        },
      },
      {
        title: "Day 14 — Lean finish",
        variants: {
          men: {
            totalCalories: "2,210 kcal",
            totalProtein: "186g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Smoothie Bowl",
                calories: "460 kcal",
                protein: "38g",
                ingredients: ["1.5 scoops whey", "Banana", "Greek yogurt", "Ice"],
                method: "Blend thick and serve in a bowl.",
              },
              {
                label: "Lunch",
                title: "Chicken Burrito Bowl",
                calories: "680 kcal",
                protein: "58g",
                ingredients: ["220g chicken", "220g rice", "Beans", "Salsa"],
                method: "Layer ingredients in a bowl.",
              },
              {
                label: "Snack",
                title: "Protein Bar",
                calories: "220 kcal",
                protein: "20g",
                ingredients: ["1 protein bar"],
                method: "Serve as-is.",
              },
              {
                label: "Dinner",
                title: "Shrimp Sweet Potato Plate",
                calories: "850 kcal",
                protein: "70g",
                ingredients: ["280g shrimp", "300g sweet potato", "Vegetables"],
                method: "Cook shrimp, roast potato, and plate with vegetables.",
              },
            ],
          },
          women: {
            totalCalories: "1,760 kcal",
            totalProtein: "145g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Smoothie Bowl",
                calories: "360 kcal",
                protein: "29g",
                ingredients: ["1 scoop whey", "Banana", "Greek yogurt", "Ice"],
                method: "Blend thick and serve in a bowl.",
              },
              {
                label: "Lunch",
                title: "Chicken Burrito Bowl",
                calories: "520 kcal",
                protein: "43g",
                ingredients: ["150g chicken", "150g rice", "Beans", "Salsa"],
                method: "Layer ingredients in a bowl.",
              },
              {
                label: "Snack",
                title: "Protein Bar",
                calories: "220 kcal",
                protein: "20g",
                ingredients: ["1 protein bar"],
                method: "Serve as-is.",
              },
              {
                label: "Dinner",
                title: "Shrimp Sweet Potato Plate",
                calories: "660 kcal",
                protein: "53g",
                ingredients: ["220g shrimp", "220g sweet potato", "Vegetables"],
                method: "Cook shrimp, roast potato, and plate with vegetables.",
              },
            ],
          },
        },
      },
    ],
  },

  "Build Muscle": {
    summary:
      "Prioritize strong protein intake, enough calories, higher carbs around training, and recovery. Men and women use the same style of meals, but with realistic portion scaling.",
    caloriesGuide: {
      men: "Usually 2,800–3,400 kcal depending on size and training volume",
      women: "Usually 2,000–2,500 kcal depending on size and training volume",
    },
    proteinGuide: {
      men: "180–230g protein",
      women: "125–165g protein",
    },
    carbsGuide: "Higher carbs around training",
    fatsGuide: "Moderate fats for recovery and hormones",
    hydration: {
      men: "3–4L water daily",
      women: "2.3–3.2L water daily",
    },
    timing: [
      "Eat before and after training",
      "Use more carbs around hard sessions",
      "Keep protein consistent across the day",
      "Do not under-eat on heavy training days",
    ],
    grocery: [
      "Chicken / steak / lean beef / salmon",
      "Greek yogurt / cottage cheese / eggs",
      "Oats / bagels / rice / pasta / potatoes",
      "Fruit",
      "Nut butter",
      "Olive oil / avocado",
      "Easy carb sources for around training",
    ],
    sampleDays: [
      {
        title: "Day 1 — Classic gain day",
        variants: {
          men: {
            totalCalories: "3,050 kcal",
            totalProtein: "210g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Oats with Whey and Peanut Butter",
                calories: "760 kcal",
                protein: "48g",
                ingredients: ["100g oats", "1.5 scoops whey", "1 banana", "25g peanut butter"],
                method: "Cook oats, stir in whey, top with banana and peanut butter.",
              },
              {
                label: "Lunch",
                title: "Beef Rice Bowl",
                calories: "830 kcal",
                protein: "58g",
                ingredients: ["220g lean beef", "300g cooked rice", "Avocado", "Vegetables"],
                method: "Cook beef and serve over rice with avocado and vegetables.",
              },
              {
                label: "Snack",
                title: "Greek Yogurt + Granola",
                calories: "500 kcal",
                protein: "34g",
                ingredients: ["320g Greek yogurt", "60g granola", "Honey"],
                method: "Combine and serve chilled.",
              },
              {
                label: "Dinner",
                title: "Chicken Pasta Bowl",
                calories: "960 kcal",
                protein: "70g",
                ingredients: ["240g chicken", "260g cooked pasta", "Tomato sauce", "Parmesan"],
                method: "Cook chicken and pasta, then combine with sauce and parmesan.",
              },
            ],
          },
          women: {
            totalCalories: "2,350 kcal",
            totalProtein: "150g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Oats with Whey and Peanut Butter",
                calories: "560 kcal",
                protein: "34g",
                ingredients: ["70g oats", "1 scoop whey", "1 banana", "15g peanut butter"],
                method: "Cook oats, stir in whey, top with banana and peanut butter.",
              },
              {
                label: "Lunch",
                title: "Beef Rice Bowl",
                calories: "650 kcal",
                protein: "41g",
                ingredients: ["160g lean beef", "200g cooked rice", "Avocado", "Vegetables"],
                method: "Cook beef and serve over rice with avocado and vegetables.",
              },
              {
                label: "Snack",
                title: "Greek Yogurt + Granola",
                calories: "360 kcal",
                protein: "24g",
                ingredients: ["240g Greek yogurt", "40g granola", "Honey"],
                method: "Combine and serve chilled.",
              },
              {
                label: "Dinner",
                title: "Chicken Pasta Bowl",
                calories: "780 kcal",
                protein: "51g",
                ingredients: ["180g chicken", "180g cooked pasta", "Tomato sauce", "Parmesan"],
                method: "Cook chicken and pasta, then combine with sauce and parmesan.",
              },
            ],
          },
        },
      },
      {
        title: "Day 2 — Heavy training support",
        variants: {
          men: {
            totalCalories: "3,120 kcal",
            totalProtein: "214g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Bagel Egg Stack",
                calories: "760 kcal",
                protein: "44g",
                ingredients: ["2 bagels", "4 eggs", "Turkey slices", "Cheese slice"],
                method: "Build into a sandwich.",
              },
              {
                label: "Lunch",
                title: "Chicken Rice Plate",
                calories: "820 kcal",
                protein: "60g",
                ingredients: ["240g chicken", "300g rice", "Vegetables"],
                method: "Cook and serve together.",
              },
              {
                label: "Snack",
                title: "Shake + Banana + Rice Cakes",
                calories: "420 kcal",
                protein: "32g",
                ingredients: ["1.5 scoops whey", "1 banana", "4 rice cakes"],
                method: "Drink shake and eat the rest alongside.",
              },
              {
                label: "Dinner",
                title: "Salmon and Potatoes",
                calories: "1,120 kcal",
                protein: "78g",
                ingredients: ["260g salmon", "380g potatoes", "Vegetables", "1 tbsp oil"],
                method: "Bake salmon and potatoes, then serve with vegetables.",
              },
            ],
          },
          women: {
            totalCalories: "2,420 kcal",
            totalProtein: "155g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Bagel Egg Stack",
                calories: "560 kcal",
                protein: "30g",
                ingredients: ["1 bagel", "3 eggs", "Turkey slices", "Cheese slice"],
                method: "Build into a sandwich.",
              },
              {
                label: "Lunch",
                title: "Chicken Rice Plate",
                calories: "650 kcal",
                protein: "44g",
                ingredients: ["180g chicken", "200g rice", "Vegetables"],
                method: "Cook and serve together.",
              },
              {
                label: "Snack",
                title: "Shake + Banana + Rice Cakes",
                calories: "300 kcal",
                protein: "24g",
                ingredients: ["1 scoop whey", "1 banana", "3 rice cakes"],
                method: "Drink shake and eat the rest alongside.",
              },
              {
                label: "Dinner",
                title: "Salmon and Potatoes",
                calories: "910 kcal",
                protein: "57g",
                ingredients: ["200g salmon", "280g potatoes", "Vegetables", "1 tbsp oil"],
                method: "Bake salmon and potatoes, then serve with vegetables.",
              },
            ],
          },
        },
      },
      {
        title: "Day 3 — Easy surplus day",
        variants: {
          men: {
            totalCalories: "2,980 kcal",
            totalProtein: "205g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Greek Yogurt Power Bowl",
                calories: "690 kcal",
                protein: "44g",
                ingredients: ["380g Greek yogurt", "80g oats", "Berries", "Honey"],
                method: "Mix together in a bowl.",
              },
              {
                label: "Lunch",
                title: "Steak Wrap Meal",
                calories: "820 kcal",
                protein: "56g",
                ingredients: ["220g steak", "2 wraps", "Vegetables", "Sauce"],
                method: "Cook steak, slice, and wrap with vegetables.",
              },
              {
                label: "Snack",
                title: "Cottage Cheese + Fruit + Nut Butter",
                calories: "420 kcal",
                protein: "30g",
                ingredients: ["250g cottage cheese", "Fruit", "20g nut butter"],
                method: "Serve everything in one bowl.",
              },
              {
                label: "Dinner",
                title: "Beef Pasta",
                calories: "1,050 kcal",
                protein: "75g",
                ingredients: ["240g lean beef", "260g pasta", "Tomato sauce"],
                method: "Cook pasta and beef, then combine.",
              },
            ],
          },
          women: {
            totalCalories: "2,300 kcal",
            totalProtein: "148g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Greek Yogurt Power Bowl",
                calories: "510 kcal",
                protein: "31g",
                ingredients: ["280g Greek yogurt", "55g oats", "Berries", "Honey"],
                method: "Mix together in a bowl.",
              },
              {
                label: "Lunch",
                title: "Steak Wrap Meal",
                calories: "640 kcal",
                protein: "40g",
                ingredients: ["160g steak", "1 wrap", "Vegetables", "Sauce"],
                method: "Cook steak, slice, and wrap with vegetables.",
              },
              {
                label: "Snack",
                title: "Cottage Cheese + Fruit + Nut Butter",
                calories: "320 kcal",
                protein: "22g",
                ingredients: ["180g cottage cheese", "Fruit", "15g nut butter"],
                method: "Serve everything in one bowl.",
              },
              {
                label: "Dinner",
                title: "Beef Pasta",
                calories: "830 kcal",
                protein: "55g",
                ingredients: ["180g lean beef", "180g pasta", "Tomato sauce"],
                method: "Cook pasta and beef, then combine.",
              },
            ],
          },
        },
      },
      {
        title: "Day 4 — Post-workout focus",
        variants: {
          men: {
            totalCalories: "3,040 kcal",
            totalProtein: "212g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Overnight Oats",
                calories: "700 kcal",
                protein: "48g",
                ingredients: ["90g oats", "1.5 scoops whey", "1 banana", "Greek yogurt"],
                method: "Mix and chill overnight.",
              },
              {
                label: "Lunch",
                title: "Chicken Burrito Bowl",
                calories: "900 kcal",
                protein: "64g",
                ingredients: ["240g chicken", "300g rice", "Beans", "Salsa", "Corn"],
                method: "Build into a large bowl.",
              },
              {
                label: "Snack",
                title: "Chocolate Milk + Protein Bar",
                calories: "400 kcal",
                protein: "28g",
                ingredients: ["Chocolate milk", "1 protein bar"],
                method: "Serve as quick post-training fuel.",
              },
              {
                label: "Dinner",
                title: "Teriyaki Salmon Rice",
                calories: "1,040 kcal",
                protein: "72g",
                ingredients: ["240g salmon", "300g rice", "Vegetables", "Teriyaki sauce"],
                method: "Cook salmon and serve over rice.",
              },
            ],
          },
          women: {
            totalCalories: "2,360 kcal",
            totalProtein: "155g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Overnight Oats",
                calories: "530 kcal",
                protein: "34g",
                ingredients: ["60g oats", "1 scoop whey", "1 banana", "Greek yogurt"],
                method: "Mix and chill overnight.",
              },
              {
                label: "Lunch",
                title: "Chicken Burrito Bowl",
                calories: "720 kcal",
                protein: "47g",
                ingredients: ["180g chicken", "200g rice", "Beans", "Salsa", "Corn"],
                method: "Build into a large bowl.",
              },
              {
                label: "Snack",
                title: "Chocolate Milk + Protein Bar",
                calories: "340 kcal",
                protein: "24g",
                ingredients: ["Chocolate milk", "1 protein bar"],
                method: "Serve as quick post-training fuel.",
              },
              {
                label: "Dinner",
                title: "Teriyaki Salmon Rice",
                calories: "770 kcal",
                protein: "50g",
                ingredients: ["180g salmon", "180g rice", "Vegetables", "Teriyaki sauce"],
                method: "Cook salmon and serve over rice.",
              },
            ],
          },
        },
      },
      {
        title: "Day 5 — Strong appetite day",
        variants: {
          men: {
            totalCalories: "3,180 kcal",
            totalProtein: "220g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Eggs, Toast, Avocado, Fruit",
                calories: "800 kcal",
                protein: "42g",
                ingredients: ["5 eggs", "3 toast slices", "Avocado", "Fruit"],
                method: "Cook eggs and assemble plate.",
              },
              {
                label: "Lunch",
                title: "Double Chicken Rice Bowl",
                calories: "940 kcal",
                protein: "76g",
                ingredients: ["300g chicken", "300g rice", "Vegetables"],
                method: "Cook chicken and serve over rice.",
              },
              {
                label: "Snack",
                title: "Mass Smoothie",
                calories: "520 kcal",
                protein: "38g",
                ingredients: ["Whey", "Oats", "Banana", "Peanut butter", "Milk"],
                method: "Blend until smooth.",
              },
              {
                label: "Dinner",
                title: "Lean Beef Burgers with Potatoes",
                calories: "920 kcal",
                protein: "64g",
                ingredients: ["2 lean burger patties", "Potatoes", "Burger bun", "Salad"],
                method: "Cook patties, roast potatoes, and assemble.",
              },
            ],
          },
          women: {
            totalCalories: "2,450 kcal",
            totalProtein: "158g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Eggs, Toast, Avocado, Fruit",
                calories: "610 kcal",
                protein: "29g",
                ingredients: ["3 eggs", "2 toast slices", "Avocado", "Fruit"],
                method: "Cook eggs and assemble plate.",
              },
              {
                label: "Lunch",
                title: "Double Chicken Rice Bowl",
                calories: "720 kcal",
                protein: "54g",
                ingredients: ["200g chicken", "200g rice", "Vegetables"],
                method: "Cook chicken and serve over rice.",
              },
              {
                label: "Snack",
                title: "Mass Smoothie",
                calories: "390 kcal",
                protein: "28g",
                ingredients: ["Whey", "Oats", "Banana", "Peanut butter", "Milk"],
                method: "Blend until smooth.",
              },
              {
                label: "Dinner",
                title: "Lean Beef Burgers with Potatoes",
                calories: "730 kcal",
                protein: "47g",
                ingredients: ["1.5 lean burger patties", "Potatoes", "Burger bun", "Salad"],
                method: "Cook patties, roast potatoes, and assemble.",
              },
            ],
          },
        },
      },
      {
        title: "Day 6 — High protein build",
        variants: {
          men: {
            totalCalories: "3,000 kcal",
            totalProtein: "218g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Protein Pancakes",
                calories: "720 kcal",
                protein: "50g",
                ingredients: ["Oats", "Eggs", "1.5 scoops whey", "Berries", "Honey"],
                method: "Blend, cook into pancakes, and top with berries.",
              },
              {
                label: "Lunch",
                title: "Tuna Pasta Salad",
                calories: "790 kcal",
                protein: "58g",
                ingredients: ["1.5 cans tuna", "Pasta", "Light mayo", "Vegetables"],
                method: "Mix all ingredients together.",
              },
              {
                label: "Snack",
                title: "Greek Yogurt + Cereal",
                calories: "390 kcal",
                protein: "28g",
                ingredients: ["Greek yogurt", "Crunchy cereal"],
                method: "Combine and serve.",
              },
              {
                label: "Dinner",
                title: "Chicken Thighs and Sweet Potato",
                calories: "1,100 kcal",
                protein: "82g",
                ingredients: ["Chicken thighs", "Sweet potato", "Vegetables"],
                method: "Bake and serve together.",
              },
            ],
          },
          women: {
            totalCalories: "2,320 kcal",
            totalProtein: "159g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Protein Pancakes",
                calories: "560 kcal",
                protein: "36g",
                ingredients: ["Oats", "Eggs", "1 scoop whey", "Berries", "Honey"],
                method: "Blend, cook into pancakes, and top with berries.",
              },
              {
                label: "Lunch",
                title: "Tuna Pasta Salad",
                calories: "620 kcal",
                protein: "40g",
                ingredients: ["1 can tuna", "Pasta", "Light mayo", "Vegetables"],
                method: "Mix all ingredients together.",
              },
              {
                label: "Snack",
                title: "Greek Yogurt + Cereal",
                calories: "300 kcal",
                protein: "22g",
                ingredients: ["Greek yogurt", "Crunchy cereal"],
                method: "Combine and serve.",
              },
              {
                label: "Dinner",
                title: "Chicken Thighs and Sweet Potato",
                calories: "840 kcal",
                protein: "61g",
                ingredients: ["Chicken thighs", "Sweet potato", "Vegetables"],
                method: "Bake and serve together.",
              },
            ],
          },
        },
      },
      {
        title: "Day 7 — Weekend muscle support",
        variants: {
          men: {
            totalCalories: "3,080 kcal",
            totalProtein: "208g protein",
            meals: [
              {
                label: "Breakfast",
                title: "French Toast and Eggs",
                calories: "760 kcal",
                protein: "42g",
                ingredients: ["Bread", "Eggs", "Milk", "Fruit"],
                method: "Cook bread in egg mixture and serve with extra eggs.",
              },
              {
                label: "Lunch",
                title: "Steak Rice Bowl",
                calories: "860 kcal",
                protein: "60g",
                ingredients: ["220g steak", "300g rice", "Avocado", "Vegetables"],
                method: "Cook steak and serve over rice.",
              },
              {
                label: "Snack",
                title: "Cottage Cheese Granola Cup",
                calories: "380 kcal",
                protein: "28g",
                ingredients: ["Cottage cheese", "Granola"],
                method: "Combine and serve.",
              },
              {
                label: "Dinner",
                title: "Chicken Pesto Pasta",
                calories: "1,080 kcal",
                protein: "78g",
                ingredients: ["240g chicken", "Pasta", "Pesto", "Parmesan"],
                method: "Cook and toss everything together.",
              },
            ],
          },
          women: {
            totalCalories: "2,390 kcal",
            totalProtein: "152g protein",
            meals: [
              {
                label: "Breakfast",
                title: "French Toast and Eggs",
                calories: "580 kcal",
                protein: "28g",
                ingredients: ["Bread", "Eggs", "Milk", "Fruit"],
                method: "Cook bread in egg mixture and serve with extra eggs.",
              },
              {
                label: "Lunch",
                title: "Steak Rice Bowl",
                calories: "680 kcal",
                protein: "44g",
                ingredients: ["160g steak", "200g rice", "Avocado", "Vegetables"],
                method: "Cook steak and serve over rice.",
              },
              {
                label: "Snack",
                title: "Cottage Cheese Granola Cup",
                calories: "290 kcal",
                protein: "22g",
                ingredients: ["Cottage cheese", "Granola"],
                method: "Combine and serve.",
              },
              {
                label: "Dinner",
                title: "Chicken Pesto Pasta",
                calories: "840 kcal",
                protein: "58g",
                ingredients: ["180g chicken", "Pasta", "Pesto", "Parmesan"],
                method: "Cook and toss everything together.",
              },
            ],
          },
        },
      },
      {
        title: "Day 8 — Fast prep gain day",
        variants: {
          men: {
            totalCalories: "2,980 kcal",
            totalProtein: "206g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Oats with Almond Butter",
                calories: "700 kcal",
                protein: "46g",
                ingredients: ["90g oats", "1.5 scoops whey", "Almond butter", "Banana"],
                method: "Cook oats and stir in toppings.",
              },
              {
                label: "Lunch",
                title: "Turkey Rice Boxes",
                calories: "810 kcal",
                protein: "60g",
                ingredients: ["Turkey mince", "Rice", "Vegetables"],
                method: "Meal prep into containers.",
              },
              {
                label: "Snack",
                title: "Bagel + Protein Shake",
                calories: "420 kcal",
                protein: "32g",
                ingredients: ["Bagel", "1.5 scoops whey"],
                method: "Serve together.",
              },
              {
                label: "Dinner",
                title: "Beef Chili with Rice",
                calories: "1,050 kcal",
                protein: "68g",
                ingredients: ["Lean beef", "Beans", "Rice", "Tomato sauce"],
                method: "Cook chili and serve over rice.",
              },
            ],
          },
          women: {
            totalCalories: "2,320 kcal",
            totalProtein: "152g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Oats with Almond Butter",
                calories: "530 kcal",
                protein: "33g",
                ingredients: ["60g oats", "1 scoop whey", "Almond butter", "Banana"],
                method: "Cook oats and stir in toppings.",
              },
              {
                label: "Lunch",
                title: "Turkey Rice Boxes",
                calories: "640 kcal",
                protein: "44g",
                ingredients: ["Turkey mince", "Rice", "Vegetables"],
                method: "Meal prep into containers.",
              },
              {
                label: "Snack",
                title: "Bagel + Protein Shake",
                calories: "300 kcal",
                protein: "24g",
                ingredients: ["Bagel", "1 scoop whey"],
                method: "Serve together.",
              },
              {
                label: "Dinner",
                title: "Beef Chili with Rice",
                calories: "850 kcal",
                protein: "51g",
                ingredients: ["Lean beef", "Beans", "Rice", "Tomato sauce"],
                method: "Cook chili and serve over rice.",
              },
            ],
          },
        },
      },
      {
        title: "Day 9 — Performance support",
        variants: {
          men: {
            totalCalories: "3,050 kcal",
            totalProtein: "210g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Eggs, Bagel, Banana",
                calories: "740 kcal",
                protein: "42g",
                ingredients: ["4 eggs", "2 bagels", "1 banana"],
                method: "Cook eggs and serve with bagels and banana.",
              },
              {
                label: "Lunch",
                title: "Chicken Noodles",
                calories: "860 kcal",
                protein: "62g",
                ingredients: ["240g chicken", "Noodles", "Vegetables", "Sauce"],
                method: "Cook and stir-fry together.",
              },
              {
                label: "Snack",
                title: "Yogurt Cereal Bowl",
                calories: "390 kcal",
                protein: "26g",
                ingredients: ["Greek yogurt", "Cereal"],
                method: "Combine in a bowl.",
              },
              {
                label: "Dinner",
                title: "Salmon Sushi Bowl",
                calories: "1,060 kcal",
                protein: "80g",
                ingredients: ["240g salmon", "Rice", "Cucumber", "Avocado"],
                method: "Cook salmon and serve over rice with toppings.",
              },
            ],
          },
          women: {
            totalCalories: "2,380 kcal",
            totalProtein: "154g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Eggs, Bagel, Banana",
                calories: "560 kcal",
                protein: "28g",
                ingredients: ["3 eggs", "1 bagel", "1 banana"],
                method: "Cook eggs and serve with bagel and banana.",
              },
              {
                label: "Lunch",
                title: "Chicken Noodles",
                calories: "680 kcal",
                protein: "46g",
                ingredients: ["180g chicken", "Noodles", "Vegetables", "Sauce"],
                method: "Cook and stir-fry together.",
              },
              {
                label: "Snack",
                title: "Yogurt Cereal Bowl",
                calories: "300 kcal",
                protein: "21g",
                ingredients: ["Greek yogurt", "Cereal"],
                method: "Combine in a bowl.",
              },
              {
                label: "Dinner",
                title: "Salmon Sushi Bowl",
                calories: "840 kcal",
                protein: "59g",
                ingredients: ["180g salmon", "Rice", "Cucumber", "Avocado"],
                method: "Cook salmon and serve over rice with toppings.",
              },
            ],
          },
        },
      },
      {
        title: "Day 10 — Clean bulk",
        variants: {
          men: {
            totalCalories: "2,990 kcal",
            totalProtein: "214g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Mass Smoothie Bowl",
                calories: "700 kcal",
                protein: "48g",
                ingredients: ["1.5 scoops whey", "Oats", "Berries", "Peanut butter"],
                method: "Blend thick and serve in a bowl.",
              },
              {
                label: "Lunch",
                title: "Lean Beef Burrito Bowl",
                calories: "820 kcal",
                protein: "60g",
                ingredients: ["Lean beef", "Rice", "Beans", "Salsa"],
                method: "Assemble after cooking beef.",
              },
              {
                label: "Snack",
                title: "Rice Cakes + Cottage Cheese + Jam",
                calories: "380 kcal",
                protein: "24g",
                ingredients: ["Rice cakes", "Cottage cheese", "Jam"],
                method: "Top rice cakes and serve.",
              },
              {
                label: "Dinner",
                title: "Chicken Breast Pasta",
                calories: "1,090 kcal",
                protein: "82g",
                ingredients: ["Chicken breast", "Pasta", "Garlic vegetables"],
                method: "Cook and combine all items.",
              },
            ],
          },
          women: {
            totalCalories: "2,330 kcal",
            totalProtein: "157g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Mass Smoothie Bowl",
                calories: "540 kcal",
                protein: "35g",
                ingredients: ["1 scoop whey", "Oats", "Berries", "Peanut butter"],
                method: "Blend thick and serve in a bowl.",
              },
              {
                label: "Lunch",
                title: "Lean Beef Burrito Bowl",
                calories: "650 kcal",
                protein: "44g",
                ingredients: ["Lean beef", "Rice", "Beans", "Salsa"],
                method: "Assemble after cooking beef.",
              },
              {
                label: "Snack",
                title: "Rice Cakes + Cottage Cheese + Jam",
                calories: "290 kcal",
                protein: "18g",
                ingredients: ["Rice cakes", "Cottage cheese", "Jam"],
                method: "Top rice cakes and serve.",
              },
              {
                label: "Dinner",
                title: "Chicken Breast Pasta",
                calories: "850 kcal",
                protein: "60g",
                ingredients: ["Chicken breast", "Pasta", "Garlic vegetables"],
                method: "Cook and combine all items.",
              },
            ],
          },
        },
      },
      {
        title: "Day 11 — Easy repeat gain day",
        variants: {
          men: {
            totalCalories: "2,980 kcal",
            totalProtein: "208g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Yogurt Oats Honey Bowl",
                calories: "660 kcal",
                protein: "42g",
                ingredients: ["Greek yogurt", "Oats", "Banana", "Honey"],
                method: "Mix and serve cold.",
              },
              {
                label: "Lunch",
                title: "Chicken Wrap with Potatoes",
                calories: "820 kcal",
                protein: "58g",
                ingredients: ["220g chicken", "2 wraps", "Potatoes", "Salad"],
                method: "Wrap chicken and serve potatoes on the side.",
              },
              {
                label: "Snack",
                title: "Protein Shake + Trail Mix",
                calories: "430 kcal",
                protein: "32g",
                ingredients: ["1.5 scoops whey", "Trail mix"],
                method: "Shake and snack.",
              },
              {
                label: "Dinner",
                title: "Steak Rice Broccoli Plate",
                calories: "1,070 kcal",
                protein: "76g",
                ingredients: ["240g steak", "Rice", "Broccoli"],
                method: "Cook steak and serve with rice and broccoli.",
              },
            ],
          },
          women: {
            totalCalories: "2,310 kcal",
            totalProtein: "151g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Yogurt Oats Honey Bowl",
                calories: "500 kcal",
                protein: "30g",
                ingredients: ["Greek yogurt", "Oats", "Banana", "Honey"],
                method: "Mix and serve cold.",
              },
              {
                label: "Lunch",
                title: "Chicken Wrap with Potatoes",
                calories: "640 kcal",
                protein: "42g",
                ingredients: ["150g chicken", "1 wrap", "Potatoes", "Salad"],
                method: "Wrap chicken and serve potatoes on the side.",
              },
              {
                label: "Snack",
                title: "Protein Shake + Trail Mix",
                calories: "320 kcal",
                protein: "24g",
                ingredients: ["1 scoop whey", "Trail mix"],
                method: "Shake and snack.",
              },
              {
                label: "Dinner",
                title: "Steak Rice Broccoli Plate",
                calories: "850 kcal",
                protein: "55g",
                ingredients: ["180g steak", "Rice", "Broccoli"],
                method: "Cook steak and serve with rice and broccoli.",
              },
            ],
          },
        },
      },
      {
        title: "Day 12 — Carb loaded day",
        variants: {
          men: {
            totalCalories: "3,150 kcal",
            totalProtein: "216g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Bagel Peanut Butter Stack",
                calories: "780 kcal",
                protein: "40g",
                ingredients: ["2 bagels", "Peanut butter", "1.5 scoop whey shake"],
                method: "Toast bagels and serve with shake.",
              },
              {
                label: "Lunch",
                title: "Chicken Pasta Meal",
                calories: "860 kcal",
                protein: "66g",
                ingredients: ["240g chicken", "Pasta", "Sauce"],
                method: "Cook and combine.",
              },
              {
                label: "Snack",
                title: "Yogurt + Granola + Fruit",
                calories: "420 kcal",
                protein: "28g",
                ingredients: ["Greek yogurt", "Granola", "Fruit"],
                method: "Mix together.",
              },
              {
                label: "Dinner",
                title: "Salmon Potato Plate",
                calories: "1,090 kcal",
                protein: "82g",
                ingredients: ["260g salmon", "Potatoes", "Vegetables"],
                method: "Bake salmon and potatoes, then serve.",
              },
            ],
          },
          women: {
            totalCalories: "2,430 kcal",
            totalProtein: "156g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Bagel Peanut Butter Stack",
                calories: "580 kcal",
                protein: "28g",
                ingredients: ["1 bagel", "Peanut butter", "1 scoop whey shake"],
                method: "Toast bagel and serve with shake.",
              },
              {
                label: "Lunch",
                title: "Chicken Pasta Meal",
                calories: "680 kcal",
                protein: "48g",
                ingredients: ["180g chicken", "Pasta", "Sauce"],
                method: "Cook and combine.",
              },
              {
                label: "Snack",
                title: "Yogurt + Granola + Fruit",
                calories: "330 kcal",
                protein: "21g",
                ingredients: ["Greek yogurt", "Granola", "Fruit"],
                method: "Mix together.",
              },
              {
                label: "Dinner",
                title: "Salmon Potato Plate",
                calories: "840 kcal",
                protein: "59g",
                ingredients: ["200g salmon", "Potatoes", "Vegetables"],
                method: "Bake salmon and potatoes, then serve.",
              },
            ],
          },
        },
      },
      {
        title: "Day 13 — Recovery support",
        variants: {
          men: {
            totalCalories: "3,000 kcal",
            totalProtein: "209g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Egg and Oat Plate",
                calories: "700 kcal",
                protein: "46g",
                ingredients: ["Eggs", "Oats", "Fruit"],
                method: "Cook separately and serve.",
              },
              {
                label: "Lunch",
                title: "Turkey Rice Bowl",
                calories: "790 kcal",
                protein: "58g",
                ingredients: ["Turkey mince", "Rice", "Vegetables"],
                method: "Cook and plate together.",
              },
              {
                label: "Snack",
                title: "Protein Pudding + Banana",
                calories: "340 kcal",
                protein: "26g",
                ingredients: ["Protein pudding", "Banana"],
                method: "Serve chilled.",
              },
              {
                label: "Dinner",
                title: "Beef Noodle Stir-Fry",
                calories: "1,170 kcal",
                protein: "79g",
                ingredients: ["Lean beef", "Noodles", "Vegetables"],
                method: "Stir-fry together.",
              },
            ],
          },
          women: {
            totalCalories: "2,320 kcal",
            totalProtein: "151g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Egg and Oat Plate",
                calories: "530 kcal",
                protein: "32g",
                ingredients: ["Eggs", "Oats", "Fruit"],
                method: "Cook separately and serve.",
              },
              {
                label: "Lunch",
                title: "Turkey Rice Bowl",
                calories: "620 kcal",
                protein: "42g",
                ingredients: ["Turkey mince", "Rice", "Vegetables"],
                method: "Cook and plate together.",
              },
              {
                label: "Snack",
                title: "Protein Pudding + Banana",
                calories: "290 kcal",
                protein: "24g",
                ingredients: ["Protein pudding", "Banana"],
                method: "Serve chilled.",
              },
              {
                label: "Dinner",
                title: "Beef Noodle Stir-Fry",
                calories: "880 kcal",
                protein: "53g",
                ingredients: ["Lean beef", "Noodles", "Vegetables"],
                method: "Stir-fry together.",
              },
            ],
          },
        },
      },
      {
        title: "Day 14 — Strong finish day",
        variants: {
          men: {
            totalCalories: "3,090 kcal",
            totalProtein: "214g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Protein French Toast",
                calories: "740 kcal",
                protein: "46g",
                ingredients: ["Bread", "Eggs", "1.5 scoops whey", "Berries"],
                method: "Coat bread, cook, and top with berries.",
              },
              {
                label: "Lunch",
                title: "Chicken Burrito Plate",
                calories: "850 kcal",
                protein: "64g",
                ingredients: ["240g chicken", "Rice", "Beans", "Vegetables"],
                method: "Serve on one plate or bowl.",
              },
              {
                label: "Snack",
                title: "Shake + Rice Cakes",
                calories: "390 kcal",
                protein: "32g",
                ingredients: ["1.5 scoops whey", "Rice cakes"],
                method: "Serve together.",
              },
              {
                label: "Dinner",
                title: "Steak Pasta Bowl",
                calories: "1,110 kcal",
                protein: "72g",
                ingredients: ["220g steak", "Pasta", "Tomato sauce"],
                method: "Cook and combine.",
              },
            ],
          },
          women: {
            totalCalories: "2,390 kcal",
            totalProtein: "156g protein",
            meals: [
              {
                label: "Breakfast",
                title: "Protein French Toast",
                calories: "560 kcal",
                protein: "33g",
                ingredients: ["Bread", "Eggs", "1 scoop whey", "Berries"],
                method: "Coat bread, cook, and top with berries.",
              },
              {
                label: "Lunch",
                title: "Chicken Burrito Plate",
                calories: "680 kcal",
                protein: "47g",
                ingredients: ["180g chicken", "Rice", "Beans", "Vegetables"],
                method: "Serve on one plate or bowl.",
              },
              {
                label: "Snack",
                title: "Shake + Rice Cakes",
                calories: "300 kcal",
                protein: "24g",
                ingredients: ["1 scoop whey", "Rice cakes"],
                method: "Serve together.",
              },
              {
                label: "Dinner",
                title: "Steak Pasta Bowl",
                calories: "850 kcal",
                protein: "52g",
                ingredients: ["160g steak", "Pasta", "Tomato sauce"],
                method: "Cook and combine.",
              },
            ],
          },
        },
      },
    ],
  },

  "Tone & Shape Body": {
    summary:
      "Use balanced calories, strong protein, controlled portions, and consistent training support. The male and female toggle keeps the goal the same while making the day feel more realistic.",
    caloriesGuide: {
      men: "Usually 2,400–2,900 kcal depending on size and activity",
      women: "Usually 1,700–2,200 kcal depending on size and activity",
    },
    proteinGuide: {
      men: "170–210g protein",
      women: "115–150g protein",
    },
    carbsGuide: "Moderate carbs around training and active days",
    fatsGuide: "Balanced fats from quality sources",
    hydration: {
      men: "3–4L water daily",
      women: "2.2–3L water daily",
    },
    timing: [
      "Keep meals structured and repeatable",
      "Protein in every meal",
      "Use simple meals during busy days",
      "Avoid turning weekends into all-or-nothing eating",
    ],
    grocery: [
      "Chicken / turkey / fish",
      "Eggs / egg whites / Greek yogurt",
      "Rice / potatoes / oats / wraps",
      "Fruit",
      "Salad vegetables / greens",
      "Olive oil / avocado / nuts",
    ],
    sampleDays: Array.from({ length: 14 }, (_, i) => ({
      title: `Day ${i + 1} — Balanced shaping day`,
      variants: {
        men: {
          totalCalories: `${2500 + (i % 4) * 90} kcal`,
          totalProtein: `${185 + (i % 3) * 6}g protein`,
          meals: [
            {
              label: "Breakfast",
              title: "Eggs, Toast, Fruit",
              calories: `${520 + (i % 3) * 20} kcal`,
              protein: `${36 + (i % 2) * 2}g`,
              ingredients: ["4 eggs", "2 toast slices", "Fruit"],
              method: "Cook eggs and serve with toast and fruit.",
            },
            {
              label: "Lunch",
              title: "Chicken Wrap + Salad",
              calories: `${650 + (i % 4) * 15} kcal`,
              protein: `${55 + (i % 3) * 2}g`,
              ingredients: ["220g chicken", "2 wraps", "Salad", "Light dressing"],
              method: "Assemble wrap and serve with side salad.",
            },
            {
              label: "Snack",
              title: "Protein Smoothie",
              calories: `${290 + (i % 3) * 15} kcal`,
              protein: `${30 + (i % 2) * 2}g`,
              ingredients: ["1.5 scoops whey", "Banana", "Almond milk"],
              method: "Blend until smooth.",
            },
            {
              label: "Dinner",
              title: "Fish, Sweet Potato, Vegetables",
              calories: `${980 + (i % 4) * 30} kcal`,
              protein: `${64 + (i % 3) * 3}g`,
              ingredients: ["260g fish", "320g sweet potato", "Vegetables", "Olive oil"],
              method: "Bake and serve together.",
            },
          ],
        },
        women: {
          totalCalories: `${1900 + (i % 4) * 70} kcal`,
          totalProtein: `${138 + (i % 3) * 5}g protein`,
          meals: [
            {
              label: "Breakfast",
              title: "Eggs, Toast, Fruit",
              calories: `${390 + (i % 3) * 20} kcal`,
              protein: `${26 + (i % 2) * 2}g`,
              ingredients: ["3 eggs", "1 toast slice", "Fruit"],
              method: "Cook eggs and serve with toast and fruit.",
            },
            {
              label: "Lunch",
              title: "Chicken Wrap + Salad",
              calories: `${500 + (i % 4) * 15} kcal`,
              protein: `${40 + (i % 3) * 2}g`,
              ingredients: ["150g chicken", "1 wrap", "Salad", "Light dressing"],
              method: "Assemble wrap and serve with side salad.",
            },
            {
              label: "Snack",
              title: "Protein Smoothie",
              calories: `${220 + (i % 3) * 10} kcal`,
              protein: `${24 + (i % 2) * 2}g`,
              ingredients: ["1 scoop whey", "Banana", "Almond milk"],
              method: "Blend until smooth.",
            },
            {
              label: "Dinner",
              title: "Fish, Sweet Potato, Vegetables",
              calories: `${760 + (i % 4) * 25} kcal`,
              protein: `${48 + (i % 3) * 3}g`,
              ingredients: ["180g fish", "220g sweet potato", "Vegetables", "Olive oil"],
              method: "Bake and serve together.",
            },
          ],
        },
      },
    })),
  },
};

function MacroCard({ label, value }) {
  return (
    <div style={macroCard}>
      <div style={macroLabel}>{label}</div>
      <div style={macroValue}>{value}</div>
    </div>
  );
}

function MealCard({ meal }) {
  return (
    <div style={mealCard}>
      <div style={mealTopRow}>
        <div>
          <div style={mealLabel}>{meal.label}</div>
          <div style={mealTitle}>{meal.title}</div>
        </div>
        <div style={mealStats}>
          <span style={mealStatPill}>{meal.calories}</span>
          <span style={mealStatPill}>{meal.protein}</span>
        </div>
      </div>

      <div style={mealSection}>
        <div style={miniHeading}>Ingredients</div>
        <ul style={ingredientsList}>
          {meal.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={mealSection}>
        <div style={miniHeading}>How to make it</div>
        <p style={mealMethod}>{meal.method}</p>
      </div>
    </div>
  );
}

export default function NutritionClient({ membershipType }) {
  const membership = String(membershipType || "").toLowerCase();
  const isStarter = membership === "starter";

  const goals = Object.keys(nutritionPlans);
  const [selectedGoal, setSelectedGoal] = useState("Build Muscle");
  const [selectedProfile, setSelectedProfile] = useState("men");
  const [selectedDay, setSelectedDay] = useState(0);

  const plan = nutritionPlans[selectedGoal];
  const activeDay = useMemo(() => {
    return plan.sampleDays[selectedDay] || plan.sampleDays[0];
  }, [plan, selectedDay]);

  const currentVariant = activeDay.variants[selectedProfile];

  function handleGoalChange(goal) {
    setSelectedGoal(goal);
    setSelectedDay(0);
  }

  return (
    <div style={pageWrap}>
      <section style={heroCard}>
        <div style={eyebrow}>Nutrition Plans</div>
        <h1 style={heroTitle}>14-day meal plans with Men / Women calorie scaling</h1>
        <p style={heroText}>
          Members can switch goal, choose a profile, and compare full eating days
          with realistic calories, protein, ingredients, and prep instructions.
        </p>

        <div style={topControls}>
          <div style={goalTabs}>
            {goals.map((goal) => {
              const active = selectedGoal === goal;
              return (
                <button
                  key={goal}
                  onClick={() => handleGoalChange(goal)}
                  style={{
                    ...goalTab,
                    background: active ? "#ffffff" : "rgba(255,255,255,0.04)",
                    color: active ? "#111111" : "#ffffff",
                    border: active
                      ? "1px solid rgba(255,255,255,0.95)"
                      : "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {goal}
                </button>
              );
            })}
          </div>

          <div style={profileTabs}>
            {["men", "women"].map((profile) => {
              const active = selectedProfile === profile;
              return (
                <button
                  key={profile}
                  onClick={() => setSelectedProfile(profile)}
                  style={{
                    ...profileTab,
                    background: active ? "white" : "rgba(255,255,255,0.04)",
                    color: active ? "#111111" : "white",
                    border: active
                      ? "1px solid rgba(255,255,255,0.95)"
                      : "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {profile === "men" ? "Men" : "Women"}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sectionTop}>
          <div style={eyebrow}>Nutrition Direction</div>
          <h2 style={sectionTitle}>
            {selectedGoal} — {selectedProfile === "men" ? "Men" : "Women"}
          </h2>
        </div>

        <p style={muted}>{plan.summary}</p>

        <div style={macroGrid}>
          <MacroCard label="Calories" value={plan.caloriesGuide[selectedProfile]} />
          <MacroCard label="Protein" value={plan.proteinGuide[selectedProfile]} />
          <MacroCard label="Carbs" value={plan.carbsGuide} />
          <MacroCard label="Fats" value={plan.fatsGuide} />
          <MacroCard label="Hydration" value={plan.hydration[selectedProfile]} />
        </div>
      </section>

      <section style={twoColGrid}>
        <div style={sectionCard}>
          <div style={eyebrow}>Meal Timing</div>
          <h2 style={sectionTitleSmall}>How to structure your day</h2>
          <ul style={list}>
            {plan.timing.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={sectionCard}>
          <div style={eyebrow}>Grocery Base</div>
          <h2 style={sectionTitleSmall}>What to keep in the house</h2>
          <ul style={list}>
            {plan.grocery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={sectionCard}>
        <div style={sampleHeader}>
          <div>
            <div style={eyebrow}>Sample Days</div>
            <h2 style={sectionTitle}>Choose a full day</h2>
            <p style={mutedCompact}>
              {plan.sampleDays.length} full days available for {selectedGoal}
            </p>
          </div>

          <div style={summaryBox}>
            <div style={summaryBoxLabel}>Selected day totals</div>
            <div style={summaryBoxValue}>{currentVariant.totalCalories}</div>
            <div style={summaryBoxSub}>{currentVariant.totalProtein}</div>
          </div>
        </div>

        <div style={dayTabs}>
          {plan.sampleDays.map((day, index) => {
            const active = selectedDay === index;
            return (
              <button
                key={day.title}
                onClick={() => setSelectedDay(index)}
                style={{
                  ...dayTab,
                  background: active
                    ? "rgba(255,255,255,0.14)"
                    : "rgba(255,255,255,0.03)",
                  border: active
                    ? "1px solid rgba(255,255,255,0.22)"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Day {index + 1}
              </button>
            );
          })}
        </div>

        <div style={featuredDayCard}>
          <div style={featuredDayTop}>
            <div>
              <div style={featuredDayTitle}>
                {activeDay.title} — {selectedProfile === "men" ? "Men" : "Women"}
              </div>
              <div style={featuredDayMeta}>
                <span style={featuredMetaPill}>{currentVariant.totalCalories}</span>
                <span style={featuredMetaPill}>{currentVariant.totalProtein}</span>
              </div>
            </div>
          </div>

          <div style={mealsGrid}>
            {currentVariant.meals.map((meal) => (
              <MealCard
                key={`${activeDay.title}-${selectedProfile}-${meal.label}-${meal.title}`}
                meal={meal}
              />
            ))}
          </div>
        </div>
      </section>

      {isStarter && (
        <section style={lockedCard}>
          <div style={lockedTitle}>Starter nutrition access</div>
          <p style={muted}>
            Starter now already feels more personalized with a men/women toggle.
            Premium and VIP can later unlock custom calorie calculators, bodyweight
            based scaling, substitutions, shopping lists, and saved plans.
          </p>
        </section>
      )}
    </div>
  );
}

const pageWrap = {
  display: "grid",
  gap: "22px",
};

const heroCard = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "24px",
  padding: "28px",
};

const sectionCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "22px",
  padding: "24px",
};

const lockedCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px dashed rgba(255,255,255,0.2)",
  borderRadius: "22px",
  padding: "24px",
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
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: "800",
  lineHeight: 1.08,
};

const heroText = {
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
  marginTop: "12px",
  maxWidth: "820px",
};

const topControls = {
  display: "grid",
  gap: "16px",
  marginTop: "18px",
};

const sectionTop = {
  marginBottom: "14px",
};

const sectionTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "800",
};

const sectionTitleSmall = {
  margin: 0,
  fontSize: "24px",
  fontWeight: "800",
};

const muted = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.8,
};

const mutedCompact = {
  color: "rgba(255,255,255,0.62)",
  lineHeight: 1.6,
  marginTop: "6px",
};

const goalTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const goalTab = {
  padding: "12px 14px",
  borderRadius: "12px",
  fontWeight: "700",
  cursor: "pointer",
};

const profileTabs = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const profileTab = {
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: "800",
  cursor: "pointer",
};

const macroGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "14px",
  marginTop: "18px",
};

const macroCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "18px",
};

const macroLabel = {
  color: "rgba(255,255,255,0.56)",
  marginBottom: "8px",
};

const macroValue = {
  fontWeight: "800",
  lineHeight: 1.6,
};

const twoColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "22px",
};

const list = {
  paddingLeft: "18px",
  lineHeight: 1.9,
  color: "rgba(255,255,255,0.72)",
};

const sampleHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  marginBottom: "18px",
  flexWrap: "wrap",
};

const summaryBox = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "16px 18px",
  minWidth: "220px",
};

const summaryBoxLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "6px",
};

const summaryBoxValue = {
  fontSize: "22px",
  fontWeight: "800",
};

const summaryBoxSub = {
  color: "rgba(255,255,255,0.68)",
  marginTop: "4px",
};

const dayTabs = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "18px",
};

const dayTab = {
  padding: "10px 14px",
  borderRadius: "12px",
  color: "white",
  fontWeight: "700",
  cursor: "pointer",
};

const featuredDayCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "18px",
  padding: "18px",
};

const featuredDayTop = {
  marginBottom: "16px",
};

const featuredDayTitle = {
  fontSize: "22px",
  fontWeight: "800",
  marginBottom: "10px",
};

const featuredDayMeta = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const featuredMetaPill = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "999px",
  padding: "8px 12px",
  fontWeight: "700",
  fontSize: "14px",
};

const mealsGrid = {
  display: "grid",
  gap: "14px",
};

const mealCard = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "16px",
};

const mealTopRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "14px",
  flexWrap: "wrap",
};

const mealLabel = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "6px",
};

const mealTitle = {
  fontSize: "20px",
  fontWeight: "800",
};

const mealStats = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
};

const mealStatPill = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "999px",
  padding: "8px 12px",
  fontSize: "13px",
  fontWeight: "700",
};

const mealSection = {
  marginTop: "12px",
};

const miniHeading = {
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
};

const ingredientsList = {
  paddingLeft: "18px",
  lineHeight: 1.8,
  color: "rgba(255,255,255,0.74)",
  margin: 0,
};

const mealMethod = {
  margin: 0,
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.75,
};

const lockedTitle = {
  fontSize: "24px",
  fontWeight: "800",
  marginBottom: "8px",
};
