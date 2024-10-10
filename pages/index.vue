<template>
  <div id="projects">
    <v-carousel
      hide-delimiters
      cycle
      :show-arrows="!display.mobile.value"
      :interval="7000"
    >
      <v-carousel-item
        v-for="(project, index) in carousel"
        :key="index"
        eager
        gradient="to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)"
        cover
        class="position-relative"
      >
        <nuxt-img
          :src="project.src"
          preset="cover"
          sizes="768px, 1920px, 2560px, 3840px"
          media="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.5;
          "
        />
        <div
          class="d-flex flex-column align-center justify-center w-100 h-100 cursor-auto"
        >
          <v-card
            class="d-flex flex-column align-center justify-center rounded-xl pb-4 px-4"
            style="background: rgb(18, 18, 18, 0)"
            :elevation="0"
          >
            <v-card-title
              class="text-h3 d-flex justify-center"
              style="text-shadow: 0 0 10px black"
            >
              <component
                :is="project.logo"
                v-if="project.logo"
                style="width: 52px"
                class="mr-4"
              />
              {{ project.name }}
            </v-card-title>

            <p class="text-center" style="text-shadow: 0 0 10px black">
              {{ project.description }}
            </p>
            <v-btn
              v-for="link in project.links"
              :key="link.name"
              color="blue"
              class="mt-4"
              :variant="link.link || link.click ? 'elevated' : 'text'"
              :href="link.link"
              :ripple="false"
              target="_blank"
              @click="link.click && link.click()"
            >
              {{ link.name }}
              <v-icon class="ml-2" v-if="link.link"> mdi-open-in-new </v-icon>
            </v-btn>
          </v-card>
        </div>
      </v-carousel-item>
      <v-btn
        icon
        class="position-absolute mb-6"
        style="bottom: 0; left: 50%; transform: translateX(-50%)"
        @click="scrollToProjects"
      >
        <v-tooltip activator="parent" location="top"> Projects </v-tooltip>
        <v-icon>mdi-arrow-down</v-icon>
      </v-btn>
    </v-carousel>
    <!-- Remove padding so it's equal to the second container -->
    <v-container
      id="about-me"
      class="mx-auto d-flex flex-column"
      style="padding-bottom: 0; max-width: 50%; gap: 16px"
      :style="{
        'min-width':
          display.mobile.value && display.width.value ? '100%' : '900px'
      }"
    >
      <v-card
        class="rounded-xl"
        :class="{ 'd-flex': !display.mobile.value || !display.width.value }"
        elevation="0"
      >
        <div
          class="d-flex justify-center align-center"
          style="background: #121212"
        >
          <nuxt-img src="/favicon.png" alt="Troplo" width="200" height="200" />
        </div>
        <div>
          <v-card-title class="texet-wrap"> Hi, I'm Troplo. </v-card-title>
          <v-card-subtitle class="text-wrap">
            I'm a full-stack web developer who has a passion for technology and
            learning.
          </v-card-subtitle>
          <v-card-text> Skills </v-card-text>
          <div class="d-flex flex-wrap mx-4 mb-4" style="gap: 12px">
            <ChipTag :tag="tags[Tags.Vue]" />
            <ChipTag :tag="tags[Tags.TypeScript]" />
            <ChipTag :tag="tags[Tags.Kotlin]" />
            <ChipTag :tag="tags[Tags.GraphQL]" />
            <ChipTag :tag="tags[Tags.REST]" />
            <ChipTag :tag="tags[Tags.Oracle]" />
            <ChipTag :tag="tags[Tags.AWS]" />
            <ChipTag :tag="tags[Tags.Linux]" />
            <ChipTag :tag="tags[Tags.Networking]" />
            <ChipTag :tag="tags[Tags.ReverseEngineering]" />
          </div>
          <div class="mx-4 mb-4">
            <v-btn color="blue" to="/contact" variant="tonal">
              Contact Me!
            </v-btn>
          </div>
        </div>
      </v-card>
      <NewsItemBannerHome style="height: 300px" />
    </v-container>
    <v-container id="projects-list" :fluid="true">
      <masonry-wall
        :items="getVisible"
        :ssr-columns="1"
        :column-width="500"
        :gap="16"
        :keyMapper="(item) => item.id"
      >
        <template #default="{ item: project }">
          <v-card
            class="rounded-xl"
            elevation="8"
            :color="highlight === project.id ? '#303030' : ''"
            :key="project.id"
          >
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <div v-bind="props" class="position-relative">
                  <a :href="getImage(project.internalName)" target="_blank">
                    <nuxt-img
                      preload
                      style="min-height: 100px; width: 100%"
                      sizes="300px, 400px, 500px"
                      :alt="'Image of ' + project.name"
                      :src="getImage(project.internalName)"
                      :id="`image-${project.id}`"
                    >
                    </nuxt-img>
                    <v-overlay
                      :model-value="isHovering!"
                      class="align-center justify-center"
                      scrim="#000000"
                      :contained="true"
                    >
                      <v-icon size="large" color="white"
                        >mdi-open-in-new</v-icon
                      >
                    </v-overlay>
                  </a>
                </div>
              </template>
            </v-hover>

            <v-card-title class="text-wrap"
              >{{ project.name }}
              <v-chip
                v-if="project.release"
                variant="outlined"
                class="ml-2"
                size="small"
              >
                <v-icon size="18" class="mr-1 ml-n1">mdi-clock</v-icon>
                {{ project.release }}
              </v-chip></v-card-title
            >

            <v-card-text class="text-wrap">
              <span style="white-space: pre-line; overflow-wrap: anywhere">{{
                project.description
              }}</span>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title class="text-wrap">Information</v-card-title>

            <v-card-text class="d-flex flex-wrap text-wrap" style="gap: 6px">
              <ChipTag v-for="tag in project.tags" :key="tag.name" :tag="tag" />
            </v-card-text>

            <v-divider v-if="project.links.length" class="mx-4"></v-divider>

            <v-card-actions v-if="project.links.length" class="mx-2">
              <v-btn
                v-for="link in project.links"
                :key="link.name"
                color="blue"
                variant="text"
                target="_blank"
                :href="link.link"
              >
                <v-icon v-if="link.icon" class="mr-1">{{ link.icon }}</v-icon>
                {{ link.name }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </masonry-wall>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useDisplay } from "vuetify"
