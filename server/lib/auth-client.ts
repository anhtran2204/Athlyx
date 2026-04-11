import { dashClient, sentinelClient } from "@better-auth/infra/client";
import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient({
  plugins: [
    dashClient(),
    sentinelClient({
      autoSolveChallenge: true, // Automatically solve PoW challenges
    }),
  ],
});
