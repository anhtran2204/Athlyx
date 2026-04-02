<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: "Anh Tran",
      avatar: {
        src: "https://github.com/anhtran2204.png",
        loading: "lazy",
      },
      type: "label",
    },
  ],
  [
    {
      label: "Profile",
      icon: "i-lucide-user",
      to: "/dashboard/profile",
    },
    {
      label: "Membership",
      icon: "i-lucide-credit-card",
      to: "/dashboard/settings/membership",
    },
    {
      label: "Settings",
      icon: "i-lucide-settings",
      to: "/dashboard/settings",
      kbds: [","],
    },
    {
      label: "Keyboard shortcuts",
      icon: "i-lucide-monitor",
    },
  ],
  [
    {
      label: "Team",
      icon: "i-lucide-users",
      filter: {
        placeholder: "Search members...",
      },
      children: [
        [
          {
            label: "benjamincanac",
            avatar: {
              src: "https://github.com/benjamincanac.png",
              loading: "lazy",
            },
          },
          {
            label: "HugoRCD",
            avatar: {
              src: "https://github.com/HugoRCD.png",
              loading: "lazy",
            },
          },
          {
            label: "romhml",
            avatar: {
              src: "https://github.com/romhml.png",
              loading: "lazy",
            },
          },
          {
            label: "sandros94",
            avatar: {
              src: "https://github.com/sandros94.png",
              loading: "lazy",
            },
          },
          {
            label: "hywax",
            avatar: {
              src: "https://github.com/hywax.png",
              loading: "lazy",
            },
          },
          {
            label: "J-Michalek",
            avatar: {
              src: "https://github.com/J-Michalek.png",
              loading: "lazy",
            },
          },
          {
            label: "genu",
            avatar: {
              src: "https://github.com/genu.png",
              loading: "lazy",
            },
          },
        ],
      ],
    },
    {
      label: "Invite users",
      icon: "i-lucide-user-plus",
      children: [
        [
          {
            label: "Email",
            icon: "i-lucide-mail",
          },
          {
            label: "Message",
            icon: "i-lucide-message-square",
          },
        ],
        [
          {
            label: "More",
            icon: "i-lucide-circle-plus",
            children: [
              {
                label: "Import from Slack",
                icon: "i-simple-icons-slack",
                to: "https://slack.com",
                target: "_blank",
              },
              {
                label: "Import from Trello",
                icon: "i-simple-icons-trello",
              },
              {
                label: "Import from Asana",
                icon: "i-simple-icons-asana",
              },
            ],
          },
        ],
      ],
    },
    {
      label: "New team",
      icon: "i-lucide-plus",
      kbds: ["meta", "n"],
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-simple-icons-github",
      to: "https://github.com/nuxt/ui",
      target: "_blank",
    },
    {
      label: "Support",
      icon: "i-lucide-life-buoy",
      to: "/docs/components/dropdown-menu",
    },
    {
      label: "API",
      icon: "i-lucide-cloud",
      disabled: true,
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      color: "error",
      kbds: ["shift", "meta", "q"],
      to: "/",
    },
  ],
]);
</script>

<template>
  <NuxtDropdownMenu :items="items">
    <NuxtTooltip text="Open profile menu" arrow>
      <NuxtButton
        icon="i-lucide-menu"
        color="neutral"
        variant="ghost"
        class="hover:cursor-pointer"
      />
    </NuxtTooltip>
  </NuxtDropdownMenu>
</template>
