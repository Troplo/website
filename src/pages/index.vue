<template>
  <div id="projects">
    <v-container :width="display.lgAndDown.value ? '100%' : '70%'">
      <p class="justify-center text-center text-h4 mb-4">My Projects</p>
      <v-row>
        <v-col lg="3" v-for="(project, index) in getVisible" :key="index">
          <v-card class="rounded-xl troplo-p" elevation="8">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-img
                  v-bind="props"
                  :alt="'Image of ' + project.name"
                  :src="getImage(project.internalName)"
                >
                  <a :href="getImage(project.internalName)" target="_blank">
                    <v-overlay
                      :model-value="isHovering"
                      class="align-center justify-center"
                      :contained="true"
                      scrim="#000000"
                    >
                      <v-icon size="large" color="white"
                        >mdi-open-in-new</v-icon
                      >
                    </v-overlay>
                  </a>
                </v-img>
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
              <v-chip
                v-for="tag in project.tags"
                :key="tag.id"
                :href="tag.link"
                :color="tag.color"
                :disabled="!tag.link"
                class="troplo-p"
                :text-color="tag.textColor || 'white'"
                style="opacity: 1"
              >
                <v-img
                  v-if="tag.icon === 'crystal'"
                  src="../assets/icons/crystal-icon.svg"
                  width="30"
                  height="30"
                ></v-img>
                <v-icon v-if="tag.icon !== 'crystal'">{{ tag.icon }}</v-icon>
                <template v-if="tag.icon">&nbsp;</template>
                {{ tag.name }}
              </v-chip>
            </v-card-text>

            <v-divider v-if="project.links.length" class="mx-4"></v-divider>

            <v-card-actions v-if="project.links.length">
              <v-btn
                v-for="link in project.links"
                :key="link.name"
                color="blue"
                text
                :href="link.link"
              >
                {{ link.name }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useDisplay } from "vuetify"

const display = useDisplay()

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
  NoLongerAffiliated
}

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
    link: "https://vuejs.org",
    textColor: "black"
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
    link: "https://graphql.org"
  },
  [Tags.Firebase]: {
    name: "Google APIs",
    icon: "mdi-firebase",
    link: "https://firebase.com"
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
    textColor: "black",
    name: "Crystal",
    icon: "crystal",
    link: "https://crystal-lang.org"
  },
  [Tags.NoLongerAffiliated]: {
    name: "No longer affiliated",
    icon: "mdi-help-circle",
    color: "indigo"
  }
}

const projects = [
  {
    id: 2,
    name: "Flowinity",
    release: "2021",
    internalName: "proj01",
    tags: [
      tags[Tags.Active],
      tags[Tags.Vue],
      tags[Tags.Vuetify],
      tags[Tags.Express],
      tags[Tags.TypeScript]
    ],
    description: "The versatile online social and collaborative platform.",
    visible: true,
    links: [
      {
        name: "Website",
        link: "https://flowinity.com"
      },
      {
        name: "GitHub",
        link: "https://github.com/Flowinity/Flowinity"
      }
    ]
  },
  {
    id: 13,
    name: "FlowForms",
    release: "2024",
    internalName: "flowforms",
    tags: [
      tags[Tags.Active],
      tags[Tags.Vue],
      tags[Tags.Vuetify],
      tags[Tags.GraphQL],
      tags[Tags.TypeScript]
    ],
    description: "The free flow chart form builder.",
    visible: true,
    links: [
      {
        name: "Website",
        link: "https://flowforms.troplo.com"
      },
      {
        name: "GitHub",
        link: "https://github.com/Troplo/FlowForms"
      }
    ]
  },
  {
    id: 14,
    name: "Flowinity for Android",
    release: "2023",
    internalName: "flowinity-android",
    tags: [tags[Tags.Active], tags[Tags.Android], tags[Tags.Kotlin]],
    description:
      "The versatile online social and collaborative platform for Android.",
    visible: true,
    links: [
      {
        name: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.troplo.privateuploader"
      },
      {
        name: "GitHub",
        link: "https://github.com/Flowinity/Android"
      }
    ]
  },
  {
    id: 12,
    name: "Colubrina",
    internalName: "colubrina",
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
        name: "Website",
        link: "https://colubrina.troplo.com"
      },
      {
        name: "GitHub",
        link: "https://github.com/Troplo/Colubrina"
      }
    ]
  },
  {
    id: 11,
    name: "BetterCompass",
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
        link: "https://compass.troplo.com"
      },
      {
        name: "GitHub",
        link: "https://github.com/Troplo/BetterCompass"
      }
    ]
  },
  {
    id: 14,
    name: "GeoGuess",
    internalName: "geoguess",
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
        link: "https://geo.troplo.com"
      },
      {
        name: "GitHub",
        link: "https://github.com/GeoGuess/GeoGuess"
      },
      {
        name: "Website",
        link: "https://geoguess.games"
      }
    ]
  },
  {
    id: 3,
    name: "Mira",
    release: "2021",
    internalName: "mira",
    tags: [tags[Tags.Inactive], tags[Tags.Vue], tags[Tags.Crystal]],
    description: "EPUB reader written in Crystal and Vue.js.",
    visible: true,
    links: [
      {
        name: "GitHub",
        link: "https://github.com/pinnoto/mira"
      }
    ]
  },
  {
    id: 10,
    name: "Vixlatio",
    internalName: "vixlatio",
    release: "2022",
    tags: [tags[Tags.Active], tags[Tags.Vue], tags[Tags.Express]],
    description:
      "Developer for Vixlatio, a blazing fast gaming platform that is powered by the creativity of its users.",
    visible: true,
    links: []
  },
  {
    id: 13,
    name: "Kansas",
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
    id: 7,
    name: "Troplo's Website",
    release: "2021",
    internalName: "troplo-website",
    tags: [tags[Tags.Active], tags[Tags.Vue], tags[Tags.Vuetify]],
    description: "The website you are viewing right now.",
    visible: true,
    links: [
      {
        name: "GitHub",
        link: "https://github.com/Troplo/website"
      },
      {
        name: "Website",
        link: "https://troplo.com"
      }
    ]
  },
  {
    id: 1,
    name: "Kaverti",
    release: "2020",
    internalName: "kaverti",
    tags: [tags[Tags.Inactive], tags[Tags.Vue], tags[Tags.Express]],
    description:
      "A 3D sandbox game, and social avatar platform written in Express and Vue.js.",
    visible: true,
    links: []
  }
]

const getVisible = computed(() => projects.filter((i) => i.visible))

const getImage = (image) => {
  return `/images/${image}.png`
}
</script>

<style>
.v-chip--disabled {
  opacity: 1 !important;
  pointer-events: inherit !important;
  user-select: inherit !important;
}
</style>
