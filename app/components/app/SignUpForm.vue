<script setup lang="ts">
import type { AuthFormField } from "@nuxt/ui";
import type { ZodObject } from "zod";

const props = defineProps<{
  schema: ZodObject;
  fields: AuthFormField[];
  providers: object[];
}>();

const emit = defineEmits<{ switchForm: [string] }>();
const error = ref("");
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
        :schema="props.schema"
        :fields="props.fields"
        :providers="props.providers"
        title="Create your account"
        icon="i-lucide-lock"
        :submit="{
          color: 'info',
        }"
      >
        <template #description>
          Already have an account?
          <NuxtLink
            class="text-info font-medium hover:cursor-pointer"
            @click.prevent="emit('switchForm', 'login')"
          >
            Log in
          </NuxtLink>.
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
        <template #footer>
          By signing up, you agree to our <NuxtLink to="#" class="text-info font-medium">
            Terms of Service
          </NuxtLink>.
        </template>
      </NuxtAuthForm>
    </NuxtPageCard>
  </div>
</template>