import { useAnnouncementsStore } from "@/stores/announcements.store"
import ChipTag from "@/components/ChipTag.vue"
import FlowinityLogo from "@/components/FlowinityLogo.vue"
import NewsItemBannerHome from "~/components/Announcements/NewsItemBannerHome.vue"

const display = useDisplay()

const highlight = ref<number | null>(null)

enum Tags {
  Active,
  Vue,
  Vuetify,
  Express,
  TypeScript,
  Android,
  Kotlin,
  GraphQL,
  Firebase,
  Inactive,
  DevelopmentHalted,
  Crystal,
  NoLongerAffiliated,
  New,
  Oracle,
  AWS,
  Linux,
  ReverseEngineering,
  Networking,
  REST
}

const announcementsStore = useAnnouncementsStore()

const tags = {
  [Tags.Active]: {
    name: "Active",
    icon: "mdi-check-circle",
    color: "success"
  },
  [Tags.Vue]: {
    name: "Vue",
    icon: "mdi-vuejs",
    color: "#42b883",
    link: "https://vuejs.org"
  },
  [Tags.Vuetify]: {
    name: "Vuetify",
    icon: "mdi-vuetify",
    link: "https://vuetifyjs.com",
    color: "#2196F3"
  },
  [Tags.Express]: {
    name: "Express",
    icon: "mdi-nodejs",
    link: "https://expressjs.com"
  },
  [Tags.TypeScript]: {
    name: "TypeScript",
    icon: "mdi-language-typescript",
    link: "https://typescriptlang.org",
    color: "#007acc"
  },
  [Tags.Android]: {
    name: "Android",
    icon: "mdi-android",
    link: "https://android.com",
    color: "#3ddc84",
    textColor: "black"
  },
  [Tags.Kotlin]: {
    name: "Kotlin",
    icon: "mdi-language-kotlin",
    link: "https://kotlinlang.org",
    color: "#E24462"
  },
  [Tags.GraphQL]: {
    name: "GraphQL",
    icon: "mdi-graphql",
    link: "https://graphql.org",
    color: "#E10098"
  },
  [Tags.Firebase]: {
    name: "Google APIs",
    icon: "mdi-firebase",
    link: "https://firebase.com",
    color: "#FFCA28"
  },
  [Tags.Inactive]: {
    name: "Discontinued",
    color: "error",
    icon: "mdi-alert-circle"
  },
  [Tags.DevelopmentHalted]: {
    name: "Halted",
    icon: "mdi-pause-octagon",
    color: "warning"
  },
  [Tags.Crystal]: {
    color: "white",
    name: "Crystal",
    icon: "crystal",
    link: "https://crystal-lang.org"
  },
  [Tags.NoLongerAffiliated]: {
    name: "No longer affiliated",
    icon: "mdi-help-circle",
    color: "yellow"
  },
  [Tags.New]: {
    name: "New",
    icon: "mdi-new-box",
    color: "success"
  },
  [Tags.Oracle]: {
    name: "Oracle Cloud",
    icon: "mdi-cloud",
    color: "red"
  },
  [Tags.AWS]: {
    name: "Amazon Web Services",
    icon: "mdi-aws",
    color: "orange"
  },
  [Tags.Linux]: {
    name: "Linux",
    icon: "mdi-linux",
    color: "yellow"
  },
  [Tags.ReverseEngineering]: {
    name: "Pen-testing & Security",
    icon: "mdi-hammer-screwdriver",
    color: "white"
  },
  [Tags.Networking]: {
    name: "Networking",
    icon: "mdi-network",
    color: "green"
  },
  [Tags.REST]: {
    name: "REST & Web APIs",
    icon: "mdi-web",
    color: "blue"
  }
} as Record<
  Tags,
  {
    name: string
    link?: string
    color?: string
    icon?: string
  }
