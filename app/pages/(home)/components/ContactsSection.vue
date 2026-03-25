<script setup lang="ts">
import type { FormSubmitEvent, PageFeatureProps } from "@nuxt/ui";
import * as z from "zod";

const error = ref(null);

const schema = z.object({
  firstName: z
    .string("First name is required")
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" })
    .regex(/^[a-z\s'-]+$/i, { message: "First name contains invalid characters" }) // Allows letters, spaces, hyphens, apostrophes
    .trim(),
  lastName: z
    .string("Last name is required")
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be less than 50 characters" })
    .regex(/^[a-z\s'-]+$/i, { message: "Last name contains invalid characters" })
    .trim(),
  email: z.email("Email is required").min(1, { message: "Invalid email" }),
  subject: z.string("Subject is required").min(1, "Subject is too short").max(50, { message: "Subject must be less than 50 characters" }),
  message: z.string().optional(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: "Success", description: "The form has been submitted.", color: "success" });
  console.log(event.data);
}

const features = ref<PageFeatureProps[]>([
  {
    title: "Email Us",
    description: "anhphantran2002@gmail.com",
    icon: "lucide:mail",
  },
  {
    title: "Call Us",
    description: "+1 (214) 892-1912",
    icon: "lucide:phone",
  },
  {
    title: "Visit Us",
    description: "1821 Arbor Creek Dr, Garland, TX 75040",
    icon: "lucide:map-pin",
  },
]);
</script>

<template>
  <NuxtPageSection
    title="Get in Touch"
    headline="Contact us"
    description="Have questions? We'd love to hear from you."
    :ui="{
      container: 'gap-0 sm:gap-0 pb-4 sm:pb-8 lg:pb-16',
    }"
  >
    <NuxtPageSection
      title="Let's Connect"
      description="Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions."
      orientation="horizontal"
      :features="features"
      :ui="{
        title: 'self-start sm:text-2xl lg:text-3xl',
      }"
    >
      <NuxtForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit.prevent="onSubmit"
      >
        <NuxtFieldGroup class="flex space-x-6">
          <NuxtFormField
            label="First Name"
            name="firstName"
            class="w-full"
          >
            <NuxtInput
              v-model="state.firstName"
              placeholder="John"
              color="neutral"
              class="w-full"
              :class="{
                'focus-visible:ring-success': !error,
                'focus-visible:ring-error': error,
              }"
            />
          </NuxtFormField>
          <NuxtFormField
            label="Last Name"
            name="lastName"
            class="w-full"
          >
            <NuxtInput
              v-model="state.lastName"
              placeholder="Doe"
              color="neutral"
              class="w-full"
              :class="{
                'focus-visible:ring-success': !error,
                'focus-visible:ring-error': error,
              }"
            />
          </NuxtFormField>
        </NuxtFieldGroup>
        <NuxtFormField label="Email" name="email">
          <NuxtInput
            v-model="state.email"
            placeholder="john@example.com"
            color="neutral"
            class="w-full"
            :class="{
              'focus-visible:ring-success': !error,
              'focus-visible:ring-error': error,
            }"
          />
        </NuxtFormField>
        <NuxtFormField label="Subject" name="subject">
          <NuxtInput
            v-model="state.subject"
            placeholder="How can we help?"
            color="neutral"
            class="w-full"
            :class="{
              'focus-visible:ring-success': !error,
              'focus-visible:ring-error': error,
            }"
          />
        </NuxtFormField>
        <NuxtFormField label="Message" name="message">
          <NuxtTextarea
            v-model="state.message"
            placeholder="Tell us more about your inquiry..."
            color="neutral"
            class="w-full"
            :class="{
              'focus-visible:ring-success': !error,
              'focus-visible:ring-error': error,
            }"
            autoresize
          />
        </NuxtFormField>
        <NuxtButton
          type="submit"
          trailing-icon="lucide:arrow-right"
          color="info"
          class="w-full hover:cursor-pointer flex justify-center items-center text-center p-4 rounded-md"
        >
          Send Message
        </NuxtButton>
      </NuxtForm>
    </NuxtPageSection>
  </NuxtPageSection>
</template>
