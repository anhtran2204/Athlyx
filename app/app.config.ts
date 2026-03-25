export default defineAppConfig({
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
        header: "flex flex-col justify-center items-center",
        leading: "",
        leadingIcon: "size-6 text-info",
      },
      variants: {
        headline: {
          true: {
            headline: "mb-5 inline-flex items-center gap-2 bg-blue-300 text-blue-700 px-4 py-2 rounded-full text-sm font-medium",
          },
        },
      },
    },
    pageCTA: {
      slots: {
        root: "rounded-none",
      },
      variants: {
        variant: {
          soft: {
            root: "bg-linear-to-b from-sky-900 via-blue-950 to-slate-950",
          },
        },
      },
    },
    pageFeature: {
      slots: {
        leading: "w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center flex-shrink-0",
        leadingIcon: "text-info",
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
    separator: {
      variants: {
        color: {
          info: {
            border: "border-info/25",
          },
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
