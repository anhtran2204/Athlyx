<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui";
import { z } from "zod";
import { authClient } from "~~/server/lib/auth-client";

const loading = ref(false);
const expiringToken = ref(false);

onBeforeMount(() => {
  const token = new URLSearchParams(window.location.search).get("token") || new URLSearchParams(window.location.search).get("error");
  if (token === "INVALID_TOKEN" || !token) {
    expiringToken.value = true;
  }
});

const fields: AuthFormField[] = [{
  name: "password",
  type: "password",
  label: "New Password",
  color: "neutral",
  placeholder: "••••••••",
  required: true,
}, {
  name: "confirm_password",
  type: "password",
  label: "Confirm New Password",
  color: "neutral",
  required: true,
}];

const schema = z
  .object({
    password: z.string("Password is required").min(8, "Must be at least 8 characters"),
    confirm_password: z.string(),
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type ResetPasswordSchema = z.output<typeof schema>;

async function onSubmit(values: FormSubmitEvent<ResetPasswordSchema>) {
  loading.value = true;
  const { csrf } = useCsrf();
  const headers = new Headers();
  headers.append("csrf-token", csrf);
  await authClient.resetPassword({
    newPassword: values.data.password,
    fetchOptions: {
      headers,
    },
  });
  navigateTo("/login");
}
</script>

<template>
  <div class="min-w-full flex flex-col items-center justify-center gap-4">
    <NuxtPageCard
      v-if="!expiringToken"
      class="w-full max-w-md"
      :ui="{
        root: 'bg-transparent ring-0',
      }"
    >
      <NuxtAuthForm
        :schema="schema"
        :fields="fields"
        title="Change your password"
        icon="i-lucide-lock"
        :submit="{
          label: 'Reset password',
          color: 'info',
        }"
        @submit.prevent="onSubmit"
      >
        <template #description>
          Enter a new password below to change your password
        </template>
        <template
          #validation
        >
          <LazyNuxtAlert
            color="warning"
            icon="lucide:triangle-alert"
            title="You need to change your password."
            variant="subtle"
            class="bg-warning/25 mt-8"
          />
        </template>
      </NuxtAuthForm>
    </NuxtPageCard>
    <ExpiredLinkCard v-else />
  </div>
</template>
