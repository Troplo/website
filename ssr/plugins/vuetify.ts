/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"

// Composables
import { createVuetify } from "vuetify"

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            surface: "#181818"
          }
        }
      }
    },
    ssr: true
  })
  app.vueApp.use(vuetify)
})
