import { auth } from "../lib/auth";

export default defineEventHandler(async (event) => {
  const path = event.path;

  // Skip middleware for internal Nuxt Content queries
  if (path.startsWith("/__nuxt_content") || path.startsWith("/api/_content")) {
    return;
  }

  if (path.startsWith("/dashboard")) {
    const session = await auth.api.getSession(({
      headers: event.headers,
    }));

    if (!session?.user) {
      throw createError({
        statusCode: 401,
        statusText: "Unauthorized",
        message: "You are not authorized to access this page.",
        fatal: true,
      });
    }
  }
});
