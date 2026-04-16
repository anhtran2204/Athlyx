import { z } from "zod";

import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  DATABASE_URL: z.string(),
  DIRECT_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  AUTH_GITHUB_CLIENT_ID: z.string(),
  AUTH_GITHUB_CLIENT_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
  RESEND_WELCOME_TEMPLATE: z.string(),
  RESEND_VERIFICATION_TEMPLATE: z.string(),
  RESEND_RESET_TEMPLATE: z.string(),
  RESEND_EXISTING_TEMPLATE: z.string(),
  RESEND_EMAIL_FROM: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

// eslint-disable-next-line no-process-env
export default EnvSchema.parse(process.env);
