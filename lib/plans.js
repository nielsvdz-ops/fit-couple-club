export const MEMBERSHIP_PLANS = [
  {
    id: "nutrition",
    name: "Nutrition Only",
    price: "€19.99/mo",
    features: [
      "Full nutrition system",
      "Recipe library",
      "Meal planning tools",
      "Calorie & macro tracking"
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_NUTRITION,
  },
  {
    id: "full_access",
    name: "Full Access",
    price: "€29.99/mo",
    features: [
      "All workouts & programs",
      "Nutrition + recipes",
      "Plan builder",
      "Progress tracking",
      "Couple Zone access"
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_FULL_ACCESS,
  },
  {
    id: "vip",
    name: "VIP",
    price: "€99/mo",
    features: [
      "Everything in Full Access",
      "Monthly 1-on-1 video call",
      "Priority support"
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_VIP,
  },
  {
    id: "coaching",
    name: "Coaching",
    price: "€349/mo",
    features: [
      "Everything in VIP",
      "Weekly 1-on-1 calls",
      "Fully custom plan",
      "Direct support access",
      "Coaching by Niels & Rosanna"
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COACHING,
  }
];
