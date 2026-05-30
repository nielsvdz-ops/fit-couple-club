export const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const MEAL_GOALS = [
  { value: "fat-loss", label: "Lose Fat" },
  { value: "muscle-gain", label: "Build Muscle" },
  { value: "tone-shape", label: "Tone & Shape Body" },
  { value: "maintenance", label: "Maintain Athletic Lifestyle" },
  { value: "beginner-reset", label: "Beginner Body Reset" },
];

const mealTemplates = {
  "breakfast": [
    {
      "mealName": "Greek Yogurt Oat Berry Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "40g Oats",
        "100g Berries",
        "10g Chia seeds"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "397 kcal",
      "protein": "33g",
      "carbs": "50g",
      "fats": "6g"
    },
    {
      "mealName": "Skyr Banana Granola Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Banana",
        "30g Granola",
        "3g Cinnamon"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "386 kcal",
      "protein": "32g",
      "carbs": "54g",
      "fats": "6g"
    },
    {
      "mealName": "Egg White Veggie Wrap",
      "ingredients": [
        "220g Egg whites",
        "50g Eggs",
        "60g Whole wheat wrap",
        "60g Spinach",
        "60g Tomatoes"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "390 kcal",
      "protein": "38g",
      "carbs": "38g",
      "fats": "10g"
    },
    {
      "mealName": "Protein Pancakes",
      "ingredients": [
        "100g Eggs",
        "55g Oats",
        "100g Banana",
        "30g Whey protein",
        "3g Cinnamon"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "560 kcal",
      "protein": "45g",
      "carbs": "62g",
      "fats": "16g"
    },
    {
      "mealName": "Avocado Egg Toast",
      "ingredients": [
        "100g Eggs",
        "90g Whole grain bread",
        "70g Avocado",
        "60g Tomatoes"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "482 kcal",
      "protein": "23g",
      "carbs": "47g",
      "fats": "24g"
    },
    {
      "mealName": "Mass Oat Bowl",
      "ingredients": [
        "90g Oats",
        "30g Whey protein",
        "120g Banana",
        "25g Peanut butter",
        "250g Semi-skimmed milk"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "824 kcal",
      "protein": "51g",
      "carbs": "100g",
      "fats": "25g"
    },
    {
      "mealName": "Quark Cinnamon Apple Bowl",
      "ingredients": [
        "300g Low-fat quark",
        "140g Apple",
        "4g Cinnamon",
        "8g Chia seeds"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "287 kcal",
      "protein": "32g",
      "carbs": "38g",
      "fats": "3g"
    },
    {
      "mealName": "Cottage Cheese Crunch Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Blueberries",
        "15g Almonds",
        "8g Honey"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "393 kcal",
      "protein": "34g",
      "carbs": "31g",
      "fats": "15g"
    },
    {
      "mealName": "Protein French Toast",
      "ingredients": [
        "110g Whole grain bread",
        "100g Eggs",
        "25g Whey protein",
        "100g Banana",
        "10g Honey"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "624 kcal",
      "protein": "43g",
      "carbs": "79g",
      "fats": "16g"
    },
    {
      "mealName": "Protein Cereal Bowl",
      "ingredients": [
        "70g Protein cereal",
        "250g Semi-skimmed milk",
        "80g Blueberries",
        "20g Whey protein"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "500 kcal",
      "protein": "43g",
      "carbs": "60g",
      "fats": "9g"
    },
    {
      "mealName": "Egg Spinach Mushroom Plate",
      "ingredients": [
        "150g Eggs",
        "80g Spinach",
        "100g Mushrooms",
        "60g Whole grain bread"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "399 kcal",
      "protein": "30g",
      "carbs": "32g",
      "fats": "18g"
    },
    {
      "mealName": "Vegan Tempeh Breakfast Wrap",
      "ingredients": [
        "120g Tempeh",
        "70g Whole wheat wrap",
        "60g Spinach",
        "40g Salsa"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "466 kcal",
      "protein": "32g",
      "carbs": "51g",
      "fats": "15g"
    },
    {
      "mealName": "Low-fat quark Banana Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Banana",
        "20g Oats"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "300 kcal",
      "protein": "29g",
      "carbs": "45g",
      "fats": "2g"
    },
    {
      "mealName": "Greek yogurt 0% Berries Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Berries",
        "20g Almonds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "316 kcal",
      "protein": "30g",
      "carbs": "26g",
      "fats": "10g"
    },
    {
      "mealName": "Natural skyr Blueberries Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Blueberries",
        "4g Cinnamon"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "222 kcal",
      "protein": "29g",
      "carbs": "27g",
      "fats": "1g"
    },
    {
      "mealName": "Cottage cheese Pineapple Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Pineapple",
        "20g Pumpkin seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "387 kcal",
      "protein": "36g",
      "carbs": "23g",
      "fats": "17g"
    },
    {
      "mealName": "Protein yogurt Raspberries Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Raspberries",
        "20g Granola"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "317 kcal",
      "protein": "28g",
      "carbs": "39g",
      "fats": "5g"
    },
    {
      "mealName": "Kefir Peach Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Peach",
        "20g Peanut butter"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "296 kcal",
      "protein": "15g",
      "carbs": "22g",
      "fats": "15g"
    },
    {
      "mealName": "Low-fat quark Pear Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Pear",
        "20g Muesli"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "268 kcal",
      "protein": "28g",
      "carbs": "38g",
      "fats": "2g"
    },
    {
      "mealName": "Greek yogurt 0% Apple Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Apple",
        "20g Dark chocolate"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "312 kcal",
      "protein": "27g",
      "carbs": "33g",
      "fats": "8g"
    },
    {
      "mealName": "Natural skyr Strawberries Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Strawberries",
        "20g Chia seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "284 kcal",
      "protein": "32g",
      "carbs": "26g",
      "fats": "7g"
    },
    {
      "mealName": "Cottage cheese Mango Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Mango",
        "20g Honey"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "346 kcal",
      "protein": "31g",
      "carbs": "39g",
      "fats": "8g"
    },
    {
      "mealName": "Protein yogurt Kiwi Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Kiwi",
        "20g Flaxseed"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "343 kcal",
      "protein": "30g",
      "carbs": "36g",
      "fats": "10g"
    },
    {
      "mealName": "Kefir Blackberries Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Blackberries",
        "20g Oats"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "254 kcal",
      "protein": "12g",
      "carbs": "32g",
      "fats": "7g"
    },
    {
      "mealName": "Low-fat quark Nectarine Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Nectarine",
        "20g Almonds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "297 kcal",
      "protein": "30g",
      "carbs": "25g",
      "fats": "11g"
    },
    {
      "mealName": "Greek yogurt 0% Banana Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Banana",
        "4g Cinnamon"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "249 kcal",
      "protein": "26g",
      "carbs": "36g",
      "fats": "0g"
    },
    {
      "mealName": "Natural skyr Berries Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Berries",
        "20g Pumpkin seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "317 kcal",
      "protein": "34g",
      "carbs": "24g",
      "fats": "11g"
    },
    {
      "mealName": "Cottage cheese Blueberries Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Blueberries",
        "20g Granola"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "372 kcal",
      "protein": "33g",
      "carbs": "34g",
      "fats": "11g"
    },
    {
      "mealName": "Protein yogurt Pineapple Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Pineapple",
        "20g Peanut butter"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "345 kcal",
      "protein": "30g",
      "carbs": "30g",
      "fats": "11g"
    },
    {
      "mealName": "Kefir Raspberries Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Raspberries",
        "20g Muesli"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "264 kcal",
      "protein": "12g",
      "carbs": "35g",
      "fats": "7g"
    },
    {
      "mealName": "Low-fat quark Peach Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Peach",
        "20g Dark chocolate"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "286 kcal",
      "protein": "28g",
      "carbs": "29g",
      "fats": "8g"
    },
    {
      "mealName": "Greek yogurt 0% Pear Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Pear",
        "20g Chia seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "304 kcal",
      "protein": "29g",
      "carbs": "33g",
      "fats": "6g"
    },
    {
      "mealName": "Natural skyr Apple Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Apple",
        "20g Honey"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "268 kcal",
      "protein": "28g",
      "carbs": "40g",
      "fats": "1g"
    },
    {
      "mealName": "Cottage cheese Strawberries Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Strawberries",
        "20g Flaxseed"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "364 kcal",
      "protein": "35g",
      "carbs": "21g",
      "fats": "16g"
    },
    {
      "mealName": "Protein yogurt Mango Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Mango",
        "20g Oats"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "309 kcal",
      "protein": "29g",
      "carbs": "42g",
      "fats": "3g"
    },
    {
      "mealName": "Kefir Kiwi Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Kiwi",
        "20g Almonds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "314 kcal",
      "protein": "14g",
      "carbs": "29g",
      "fats": "16g"
    },
    {
      "mealName": "Low-fat quark Blackberries Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Blackberries",
        "4g Cinnamon"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "190 kcal",
      "protein": "26g",
      "carbs": "23g",
      "fats": "1g"
    },
    {
      "mealName": "Greek yogurt 0% Nectarine Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Nectarine",
        "20g Pumpkin seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "306 kcal",
      "protein": "32g",
      "carbs": "23g",
      "fats": "10g"
    },
    {
      "mealName": "Natural skyr Banana Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Banana",
        "20g Granola"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "334 kcal",
      "protein": "30g",
      "carbs": "45g",
      "fats": "4g"
    },
    {
      "mealName": "Cottage cheese Berries Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Berries",
        "20g Peanut butter"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "395 kcal",
      "protein": "36g",
      "carbs": "22g",
      "fats": "18g"
    },
    {
      "mealName": "Protein yogurt Blueberries Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Blueberries",
        "20g Muesli"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "306 kcal",
      "protein": "28g",
      "carbs": "42g",
      "fats": "3g"
    },
    {
      "mealName": "Kefir Pineapple Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Pineapple",
        "20g Dark chocolate"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "298 kcal",
      "protein": "11g",
      "carbs": "32g",
      "fats": "13g"
    },
    {
      "mealName": "Low-fat quark Raspberries Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Raspberries",
        "20g Chia seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "287 kcal",
      "protein": "29g",
      "carbs": "30g",
      "fats": "7g"
    },
    {
      "mealName": "Greek yogurt 0% Peach Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Peach",
        "20g Honey"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "250 kcal",
      "protein": "26g",
      "carbs": "36g",
      "fats": "0g"
    },
    {
      "mealName": "Natural skyr Pear Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Pear",
        "20g Flaxseed"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "319 kcal",
      "protein": "32g",
      "carbs": "31g",
      "fats": "9g"
    },
    {
      "mealName": "Cottage cheese Apple Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Apple",
        "20g Oats"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "351 kcal",
      "protein": "33g",
      "carbs": "34g",
      "fats": "9g"
    },
    {
      "mealName": "Protein yogurt Strawberries Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Strawberries",
        "20g Almonds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "323 kcal",
      "protein": "30g",
      "carbs": "27g",
      "fats": "12g"
    },
    {
      "mealName": "Kefir Mango Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Mango",
        "4g Cinnamon"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "207 kcal",
      "protein": "10g",
      "carbs": "28g",
      "fats": "5g"
    },
    {
      "mealName": "Low-fat quark Kiwi Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Kiwi",
        "20g Pumpkin seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "310 kcal",
      "protein": "32g",
      "carbs": "27g",
      "fats": "11g"
    },
    {
      "mealName": "Greek yogurt 0% Blackberries Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Blackberries",
        "20g Granola"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "283 kcal",
      "protein": "28g",
      "carbs": "32g",
      "fats": "4g"
    },
    {
      "mealName": "Natural skyr Nectarine Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Nectarine",
        "20g Peanut butter"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "319 kcal",
      "protein": "34g",
      "carbs": "23g",
      "fats": "11g"
    },
    {
      "mealName": "Cottage cheese Banana Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Banana",
        "20g Muesli"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "388 kcal",
      "protein": "33g",
      "carbs": "44g",
      "fats": "9g"
    },
    {
      "mealName": "Protein yogurt Berries Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Berries",
        "20g Dark chocolate"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "335 kcal",
      "protein": "28g",
      "carbs": "36g",
      "fats": "9g"
    },
    {
      "mealName": "Kefir Blueberries Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Blueberries",
        "20g Chia seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "292 kcal",
      "protein": "13g",
      "carbs": "32g",
      "fats": "12g"
    },
    {
      "mealName": "Low-fat quark Pineapple Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Pineapple",
        "20g Honey"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "248 kcal",
      "protein": "26g",
      "carbs": "39g",
      "fats": "1g"
    },
    {
      "mealName": "Greek yogurt 0% Raspberries Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Raspberries",
        "20g Flaxseed"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "309 kcal",
      "protein": "30g",
      "carbs": "28g",
      "fats": "9g"
    },
    {
      "mealName": "Natural skyr Peach Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Peach",
        "20g Oats"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "268 kcal",
      "protein": "31g",
      "carbs": "32g",
      "fats": "2g"
    },
    {
      "mealName": "Cottage cheese Pear Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Pear",
        "20g Almonds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "398 kcal",
      "protein": "35g",
      "carbs": "27g",
      "fats": "18g"
    },
    {
      "mealName": "Protein yogurt Apple Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Apple",
        "4g Cinnamon"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "237 kcal",
      "protein": "25g",
      "carbs": "32g",
      "fats": "1g"
    },
    {
      "mealName": "Kefir Strawberries Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Strawberries",
        "20g Pumpkin seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "281 kcal",
      "protein": "16g",
      "carbs": "20g",
      "fats": "15g"
    },
    {
      "mealName": "Low-fat quark Mango Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Mango",
        "20g Granola"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "288 kcal",
      "protein": "28g",
      "carbs": "37g",
      "fats": "4g"
    },
    {
      "mealName": "Greek yogurt 0% Kiwi Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Kiwi",
        "20g Peanut butter"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "331 kcal",
      "protein": "31g",
      "carbs": "27g",
      "fats": "10g"
    },
    {
      "mealName": "Natural skyr Blackberries Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Blackberries",
        "20g Muesli"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "272 kcal",
      "protein": "31g",
      "carbs": "33g",
      "fats": "2g"
    },
    {
      "mealName": "Cottage cheese Nectarine Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Nectarine",
        "20g Dark chocolate"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "379 kcal",
      "protein": "33g",
      "carbs": "28g",
      "fats": "15g"
    },
    {
      "mealName": "Protein yogurt Banana Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Banana",
        "20g Chia seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "361 kcal",
      "protein": "29g",
      "carbs": "46g",
      "fats": "8g"
    },
    {
      "mealName": "Kefir Berries Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Berries",
        "20g Honey"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "248 kcal",
      "protein": "10g",
      "carbs": "38g",
      "fats": "5g"
    },
    {
      "mealName": "Low-fat quark Blueberries Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Blueberries",
        "20g Flaxseed"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "301 kcal",
      "protein": "30g",
      "carbs": "30g",
      "fats": "9g"
    },
    {
      "mealName": "Greek yogurt 0% Pineapple Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Pineapple",
        "20g Oats"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "274 kcal",
      "protein": "28g",
      "carbs": "35g",
      "fats": "2g"
    },
    {
      "mealName": "Natural skyr Raspberries Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Raspberries",
        "20g Almonds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "323 kcal",
      "protein": "33g",
      "carbs": "26g",
      "fats": "11g"
    },
    {
      "mealName": "Cottage cheese Peach Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Peach",
        "4g Cinnamon"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "274 kcal",
      "protein": "31g",
      "carbs": "21g",
      "fats": "8g"
    },
    {
      "mealName": "Protein yogurt Pear Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Pear",
        "20g Pumpkin seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "344 kcal",
      "protein": "31g",
      "carbs": "32g",
      "fats": "11g"
    },
    {
      "mealName": "Kefir Apple Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Apple",
        "20g Granola"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "280 kcal",
      "protein": "11g",
      "carbs": "36g",
      "fats": "8g"
    },
    {
      "mealName": "Low-fat quark Strawberries Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Strawberries",
        "20g Peanut butter"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "290 kcal",
      "protein": "31g",
      "carbs": "20g",
      "fats": "11g"
    },
    {
      "mealName": "Greek yogurt 0% Mango Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Mango",
        "20g Muesli"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "284 kcal",
      "protein": "28g",
      "carbs": "38g",
      "fats": "2g"
    },
    {
      "mealName": "Natural skyr Kiwi Breakfast Bowl",
      "ingredients": [
        "250g Natural skyr",
        "100g Kiwi",
        "20g Dark chocolate"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "326 kcal",
      "protein": "30g",
      "carbs": "34g",
      "fats": "9g"
    },
    {
      "mealName": "Cottage cheese Blackberries Breakfast Bowl",
      "ingredients": [
        "250g Cottage cheese",
        "100g Blackberries",
        "20g Chia seeds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "365 kcal",
      "protein": "34g",
      "carbs": "26g",
      "fats": "14g"
    },
    {
      "mealName": "Protein yogurt Nectarine Breakfast Bowl",
      "ingredients": [
        "250g Protein yogurt",
        "100g Nectarine",
        "20g Honey"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "280 kcal",
      "protein": "26g",
      "carbs": "42g",
      "fats": "2g"
    },
    {
      "mealName": "Kefir Banana Breakfast Bowl",
      "ingredients": [
        "250g Kefir",
        "100g Banana",
        "20g Flaxseed"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "333 kcal",
      "protein": "13g",
      "carbs": "39g",
      "fats": "14g"
    },
    {
      "mealName": "Low-fat quark Berries Breakfast Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "100g Berries",
        "20g Oats"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "262 kcal",
      "protein": "29g",
      "carbs": "34g",
      "fats": "2g"
    },
    {
      "mealName": "Greek yogurt 0% Blueberries Breakfast Bowl",
      "ingredients": [
        "250g Greek yogurt 0%",
        "100g Blueberries",
        "20g Almonds"
      ],
      "steps": [
        "Add the dairy base to a bowl.",
        "Top with fruit and topping.",
        "Serve cold."
      ],
      "calories": "323 kcal",
      "protein": "30g",
      "carbs": "28g",
      "fats": "10g"
    }
  ],
  "lunch": [
    {
      "mealName": "Chicken Power Bowl",
      "ingredients": [
        "170g Chicken breast",
        "190g Cooked rice",
        "130g Broccoli",
        "60g Avocado",
        "10g Olive oil"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "663 kcal",
      "protein": "50g",
      "carbs": "68g",
      "fats": "23g"
    },
    {
      "mealName": "Tuna Crunch Wrap",
      "ingredients": [
        "65g Whole wheat wrap",
        "130g Tuna in water",
        "40g Greek yogurt 0%",
        "50g Lettuce",
        "70g Cucumber"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "380 kcal",
      "protein": "44g",
      "carbs": "38g",
      "fats": "6g"
    },
    {
      "mealName": "Lean Beef Taco Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "170g Cooked rice",
        "70g Corn",
        "60g Lettuce",
        "60g Salsa"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "534 kcal",
      "protein": "42g",
      "carbs": "68g",
      "fats": "10g"
    },
    {
      "mealName": "Shrimp Rice Bowl",
      "ingredients": [
        "180g Shrimp",
        "160g Cooked rice",
        "100g Broccoli",
        "15g Soy sauce"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "421 kcal",
      "protein": "45g",
      "carbs": "54g",
      "fats": "3g"
    },
    {
      "mealName": "Turkey Potato Plate",
      "ingredients": [
        "170g Turkey breast",
        "260g Potatoes",
        "120g Green beans",
        "10g Olive oil"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "504 kcal",
      "protein": "47g",
      "carbs": "53g",
      "fats": "12g"
    },
    {
      "mealName": "Tofu Power Bowl",
      "ingredients": [
        "200g Tofu",
        "170g Cooked brown rice",
        "150g Stir-fry vegetables",
        "15g Soy sauce"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "523 kcal",
      "protein": "33g",
      "carbs": "59g",
      "fats": "16g"
    },
    {
      "mealName": "Chicken Caesar Wrap",
      "ingredients": [
        "70g Whole wheat wrap",
        "150g Chicken breast",
        "70g Romaine lettuce",
        "15g Parmesan",
        "25g Light Caesar dressing"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "494 kcal",
      "protein": "48g",
      "carbs": "40g",
      "fats": "15g"
    },
    {
      "mealName": "Salmon Quinoa Salad",
      "ingredients": [
        "140g Salmon",
        "170g Cooked quinoa",
        "80g Cucumber",
        "80g Tomatoes",
        "10g Olive oil"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "610 kcal",
      "protein": "36g",
      "carbs": "42g",
      "fats": "32g"
    },
    {
      "mealName": "Lentil Feta Bowl",
      "ingredients": [
        "180g Lentils",
        "40g Feta",
        "80g Cucumber",
        "80g Tomatoes",
        "8g Olive oil"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "410 kcal",
      "protein": "23g",
      "carbs": "44g",
      "fats": "17g"
    },
    {
      "mealName": "Smoked Chicken Pita",
      "ingredients": [
        "140g Smoked chicken slices",
        "80g Pita bread",
        "60g Lettuce",
        "60g Cucumber",
        "25g Yogurt dressing"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "422 kcal",
      "protein": "40g",
      "carbs": "51g",
      "fats": "6g"
    },
    {
      "mealName": "Chicken breast Cooked rice Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked rice",
        "130g Spinach",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "448 kcal",
      "protein": "46g",
      "carbs": "57g",
      "fats": "4g"
    },
    {
      "mealName": "Chicken breast Cooked basmati rice Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked basmati rice",
        "130g Bell pepper",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "464 kcal",
      "protein": "44g",
      "carbs": "59g",
      "fats": "5g"
    },
    {
      "mealName": "Chicken breast Cooked quinoa Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked quinoa",
        "130g Mushrooms",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "441 kcal",
      "protein": "48g",
      "carbs": "46g",
      "fats": "7g"
    },
    {
      "mealName": "Chicken breast Sweet potato Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Sweet potato",
        "130g Tomatoes",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "390 kcal",
      "protein": "42g",
      "carbs": "50g",
      "fats": "4g"
    },
    {
      "mealName": "Chicken breast Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked whole wheat pasta",
        "130g Stir-fry vegetables",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "512 kcal",
      "protein": "51g",
      "carbs": "62g",
      "fats": "6g"
    },
    {
      "mealName": "Chicken breast Cooked couscous Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked couscous",
        "130g Cauliflower",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "423 kcal",
      "protein": "47g",
      "carbs": "49g",
      "fats": "5g"
    },
    {
      "mealName": "Chicken breast Cooked bulgur Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked bulgur",
        "130g Pak choi",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "362 kcal",
      "protein": "45g",
      "carbs": "41g",
      "fats": "4g"
    },
    {
      "mealName": "Chicken breast Gnocchi Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Gnocchi",
        "130g Red cabbage",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "540 kcal",
      "protein": "46g",
      "carbs": "79g",
      "fats": "5g"
    },
    {
      "mealName": "Chicken breast Cooked buckwheat Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked buckwheat",
        "130g Arugula",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "382 kcal",
      "protein": "46g",
      "carbs": "43g",
      "fats": "6g"
    },
    {
      "mealName": "Chicken breast Sourdough bread Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Sourdough bread",
        "130g Pumpkin",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "673 kcal",
      "protein": "53g",
      "carbs": "97g",
      "fats": "8g"
    },
    {
      "mealName": "Chicken breast Protein wrap Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Protein wrap",
        "130g Eggplant",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "732 kcal",
      "protein": "75g",
      "carbs": "75g",
      "fats": "18g"
    },
    {
      "mealName": "Turkey breast Cooked brown rice Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked brown rice",
        "130g Spinach",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "454 kcal",
      "protein": "46g",
      "carbs": "59g",
      "fats": "4g"
    },
    {
      "mealName": "Turkey breast Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked jasmine rice",
        "130g Bell pepper",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "450 kcal",
      "protein": "44g",
      "carbs": "60g",
      "fats": "3g"
    },
    {
      "mealName": "Turkey breast Potatoes Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Potatoes",
        "130g Mushrooms",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "348 kcal",
      "protein": "45g",
      "carbs": "36g",
      "fats": "3g"
    },
    {
      "mealName": "Turkey breast Cooked pasta Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked pasta",
        "130g Tomatoes",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "490 kcal",
      "protein": "49g",
      "carbs": "65g",
      "fats": "4g"
    },
    {
      "mealName": "Turkey breast Whole wheat wrap Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Whole wheat wrap",
        "130g Stir-fry vegetables",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "802 kcal",
      "protein": "56g",
      "carbs": "109g",
      "fats": "15g"
    },
    {
      "mealName": "Turkey breast Cooked noodles Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked noodles",
        "130g Cauliflower",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "457 kcal",
      "protein": "49g",
      "carbs": "53g",
      "fats": "6g"
    },
    {
      "mealName": "Turkey breast Pita bread Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Pita bread",
        "130g Pak choi",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "693 kcal",
      "protein": "56g",
      "carbs": "103g",
      "fats": "6g"
    },
    {
      "mealName": "Turkey breast Cooked rice noodles Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked rice noodles",
        "130g Red cabbage",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "426 kcal",
      "protein": "42g",
      "carbs": "58g",
      "fats": "2g"
    },
    {
      "mealName": "Turkey breast Cooked barley Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked barley",
        "130g Arugula",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "458 kcal",
      "protein": "45g",
      "carbs": "64g",
      "fats": "4g"
    },
    {
      "mealName": "Turkey breast Rye bread Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Rye bread",
        "130g Pumpkin",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "606 kcal",
      "protein": "53g",
      "carbs": "86g",
      "fats": "5g"
    },
    {
      "mealName": "Lean minced beef Cooked rice Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked rice",
        "130g Eggplant",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "496 kcal",
      "protein": "41g",
      "carbs": "59g",
      "fats": "10g"
    },
    {
      "mealName": "Lean minced beef Cooked basmati rice Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked basmati rice",
        "130g Spinach",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "500 kcal",
      "protein": "43g",
      "carbs": "60g",
      "fats": "9g"
    },
    {
      "mealName": "Lean minced beef Cooked quinoa Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked quinoa",
        "130g Bell pepper",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "508 kcal",
      "protein": "42g",
      "carbs": "54g",
      "fats": "12g"
    },
    {
      "mealName": "Lean minced beef Sweet potato Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Sweet potato",
        "130g Mushrooms",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "407 kcal",
      "protein": "42g",
      "carbs": "41g",
      "fats": "9g"
    },
    {
      "mealName": "Lean minced beef Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked whole wheat pasta",
        "130g Tomatoes",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "523 kcal",
      "protein": "46g",
      "carbs": "57g",
      "fats": "11g"
    },
    {
      "mealName": "Lean minced beef Cooked couscous Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked couscous",
        "130g Stir-fry vegetables",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "496 kcal",
      "protein": "44g",
      "carbs": "56g",
      "fats": "9g"
    },
    {
      "mealName": "Lean minced beef Cooked bulgur Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked bulgur",
        "130g Cauliflower",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "434 kcal",
      "protein": "42g",
      "carbs": "49g",
      "fats": "9g"
    },
    {
      "mealName": "Lean minced beef Gnocchi Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Gnocchi",
        "130g Pak choi",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "529 kcal",
      "protein": "43g",
      "carbs": "65g",
      "fats": "10g"
    },
    {
      "mealName": "Lean minced beef Cooked buckwheat Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked buckwheat",
        "130g Red cabbage",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "435 kcal",
      "protein": "41g",
      "carbs": "46g",
      "fats": "10g"
    },
    {
      "mealName": "Lean minced beef Sourdough bread Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Sourdough bread",
        "130g Arugula",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "718 kcal",
      "protein": "52g",
      "carbs": "96g",
      "fats": "13g"
    },
    {
      "mealName": "Lean minced beef Protein wrap Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Protein wrap",
        "130g Pumpkin",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "790 kcal",
      "protein": "71g",
      "carbs": "81g",
      "fats": "23g"
    },
    {
      "mealName": "Beef strips Cooked brown rice Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked brown rice",
        "130g Eggplant",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "508 kcal",
      "protein": "42g",
      "carbs": "54g",
      "fats": "13g"
    },
    {
      "mealName": "Beef strips Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked jasmine rice",
        "130g Spinach",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "525 kcal",
      "protein": "45g",
      "carbs": "57g",
      "fats": "13g"
    },
    {
      "mealName": "Beef strips Potatoes Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Potatoes",
        "130g Bell pepper",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "447 kcal",
      "protein": "40g",
      "carbs": "42g",
      "fats": "12g"
    },
    {
      "mealName": "Beef strips Cooked pasta Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked pasta",
        "130g Mushrooms",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "592 kcal",
      "protein": "50g",
      "carbs": "68g",
      "fats": "13g"
    },
    {
      "mealName": "Beef strips Whole wheat wrap Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Whole wheat wrap",
        "130g Tomatoes",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "819 kcal",
      "protein": "53g",
      "carbs": "97g",
      "fats": "24g"
    },
    {
      "mealName": "Beef strips Cooked noodles Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked noodles",
        "130g Stir-fry vegetables",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "568 kcal",
      "protein": "48g",
      "carbs": "57g",
      "fats": "16g"
    },
    {
      "mealName": "Beef strips Pita bread Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Pita bread",
        "130g Cauliflower",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "796 kcal",
      "protein": "54g",
      "carbs": "110g",
      "fats": "15g"
    },
    {
      "mealName": "Beef strips Cooked rice noodles Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked rice noodles",
        "130g Pak choi",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "499 kcal",
      "protein": "41g",
      "carbs": "56g",
      "fats": "12g"
    },
    {
      "mealName": "Beef strips Cooked barley Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked barley",
        "130g Red cabbage",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "518 kcal",
      "protein": "40g",
      "carbs": "61g",
      "fats": "12g"
    },
    {
      "mealName": "Beef strips Rye bread Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Rye bread",
        "130g Arugula",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "690 kcal",
      "protein": "54g",
      "carbs": "82g",
      "fats": "17g"
    },
    {
      "mealName": "Salmon Cooked rice Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked rice",
        "130g Pumpkin",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "621 kcal",
      "protein": "39g",
      "carbs": "64g",
      "fats": "22g"
    },
    {
      "mealName": "Salmon Cooked basmati rice Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked basmati rice",
        "130g Eggplant",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "635 kcal",
      "protein": "39g",
      "carbs": "67g",
      "fats": "22g"
    },
    {
      "mealName": "Salmon Cooked quinoa Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked quinoa",
        "130g Spinach",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "587 kcal",
      "protein": "44g",
      "carbs": "44g",
      "fats": "25g"
    },
    {
      "mealName": "Salmon Sweet potato Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Sweet potato",
        "130g Bell pepper",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "541 kcal",
      "protein": "38g",
      "carbs": "45g",
      "fats": "22g"
    },
    {
      "mealName": "Salmon Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked whole wheat pasta",
        "130g Mushrooms",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "651 kcal",
      "protein": "47g",
      "carbs": "58g",
      "fats": "23g"
    },
    {
      "mealName": "Salmon Cooked couscous Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked couscous",
        "130g Tomatoes",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "594 kcal",
      "protein": "41g",
      "carbs": "55g",
      "fats": "22g"
    },
    {
      "mealName": "Salmon Cooked bulgur Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked bulgur",
        "130g Stir-fry vegetables",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "549 kcal",
      "protein": "40g",
      "carbs": "46g",
      "fats": "22g"
    },
    {
      "mealName": "Salmon Gnocchi Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Gnocchi",
        "130g Cauliflower",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "666 kcal",
      "protein": "43g",
      "carbs": "69g",
      "fats": "24g"
    },
    {
      "mealName": "Salmon Cooked buckwheat Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked buckwheat",
        "130g Pak choi",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "535 kcal",
      "protein": "40g",
      "carbs": "43g",
      "fats": "22g"
    },
    {
      "mealName": "Salmon Sourdough bread Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Sourdough bread",
        "130g Red cabbage",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "859 kcal",
      "protein": "48g",
      "carbs": "104g",
      "fats": "25g"
    },
    {
      "mealName": "Salmon Protein wrap Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Protein wrap",
        "130g Arugula",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "877 kcal",
      "protein": "72g",
      "carbs": "70g",
      "fats": "37g"
    },
    {
      "mealName": "Cod Cooked brown rice Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked brown rice",
        "130g Pumpkin",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "398 kcal",
      "protein": "36g",
      "carbs": "55g",
      "fats": "4g"
    },
    {
      "mealName": "Cod Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked jasmine rice",
        "130g Eggplant",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "418 kcal",
      "protein": "36g",
      "carbs": "62g",
      "fats": "3g"
    },
    {
      "mealName": "Cod Potatoes Bowl",
      "ingredients": [
        "160g Cod",
        "180g Potatoes",
        "130g Spinach",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "336 kcal",
      "protein": "36g",
      "carbs": "44g",
      "fats": "2g"
    },
    {
      "mealName": "Cod Cooked pasta Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked pasta",
        "130g Bell pepper",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "459 kcal",
      "protein": "41g",
      "carbs": "65g",
      "fats": "4g"
    },
    {
      "mealName": "Cod Whole wheat wrap Bowl",
      "ingredients": [
        "160g Cod",
        "180g Whole wheat wrap",
        "130g Mushrooms",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "713 kcal",
      "protein": "50g",
      "carbs": "95g",
      "fats": "15g"
    },
    {
      "mealName": "Cod Cooked noodles Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked noodles",
        "130g Tomatoes",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "423 kcal",
      "protein": "39g",
      "carbs": "54g",
      "fats": "6g"
    },
    {
      "mealName": "Cod Pita bread Bowl",
      "ingredients": [
        "160g Cod",
        "180g Pita bread",
        "130g Stir-fry vegetables",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "721 kcal",
      "protein": "48g",
      "carbs": "118g",
      "fats": "6g"
    },
    {
      "mealName": "Cod Cooked rice noodles Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked rice noodles",
        "130g Cauliflower",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "370 kcal",
      "protein": "35g",
      "carbs": "53g",
      "fats": "2g"
    },
    {
      "mealName": "Cod Cooked barley Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked barley",
        "130g Pak choi",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "383 kcal",
      "protein": "35g",
      "carbs": "54g",
      "fats": "3g"
    },
    {
      "mealName": "Cod Rye bread Bowl",
      "ingredients": [
        "160g Cod",
        "180g Rye bread",
        "130g Red cabbage",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "588 kcal",
      "protein": "45g",
      "carbs": "89g",
      "fats": "6g"
    },
    {
      "mealName": "Shrimp Cooked rice Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked rice",
        "130g Arugula",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "454 kcal",
      "protein": "42g",
      "carbs": "66g",
      "fats": "4g"
    },
    {
      "mealName": "Shrimp Cooked basmati rice Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked basmati rice",
        "130g Pumpkin",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "428 kcal",
      "protein": "39g",
      "carbs": "62g",
      "fats": "2g"
    },
    {
      "mealName": "Shrimp Cooked quinoa Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked quinoa",
        "130g Eggplant",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "414 kcal",
      "protein": "41g",
      "carbs": "48g",
      "fats": "6g"
    },
    {
      "mealName": "Shrimp Sweet potato Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Sweet potato",
        "130g Spinach",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "357 kcal",
      "protein": "40g",
      "carbs": "47g",
      "fats": "2g"
    },
    {
      "mealName": "Shrimp Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked whole wheat pasta",
        "130g Bell pepper",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "498 kcal",
      "protein": "44g",
      "carbs": "68g",
      "fats": "4g"
    },
    {
      "mealName": "Shrimp Cooked couscous Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked couscous",
        "130g Mushrooms",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "390 kcal",
      "protein": "44g",
      "carbs": "48g",
      "fats": "2g"
    },
    {
      "mealName": "Shrimp Cooked bulgur Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked bulgur",
        "130g Tomatoes",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "338 kcal",
      "protein": "39g",
      "carbs": "42g",
      "fats": "3g"
    },
    {
      "mealName": "Shrimp Gnocchi Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Gnocchi",
        "130g Stir-fry vegetables",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "518 kcal",
      "protein": "42g",
      "carbs": "77g",
      "fats": "4g"
    },
    {
      "mealName": "Shrimp Cooked buckwheat Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked buckwheat",
        "130g Cauliflower",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "386 kcal",
      "protein": "40g",
      "carbs": "53g",
      "fats": "3g"
    },
    {
      "mealName": "Shrimp Sourdough bread Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Sourdough bread",
        "130g Pak choi",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "627 kcal",
      "protein": "49g",
      "carbs": "92g",
      "fats": "6g"
    },
    {
      "mealName": "Shrimp Protein wrap Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Protein wrap",
        "130g Red cabbage",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "710 kcal",
      "protein": "70g",
      "carbs": "75g",
      "fats": "17g"
    },
    {
      "mealName": "Tuna in water Cooked brown rice Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked brown rice",
        "130g Arugula",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "448 kcal",
      "protein": "50g",
      "carbs": "54g",
      "fats": "5g"
    },
    {
      "mealName": "Tuna in water Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked jasmine rice",
        "130g Pumpkin",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "480 kcal",
      "protein": "47g",
      "carbs": "68g",
      "fats": "2g"
    },
    {
      "mealName": "Tuna in water Potatoes Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Potatoes",
        "130g Eggplant",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "355 kcal",
      "protein": "45g",
      "carbs": "40g",
      "fats": "2g"
    },
    {
      "mealName": "Tuna in water Cooked pasta Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked pasta",
        "130g Spinach",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "498 kcal",
      "protein": "55g",
      "carbs": "62g",
      "fats": "5g"
    },
    {
      "mealName": "Tuna in water Whole wheat wrap Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Whole wheat wrap",
        "130g Bell pepper",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "776 kcal",
      "protein": "58g",
      "carbs": "102g",
      "fats": "15g"
    },
    {
      "mealName": "Tuna in water Cooked noodles Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked noodles",
        "130g Mushrooms",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "489 kcal",
      "protein": "53g",
      "carbs": "58g",
      "fats": "6g"
    },
    {
      "mealName": "Tuna in water Pita bread Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Pita bread",
        "130g Tomatoes",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "702 kcal",
      "protein": "58g",
      "carbs": "106g",
      "fats": "6g"
    },
    {
      "mealName": "Tuna in water Cooked rice noodles Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked rice noodles",
        "130g Stir-fry vegetables",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "446 kcal",
      "protein": "47g",
      "carbs": "57g",
      "fats": "3g"
    },
    {
      "mealName": "Tuna in water Cooked barley Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked barley",
        "130g Cauliflower",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "450 kcal",
      "protein": "47g",
      "carbs": "61g",
      "fats": "3g"
    },
    {
      "mealName": "Tuna in water Rye bread Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Rye bread",
        "130g Pak choi",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "625 kcal",
      "protein": "57g",
      "carbs": "87g",
      "fats": "6g"
    },
    {
      "mealName": "Tofu Cooked rice Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked rice",
        "130g Red cabbage",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "474 kcal",
      "protein": "26g",
      "carbs": "64g",
      "fats": "12g"
    },
    {
      "mealName": "Tofu Cooked basmati rice Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked basmati rice",
        "130g Arugula",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "472 kcal",
      "protein": "29g",
      "carbs": "60g",
      "fats": "14g"
    },
    {
      "mealName": "Tofu Cooked quinoa Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked quinoa",
        "130g Pumpkin",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "462 kcal",
      "protein": "28g",
      "carbs": "54g",
      "fats": "15g"
    },
    {
      "mealName": "Tofu Sweet potato Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Sweet potato",
        "130g Eggplant",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "415 kcal",
      "protein": "24g",
      "carbs": "56g",
      "fats": "12g"
    },
    {
      "mealName": "Tofu Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked whole wheat pasta",
        "130g Spinach",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "500 kcal",
      "protein": "34g",
      "carbs": "60g",
      "fats": "14g"
    },
    {
      "mealName": "Tofu Cooked couscous Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked couscous",
        "130g Bell pepper",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "447 kcal",
      "protein": "29g",
      "carbs": "54g",
      "fats": "13g"
    },
    {
      "mealName": "Tofu Cooked bulgur Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked bulgur",
        "130g Mushrooms",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "390 kcal",
      "protein": "29g",
      "carbs": "45g",
      "fats": "12g"
    },
    {
      "mealName": "Tofu Gnocchi Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Gnocchi",
        "130g Tomatoes",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "539 kcal",
      "protein": "28g",
      "carbs": "78g",
      "fats": "13g"
    },
    {
      "mealName": "Tofu Cooked buckwheat Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked buckwheat",
        "130g Stir-fry vegetables",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "424 kcal",
      "protein": "28g",
      "carbs": "51g",
      "fats": "13g"
    },
    {
      "mealName": "Tofu Sourdough bread Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Sourdough bread",
        "130g Cauliflower",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "688 kcal",
      "protein": "37g",
      "carbs": "97g",
      "fats": "16g"
    },
    {
      "mealName": "Tofu Protein wrap Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Protein wrap",
        "130g Pak choi",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "733 kcal",
      "protein": "58g",
      "carbs": "73g",
      "fats": "26g"
    },
    {
      "mealName": "Tempeh Cooked brown rice Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked brown rice",
        "130g Red cabbage",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "600 kcal",
      "protein": "39g",
      "carbs": "77g",
      "fats": "15g"
    },
    {
      "mealName": "Tempeh Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked jasmine rice",
        "130g Arugula",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "578 kcal",
      "protein": "42g",
      "carbs": "71g",
      "fats": "15g"
    },
    {
      "mealName": "Tempeh Potatoes Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Potatoes",
        "130g Pumpkin",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "490 kcal",
      "protein": "38g",
      "carbs": "55g",
      "fats": "14g"
    },
    {
      "mealName": "Tempeh Cooked pasta Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked pasta",
        "130g Eggplant",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "636 kcal",
      "protein": "44g",
      "carbs": "82g",
      "fats": "15g"
    },
    {
      "mealName": "Tempeh Whole wheat wrap Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Whole wheat wrap",
        "130g Spinach",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "910 kcal",
      "protein": "52g",
      "carbs": "118g",
      "fats": "26g"
    },
    {
      "mealName": "Tempeh Cooked noodles Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked noodles",
        "130g Bell pepper",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "601 kcal",
      "protein": "43g",
      "carbs": "69g",
      "fats": "17g"
    },
    {
      "mealName": "Tempeh Pita bread Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Pita bread",
        "130g Mushrooms",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "841 kcal",
      "protein": "53g",
      "carbs": "119g",
      "fats": "18g"
    },
    {
      "mealName": "Tempeh Cooked rice noodles Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked rice noodles",
        "130g Tomatoes",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "545 kcal",
      "protein": "37g",
      "carbs": "69g",
      "fats": "14g"
    },
    {
      "mealName": "Tempeh Cooked barley Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked barley",
        "130g Stir-fry vegetables",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "620 kcal",
      "protein": "38g",
      "carbs": "84g",
      "fats": "14g"
    },
    {
      "mealName": "Tempeh Rye bread Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Rye bread",
        "130g Cauliflower",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "740 kcal",
      "protein": "49g",
      "carbs": "98g",
      "fats": "17g"
    },
    {
      "mealName": "Eggs Cooked rice Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Cooked rice",
        "130g Pak choi",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "493 kcal",
      "protein": "29g",
      "carbs": "56g",
      "fats": "18g"
    },
    {
      "mealName": "Eggs Cooked basmati rice Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Cooked basmati rice",
        "130g Red cabbage",
        "20g Sriracha"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "523 kcal",
      "protein": "28g",
      "carbs": "65g",
      "fats": "17g"
    },
    {
      "mealName": "Eggs Cooked quinoa Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Cooked quinoa",
        "130g Arugula",
        "20g Sweet chili sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "513 kcal",
      "protein": "32g",
      "carbs": "53g",
      "fats": "21g"
    },
    {
      "mealName": "Eggs Sweet potato Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Sweet potato",
        "130g Pumpkin",
        "20g Tomato sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "425 kcal",
      "protein": "26g",
      "carbs": "48g",
      "fats": "16g"
    },
    {
      "mealName": "Eggs Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Cooked whole wheat pasta",
        "130g Eggplant",
        "20g Mustard"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "544 kcal",
      "protein": "34g",
      "carbs": "61g",
      "fats": "19g"
    }
  ],
  "dinner": [
    {
      "mealName": "Salmon Sweet Potato Bowl",
      "ingredients": [
        "160g Salmon",
        "230g Sweet potato",
        "140g Green beans",
        "10g Olive oil"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "662 kcal",
      "protein": "39g",
      "carbs": "56g",
      "fats": "31g"
    },
    {
      "mealName": "Steak Potato Dinner",
      "ingredients": [
        "180g Beef steak",
        "320g Potatoes",
        "120g Green beans",
        "10g Olive oil"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "642 kcal",
      "protein": "48g",
      "carbs": "63g",
      "fats": "21g"
    },
    {
      "mealName": "Creamy Protein Pasta",
      "ingredients": [
        "230g Cooked pasta",
        "160g Chicken breast",
        "60g Light cream cheese",
        "100g Spinach",
        "15g Parmesan"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "710 kcal",
      "protein": "64g",
      "carbs": "79g",
      "fats": "16g"
    },
    {
      "mealName": "White Fish Potato Plate",
      "ingredients": [
        "200g Cod",
        "260g Potatoes",
        "150g Frozen vegetables",
        "8g Olive oil"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "495 kcal",
      "protein": "44g",
      "carbs": "55g",
      "fats": "11g"
    },
    {
      "mealName": "Chicken Fajita Bowl",
      "ingredients": [
        "170g Chicken breast",
        "180g Cooked rice",
        "120g Bell pepper",
        "60g Salsa",
        "5g Fajita spices"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "492 kcal",
      "protein": "47g",
      "carbs": "64g",
      "fats": "5g"
    },
    {
      "mealName": "Vegan Chickpea Curry",
      "ingredients": [
        "180g Chickpeas",
        "170g Cooked rice",
        "100g Spinach",
        "5g Curry powder"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "555 kcal",
      "protein": "25g",
      "carbs": "103g",
      "fats": "7g"
    },
    {
      "mealName": "Beef Noodle Stir Fry",
      "ingredients": [
        "160g Beef strips",
        "230g Cooked noodles",
        "180g Stir-fry vegetables",
        "20g Soy sauce"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "657 kcal",
      "protein": "52g",
      "carbs": "73g",
      "fats": "17g"
    },
    {
      "mealName": "Cod Couscous Plate",
      "ingredients": [
        "200g Cod",
        "170g Cooked couscous",
        "120g Zucchini",
        "80g Tomatoes",
        "8g Olive oil"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "460 kcal",
      "protein": "45g",
      "carbs": "46g",
      "fats": "11g"
    },
    {
      "mealName": "Seitan Teriyaki Bowl",
      "ingredients": [
        "180g Seitan",
        "180g Cooked rice",
        "160g Stir-fry vegetables",
        "25g Teriyaki sauce"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "583 kcal",
      "protein": "55g",
      "carbs": "79g",
      "fats": "5g"
    },
    {
      "mealName": "Mackerel Potato Plate",
      "ingredients": [
        "150g Mackerel",
        "280g Potatoes",
        "140g Green beans",
        "6g Olive oil"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "657 kcal",
      "protein": "38g",
      "carbs": "57g",
      "fats": "31g"
    },
    {
      "mealName": "Chicken breast Cooked brown rice Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked brown rice",
        "130g Green beans",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "454 kcal",
      "protein": "46g",
      "carbs": "55g",
      "fats": "6g"
    },
    {
      "mealName": "Chicken breast Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked jasmine rice",
        "130g Zucchini",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "452 kcal",
      "protein": "44g",
      "carbs": "58g",
      "fats": "4g"
    },
    {
      "mealName": "Chicken breast Potatoes Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Potatoes",
        "130g Lettuce",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "420 kcal",
      "protein": "43g",
      "carbs": "36g",
      "fats": "12g"
    },
    {
      "mealName": "Chicken breast Cooked pasta Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked pasta",
        "130g Cucumber",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "485 kcal",
      "protein": "51g",
      "carbs": "62g",
      "fats": "5g"
    },
    {
      "mealName": "Chicken breast Whole wheat wrap Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Whole wheat wrap",
        "130g Carrots",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "787 kcal",
      "protein": "55g",
      "carbs": "104g",
      "fats": "17g"
    },
    {
      "mealName": "Chicken breast Cooked noodles Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked noodles",
        "130g Asparagus",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "470 kcal",
      "protein": "49g",
      "carbs": "54g",
      "fats": "7g"
    },
    {
      "mealName": "Chicken breast Pita bread Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Pita bread",
        "130g Bean sprouts",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "796 kcal",
      "protein": "58g",
      "carbs": "108g",
      "fats": "15g"
    },
    {
      "mealName": "Chicken breast Cooked rice noodles Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked rice noodles",
        "130g Kale",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "448 kcal",
      "protein": "47g",
      "carbs": "58g",
      "fats": "5g"
    },
    {
      "mealName": "Chicken breast Cooked barley Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Cooked barley",
        "130g Beetroot",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "471 kcal",
      "protein": "44g",
      "carbs": "65g",
      "fats": "5g"
    },
    {
      "mealName": "Chicken breast Rye bread Bowl",
      "ingredients": [
        "160g Chicken breast",
        "180g Rye bread",
        "130g Brussels sprouts",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "648 kcal",
      "protein": "56g",
      "carbs": "91g",
      "fats": "7g"
    },
    {
      "mealName": "Turkey breast Cooked rice Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked rice",
        "130g Broccoli",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "532 kcal",
      "protein": "47g",
      "carbs": "61g",
      "fats": "11g"
    },
    {
      "mealName": "Turkey breast Cooked basmati rice Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked basmati rice",
        "130g Green beans",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "453 kcal",
      "protein": "46g",
      "carbs": "60g",
      "fats": "2g"
    },
    {
      "mealName": "Turkey breast Cooked quinoa Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked quinoa",
        "130g Zucchini",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "424 kcal",
      "protein": "46g",
      "carbs": "43g",
      "fats": "7g"
    },
    {
      "mealName": "Turkey breast Sweet potato Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Sweet potato",
        "130g Lettuce",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "362 kcal",
      "protein": "42g",
      "carbs": "44g",
      "fats": "2g"
    },
    {
      "mealName": "Turkey breast Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked whole wheat pasta",
        "130g Cucumber",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "544 kcal",
      "protein": "50g",
      "carbs": "57g",
      "fats": "12g"
    },
    {
      "mealName": "Turkey breast Cooked couscous Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked couscous",
        "130g Carrots",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "434 kcal",
      "protein": "47g",
      "carbs": "55g",
      "fats": "2g"
    },
    {
      "mealName": "Turkey breast Cooked bulgur Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked bulgur",
        "130g Asparagus",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "361 kcal",
      "protein": "46g",
      "carbs": "41g",
      "fats": "3g"
    },
    {
      "mealName": "Turkey breast Gnocchi Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Gnocchi",
        "130g Bean sprouts",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "515 kcal",
      "protein": "49g",
      "carbs": "73g",
      "fats": "4g"
    },
    {
      "mealName": "Turkey breast Cooked buckwheat Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Cooked buckwheat",
        "130g Kale",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "483 kcal",
      "protein": "48g",
      "carbs": "49g",
      "fats": "12g"
    },
    {
      "mealName": "Turkey breast Sourdough bread Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Sourdough bread",
        "130g Beetroot",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "684 kcal",
      "protein": "55g",
      "carbs": "100g",
      "fats": "5g"
    },
    {
      "mealName": "Turkey breast Protein wrap Bowl",
      "ingredients": [
        "160g Turkey breast",
        "180g Protein wrap",
        "130g Brussels sprouts",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "746 kcal",
      "protein": "78g",
      "carbs": "76g",
      "fats": "17g"
    },
    {
      "mealName": "Lean minced beef Cooked brown rice Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked brown rice",
        "130g Broccoli",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "500 kcal",
      "protein": "44g",
      "carbs": "58g",
      "fats": "10g"
    },
    {
      "mealName": "Lean minced beef Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked jasmine rice",
        "130g Green beans",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "576 kcal",
      "protein": "43g",
      "carbs": "61g",
      "fats": "17g"
    },
    {
      "mealName": "Lean minced beef Potatoes Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Potatoes",
        "130g Zucchini",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "387 kcal",
      "protein": "40g",
      "carbs": "36g",
      "fats": "9g"
    },
    {
      "mealName": "Lean minced beef Cooked pasta Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked pasta",
        "130g Lettuce",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "532 kcal",
      "protein": "46g",
      "carbs": "61g",
      "fats": "11g"
    },
    {
      "mealName": "Lean minced beef Whole wheat wrap Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Whole wheat wrap",
        "130g Cucumber",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "796 kcal",
      "protein": "52g",
      "carbs": "99g",
      "fats": "21g"
    },
    {
      "mealName": "Lean minced beef Cooked noodles Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked noodles",
        "130g Carrots",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "604 kcal",
      "protein": "45g",
      "carbs": "59g",
      "fats": "20g"
    },
    {
      "mealName": "Lean minced beef Pita bread Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Pita bread",
        "130g Asparagus",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "748 kcal",
      "protein": "54g",
      "carbs": "105g",
      "fats": "12g"
    },
    {
      "mealName": "Lean minced beef Cooked rice noodles Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked rice noodles",
        "130g Bean sprouts",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "471 kcal",
      "protein": "42g",
      "carbs": "54g",
      "fats": "10g"
    },
    {
      "mealName": "Lean minced beef Cooked barley Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Cooked barley",
        "130g Kale",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "521 kcal",
      "protein": "43g",
      "carbs": "66g",
      "fats": "10g"
    },
    {
      "mealName": "Lean minced beef Rye bread Bowl",
      "ingredients": [
        "160g Lean minced beef",
        "180g Rye bread",
        "130g Beetroot",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "754 kcal",
      "protein": "52g",
      "carbs": "90g",
      "fats": "20g"
    },
    {
      "mealName": "Beef strips Cooked rice Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked rice",
        "130g Brussels sprouts",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "548 kcal",
      "protein": "46g",
      "carbs": "63g",
      "fats": "12g"
    },
    {
      "mealName": "Beef strips Cooked basmati rice Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked basmati rice",
        "130g Broccoli",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "544 kcal",
      "protein": "45g",
      "carbs": "61g",
      "fats": "13g"
    },
    {
      "mealName": "Beef strips Cooked quinoa Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked quinoa",
        "130g Green beans",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "524 kcal",
      "protein": "46g",
      "carbs": "51g",
      "fats": "15g"
    },
    {
      "mealName": "Beef strips Sweet potato Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Sweet potato",
        "130g Zucchini",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "511 kcal",
      "protein": "41g",
      "carbs": "41g",
      "fats": "20g"
    },
    {
      "mealName": "Beef strips Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked whole wheat pasta",
        "130g Lettuce",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "548 kcal",
      "protein": "49g",
      "carbs": "55g",
      "fats": "13g"
    },
    {
      "mealName": "Beef strips Cooked couscous Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked couscous",
        "130g Cucumber",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "487 kcal",
      "protein": "44g",
      "carbs": "48g",
      "fats": "13g"
    },
    {
      "mealName": "Beef strips Cooked bulgur Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked bulgur",
        "130g Carrots",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "471 kcal",
      "protein": "43g",
      "carbs": "51g",
      "fats": "12g"
    },
    {
      "mealName": "Beef strips Gnocchi Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Gnocchi",
        "130g Asparagus",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "648 kcal",
      "protein": "46g",
      "carbs": "68g",
      "fats": "22g"
    },
    {
      "mealName": "Beef strips Cooked buckwheat Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Cooked buckwheat",
        "130g Bean sprouts",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "463 kcal",
      "protein": "46g",
      "carbs": "45g",
      "fats": "13g"
    },
    {
      "mealName": "Beef strips Sourdough bread Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Sourdough bread",
        "130g Kale",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "780 kcal",
      "protein": "56g",
      "carbs": "99g",
      "fats": "17g"
    },
    {
      "mealName": "Beef strips Protein wrap Bowl",
      "ingredients": [
        "160g Beef strips",
        "180g Protein wrap",
        "130g Beetroot",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "828 kcal",
      "protein": "75g",
      "carbs": "80g",
      "fats": "26g"
    },
    {
      "mealName": "Salmon Cooked brown rice Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked brown rice",
        "130g Brussels sprouts",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "694 kcal",
      "protein": "42g",
      "carbs": "58g",
      "fats": "31g"
    },
    {
      "mealName": "Salmon Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked jasmine rice",
        "130g Broccoli",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "622 kcal",
      "protein": "43g",
      "carbs": "60g",
      "fats": "22g"
    },
    {
      "mealName": "Salmon Potatoes Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Potatoes",
        "130g Green beans",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "530 kcal",
      "protein": "39g",
      "carbs": "41g",
      "fats": "22g"
    },
    {
      "mealName": "Salmon Cooked pasta Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked pasta",
        "130g Zucchini",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "654 kcal",
      "protein": "45g",
      "carbs": "64g",
      "fats": "23g"
    },
    {
      "mealName": "Salmon Whole wheat wrap Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Whole wheat wrap",
        "130g Lettuce",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "978 kcal",
      "protein": "50g",
      "carbs": "95g",
      "fats": "42g"
    },
    {
      "mealName": "Salmon Cooked noodles Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked noodles",
        "130g Cucumber",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "611 kcal",
      "protein": "44g",
      "carbs": "51g",
      "fats": "24g"
    },
    {
      "mealName": "Salmon Pita bread Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Pita bread",
        "130g Carrots",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "899 kcal",
      "protein": "50g",
      "carbs": "113g",
      "fats": "26g"
    },
    {
      "mealName": "Salmon Cooked rice noodles Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked rice noodles",
        "130g Asparagus",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "577 kcal",
      "protein": "39g",
      "carbs": "54g",
      "fats": "21g"
    },
    {
      "mealName": "Salmon Cooked barley Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Cooked barley",
        "130g Bean sprouts",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "679 kcal",
      "protein": "40g",
      "carbs": "59g",
      "fats": "30g"
    },
    {
      "mealName": "Salmon Rye bread Bowl",
      "ingredients": [
        "160g Salmon",
        "180g Rye bread",
        "130g Kale",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "803 kcal",
      "protein": "53g",
      "carbs": "88g",
      "fats": "26g"
    },
    {
      "mealName": "Cod Cooked rice Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked rice",
        "130g Beetroot",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "439 kcal",
      "protein": "38g",
      "carbs": "65g",
      "fats": "3g"
    },
    {
      "mealName": "Cod Cooked basmati rice Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked basmati rice",
        "130g Brussels sprouts",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "441 kcal",
      "protein": "39g",
      "carbs": "66g",
      "fats": "3g"
    },
    {
      "mealName": "Cod Cooked quinoa Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked quinoa",
        "130g Broccoli",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "477 kcal",
      "protein": "41g",
      "carbs": "48g",
      "fats": "14g"
    },
    {
      "mealName": "Cod Sweet potato Bowl",
      "ingredients": [
        "160g Cod",
        "180g Sweet potato",
        "130g Green beans",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "337 kcal",
      "protein": "37g",
      "carbs": "46g",
      "fats": "2g"
    },
    {
      "mealName": "Cod Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked whole wheat pasta",
        "130g Zucchini",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "441 kcal",
      "protein": "42g",
      "carbs": "56g",
      "fats": "5g"
    },
    {
      "mealName": "Cod Cooked couscous Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked couscous",
        "130g Lettuce",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "372 kcal",
      "protein": "38g",
      "carbs": "49g",
      "fats": "2g"
    },
    {
      "mealName": "Cod Cooked bulgur Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked bulgur",
        "130g Cucumber",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "386 kcal",
      "protein": "36g",
      "carbs": "41g",
      "fats": "10g"
    },
    {
      "mealName": "Cod Gnocchi Bowl",
      "ingredients": [
        "160g Cod",
        "180g Gnocchi",
        "130g Carrots",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "483 kcal",
      "protein": "39g",
      "carbs": "75g",
      "fats": "4g"
    },
    {
      "mealName": "Cod Cooked buckwheat Bowl",
      "ingredients": [
        "160g Cod",
        "180g Cooked buckwheat",
        "130g Asparagus",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "341 kcal",
      "protein": "38g",
      "carbs": "42g",
      "fats": "4g"
    },
    {
      "mealName": "Cod Sourdough bread Bowl",
      "ingredients": [
        "160g Cod",
        "180g Sourdough bread",
        "130g Bean sprouts",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "640 kcal",
      "protein": "48g",
      "carbs": "98g",
      "fats": "6g"
    },
    {
      "mealName": "Cod Protein wrap Bowl",
      "ingredients": [
        "160g Cod",
        "180g Protein wrap",
        "130g Kale",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "785 kcal",
      "protein": "71g",
      "carbs": "76g",
      "fats": "26g"
    },
    {
      "mealName": "Shrimp Cooked brown rice Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked brown rice",
        "130g Beetroot",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "438 kcal",
      "protein": "42g",
      "carbs": "61g",
      "fats": "4g"
    },
    {
      "mealName": "Shrimp Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked jasmine rice",
        "130g Brussels sprouts",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "460 kcal",
      "protein": "42g",
      "carbs": "65g",
      "fats": "4g"
    },
    {
      "mealName": "Shrimp Potatoes Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Potatoes",
        "130g Broccoli",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "355 kcal",
      "protein": "40g",
      "carbs": "45g",
      "fats": "2g"
    },
    {
      "mealName": "Shrimp Cooked pasta Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked pasta",
        "130g Green beans",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "557 kcal",
      "protein": "46g",
      "carbs": "68g",
      "fats": "12g"
    },
    {
      "mealName": "Shrimp Whole wheat wrap Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Whole wheat wrap",
        "130g Zucchini",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "725 kcal",
      "protein": "51g",
      "carbs": "96g",
      "fats": "15g"
    },
    {
      "mealName": "Shrimp Cooked noodles Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked noodles",
        "130g Lettuce",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "438 kcal",
      "protein": "43g",
      "carbs": "52g",
      "fats": "6g"
    },
    {
      "mealName": "Shrimp Pita bread Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Pita bread",
        "130g Cucumber",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "686 kcal",
      "protein": "50g",
      "carbs": "110g",
      "fats": "5g"
    },
    {
      "mealName": "Shrimp Cooked rice noodles Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked rice noodles",
        "130g Carrots",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "489 kcal",
      "protein": "38g",
      "carbs": "61g",
      "fats": "11g"
    },
    {
      "mealName": "Shrimp Cooked barley Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Cooked barley",
        "130g Asparagus",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "410 kcal",
      "protein": "40g",
      "carbs": "58g",
      "fats": "2g"
    },
    {
      "mealName": "Shrimp Rye bread Bowl",
      "ingredients": [
        "160g Shrimp",
        "180g Rye bread",
        "130g Bean sprouts",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "605 kcal",
      "protein": "51g",
      "carbs": "86g",
      "fats": "6g"
    },
    {
      "mealName": "Tuna in water Cooked rice Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked rice",
        "130g Kale",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "494 kcal",
      "protein": "51g",
      "carbs": "66g",
      "fats": "4g"
    },
    {
      "mealName": "Tuna in water Cooked basmati rice Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked basmati rice",
        "130g Beetroot",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "552 kcal",
      "protein": "49g",
      "carbs": "65g",
      "fats": "11g"
    },
    {
      "mealName": "Tuna in water Cooked quinoa Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked quinoa",
        "130g Brussels sprouts",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "458 kcal",
      "protein": "53g",
      "carbs": "51g",
      "fats": "6g"
    },
    {
      "mealName": "Tuna in water Sweet potato Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Sweet potato",
        "130g Broccoli",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "393 kcal",
      "protein": "48g",
      "carbs": "46g",
      "fats": "3g"
    },
    {
      "mealName": "Tuna in water Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked whole wheat pasta",
        "130g Green beans",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "506 kcal",
      "protein": "54g",
      "carbs": "64g",
      "fats": "4g"
    },
    {
      "mealName": "Tuna in water Cooked couscous Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked couscous",
        "130g Zucchini",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "486 kcal",
      "protein": "50g",
      "carbs": "46g",
      "fats": "11g"
    },
    {
      "mealName": "Tuna in water Cooked bulgur Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked bulgur",
        "130g Lettuce",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "356 kcal",
      "protein": "48g",
      "carbs": "39g",
      "fats": "2g"
    },
    {
      "mealName": "Tuna in water Gnocchi Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Gnocchi",
        "130g Cucumber",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "502 kcal",
      "protein": "49g",
      "carbs": "68g",
      "fats": "4g"
    },
    {
      "mealName": "Tuna in water Cooked buckwheat Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Cooked buckwheat",
        "130g Carrots",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "415 kcal",
      "protein": "47g",
      "carbs": "53g",
      "fats": "3g"
    },
    {
      "mealName": "Tuna in water Sourdough bread Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Sourdough bread",
        "130g Asparagus",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "738 kcal",
      "protein": "58g",
      "carbs": "93g",
      "fats": "14g"
    },
    {
      "mealName": "Tuna in water Protein wrap Bowl",
      "ingredients": [
        "160g Tuna in water",
        "180g Protein wrap",
        "130g Bean sprouts",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "730 kcal",
      "protein": "82g",
      "carbs": "72g",
      "fats": "16g"
    },
    {
      "mealName": "Tofu Cooked brown rice Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked brown rice",
        "130g Kale",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "493 kcal",
      "protein": "31g",
      "carbs": "61g",
      "fats": "15g"
    },
    {
      "mealName": "Tofu Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked jasmine rice",
        "130g Beetroot",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "502 kcal",
      "protein": "28g",
      "carbs": "71g",
      "fats": "12g"
    },
    {
      "mealName": "Tofu Potatoes Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Potatoes",
        "130g Brussels sprouts",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "472 kcal",
      "protein": "28g",
      "carbs": "47g",
      "fats": "20g"
    },
    {
      "mealName": "Tofu Cooked pasta Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked pasta",
        "130g Broccoli",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "526 kcal",
      "protein": "36g",
      "carbs": "69g",
      "fats": "14g"
    },
    {
      "mealName": "Tofu Whole wheat wrap Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Whole wheat wrap",
        "130g Green beans",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "790 kcal",
      "protein": "39g",
      "carbs": "104g",
      "fats": "25g"
    },
    {
      "mealName": "Tofu Cooked noodles Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked noodles",
        "130g Zucchini",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "482 kcal",
      "protein": "30g",
      "carbs": "56g",
      "fats": "15g"
    },
    {
      "mealName": "Tofu Pita bread Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Pita bread",
        "130g Lettuce",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "792 kcal",
      "protein": "38g",
      "carbs": "107g",
      "fats": "23g"
    },
    {
      "mealName": "Tofu Cooked rice noodles Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked rice noodles",
        "130g Cucumber",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "420 kcal",
      "protein": "26g",
      "carbs": "54g",
      "fats": "12g"
    },
    {
      "mealName": "Tofu Cooked barley Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Cooked barley",
        "130g Carrots",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "485 kcal",
      "protein": "25g",
      "carbs": "68g",
      "fats": "13g"
    },
    {
      "mealName": "Tofu Rye bread Bowl",
      "ingredients": [
        "160g Tofu",
        "180g Rye bread",
        "130g Asparagus",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "634 kcal",
      "protein": "37g",
      "carbs": "88g",
      "fats": "15g"
    },
    {
      "mealName": "Tempeh Cooked rice Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked rice",
        "130g Bean sprouts",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "663 kcal",
      "protein": "42g",
      "carbs": "74g",
      "fats": "22g"
    },
    {
      "mealName": "Tempeh Cooked basmati rice Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked basmati rice",
        "130g Kale",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "612 kcal",
      "protein": "44g",
      "carbs": "78g",
      "fats": "15g"
    },
    {
      "mealName": "Tempeh Cooked quinoa Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked quinoa",
        "130g Beetroot",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "594 kcal",
      "protein": "43g",
      "carbs": "66g",
      "fats": "18g"
    },
    {
      "mealName": "Tempeh Sweet potato Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Sweet potato",
        "130g Brussels sprouts",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "535 kcal",
      "protein": "40g",
      "carbs": "66g",
      "fats": "13g"
    },
    {
      "mealName": "Tempeh Cooked whole wheat pasta Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked whole wheat pasta",
        "130g Broccoli",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "704 kcal",
      "protein": "48g",
      "carbs": "75g",
      "fats": "24g"
    },
    {
      "mealName": "Tempeh Cooked couscous Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked couscous",
        "130g Green beans",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "556 kcal",
      "protein": "43g",
      "carbs": "66g",
      "fats": "13g"
    },
    {
      "mealName": "Tempeh Cooked bulgur Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked bulgur",
        "130g Zucchini",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "494 kcal",
      "protein": "39g",
      "carbs": "54g",
      "fats": "15g"
    },
    {
      "mealName": "Tempeh Gnocchi Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Gnocchi",
        "130g Lettuce",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "632 kcal",
      "protein": "41g",
      "carbs": "84g",
      "fats": "15g"
    },
    {
      "mealName": "Tempeh Cooked buckwheat Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Cooked buckwheat",
        "130g Cucumber",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "575 kcal",
      "protein": "40g",
      "carbs": "57g",
      "fats": "22g"
    },
    {
      "mealName": "Tempeh Sourdough bread Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Sourdough bread",
        "130g Carrots",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "818 kcal",
      "protein": "49g",
      "carbs": "115g",
      "fats": "17g"
    },
    {
      "mealName": "Tempeh Protein wrap Bowl",
      "ingredients": [
        "160g Tempeh",
        "180g Protein wrap",
        "130g Asparagus",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "852 kcal",
      "protein": "71g",
      "carbs": "84g",
      "fats": "28g"
    },
    {
      "mealName": "Eggs Cooked brown rice Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Cooked brown rice",
        "130g Bean sprouts",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "507 kcal",
      "protein": "31g",
      "carbs": "58g",
      "fats": "18g"
    },
    {
      "mealName": "Eggs Cooked jasmine rice Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Cooked jasmine rice",
        "130g Kale",
        "20g Pesto"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "612 kcal",
      "protein": "32g",
      "carbs": "65g",
      "fats": "26g"
    },
    {
      "mealName": "Eggs Potatoes Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Potatoes",
        "130g Beetroot",
        "20g Soy sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "434 kcal",
      "protein": "29g",
      "carbs": "46g",
      "fats": "16g"
    },
    {
      "mealName": "Eggs Cooked pasta Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Cooked pasta",
        "130g Brussels sprouts",
        "20g Yogurt dressing"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "582 kcal",
      "protein": "36g",
      "carbs": "70g",
      "fats": "19g"
    },
    {
      "mealName": "Eggs Whole wheat wrap Bowl",
      "ingredients": [
        "160g Eggs",
        "180g Whole wheat wrap",
        "130g Broccoli",
        "20g Teriyaki sauce"
      ],
      "steps": [
        "Cook the protein source.",
        "Prepare the carbohydrate source.",
        "Add vegetables.",
        "Finish with sauce or seasoning."
      ],
      "calories": "833 kcal",
      "protein": "42g",
      "carbs": "105g",
      "fats": "29g"
    }
  ],
  "snack": [
    {
      "mealName": "Protein Smoothie",
      "ingredients": [
        "30g Whey protein",
        "100g Banana",
        "250g Semi-skimmed milk",
        "3g Cinnamon"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "331 kcal",
      "protein": "33g",
      "carbs": "40g",
      "fats": "6g"
    },
    {
      "mealName": "Greek Yogurt Dessert Cup",
      "ingredients": [
        "200g Greek yogurt 0%",
        "80g Berries",
        "10g Honey",
        "10g Dark chocolate"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "245 kcal",
      "protein": "22g",
      "carbs": "30g",
      "fats": "4g"
    },
    {
      "mealName": "Rice Cake Protein Snack",
      "ingredients": [
        "30g Rice cakes",
        "25g Whey protein",
        "80g Berries"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "253 kcal",
      "protein": "23g",
      "carbs": "36g",
      "fats": "3g"
    },
    {
      "mealName": "Protein Brownie Bowl",
      "ingredients": [
        "30g Whey protein",
        "10g Cocoa powder",
        "100g Greek yogurt 0%",
        "100g Banana"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "289 kcal",
      "protein": "36g",
      "carbs": "31g",
      "fats": "4g"
    },
    {
      "mealName": "Quark Cinnamon Bowl",
      "ingredients": [
        "250g Low-fat quark",
        "8g Honey",
        "4g Cinnamon"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "172 kcal",
      "protein": "25g",
      "carbs": "20g",
      "fats": "1g"
    },
    {
      "mealName": "Protein Coffee Shake",
      "ingredients": [
        "30g Whey protein",
        "150g Coffee",
        "150g Semi-skimmed milk"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "189 kcal",
      "protein": "29g",
      "carbs": "10g",
      "fats": "4g"
    },
    {
      "mealName": "Apple Peanut Butter",
      "ingredients": [
        "160g Apple",
        "20g Peanut butter"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "203 kcal",
      "protein": "5g",
      "carbs": "25g",
      "fats": "10g"
    },
    {
      "mealName": "Protein Pudding Crunch",
      "ingredients": [
        "200g Protein pudding",
        "80g Strawberries",
        "20g Granola"
      ],
      "steps": [
        "Prepare all ingredients.",
        "Cook or assemble the meal.",
        "Serve fresh."
      ],
      "calories": "276 kcal",
      "protein": "23g",
      "carbs": "35g",
      "fats": "5g"
    },
    {
      "mealName": "Low-fat quark with Banana",
      "ingredients": [
        "220g Low-fat quark",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "210 kcal",
      "protein": "23g",
      "carbs": "32g",
      "fats": "1g"
    },
    {
      "mealName": "Greek yogurt 0% with Strawberries",
      "ingredients": [
        "220g Greek yogurt 0%",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "164 kcal",
      "protein": "23g",
      "carbs": "17g",
      "fats": "0g"
    },
    {
      "mealName": "Protein pudding with Almonds",
      "ingredients": [
        "100g Protein pudding",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "167 kcal",
      "protein": "13g",
      "carbs": "11g",
      "fats": "8g"
    },
    {
      "mealName": "Whey protein with Cocoa powder",
      "ingredients": [
        "100g Whey protein",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "424 kcal",
      "protein": "81g",
      "carbs": "10g",
      "fats": "8g"
    },
    {
      "mealName": "Rice cakes with Banana",
      "ingredients": [
        "35g Rice cakes",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "224 kcal",
      "protein": "4g",
      "carbs": "51g",
      "fats": "1g"
    },
    {
      "mealName": "Wholegrain crackers with Strawberries",
      "ingredients": [
        "35g Wholegrain crackers",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "158 kcal",
      "protein": "4g",
      "carbs": "31g",
      "fats": "3g"
    },
    {
      "mealName": "Protein bar with Almonds",
      "ingredients": [
        "100g Protein bar",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "447 kcal",
      "protein": "33g",
      "carbs": "38g",
      "fats": "20g"
    },
    {
      "mealName": "Cottage cheese with Cocoa powder",
      "ingredients": [
        "220g Cottage cheese",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "233 kcal",
      "protein": "29g",
      "carbs": "9g",
      "fats": "9g"
    },
    {
      "mealName": "Natural skyr with Banana",
      "ingredients": [
        "220g Natural skyr",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "225 kcal",
      "protein": "25g",
      "carbs": "32g",
      "fats": "1g"
    },
    {
      "mealName": "Protein mousse with Strawberries",
      "ingredients": [
        "100g Protein mousse",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "122 kcal",
      "protein": "11g",
      "carbs": "17g",
      "fats": "2g"
    },
    {
      "mealName": "Plain popcorn with Almonds",
      "ingredients": [
        "100g Plain popcorn",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "467 kcal",
      "protein": "15g",
      "carbs": "81g",
      "fats": "12g"
    },
    {
      "mealName": "Low-fat quark with Cocoa powder",
      "ingredients": [
        "220g Low-fat quark",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "156 kcal",
      "protein": "25g",
      "carbs": "11g",
      "fats": "3g"
    },
    {
      "mealName": "Greek yogurt 0% with Banana",
      "ingredients": [
        "220g Greek yogurt 0%",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "221 kcal",
      "protein": "23g",
      "carbs": "32g",
      "fats": "0g"
    },
    {
      "mealName": "Protein pudding with Strawberries",
      "ingredients": [
        "100g Protein pudding",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "112 kcal",
      "protein": "11g",
      "carbs": "16g",
      "fats": "1g"
    },
    {
      "mealName": "Whey protein with Almonds",
      "ingredients": [
        "100g Whey protein",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "477 kcal",
      "protein": "81g",
      "carbs": "11g",
      "fats": "14g"
    },
    {
      "mealName": "Rice cakes with Cocoa powder",
      "ingredients": [
        "35g Rice cakes",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "169 kcal",
      "protein": "6g",
      "carbs": "30g",
      "fats": "3g"
    },
    {
      "mealName": "Wholegrain crackers with Banana",
      "ingredients": [
        "35g Wholegrain crackers",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "215 kcal",
      "protein": "4g",
      "carbs": "46g",
      "fats": "3g"
    },
    {
      "mealName": "Protein bar with Strawberries",
      "ingredients": [
        "100g Protein bar",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "392 kcal",
      "protein": "31g",
      "carbs": "43g",
      "fats": "12g"
    },
    {
      "mealName": "Cottage cheese with Almonds",
      "ingredients": [
        "220g Cottage cheese",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "285 kcal",
      "protein": "30g",
      "carbs": "10g",
      "fats": "14g"
    },
    {
      "mealName": "Natural skyr with Cocoa powder",
      "ingredients": [
        "220g Natural skyr",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "171 kcal",
      "protein": "27g",
      "carbs": "11g",
      "fats": "3g"
    },
    {
      "mealName": "Protein mousse with Banana",
      "ingredients": [
        "100g Protein mousse",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "179 kcal",
      "protein": "11g",
      "carbs": "32g",
      "fats": "2g"
    },
    {
      "mealName": "Plain popcorn with Strawberries",
      "ingredients": [
        "100g Plain popcorn",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "412 kcal",
      "protein": "13g",
      "carbs": "86g",
      "fats": "4g"
    },
    {
      "mealName": "Low-fat quark with Almonds",
      "ingredients": [
        "220g Low-fat quark",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "208 kcal",
      "protein": "25g",
      "carbs": "12g",
      "fats": "8g"
    },
    {
      "mealName": "Greek yogurt 0% with Cocoa powder",
      "ingredients": [
        "220g Greek yogurt 0%",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "166 kcal",
      "protein": "25g",
      "carbs": "11g",
      "fats": "2g"
    },
    {
      "mealName": "Protein pudding with Banana",
      "ingredients": [
        "100g Protein pudding",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "169 kcal",
      "protein": "11g",
      "carbs": "31g",
      "fats": "1g"
    },
    {
      "mealName": "Whey protein with Strawberries",
      "ingredients": [
        "100g Whey protein",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "422 kcal",
      "protein": "79g",
      "carbs": "16g",
      "fats": "6g"
    },
    {
      "mealName": "Rice cakes with Almonds",
      "ingredients": [
        "35g Rice cakes",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "222 kcal",
      "protein": "6g",
      "carbs": "32g",
      "fats": "9g"
    },
    {
      "mealName": "Wholegrain crackers with Cocoa powder",
      "ingredients": [
        "35g Wholegrain crackers",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "160 kcal",
      "protein": "6g",
      "carbs": "25g",
      "fats": "5g"
    },
    {
      "mealName": "Protein bar with Banana",
      "ingredients": [
        "100g Protein bar",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "449 kcal",
      "protein": "31g",
      "carbs": "58g",
      "fats": "12g"
    },
    {
      "mealName": "Cottage cheese with Strawberries",
      "ingredients": [
        "220g Cottage cheese",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "230 kcal",
      "protein": "27g",
      "carbs": "15g",
      "fats": "7g"
    },
    {
      "mealName": "Natural skyr with Almonds",
      "ingredients": [
        "220g Natural skyr",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "223 kcal",
      "protein": "27g",
      "carbs": "12g",
      "fats": "8g"
    },
    {
      "mealName": "Protein mousse with Cocoa powder",
      "ingredients": [
        "100g Protein mousse",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "124 kcal",
      "protein": "13g",
      "carbs": "11g",
      "fats": "4g"
    },
    {
      "mealName": "Plain popcorn with Banana",
      "ingredients": [
        "100g Plain popcorn",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "469 kcal",
      "protein": "13g",
      "carbs": "101g",
      "fats": "4g"
    },
    {
      "mealName": "Low-fat quark with Strawberries",
      "ingredients": [
        "220g Low-fat quark",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "153 kcal",
      "protein": "23g",
      "carbs": "17g",
      "fats": "1g"
    },
    {
      "mealName": "Greek yogurt 0% with Almonds",
      "ingredients": [
        "220g Greek yogurt 0%",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "219 kcal",
      "protein": "25g",
      "carbs": "12g",
      "fats": "8g"
    },
    {
      "mealName": "Protein pudding with Cocoa powder",
      "ingredients": [
        "100g Protein pudding",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "114 kcal",
      "protein": "13g",
      "carbs": "10g",
      "fats": "3g"
    },
    {
      "mealName": "Whey protein with Banana",
      "ingredients": [
        "100g Whey protein",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "479 kcal",
      "protein": "79g",
      "carbs": "31g",
      "fats": "6g"
    },
    {
      "mealName": "Rice cakes with Strawberries",
      "ingredients": [
        "35g Rice cakes",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "167 kcal",
      "protein": "4g",
      "carbs": "36g",
      "fats": "1g"
    },
    {
      "mealName": "Wholegrain crackers with Almonds",
      "ingredients": [
        "35g Wholegrain crackers",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "213 kcal",
      "protein": "7g",
      "carbs": "26g",
      "fats": "10g"
    },
    {
      "mealName": "Protein bar with Cocoa powder",
      "ingredients": [
        "100g Protein bar",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "394 kcal",
      "protein": "33g",
      "carbs": "37g",
      "fats": "14g"
    },
    {
      "mealName": "Cottage cheese with Banana",
      "ingredients": [
        "220g Cottage cheese",
        "100g Banana"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "287 kcal",
      "protein": "27g",
      "carbs": "30g",
      "fats": "7g"
    },
    {
      "mealName": "Natural skyr with Strawberries",
      "ingredients": [
        "220g Natural skyr",
        "100g Strawberries"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "168 kcal",
      "protein": "25g",
      "carbs": "17g",
      "fats": "1g"
    },
    {
      "mealName": "Protein mousse with Almonds",
      "ingredients": [
        "100g Protein mousse",
        "15g Almonds"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "177 kcal",
      "protein": "13g",
      "carbs": "12g",
      "fats": "10g"
    },
    {
      "mealName": "Plain popcorn with Cocoa powder",
      "ingredients": [
        "100g Plain popcorn",
        "15g Cocoa powder"
      ],
      "steps": [
        "Combine the ingredients.",
        "Serve directly."
      ],
      "calories": "414 kcal",
      "protein": "15g",
      "carbs": "80g",
      "fats": "6g"
    }
  ]
};

const goalProfiles = {
  "fat-loss": {
    goalLabel: "Lose Fat",
    targetCalories: "1700–1900 kcal",
    proteinTarget: "130–160g",
    styleNote: "Higher protein, controlled calories, easy repeatability",
  },
  "muscle-gain": {
    goalLabel: "Build Muscle",
    targetCalories: "2300–2700 kcal",
    proteinTarget: "160–200g",
    styleNote: "Higher calories, stronger recovery support, more carbs",
  },
  "tone-shape": {
    goalLabel: "Tone & Shape Body",
    targetCalories: "1900–2200 kcal",
    proteinTarget: "140–170g",
    styleNote: "Balanced calories, shape-friendly meals, clean structure",
  },
  maintenance: {
    goalLabel: "Maintain Athletic Lifestyle",
    targetCalories: "2100–2400 kcal",
    proteinTarget: "140–180g",
    styleNote: "Balanced fuel, easy long-term routine",
  },
  "beginner-reset": {
    goalLabel: "Beginner Body Reset",
    targetCalories: "1800–2100 kcal",
    proteinTarget: "120–150g",
    styleNote: "Simple meals, easy prep, low friction",
  },
};

function rotateItem(arr, index) {
  if (!arr?.length) return null;
  return arr[Math.abs(index) % arr.length];
}

function numberFromMacro(value) {
  const match = String(value || "").match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function sumMeals(meals) {
  return meals.reduce(
    (total, meal) => {
      total.calories += numberFromMacro(meal?.calories);
      total.protein += numberFromMacro(meal?.protein);
      total.carbs += numberFromMacro(meal?.carbs);
      total.fats += numberFromMacro(meal?.fats);
      return total;
    },
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );
}

function cleanText(value) {
  return String(value || "").toLowerCase();
}

function mealText(meal) {
  return cleanText([meal?.mealName, ...(meal?.ingredients || [])].join(" "));
}

export function mealMatchesPreferences(meal, preferences = {}) {
  const text = mealText(meal);

  const veganBlocked = [
    "chicken", "turkey", "beef", "steak", "salmon", "cod", "shrimp",
    "tuna", "mackerel", "egg", "eggs", "yogurt", "skyr", "quark",
    "cottage cheese", "milk", "whey", "cheese", "feta", "parmesan",
    "kefir", "protein pudding", "protein mousse", "honey",
  ];

  const vegetarianBlocked = [
    "chicken", "turkey", "beef", "steak", "salmon", "cod", "shrimp",
    "tuna", "mackerel",
  ];

  const glutenBlocked = [
    "wrap", "whole wheat", "bread", "pita", "pasta", "couscous",
    "bulgur", "barley", "rye", "sourdough", "gnocchi", "noodles",
    "muesli", "granola", "crackers", "seitan",
  ];

  const lactoseBlocked = [
    "yogurt", "skyr", "quark", "cottage cheese", "milk", "whey",
    "cheese", "feta", "parmesan", "kefir", "protein pudding",
    "protein mousse", "cream cheese", "yogurt dressing",
  ];

  const nutBlocked = ["almond", "almonds", "peanut", "peanut butter", "nuts"];

  const shellfishBlocked = ["shrimp", "shellfish"];

  function hasBlocked(words) {
    return words.some((word) => text.includes(word));
  }

  if (preferences.vegan && hasBlocked(veganBlocked)) return false;
  if (preferences.vegetarian && hasBlocked(vegetarianBlocked)) return false;
  if (preferences.gluten_free && hasBlocked(glutenBlocked)) return false;
  if (preferences.lactose_free && hasBlocked(lactoseBlocked)) return false;
  if (preferences.nut_free && hasBlocked(nutBlocked)) return false;
  if (preferences.shellfish_free && hasBlocked(shellfishBlocked)) return false;

  return true;
}

function rotateFilteredItem(arr, index, preferences = {}) {
  const safeList = (arr || []).filter((meal) =>
    mealMatchesPreferences(meal, preferences)
  );

  if (safeList.length) return rotateItem(safeList, index);

  return rotateItem(arr, index);
}

function dailyMacroSummary(goal, dayIndex, meals) {
  const totals = sumMeals(meals);

  const adjustment = {
    "fat-loss": 0.85,
    "muscle-gain": 1.15,
    "tone-shape": 0.98,
    maintenance: 1,
    "beginner-reset": 0.9,
  }[goal] || 1;

  return {
    totalCalories: `${Math.round(totals.calories * adjustment)} kcal`,
    totalProtein: `${Math.round(totals.protein * adjustment)}g`,
    totalCarbs: `${Math.round(totals.carbs * adjustment)}g`,
    totalFats: `${Math.round(totals.fats * adjustment)}g`,
  };
}

function adjustMealForGoal(meal, goal) {
  if (!meal) return null;
  return { ...meal };
}

function buildDayMeals(goal, dayIndex, planIndex, preferences = {}) {
  const breakfast = adjustMealForGoal(
    rotateFilteredItem(mealTemplates.breakfast, dayIndex + planIndex, preferences),
    goal
  );

  const lunch = adjustMealForGoal(
    rotateFilteredItem(mealTemplates.lunch, dayIndex + planIndex * 3 + 11, preferences),
    goal
  );

  const snack = adjustMealForGoal(
    rotateFilteredItem(mealTemplates.snack, dayIndex + planIndex * 5 + 23, preferences),
    goal
  );

  const dinner = adjustMealForGoal(
    rotateFilteredItem(mealTemplates.dinner, dayIndex + planIndex * 7 + 37, preferences),
    goal
  );

  const meals = [
    breakfast ? { ...breakfast, time: "08:00" } : null,
    lunch ? { ...lunch, time: "13:00" } : null,
    snack ? { ...snack, time: "16:30" } : null,
    dinner ? { ...dinner, time: "19:30" } : null,
  ].filter(Boolean);

  if (goal === "muscle-gain") {
    const lateSnack = adjustMealForGoal(
      rotateFilteredItem(mealTemplates.snack, dayIndex + planIndex * 9 + 51, preferences),
      goal
    );

    if (lateSnack) meals.push({ ...lateSnack, time: "21:30" });
  }

  return meals;
}

function buildSinglePlan(goal, planIndex, preferences = {}) {
  const profile = goalProfiles[goal] || goalProfiles["fat-loss"];

  return {
    id: `${goal}-${planIndex + 1}`,
    title: `${profile.goalLabel} Routine ${planIndex + 1}`,
    goalLabel: profile.goalLabel,
    targetCalories: profile.targetCalories,
    proteinTarget: profile.proteinTarget,
    styleNote: profile.styleNote,
    description:
      planIndex % 2 === 0
        ? "A structured weekly menu built for consistency, easy prep, and solid nutrition."
        : "A slightly different weekly food rhythm for variety while staying aligned with your goal.",
    days: WEEK_DAYS.map((day, dayIndex) => {
      const meals = buildDayMeals(goal, dayIndex, planIndex, preferences);

      return {
        day,
        ...dailyMacroSummary(goal, dayIndex, meals),
        meals,
      };
    }),
  };
}

export function buildMealPlansForGoal(goal, preferences = {}) {
  return Array.from({ length: 30 }, (_, i) =>
    buildSinglePlan(goal, i, preferences)
  );
}

export function getMealPlanAccessLimit(membership) {
  const m = String(membership || "").toLowerCase().trim();

  if (
    m === "nutrition" ||
    m === "full_access" ||
    m === "vip" ||
    m === "coaching"
  ) {
    return 999;
  }

  return 1;
}


export const nutritionPlans = {
  "fat-loss": buildMealPlansForGoal("fat-loss"),
  "muscle-gain": buildMealPlansForGoal("muscle-gain"),
  "tone-shape": buildMealPlansForGoal("tone-shape"),
  maintenance: buildMealPlansForGoal("maintenance"),
  "beginner-reset": buildMealPlansForGoal("beginner-reset"),
};

export default nutritionPlans;
