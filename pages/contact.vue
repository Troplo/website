<template>
  <div>
    <v-container class="justify-center text-center">
      <p class="text-h4 mb-4">Contact</p>
      <v-row>
        <v-col
          md="3"
          xs="3"
          sm="3"
          cols="6"
          v-for="contact in contacts"
          :key="contact.id"
        >
          <v-card class="rounded-xl" elevation="8">
            <br />
            <v-icon
              v-if="contact.icon !== 'flowinity' && contact.icon !== 'discord'"
              >{{ contact.icon }}</v-icon
            >
            <FlowinityLogo
              style="width: 24px"
              v-else-if="contact.icon === 'flowinity'"
            />
            <DiscordLogo
              style="width: 24px"
              v-else-if="contact.icon === 'discord'"
            />
            <v-card-title class="justify-center">{{
              contact.title
            }}</v-card-title>

            <v-card-text>
              <a :href="contact.url">{{ contact.displayName }}</a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import FlowinityLogo from "@/components/FlowinityLogo.vue"
import DiscordLogo from "@/components/DiscordLogo.vue"

const contacts = [
  {
    id: 0,
    icon: "flowinity",
    title: "Flowinity",
    displayName: "Troplo",
    url: "https://flowinity.com/u/Troplo"
  },
  {
    id: 1,
    icon: "mdi-email",
    title: "Email",
    displayName: "troplo@troplo.com",
    url: "mailto:troplo@troplo.com"
  },
  /*{
          id: 2,
          icon: "mdi-matrix",
          title: "Matrix",
          displayName: "@troplo:flowinity.com",
          url: "https://matrix.to/#/@troplo:flowinity.com?via=flowinity.com"
        },*/
  {
    id: 3,
    icon: "discord",
    title: "Discord",
    displayName: "@troplo",
    url: "https://discord.com/users/692259321907773460"
  },
  {
    id: 9,
    icon: "mdi-mastodon",
    title: "Mastodon",
    displayName: "@Troplo@social.troplo.com",
    url: "https://social.troplo.com/@Troplo"
  },
  {
    id: 4,
    icon: "mdi-twitter",
    title: "Twitter",
    displayName: "@TheTroplo",
    url: "https://twitter.com/TheTroplo"
  },
  {
    id: 5,
    icon: "mdi-send",
    title: "Telegram",
    displayName: "@Troplo",
    url: "https://t.me/Troplo"
  },
  {
    id: 6,
    icon: "mdi-github",
    title: "GitHub",
    displayName: "Troplo",
    url: "https://github.com/Troplo"
  },
  {
    id: 8,
    icon: "mdi-tea",
    title: "Gitea",
    displayName: "Troplo",
    url: "https://git.troplo.com/Troplo"
  }
]

useHead({
  title: "Contact - Troplo.com",
  meta: [
    {
      name: "description",
      content: "Contact Troplo."
    },
    {
      property: "og:title",
      content: "Contact - Troplo.com"
    },
    {
      property: "og:description",
      content: "Contact Troplo."
    },
    {
      property: "og:image",
      content: "https://troplo.com/favicon.png"
    }
  ]
})
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
