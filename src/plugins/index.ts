/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify"
import router from "../router"

// Types
import type { App } from "vue"
import { pinia } from "@/stores"
import { DefaultApolloClient } from "@vue/apollo-composable"
import apolloClient from "@/plugins/apollo"

export function registerPlugins(app: App) {
  app.provide(DefaultApolloClient, apolloClient)
  app.use(vuetify).use(router).use(pinia)
}