>

const carousel = [
  {
    src: "/images/flowinity-update-comms.png",
    size: {
      width: 5739,
      height: 3237
    },
    name: "Flowinity",
    logo: FlowinityLogo,
    description: "The versatile online social and collaborative platform.",
    links: [
      {
        name: "Get Started",
        link: "https://flowinity.com/home?mtm_campaign=troplo-carousel"
      }
    ],
    tags: []
  },
  {
    src: "/images/flowforms.png",
    size: {
      width: 3838,
      height: 1984
    },
    name: "FlowForms",
    description: "The free flow chart form builder.",
    tags: [tags[Tags.New]],
    links: [
      {
        name: "Learn More",
        click: () => {
          scrollToProjects()
          setTimeout(() => {
            highlight.value = 13
          }, 500)
          setTimeout(() => {
            highlight.value = null
          }, 1500)
        }
      }
    ]
  }
] as {
  src: string
  name: string
  description: string
  logo?: any
  size: {
    width: number
    height: number
  }
  tags: {
    name: string
    link?: string
    color?: string
    icon?: string
  }[]
  links: {
    name: string
    link?: string
    click?: () => void
  }[]
}[]

const projects = [
  {
    id: 2,
    name: "Flowinity",
    release: "2021",
    internalName: "proj01",
    size: {
      width: 3825,
      height: 2006
    },
    tags: [
      tags[Tags.Active],
      tags[Tags.Vue],
      tags[Tags.Vuetify],
      tags[Tags.Express],
      tags[Tags.GraphQL],
      tags[Tags.TypeScript]
    ],
    description: "The versatile online social and collaborative platform.",
    visible: true,
    links: [
      {
        name: "Website",
        link: "https://flowinity.com/home?mtm_campaign=troplo-projects",
        icon: "mdi-web"
      },
      {
        name: "GitHub",
        link: "https://github.com/Flowinity/Flowinity",
        icon: "mdi-github"
      }
    ]
  },
  {
    id: 13,
    name: "FlowForms",
    release: "2024",
    internalName: "flowforms",
    size: {
      width: 3838,
      height: 1984
    },
    tags: [
      tags[Tags.New],
      tags[Tags.Vue],
      tags[Tags.Vuetify],
      tags[Tags.GraphQL],
      tags[Tags.TypeScript]
    ],
    description: "The free flow chart form builder.",
    visible: true,
    links: [
      {
        name: "Early Access",
        link: "https://flowforms.troplo.com",
        icon: "mdi-web"
      },
      {
        name: "Provide Feedback",
        link: "https://flowforms.troplo.com/form/9ab39eb2-6fa0-41b1-b669-d665281b29b1",
        icon: "mdi-message-alert"
      }
    ]
  },
  {
    id: 15,
    name: "Flowinity for Android",
    release: "2023",
    size: {
      width: 1972,
      height: 1080
    },
    internalName: "flowinity-android",
    tags: [tags[Tags.Active], tags[Tags.Android], tags[Tags.Kotlin]],
    description:
      "The versatile online social and collaborative platform for Android.",
    visible: true,
    links: [
      {
        name: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.troplo.privateuploader",
        icon: "mdi-google-play"
      },
      {
        name: "GitHub",
        link: "https://github.com/Flowinity/Android",
        icon: "mdi-github"
      }
    ]
  },
  {
    id: 12,
    name: "Colubrina",
    internalName: "colubrina",
    size: {
      width: 3839,
      height: 2017
    },
    tags: [
      tags[Tags.Inactive],
      tags[Tags.Vue],
      tags[Tags.Vuetify],
      tags[Tags.Express]
    ],
    description:
      "NOTE: Colubrina is now part of Flowinity as Flowinity Communications.\n\nColubrina - a simple open source chat platform written in Vue, Vuetify, NodeJS, and Socket.io.",
    visible: true,
    release: "2022",
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Troplo/Colubrina",
        icon: "mdi-github"
      }
    ]
  },
  {
    id: 11,
    name: "BetterCompass",
    size: {
      width: 3821,
      height: 2013
    },
    internalName: "compass-vue",
    release: "2022",
    tags: [
      tags[Tags.Inactive],
      tags[Tags.Vue],
      tags[Tags.Vuetify],
      tags[Tags.Express]
    ],
    description:
      "An open source modern frontend for the JDLF Compass School Manager written in Vue.js.",
    visible: true,
    links: [
      {
        name: "Website",
        link: "https://compass.troplo.com",
        icon: "mdi-web"
      },
      {
        name: "GitHub",
        link: "https://github.com/Troplo/BetterCompass",
        icon: "mdi-github"
      }
    ]
  },
  {
    id: 14,
    name: "GeoGuess",
    internalName: "geoguess",
    size: {
      width: 3837,
      height: 2013
    },
    release: "2022",
    description:
      "Contributed changes & fixes to the open source geography game GeoGuess.",
    visible: true,
    tags: [
      tags[Tags.Active],
      tags[Tags.Vue],
      tags[Tags.Vuetify],
      tags[Tags.Firebase]
    ],
    links: [
      {
        name: "My Instance",
        link: "https://geo.troplo.com",
        icon: "mdi-web"
      },
      {
        name: "GitHub",
        link: "https://github.com/GeoGuess/GeoGuess",
        icon: "mdi-github"
      },
      {
        name: "Website",
        link: "https://geoguess.games",
        icon: "mdi-web"
      }
    ]
  },
  {
    id: 3,
    name: "Mira",
    size: {
      width: 3839,
      height: 1998
    },
    release: "2021",
    internalName: "mira",
    tags: [tags[Tags.Inactive], tags[Tags.Vue], tags[Tags.Crystal]],
    description: "EPUB reader written in Crystal and Vue.js.",
    visible: true,
    links: [
      {
        name: "GitHub",
        link: "https://github.com/pinnoto/mira",
        icon: "mdi-github"
      }
    ]
  },
  {
    id: 10,
    name: "Vixlatio",
    internalName: "vixlatio",
    size: {
      width: 3840,
      height: 2035
    },
    release: "2022",
    tags: [tags[Tags.NoLongerAffiliated], tags[Tags.Vue], tags[Tags.Express]],
    description:
      "Developer for Vixlatio, a blazing fast gaming platform that is powered by the creativity of its users.",
    visible: true,
    links: []
  },
  {
    id: 13,
    name: "Kansas",
    size: {
      width: 3840,
      height: 1987
    },
    internalName: "kansas",
    release: "2022",
    tags: [
      tags[Tags.DevelopmentHalted],
      tags[Tags.Vue],
      tags[Tags.Vuetify],
      tags[Tags.Express]
    ],
    description: "Open source project tracking software written in Vue.js.",
    visible: true,
    links: []
  },
  {
    id: 16,
    name: "NextFM (OpenFM)",
    internalName: "nextfm",
    size: {
      width: 3838,
      height: 1987
    },
    release: "2022",
    tags: [
      tags[Tags.DevelopmentHalted],
      tags[Tags.Vue],
      tags[Tags.Vuetify],
      tags[Tags.Express]
    ],
    description:
      "An experimental music tracking platform, similar to Last.fm that uses the Spotify API.",
    visible: true,
    links: []
  },
  {
    id: 7,
    name: "Troplo's Website",
    release: "2021",
    size: {
      width: 3840,
      height: 2035
    },
    internalName: "troplo-website",
    tags: [tags[Tags.Active], tags[Tags.Vue], tags[Tags.Vuetify]],
    description: "The website you are viewing right now.",
    visible: true,
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Troplo/website",
        icon: "mdi-github"
      },
      {
        name: "Website",
        link: "https://troplo.com",
        icon: "mdi-web"
      }
    ]
  },
  {
    id: 1,
    name: "Kaverti",
    size: {
      width: 3840,
      height: 2035
    },
    release: "2020",
    internalName: "kaverti",
    tags: [tags[Tags.Inactive], tags[Tags.Vue], tags[Tags.Express]],
    description:
      "A 3D sandbox game, and social avatar platform written in Express and Vue.js.",
    visible: true,
    links: []
  }
] as {
  id: number
  name: string
  release?: string
  internalName: string
  size: {
    width: number
    height: number
  }
  tags: {
    name: string
    link?: string
    color?: string
    icon?: string
  }[]
  description: string
  visible: boolean
  links: {
    name: string
    link?: string
    click?: () => void
    icon?: string
  }[]
}[]

const getVisible = computed(() => projects.filter((i) => i.visible))

const getImage = (image: string) => {
  return `/images/${image}.png`
}

const scrollToProjects = () => {
  const element = document.getElementById("projects-list")!
  const y = element.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top: y + 6, behavior: "smooth" })
}

useHead({
  title: "Home - Troplo.com",
  meta: [
    {
      name: "description",
      content: "The home of projects and services from Troplo."
    },
    {
      property: "og:title",
      content: "Home - Troplo.com"
    },
    {
      property: "og:image",
      content: "https://troplo.com/favicon.png"
    },
    {
      property: "og:description",
      content: "The home of projects and services from Troplo."
    },
    {
      name: "twitter:image",
      content: "https://troplo.com/favicon.png"
    }
  ]
})
</script>

<style>
.v-chip--disabled {
  opacity: 1 !important;
  pointer-events: inherit !important;
  user-select: inherit !important;
}
</style>
