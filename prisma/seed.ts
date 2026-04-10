// /* eslint-disable node/prefer-global/buffer */
// import { randomBytes, randomUUID, scrypt } from "node:crypto";
// import { promisify } from "node:util";

// import { prisma } from "../server/utils/prisma";

// const prismaClient = prisma;
// const scryptAsync = promisify(scrypt);

// // Matches Better Auth's internal password hashing
// async function hashPassword(password: string): Promise<string> {
//   const salt = randomBytes(16).toString("hex");
//   const buf = (await scryptAsync(password, salt, 64)) as Buffer;
//   return `${buf.toString("hex")}.${salt}`;
// }

// async function main() {
//   console.log("🌱 Seeding Better Auth tables...");

//   // ── Clean up existing seed data ──────────────────────────────────────────
//   await prismaClient.verification.deleteMany({
//     where: { identifier: { in: ["alice@athlyx.com", "bob@athlyx.com"] } },
//   });
//   await prismaClient.session.deleteMany({
//     where: { user: { email: { in: ["alice@athlyx.com", "bob@athlyx.com"] } } },
//   });
//   await prismaClient.account.deleteMany({
//     where: { user: { email: { in: ["alice@athlyx.com", "bob@athlyx.com"] } } },
//   });
//   await prismaClient.user.deleteMany({
//     where: { email: { in: ["alice@athlyx.com", "bob@athlyx.com"] } },
//   });

//   // ── Users ────────────────────────────────────────────────────────────────
//   const now = new Date();

//   const alice = await prismaClient.user.create({
//     data: {
//       id: randomUUID(),
//       name: "Alice Johnson",
//       email: "alice@athlyx.com",
//       emailVerified: true,
//       image: null,
//       createdAt: now,
//       updatedAt: now,
//     },
//   });

//   const bob = await prismaClient.user.create({
//     data: {
//       id: randomUUID(),
//       name: "Bob Smith",
//       email: "bob@athlyx.com",
//       emailVerified: false, // unverified — useful to test that flow
//       image: null,
//       createdAt: now,
//       updatedAt: now,
//     },
//   });

//   console.log("✅ Users created:", alice.email, bob.email);

//   // ── Accounts (credential provider) ──────────────────────────────────────
//   // Both users sign in with email + password ("credential" provider)
//   const aliceHash = await hashPassword("Password123!");
//   const bobHash = await hashPassword("Password123!");

//   await prismaClient.account.createMany({
//     data: [
//       {
//         id: randomUUID(),
//         userId: alice.id,
//         accountId: alice.id, // for credentials, accountId = userId
//         providerId: "credential",
//         accessToken: null,
//         refreshToken: null,
//         // Better Auth stores the hashed password in the accessToken field
//         // for credential accounts — adjust if your version differs
//         accessTokenExpiresAt: null,
//         refreshTokenExpiresAt: null,
//         scope: null,
//         idToken: null,
//         password: aliceHash,
//         createdAt: now,
//         updatedAt: now,
//       },
//       {
//         id: randomUUID(),
//         userId: bob.id,
//         accountId: bob.id,
//         providerId: "credential",
//         accessToken: null,
//         refreshToken: null,
//         accessTokenExpiresAt: null,
//         refreshTokenExpiresAt: null,
//         scope: null,
//         idToken: null,
//         password: bobHash,
//         createdAt: now,
//         updatedAt: now,
//       },
//     ],
//   });

//   console.log("✅ Credential accounts created");

//   // ── Sessions ─────────────────────────────────────────────────────────────
//   // One active session for Alice so you can test authenticated routes
//   // without having to sign in manually every time
//   const sessionExpiry = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days

//   const aliceSession = await prismaClient.session.create({
//     data: {
//       id: randomUUID(),
//       userId: alice.id,
//       token: randomUUID(), // copy this to test authenticated API calls
//       expiresAt: sessionExpiry,
//       ipAddress: "127.0.0.1",
//       userAgent: "seed-script",
//       createdAt: now,
//       updatedAt: now,
//     },
//   });

//   console.log("✅ Session created for Alice");
//   console.log("   Session token:", aliceSession.token);
//   console.log("   (Use this token in dev to test authenticated requests)");

//   // ── Verification ─────────────────────────────────────────────────────────
//   // A pending email verification for Bob (emailVerified: false above)
//   const verifyExpiry = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24h

//   await prismaClient.verification.create({
//     data: {
//       id: randomUUID(),
//       identifier: bob.email,
//       value: randomUUID(), // this would normally be emailed to Bob
//       expiresAt: verifyExpiry,
//       createdAt: now,
//       updatedAt: now,
//     },
//   });

//   console.log("✅ Pending email verification created for Bob");
//   console.log("");
//   console.log("── Seed summary ─────────────────────────────────────────");
//   console.log("  alice@athlyx.com  │ Password123! │ verified   │ has session");
//   console.log("  bob@athlyx.com    │ Password123! │ unverified │ no session");
//   console.log("─────────────────────────────────────────────────────────");
// }

// main()
//   .catch((e) => {
//     console.error("❌ Seed failed:", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prismaClient.$disconnect();
//   });
