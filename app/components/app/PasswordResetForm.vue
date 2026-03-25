<script setup lang="ts">
import type { AuthFormField } from "@nuxt/ui";
import { z } from "zod";

const error = ref("");
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
</script>

<template>
  <div class="min-w-full flex flex-col items-center justify-center gap-4">
    <NuxtPageCard
      class="w-full max-w-md"
      :ui="{
        root: 'bg-transparent ring-0',
        container: 'pt-0 sm:pt-0',
      }"
    >
      <NuxtAuthForm
        :schema="schema"
        :fields="fields"
        title="Reset your password"
        icon="i-lucide-lock"
        :submit="{
          label: 'Reset password',
          color: 'info',
        }"
        @submit.prevent="() => { navigateTo('/password_reset') }"
      >
        <template #description>
          Enter your email address and we'll send you a link to reset your password
        </template>
        <template
          #validation
        >
          <NuxtAlert
            v-if="error"
            color="error"
            icon="i-lucide-info"
            title="Error signing in"
          />
        </template>
      </NuxtAuthForm>
    </NuxtPageCard>
  </div>
</template>
