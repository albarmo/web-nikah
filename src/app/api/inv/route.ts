import { NextResponse } from "next/server";
import { generateInvitationLink } from "@/app/shared/func/invitation";

export async function GET() {
  try {
    const data = generateInvitationLink();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: true });
  }
}
