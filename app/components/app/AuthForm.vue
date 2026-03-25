<script setup lang="ts">
import type { AuthFormField } from "@nuxt/ui";
import { z } from "zod";

const props = defineProps<{
  authType: string;
}>();

const toast = useToast();
const loginOrRegister = ref(props.authType);

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

function switchForm(close: string) {
  loginOrRegister.value = close;
}

// type Schema = z.output<typeof schema>;

// function onSubmit(payload: FormSubmitEvent<Schema>) {
//   console.log("Submitted", payload);
// }

// function getTitle(authType: string): string {
//   if (authType === "login") {
//     return "Welcome back!";
//   }
//   else if (authType === "sign_up") {
//     return "Create your account";
//   }
//   else if (authType === "password_reset") {
//     return "Forgot your password?";
//   }
//   return "";
// }
</script>

<template>
  <NuxtModal
    :close="{
      color: 'neutral',
      variant: 'outline',
      class: 'rounded-full',
    }"
  >
    <template
      v-if="loginOrRegister === 'password_reset'"
      #header="{ close }"
    >
      <div class="w-full flex justify-between">
        <NuxtButton
          variant="ghost"
          color="info"
          @click="loginOrRegister = 'login'"
        >
          <Icon name="lucide:arrow-left" />
        </NuxtButton>
        <NuxtButton
          variant="outline"
          color="neutral"
          class="btn btn-circle rounded-full flex justify-center items-center"
          icon="lucide:x"
          @click="close"
        />
      </div>
    </template>
    <template #body>
      <LazyLoginForm
        v-if="loginOrRegister === 'login'"
        :schema="schema"
        :fields="fields"
        :providers="providers"
        @switch-form="switchForm"
      />
      <LazySignUpForm
        v-else-if="loginOrRegister === 'sign_up'"
        :schema="schema"
        :fields="fields"
        :providers="providers"
        @switch-form="switchForm"
      />
      <LazyPasswordResetForm
        v-else-if="loginOrRegister === 'password_reset'"
        :schema="schema"
        :fields="fields"
        @switch-form="switchForm"
      />
    </template>
  </NuxtModal>
</template>
