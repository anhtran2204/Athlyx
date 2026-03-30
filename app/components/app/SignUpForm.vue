<script setup lang="ts">
import type { AuthFormField } from "@nuxt/ui";
import z from "zod";

const toast = useToast();
const error = ref("");

const fields: AuthFormField[] = [{
  name: "email",
  type: "email",
  label: "Email",
  color: "neutral",
  placeholder: "Enter your email",
  required: true,
}, {
  name: "password",
  type: "password",
  label: "Password",
  color: "neutral",
  placeholder: "Enter your password",
  required: true,
}, {
  name: "remember",
  type: "checkbox",
  label: "Remember me",
}];

const providers = [{
  label: "Google",
  icon: "i-simple-icons-google",
  onClick: () => {
    toast.add({ title: "Google", description: "Login with Google" });
  },
}, {
  label: "GitHub",
  icon: "i-simple-icons-github",
  onClick: () => {
    toast.add({ title: "GitHub", description: "Login with GitHub" });
  },
}];

const schema = z.object({
  email: z.email("Invalid email"),
  password: z.string("Password is required").min(8, "Must be at least 8 characters"),
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
        :providers="providers"
        title="Create your account"
        icon="i-lucide-lock"
        :submit="{
          color: 'info',
        }"
      >
        <template #description>
          Already have an account?
          <NuxtLink
            to="/login"
            class="text-info font-medium hover:cursor-pointer"
          >
            Log in
          </NuxtLink>.
        </template>
        <template
          #validation
        >
          <LazyNuxtAlert
            v-if="error"
            color="error"
            icon="i-lucide-info"
            title="Error signing in"
          />
        </template>
        <template #footer>
          By signing up, you agree to our <NuxtLink to="#" class="text-info font-medium">
            Terms of Service
          </NuxtLink>.
        </template>
      </NuxtAuthForm>
    </NuxtPageCard>
  </div>
</template>
