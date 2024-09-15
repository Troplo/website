export default defineNuxtPlugin((app) => {
  // Fixes the breakage of innerHTML after hydration render
  app.vueApp.directive("thtml", {
    mounted: (el: HTMLElement, binding: any, vnode: any) => {
      el.innerHTML = binding.value
    },
    getSSRProps(binding: any) {
      return {
        innerHTML: binding.value
      }
    }
  })
})
