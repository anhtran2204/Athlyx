export default defineAppConfig({
  toaster: {
    position: "bottom-right" as const,
    duration: 5000,
    max: 5,
    expand: true,
  },
  ui: {
    pageHero: {
      slots: {
        root: "flex min-w-full items-center",
        container: "gap-10 sm:gap-y-14",
      },
      variants: {
        headline: {
          true: {
            headline: "text-lg font-semibold text-sky-400 light:text-sky-800 flex items-center gap-1.5",
          },
        },
      },
    },
    pageSection: {
      slots: {
        leadingIcon: "size-6 text-info",
      },
      variants: {
        headline: {
          true: {
            headline: "mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
          },
        },
      },
    },
    pageCTA: {
      slots: {
        root: "rounded-none",
      },
    },
    pageFeature: {
      slots: {
        leadingIcon: "text-inherit",
      },
    },
    pageCard: {
      slots: {
        leadingIcon: "size-8 text-info",
      },
    },
    navigationMenu: {
      defaultVariants: {
        color: "info",
      },
    },
    dashboardNavbar: {
      slots: {
        root: "dark:border-default light:border-slate-400/25",
      },
    },
    dashboardToolbar: {
      slots: {
        root: "dark:border-default light:border-slate-400/25",
      },
    },
    modal: {
      slots: {
        content: "divide-none",
        body: "pb-4 sm:pb-8 pt-0 sm:pt-0",
      },
    },
    authForm: {
      slots: {
        input: "focus-visible:ring-neutral",
      },
    },
    input: {
      variants: {
        variant: {
          outline: "bg-inherit",
        },
      },
    },
    error: {
      slots: {
        statusCode: "text-info",
      },
    },
  },
});
