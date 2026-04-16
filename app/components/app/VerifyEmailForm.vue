<script setup lang="ts">
import { useCountdown } from "@vueuse/core";
import { authClient } from "~~/server/lib/auth-client";

const countdownSeconds = shallowRef(30);
const { remaining, start } = useCountdown(countdownSeconds);
const resendEmail = useState<string>("pending-verification-email");

onMounted(() => {
  start(countdownSeconds);
});

async function resendEmailVerification() {
  if (!resendEmail.value) {
    navigateTo("/sign-up");
  }
  start(countdownSeconds);
  const { csrf } = useCsrf();
  const headers = new Headers();
  headers.append("csrf-token", csrf);
  await authClient.sendVerificationEmail({
    email: resendEmail.value,
    callbackURL: "/email-verified",
    fetchOptions: {
      headers,
    },
  });
}
</script>

<template>
  <div class="min-w-full flex flex-col items-center justify-center gap-4">
    <NuxtPageCard
      title="Almost there"
      description="We sent you a link to activate your Athlyx account"
      icon="i-lucide-lock"
      class="w-full max-w-md"
      :ui="{
        root: 'bg-transparent ring-0',
        wrapper: 'justify-center items-center text-center gap-4',
        title: 'text-xl',
        leadingIcon: 'size-15 flex justify-center items-center',
      }"
    >
      <LazyNuxtAlert
        color="warning"
        icon="lucide:triangle-alert"
        title="You need to verify your email address to activate your account."
        variant="subtle"
        class="bg-warning/25 mt-8"
      />
      <span class="text-muted text-sm -mb-2">Didn't get the email?</span>
      <NuxtButton
        color="info"
        variant="outline"
        size="lg"
        :disabled="remaining > 0"
        class="flex justify-center items-center"
        @click="resendEmailVerification()"
      >
        {{ remaining > 0 ? `Request verification link (${remaining})` : 'Request verification link' }}
      </NuxtButton>
    </NuxtPageCard>
  </div>
</template>
