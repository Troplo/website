<template>
  <div id="projects">
    <v-container>
      <p class="justify-center text-center text-h4">My Projects</p>
      <v-row>
        <v-col md="3" v-for="(project, index) in getVisible" :key="index">
          <v-card class="rounded-xl troplo-p" elevation="8">
            <v-img :src="getImage(project.internalName)"></v-img>

            <v-card-title>{{ project.name }}</v-card-title>

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
                  <v-img v-if="tag.icon === 'crystal'" src="../assets/icons/crystal-icon.svg" width="30" height="30"></v-img>
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
          name: "Mira",
          internalName: "mira",
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
          name: "Berri",
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
              color: "white",
              name: "Crystal",
              textColor: "black",
              icon: "crystal",
              link: "https://crystal-lang.org"
            }
          ],
          description:
            "Open source file hosting service which aims to be performant, and modular.\nName not finalized.",
          visible: true,
          links: {}
        },
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
            },
          ],
          description: "A tech blog.",
          visible: true,
          links: {}
        },
        {
          id: 7,
          name: "Troplo's Website",
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
          description: "The website you are viewing right now.",
          visible: true,
          links: [
            {
              name: "Git Repository",
              link: "https://github.com/Troplo/website"
            },
            {
              name: "Website",
              link: "https://troplo.com"
            }
          ]
        },
        {
          id: 8,
          name: "Psittacus",
          internalName: "psittacus",
          tags: [
            {
              internalName: "development-halted",
              name: "Halted",
              icon: "mdi-pause-octagon",
              color: "warning"
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
          id: 10,
          name: "Vixlatio",
          internalName: "vixlatio",
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
              link: "https://vuejs.org"
            },
            {
              internalName: "express",
              name: "Express",
              icon: "mdi-nodejs",
              link: "https://expressjs.com"
            }
          ],
          description: "Developer for Vixlatio, a blazing fast gaming platform that is powered by the creativity of its users.",
          visible: true,
          links: [
            {
              name: "Website",
              link: "https://vixlatio.com"
            }
          ]
        },
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
