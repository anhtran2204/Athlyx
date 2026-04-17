<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui";
import z from "zod";
import { authClient } from "~~/server/lib/auth-client";

const toast = useToast();

const fields: AuthFormField[] = [{
  name: "name",
  type: "text",
  label: "Name",
  color: "neutral",
  placeholder: "John Smith",
  required: true,
}, {
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
}];

const providers = [{
  label: "Google",
  icon: "i-simple-icons-google",
}, {
  label: "GitHub",
  icon: "i-simple-icons-github",
}];

const schema = z.object({
  name: z.string("Name is required"),
  email: z.email("Invalid email"),
  password: z.string("Password is required").min(8, "Must be at least 8 characters"),
});

type SignUpSchema = z.output<typeof schema>;

const error = ref<string | undefined>("");
const loading = ref(false);
const pendingEmail = useState<string>("pending-verification-email");

async function onSubmit(values: FormSubmitEvent<SignUpSchema>) {
  loading.value = true;
  error.value = "";
  await authClient.signUp.email({
    name: values.data.name,
    email: values.data.email,
    password: values.data.password,
    fetchOptions: {
      onSuccess() {
        pendingEmail.value = values.data.email;
        toast.add({
          title: "Success!",
          description: "If an account exists with this email, you will receive a verification link shortly. Please check your inbox.",
          icon: "lucide:circle-check-big",
          color: "success",
        });
        navigateTo("/verify-email");
      },
      onError() {
        toast.add({
          id: "signup-error",
          title: "Sign up failed",
          description: "Something went wrong on our end. Please try again in a moment.",
          icon: "lucide:circle-x",
          color: "error",
        });
      },
    },
  });
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
        title="Create your account"
        icon="i-lucide-lock"
        :submit="{
          color: 'info',
          class: 'hover:cursor-pointer',
          loading,
        }"
        @submit.prevent="onSubmit"
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
            :title="error"
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
