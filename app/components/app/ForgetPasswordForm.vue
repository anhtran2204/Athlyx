<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui";
import { useCountdown } from "@vueuse/core";
import { z } from "zod";
import { authClient } from "~~/server/lib/auth-client";

const toast = useToast();
const clicked = ref(false);

const countdownSeconds = shallowRef(30);
const { remaining, start } = useCountdown(countdownSeconds);

onMounted(() => {
  clicked.value = false;
});

const fields: AuthFormField[] = [{
  name: "email",
  type: "email",
  label: "Email",
  color: "neutral",
  placeholder: "Enter your email",
  required: true,
}];

const schema = z.object({
  email: z.email("Invalid email"),
});

type ResetPassword = z.output<typeof schema>;

async function resendPasswordReset(values: FormSubmitEvent<ResetPassword>) {
  start(countdownSeconds);
  clicked.value = true;
  await authClient.requestPasswordReset({
    email: values.data.email,
    redirectTo: "/reset-password",
    fetchOptions: {
      onError(ctx) {
        if (ctx.error.code === "USER_NOT_FOUND" || ctx.error.code === "USER_EMAIL_NOT_FOUND" || ctx.error.code === "ACCOUNT_NOT_FOUND") {
          toast.add({
            id: "reset-password-not-found",
            title: "Account not found",
            description: "No account exists for this email address. Double-check or sign up.",
            icon: "lucide:circle-x",
            color: "error",
          });
        }
        else if (ctx.error.code === "INVALID_EMAIL") {
          toast.add({
            id: "reset-password-invalid",
            title: "Invalid email",
            description: "The credential entered doesn't match our records. Please try again with a different one.",
            icon: "lucide:circle-x",
            color: "error",
          });
        }
        else {
          toast.add({
            id: "reset-password-error",
            title: "Sign up failed",
            description: "Something went wrong on our end. Please try again in a moment.",
            icon: "lucide:circle-x",
            color: "error",
          });
        }
      },
    },
  });
}
</script>

<template>
  <div class="min-w-full flex flex-col items-center justify-center gap-4">
    <NuxtPageCard
      class="w-full max-w-md"
      :ui="{
        root: 'bg-transparent ring-0',
      }"
    >
      <NuxtAuthForm
        :schema="schema"
        :fields="fields"
        title="Reset your password"
        icon="i-lucide-lock"
        :submit="{
          label: (remaining > 0 && clicked) ? `Request reset link (${remaining})` : 'Request reset link',
          color: 'info',
          variant: 'outline',
          size: 'lg',
          disabled: remaining > 0 && clicked,
          class: 'flex justify-center items-center',
        }"
        @submit.prevent="resendPasswordReset"
      >
        <template #description>
          Enter your email address and we'll send you a link to reset your password
        </template>
      </NuxtAuthForm>
    </NuxtPageCard>
  </div>
</template>
