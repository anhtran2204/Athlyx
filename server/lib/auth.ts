import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createAuthMiddleware } from "better-auth/api";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "~~/server/utils/prisma";

import { resend } from "./email/resend";
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
    requireEmailVerification: true,
    onExistingUserSignUp: async ({ user }) => {
      try {
        await resend.emails.send({
          from: env.RESEND_EMAIL_FROM,
          to: [user.email],
          template: {
            id: env.RESEND_EXISTING_TEMPLATE,
            variables: {
              USER_NAME: user.name,
              USER_EMAIL: user.email,
              RESET_PASSWORD: `${env.BETTER_AUTH_URL}/forget-password`,
            },
          },
        });
      }
      catch (error) {
        console.log("DEBUG: Resend Failed:", error);
      }
    },
    autoSignIn: false,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: env.RESEND_EMAIL_FROM,
        to: [user.email],
        template: {
          id: env.RESEND_RESET_TEMPLATE,
          variables: {
            USER_NAME: user.name || "user",
            RESET_PASSWORD: url || "/login",
          },
        },
      });
    },
    revokeSessionsOnPasswordReset: true,
    resetPasswordTokenExpiresIn: 86400,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: env.RESEND_EMAIL_FROM,
        to: [user.email],
        template: {
          id: env.RESEND_VERIFICATION_TEMPLATE,
          variables: {
            VERIFY_LINK: url,
            type: "string",
            fallbackValue: "user",
          },
        },
      });
    },
    sendOnSignUp: true,
    expiresIn: 86400,
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
});
