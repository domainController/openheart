// app/api/save-profile/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log("📩 Reçu dans l'API : ", data);

  // Ici tu pourras brancher Supabase ou une base réelle plus tard
  return NextResponse.json({ message: "Profile saved!", data });
}
