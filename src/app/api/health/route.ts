import { NextResponse } from "next/server";

// Simple health check endpoint.
// Webuzo's load balancer, uptime monitors (UptimeRobot, BetterStack), or
// your reverse proxy can ping GET /api/health to verify the app is alive.
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "clipe-consult",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
