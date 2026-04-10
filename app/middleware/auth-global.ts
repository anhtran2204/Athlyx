// import { authClient } from "~~/server/lib/auth-client";

// export default defineNuxtRouteMiddleware(async (to) => {
//   const { data: session } = await authClient.useSession(useFetch);
//   if (!session.value?.user) {
//     if (to.path.startsWith("/dashboard")) {
//       throw createError({
//         statusCode: 401,
//         statusText: "Unauthorized",
//         message: "You are not authorized to access this page.",
//         fatal: true,
//       });
//     }
//   }
// });
