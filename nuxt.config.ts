// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"]
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    },
    preset: "cloudflare_pages"
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    },
    server: {
      proxy: {
        "/graphql": {
          target: "http://localhost:24007",
          secure: false
        }
      }
    }
  }
})
