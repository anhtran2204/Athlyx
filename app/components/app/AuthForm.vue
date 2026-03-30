<script setup lang="ts">
const props = defineProps<{
  authType: string;
}>();

const loginOrRegister = ref(props.authType);

function switchForm(close: string) {
  loginOrRegister.value = close;
}

// type Schema = z.output<typeof schema>;

// function onSubmit(payload: FormSubmitEvent<Schema>) {
//   console.log("Submitted", payload);
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
        @switch-form="switchForm"
      />
      <LazySignUpForm
        v-else-if="loginOrRegister === 'sign_up'"
        @switch-form="switchForm"
      />
      <LazyPasswordResetForm
        v-else-if="loginOrRegister === 'password_reset'"
        @switch-form="switchForm"
      />
    </template>
  </NuxtModal>
</template>
