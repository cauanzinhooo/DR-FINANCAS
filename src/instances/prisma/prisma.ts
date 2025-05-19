import * as dotenv from "dotenv";

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else {
  dotenv.config();
}

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
