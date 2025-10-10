import { logger, loggerTransport } from "@/libs/logger";
import { after } from "next/server";

export function GET(request: Request) {
  after(() => {
    loggerTransport.flushSync();
  });

  logger.info("GET request received");
  return Response.json({ message: "ok" });
}
