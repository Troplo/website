<template>
  <div id="projects">
    <v-container>
      <p class="justify-center text-center text-h4">Projects</p>
      <v-row>
        <v-col md="3" v-for="(project, index) in getVisible" :key="index">
          <v-card class="rounded-xl" elevation="8">
            <v-img :src="getImage(project.internalName)"></v-img>

            <v-card-title>{{ project.name }}</v-card-title>

            <v-card-text>
              <div>{{ project.description }}</div>
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
                  disabled
                  style="opacity: 1"
                >
                  <v-icon>{{ tag.icon }}</v-icon
                  ><template v-if="tag.icon">&nbsp;</template>
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
          id: 1,
          name: "Kaverti",
          internalName: "kaverti",
          tags: [
            {
              internalName: "inactive",
              name: "Discontinued",
              color: "error",
              icon: "mdi-alert-circle"
            },
            {
              internalName: "openSource",
              name: "Open Source",
              icon: "mdi-git"
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
          links: [
            {
              name: "Git Repository",
              link: "https://git.troplo.com/Kaverti/website"
            }
          ]
        },
        {
          id: 2,
          name: "Jays.host",
          internalName: "proj01",
          tags: [
            {
              internalName: "active",
              name: "Active",
              icon: "mdi-check-circle",
              color: "success"
            },
            {
              internalName: "freelance",
              name: "Freelance",
              icon: "mdi-currency-usd"
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
            "An invite only file uploading service written in Express and Vue.js.",
          visible: true,
          links: [
            {
              name: "Website",
              link: "https://jays.host"
            }
          ]
        },
        {
          id: 3,
          name: "Pinnoto Mira",
          internalName: "mira",
          tags: [
            {
              internalName: "development",
              name: "In Development",
              icon: "mdi-information",
              color: "info"
            },
            {
              internalName: "openSource",
              name: "Open Source",
              icon: "mdi-git"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org"
            },
            {
              internalName: "crystal",
              color: "black",
              name: "Crystal",
              icon: "mdi-language-ruby",
              link: "https://crystal-lang.org"
            }
          ],
          description: "EPUB reader written in Crystal and Vue.js.",
          visible: true,
          links: [
            {
              name: "Git Repository",
              link: "https://github.com/pinnoto/mira"
            }
          ]
        },
        {
          id: 4,
          name: "Polytoria",
          internalName: "polytoria",
          tags: [
            {
              internalName: "development",
              name: "In Development",
              icon: "mdi-information",
              color: "info"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org"
            },
            {
              internalName: "adonis",
              name: "Adonis.JS",
              icon: "mdi-nodejs",
              link: "https://adonisjs.com"
            }
          ],
          description:
            "Helping create the brand new website for Polytoria, a 3D sandbox platform.",
          visible: true,
          links: [
            {
              name: "Website",
              link: "https://polytoria.com"
            }
          ]
        },
        {
          id: 5,
          name: "Pinnoto Berri",
          internalName: "berri",
          tags: [
            {
              internalName: "development",
              name: "In Development",
              icon: "mdi-information",
              color: "info"
            },
            {
              internalName: "openSource",
              name: "Open Source",
              icon: "mdi-git"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org"
            },
            {
              internalName: "crystal",
              color: "black",
              name: "Crystal",
              icon: "mdi-language-ruby",
              link: "https://crystal-lang.org"
            }
          ],
          description:
            "Self hostable, and open source file uploading service created to be performant, and modular.\nName not finalized.",
          visible: true,
          links: {}
        },
        {
          id: 6,
          name: "Flowinity",
          internalName: "flowinity",
          tags: [
            {
              internalName: "development",
              name: "In Development",
              icon: "mdi-information",
              color: "info"
            }
          ],
          description: "A tech blog.",
          visible: true,
          links: {}
        },
        {
          id: 7,
          name: "Troplo Website",
          internalName: "troplo-website",
          tags: [
            {
              internalName: "active",
              name: "Active",
              icon: "mdi-check-circle",
              color: "success"
            },
            {
              internalName: "openSource",
              name: "Open Source",
              icon: "mdi-git"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org"
            }
          ],
          description:
            "If you want the source code to this website for whatever reason, it is available.",
          visible: true,
          links: [
            {
              name: "Git Repository",
              link: "https://git.troplo.com/Troplo/website-new"
            },
            {
              name: "Website",
              link: "https://troplo.com"
            }
          ]
        },
        {
          id: 8,
          name: "Pinnoto Psittacus",
          internalName: "psittacus",
          tags: [
            {
              internalName: "development",
              name: "In Development",
              icon: "mdi-information",
              color: "info"
            },
            {
              internalName: "vue",
              name: "Vue",
              icon: "mdi-vuejs",
              color: "#42b883",
              link: "https://vuejs.org"
            },
            {
              internalName: "tauri",
              name: "Tauri",
              icon: "mdi-infinity",
              color: "#24c8db",
              link: "https://tauri.studio"
            }
          ],
          description: "Code editor. Coming soon.",
          visible: true,
          links: []
        },
        {
          id: 9,
          name: "TroploPlex",
          internalName: "troplo-plex",
          tags: [
            {
              internalName: "active",
              name: "Active",
              icon: "mdi-check-circle",
              color: "success"
            },
            {
              internalName: "openSource",
              name: "Open Source",
              icon: "mdi-git"
            },
            {
              internalName: "express",
              name: "Express",
              icon: "mdi-nodejs",
              link: "https://expressjs.com"
            }
          ],
          description: "TroploPlex is a reimplementation of the myPlex API.",
          visible: true,
          links: [
            {
              name: "Git Repository",
              link: "https://git.troplo.com/Troplo/Plex"
            }
          ]
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
          "https://dummyimage.com/1920x1080/151515/ffffff.png&text=" + image
        )
      }
    }
  }
}
</script>
