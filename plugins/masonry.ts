import MasonryWall from "@yeger/vue-masonry-wall"

export default defineNuxtPlugin((app) => {
  app.vueApp.use(MasonryWall)
})
