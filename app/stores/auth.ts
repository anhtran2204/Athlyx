import { authClient } from "~~/server/lib/auth-client";

export const useAuthStore = defineStore("useAuthStore", () => {
  const toast = useToast();
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null);

  async function init() {
    const data = await authClient.useSession(useFetch);
    session.value = data;
  }

  const user = computed(() => session.value?.data?.user);
  const loading = computed(() => session.value?.isPending);

  async function githubSignIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      fetchOptions: {
        onSuccess() {
          toast.add({
            title: "Signed in with GitHub",
            description: "You've been signed in successfully via GitHub.",
            icon: "tabler:brand-github",
            color: "success",
          });
        },
        onError() {
          toast.add({
            id: "oauth-error",
            title: "Sign in failed",
            description: "Something went wrong on our end. Please try again in a moment.",
            icon: "lucide:circle-x",
            color: "error",
          });
        },
      },
    });
  };

  async function googleSignIn() {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      fetchOptions: {
        onSuccess() {
          toast.add({
            title: "Signed in with Google",
            description: "You've been signed in successfully via Google.",
            icon: "tabler:brand-github",
            color: "success",
          });
        },
        onError() {
          toast.add({
            id: "oauth-error",
            title: "Sign in failed",
            description: "Something went wrong on our end. Please try again in a moment.",
            icon: "lucide:circle-x",
            color: "error",
          });
        },
      },
    });
  };

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess() {
          toast.add({
            title: "Signed out",
            description: "You've been signed out successfully.",
            icon: "tabler:brand-github",
            color: "success",
          });
        },
        onError() {
          toast.add({
            id: "signout-error",
            title: "Sign out failed",
            description: "Something went wrong on our end. Please try again in a moment.",
            icon: "lucide:circle-x",
            color: "error",
          });
        },
      },
    });
    navigateTo("/");
  }

  return {
    init,
    user,
    loading,
    githubSignIn,
    googleSignIn,
    signOut,
  };
});
