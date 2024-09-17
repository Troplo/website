import { defineStore } from "pinia"
import { type FlowinityUser, UserDocument } from "~/gql/graphql"
import { useApolloClient } from "@vue/apollo-composable"

export const useUserStore = defineStore("user", () => {
  const user = ref<FlowinityUser | null>(null)
  const token = import.meta.client ? localStorage.getItem("token") : ""
  const loading = ref(false)
  const apolloClient = useApolloClient()

  async function getUser() {
    if (!localStorage.getItem("token")) {
      return
    }
    loading.value = true
    try {
      const { data } = await apolloClient.client.query({
        query: UserDocument
      })
      user.value = data.user
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    getUser()
  })

  async function logout() {
    localStorage.removeItem("token")
    await apolloClient.client.clearStore()
    await getUser()
  }

  return {
    user,
    loading,
    getUser,
    token,
    logout
  }
})
