/* eslint-disable unused-imports/no-unused-vars */
import { dash } from "@better-auth/infra";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createAuthMiddleware } from "better-auth/api";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "~~/server/utils/prisma";

import env from "./env";

const prismaClient = prisma;
export const auth = betterAuth({
  appName: "Athlyx",
  database: prismaAdapter(prismaClient, {
    provider: "postgresql",
  }),
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwe",
      maxAge: 60 * 5,
    },
  },
  advanced: {
    database: {
      generateId: false,
    },
    ipAddress: {
      ipAddressHeaders: ["x-vercel-forwarded-for", "x-forwarded-for"],
    },
  },
  experimental: {
    joins: true,
  },
  baseURL: env.BETTER_AUTH_URL,
  trustedOrigins: [
    "https://www.athlyxfit.com",
    "https://athlyxfit.com",
    "https://athlyx-pro.vercel.app",
  ],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    sendResetPassword: async ({ user, url }) => {
      // Send reset password email
      // console.log(`Click the link to reset your password: ${url}`);
    },
    resetPasswordTokenExpiresIn: 3600,
    onPasswordReset: async ({ user }) => {
      // your logic here
      // console.log(`Password for user ${user.email} has been reset.`);
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      // console.log(`Click the link to verify your email: ${url}`);
    },
    sendOnSignUp: true,
    expiresIn: 3600,
  },
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID as string,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      if (ctx.path === "/get-session") {
        if (!ctx.context.session) {
          return ctx.json({
            session: null,
            user: null,
          });
        }
        return ctx.json(ctx.context.session);
      }
    }),
  },
  plugins: [
    dash({
      apiKey: env.BETTER_AUTH_API_KEY,
    }),
  ],
});
