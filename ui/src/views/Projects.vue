<template>
  <div id="projects">
    <v-container class="justify-center text-center">
      <p class="text-h4">Projects</p>
      <v-row>
        <v-col v-for="(project, index) in projects" :key="index">
          <v-card elevation="12">
            <v-container>
              <center>
                <p class="text-h5">{{project.name}}</p>
                <v-chip
                    class="ma-1"
                    v-for="tag in project.tags"
                    :key="tag"
                    :color="tag.color"
                >
                  <v-icon>{{tag.icon}}</v-icon><template v-if="tag.icon">&nbsp;</template>
                  {{tag.name}}
                </v-chip>
                <p>{{project.description}}</p>
                <v-card-actions class="justify-center">
                  <v-chip rounded color="deep-purple" class="ma-1" v-if="project.links.website">
                    <v-icon>mdi-web</v-icon>&nbsp;Website
                  </v-chip>
                  <v-chip rounded color="indigo" class="ma-1" v-if="project.links.git">
                    <v-icon>mdi-git</v-icon>&nbsp;Git Repository
                  </v-chip>
                </v-card-actions>
              </center>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.blob {
  border-radius: 50%;
  margin: 6px;
  height: 20px;
  width: 20px;
  transform: scale(1);
}

.blob.green {
  background: rgba(51, 217, 178, 1);
  box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
  animation: pulse-green 1.3s infinite;
}

@keyframes pulse-green {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 5px rgba(51, 217, 178, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
  }
}
</style>

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
          ],
          description: "A 3D sandbox game, and social avatar community written in Express and Vue.js.",
          visible: true,
          links: {
            website: "https://kaverti.com",
            git: "https://git.troplo.com/Kaverti/website"
          }
        },
        {
          id: 2,
          name: "Jays.host",
          internalName: "proj01",
          tags: [
            {
              internalName: "active",
              name: "Active",
              color: "success"
            },
            {
              internalName: "freelance",
              name: "Freelance",
            },
          ],
          description: "An invite only file uploading service written in Express and Vue.js.",
          visible: true,
          links: {
            website: "https://jays.host"
          }
        },
        {
          id: 3,
          name: "Mira",
          internalName: "mira",
          tags: [
            {
              internalName: "development",
              name: "In Development",
              color: "info"
            },
            {
              internalName: "openSource",
              name: "Open Source",
              icon: "mdi-git"
            },
          ],
          description: "EPUB reader written in Crystal and Vue.js.",
          visible: true,
          links: {
            git: "https://github.com/pinnoto/mira"
          }
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>