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
    },
    "@nuxt/image"
  ],
  image: {
    format: ["webp"],
    presets: {
      cover: {
        modifiers: {
          fit: "cover",
          format: "webp",
          quality: 80
        }
      }
    }
  },
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
  },
  // do not render /admin on server
  routeRules: {
    "/admin": {
      ssr: false
    },
    "/admin/**": {
      ssr: false
    }
  }
})
