<script setup lang="ts">
</script>

<template>
  <NuxtModal title="File Upload">
    <template #body>
      <NuxtFileUpload
        :interactive="false"
        multiple
        layout="list"
        icon="lucide:file-heart"
        label="Drop your files here"
        description="ZIP, XML, CSV, or JSON (max. 100MB)"
      >
        <template #actions="{ open }">
          <NuxtButton
            label="Select files"
            icon="tabler:upload"
            color="neutral"
            variant="outline"
            @click="open()"
          />
        </template>
        <template #files-bottom="{ removeFile, files }">
          <NuxtButton
            v-if="files?.length"
            label="Remove all files"
            color="neutral"
            @click="removeFile()"
          />
        </template>
      </NuxtFileUpload>
    </template>
  </NuxtModal>
</template>
