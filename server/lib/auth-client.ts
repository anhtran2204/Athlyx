import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient();

export type Session = typeof authClient.$Infer.Session.user;
