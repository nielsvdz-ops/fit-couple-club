import { NextResponse } from "next/server";
import { getVipCounter } from "../../../lib/vipCounter";

export async function GET() {
  try {
    const counter = await getVipCounter();
    return NextResponse.json(counter);
  } catch (error) {
    return NextResponse.json(
      {
        vip: {
          sold: 14,
          remaining: 76,
          max: 90,
          isSoldOut: false,
          label: "14/90 VIP spots taken",
        },
        coaching: {
          sold: 2,
          remaining: 10,
          max: 12,
          isSoldOut: false,
          label: "2/12 coaching spots taken",
        },
      },
      { status: 200 }
    );
  }
}
