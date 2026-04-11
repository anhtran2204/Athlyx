<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui";
import z from "zod";
import { authClient } from "~~/server/lib/auth-client";

const authStore = useAuthStore();
const toast = useToast();

const fields: AuthFormField[] = [{
  name: "email",
  type: "email",
  label: "Email",
  color: "neutral",
  placeholder: "you@example.com",
  required: true,
}, {
  name: "password",
  type: "password",
  label: "Password",
  color: "neutral",
  placeholder: "••••••••",
  required: true,
}, {
  name: "remember",
  type: "checkbox",
  label: "Remember me",
  color: "info",
}];

const providers = [{
  label: "Google",
  icon: "i-simple-icons-google",
  onClick: () => {
    authStore.googleSignIn();
    toast.add({ title: "Google", description: "Login with Google", color: "info" });
  },
}, {
  label: "GitHub",
  icon: "i-simple-icons-github",
  onClick: () => {
    authStore.githubSignIn();
    toast.add({ title: "GitHub", description: "Login with GitHub", color: "info" });
  },
}];

const schema = z.object({
  email: z.email("Invalid email"),
  password: z.string("Password is required").min(8, "Must be at least 8 characters"),
  remember: z.boolean().optional(),
});

type LoginSchema = z.output<typeof schema>;

const error = ref<string | undefined>("");
const loading = ref(false);

async function onSubmit(values: FormSubmitEvent<LoginSchema>) {
  loading.value = true;
  error.value = "";
  const { csrf } = useCsrf();
  const headers = new Headers();
  headers.append("csrf-token", csrf);
  const result = await authClient.signIn.email({
    email: values.data.email,
    password: values.data.password,
    rememberMe: values.data.remember || true,
    callbackURL: "/dashboard",
    fetchOptions: {
      headers,
    },
  });
  if (result.error) {
    error.value = result.error.statusText ?? "Something went wrong";
  }
  else {
    toast.add({ title: "Success", description: "User logged in.", color: "info" });
    // console.log("Submitted ", values);
  }
  loading.value = false;
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
        :providers="providers"
        title="Welcome back!"
        icon="i-lucide-lock"
        :submit="{
          label: 'Login',
          color: 'info',
          class: 'hover:cursor-pointer',
          loading,
        }"
        @submit.prevent="onSubmit"
      >
        <template #description>
          Don't have an account?
          <NuxtLink
            to="/sign-up"
            class="text-info font-medium hover:cursor-pointer"
          >
            Sign up
          </NuxtLink>.
        </template>
        <template #password-hint>
          <NuxtLink
            to="/forget-password"
            class="text-info font-medium hover:cursor-pointer"
            tabindex="-1"
          >
            Forgot password?
          </NuxtLink>
        </template>
        <template
          #validation
        >
          <LazyNuxtAlert
            v-if="error"
            color="error"
            icon="i-lucide-info"
            :title="error"
          />
        </template>
      </NuxtAuthForm>
    </NuxtPageCard>
  </div>
</template>
