import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const targetUrl =
    process.env.NEXT_PUBLIC_QR_TARGET_URL || "https://softilo.io";

  const response = NextResponse.redirect(targetUrl, 307);

  response.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");

  return response;
}

