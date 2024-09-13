<template>
  <div id="projects">
    <v-container :fluid="$vuetify.breakpoint.lgAndDown">
      <v-card
        elevation="8"
        class="troplo-header rounded-xl text-center"
        v-if="false"
      >
        <v-container>
          <div v-if="!$vuetify.breakpoint.mobile" class="troplo-header-title">
            Troplo
          </div>
          <div
            v-if="$vuetify.breakpoint.mobile"
            class="troplo-header-title"
            style="background: -webkit-radial-gradient(#0179f3, #0190ea)"
          >
            T
          </div>
        </v-container>
      </v-card>
      <p class="justify-center text-center text-h4">My Projects</p>
      <v-row>
        <v-col lg="3" v-for="(project, index) in getVisible" :key="index">
          <v-card class="rounded-xl troplo-p" elevation="8">
            <v-hover v-slot="{ hover }">
              <v-img
                :alt="'Image of ' + project.name"
                :src="getImage(project.internalName)"
              >
                <a :href="getImage(project.internalName)" target="_blank">
                  <v-fade-transition v-if="hover">
                    <v-overlay absolute>
                      <v-icon large>mdi-open-in-new</v-icon>
                    </v-overlay>
                  </v-fade-transition>
                </a>
              </v-img>
            </v-hover>

            <v-card-title
              >{{ project.name }}
              <v-chip v-if="project.release" outlined class="ml-2" small>
                <v-icon size="18" class="mr-1 ml-n1">mdi-clock</v-icon>
                {{ project.release }}
              </v-chip></v-card-title
            >

            <v-card-text>
              <span style="white-space: pre-line; overflow-wrap: anywhere">{{
                project.description
              }}</span>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Information</v-card-title>

            <v-card-text>
              <v-chip-group column>
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
              </v-chip-group>
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

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 2,
          name: "Flowinity",
          release: "2021",
          internalName: "proj01",
          tags: [
            {
              internalName: "active",
              name: "Active",
              icon: "mdi-check-circle",
              color: "success"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org",
              textColor: "black"
            },
            {
              internalName: "vuetify",
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com",
              color: "#2196F3"
            },
            {
              internalName: "express",
              name: "Express",
              icon: "mdi-nodejs",
              link: "https://expressjs.com"
            },
            {
              internalName: "typescript",
              name: "TypeScript",
              icon: "mdi-language-typescript",
              link: "https://typescriptlang.org",
              color: "#007acc"
            }
          ],
          description:
            "The versatile online social and collaborative platform.",
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
            {
              internalName: "active",
              name: "Active",
              icon: "mdi-check-circle",
              color: "success"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org",
              textColor: "black"
            },
            {
              internalName: "vuetify",
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com",
              color: "#2196F3"
            },
            {
              internalName: "graphql",
              name: "GraphQL",
              icon: "mdi-graphql",
              link: "https://graphql.org"
            },
            {
              internalName: "typescript",
              name: "TypeScript",
              icon: "mdi-language-typescript",
              link: "https://typescriptlang.org",
              color: "#007acc"
            }
          ],
          description: "The free flow chart form builder.",
          visible: true,
          links: [
            {
              name: "Website",
              link: "https://flowforms.com"
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
          tags: [
            {
              internalName: "active",
              name: "Active",
              icon: "mdi-check-circle",
              color: "success"
            },
            {
              internalName: "android",
              name: "Android",
              icon: "mdi-android",
              link: "https://android.com",
              color: "#3ddc84",
              textColor: "black"
            },
            {
              internalName: "kotlin",
              name: "Kotlin",
              icon: "mdi-language-kotlin",
              link: "https://kotlinlang.org",
              color: "#E24462"
            }
          ],
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
            {
              internalName: "inactive",
              name: "Discontinued",
              color: "error",
              icon: "mdi-alert-circle"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org",
              textColor: "black"
            },
            {
              internalName: "vuetify",
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com",
              color: "#2196F3"
            },
            {
              internalName: "express",
              name: "Express",
              icon: "mdi-nodejs",
              link: "https://expressjs.com"
            }
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
            {
              internalName: "inactive",
              name: "Discontinued",
              color: "error",
              icon: "mdi-alert-circle"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org",
              textColor: "black"
            },
            {
              internalName: "vuetify",
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com",
              color: "#2196F3"
            },
            {
              internalName: "express",
              name: "Express",
              icon: "mdi-nodejs",
              link: "https://expressjs.com"
            }
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
          ],
          tags: [
            {
              internalName: "active",
              name: "Active",
              icon: "mdi-check-circle",
              color: "success"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org",
              textColor: "black"
            },
            {
              internalName: "vuetify",
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com",
              color: "#2196F3"
            },
            {
              internalName: "firebase",
              name: "Google APIs",
              icon: "mdi-firebase",
              link: "https://firebase.com"
            }
          ]
        },
        {
          id: 3,
          name: "Mira",
          release: "2021",
          internalName: "mira",
          tags: [
            {
              internalName: "inactive",
              name: "Discontinued",
              color: "error",
              icon: "mdi-alert-circle"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org",
              textColor: "black"
            },
            {
              internalName: "crystal",
              color: "white",
              textColor: "black",
              name: "Crystal",
              icon: "crystal",
              link: "https://crystal-lang.org"
            }
          ],
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
          tags: [
            {
              internalName: "active",
              name: "No longer affiliated",
              icon: "mdi-help-circle",
              color: "indigo"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org"
            },
            {
              internalName: "express",
              name: "Express",
              icon: "mdi-nodejs",
              link: "https://expressjs.com"
            }
          ],
          description:
            "Developer for Vixlatio, a blazing fast gaming platform that is powered by the creativity of its users.",
          visible: true,
          links: []
        },
        // {
        //   id: 5,
        //   name: "Berri",
        //   release: "2021",
        //   internalName: "berri",
        //   tags: [
        //     {
        //       internalName: "development-halted",
        //       name: "Halted",
        //       icon: "mdi-pause-octagon",
        //       color: "warning"
        //     },
        //     {
        //       internalName: "vue",
        //       name: "Vue",
        //       icon: "mdi-vuejs",
        //       color: "#42b883",
        //       link: "https://vuejs.org",
        //       textColor: "black"
        //     },
        //     {
        //       internalName: "crystal",
        //       color: "white",
        //       name: "Crystal",
        //       textColor: "black",
        //       icon: "crystal",
        //       link: "https://crystal-lang.org"
        //     }
        //   ],
        //   description:
        //     "Open source file hosting service which aims to be performant, and modular.\nName not finalized.",
        //   visible: true,
        //   links: {}
        // },
        {
          id: 13,
          name: "Kansas",
          internalName: "kansas",
          release: "2022",
          tags: [
            {
              internalName: "development-halted",
              name: "Halted",
              icon: "mdi-pause-octagon",
              color: "warning"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org",
              textColor: "black"
            },
            {
              internalName: "vuetify",
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com",
              color: "#2196F3"
            },
            {
              internalName: "express",
              name: "Express",
              icon: "mdi-nodejs",
              link: "https://expressjs.com"
            }
          ],
          description:
            "Open source project tracking software written in Vue.js.",
          visible: true,
          links: {}
        } /*
        {
          id: 6,
          name: "Flowinity",
          internalName: "flowinity",
          tags: [
            {
              internalName: "development-halted",
              name: "Halted",
              icon: "mdi-pause-octagon",
              color: "warning"
            }
          ],
          description: "A tech blog.",
          visible: true,
          links: {}
        },*/,
        {
          id: 7,
          name: "Troplo's Website",
          release: "2021",
          internalName: "troplo-website",
          tags: [
            {
              internalName: "active",
              name: "Active",
              icon: "mdi-check-circle",
              color: "success"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org",
              textColor: "black"
            },
            {
              internalName: "vuetify",
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: "https://vuetifyjs.com",
              color: "#2196F3"
            }
          ],
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
          tags: [
            {
              internalName: "inactive",
              name: "Discontinued",
              color: "error",
              icon: "mdi-alert-circle"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org"
            },
            {
              internalName: "express",
              name: "Express",
              icon: "mdi-nodejs",
              link: "https://expressjs.com"
            }
          ],
          description:
            "A 3D sandbox game, and social avatar platform written in Express and Vue.js.",
          visible: true,
          links: []
        }
      ]
    }
  },
  computed: {
    getVisible() {
      return this.projects.filter((i) => i.visible)
    }
  },
  methods: {
    getImage(image) {
      try {
        return require("../assets/images/" + image + ".png")
      } catch {
        return (
          "https://dummyimage.com/3840x2035/151515/ffffff.png&text=" + image
        )
      }
    }
  }
}
</script>
