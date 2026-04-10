import { PrismaPg } from "@prisma/adapter-pg";
import { withAccelerate } from "@prisma/extension-accelerate";

import { PrismaClient } from "../../prisma/generated/client";
import env from "../lib/env";

function prismaClientSingleton() {
  const connectionString = `${env.NODE_ENV}` === "development" ? `${env.DATABASE_URL!}` : `${env.DIRECT_URL!}`;
  if (!connectionString) {
    throw new Error("DATABASE_URL is required to initialize Prisma Client.");
  }
  const pool = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter: pool }).$extends(withAccelerate());
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;
