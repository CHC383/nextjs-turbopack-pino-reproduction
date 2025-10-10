import { logger } from "@/libs/logger";

export function GET(request: Request) {
  logger.info("GET request received");
  return Response.json({ message: "ok" });
}
