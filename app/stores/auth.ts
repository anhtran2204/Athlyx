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
    const { csrf } = useCsrf();
    const headers = new Headers();
    headers.append("csrf-token", csrf);
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      fetchOptions: {
        headers,
        onSuccess() {
          toast.add({
            title: "Signed in with GitHub",
            description: "You've been signed in successfully via GitHub.",
            icon: "tabler:brand-github",
            color: "success",
          });
        },
      },
    });
  };

  async function githubSignOut() {
    const { csrf } = useCsrf();
    const headers = new Headers();
    headers.append("csrf-token", csrf);
    await authClient.signOut({
      fetchOptions: {
        headers,
      },
    });
    await authClient.revokeSession({
      token: session.value?.data?.session.token || "",
      fetchOptions: {
        headers,
      },
    });
    navigateTo("/");
  }

  async function googleSignIn() {
    const { csrf } = useCsrf();
    const headers = new Headers();
    headers.append("csrf-token", csrf);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      fetchOptions: {
        headers,
      },
    });
  };

  async function googleSignOut() {
    const { csrf } = useCsrf();
    const headers = new Headers();
    headers.append("csrf-token", csrf);
    await authClient.signOut({
      fetchOptions: {
        headers,
      },
    });
    await authClient.revokeSession({
      token: session.value?.data?.session.token || "",
      fetchOptions: {
        headers,
      },
    });
    navigateTo("/");
  }

  return {
    init,
    user,
    loading,
    githubSignIn,
    githubSignOut,
    googleSignIn,
    googleSignOut,
  };
});
