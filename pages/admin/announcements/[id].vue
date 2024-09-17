<template>
  <Banner
    :announcement="{
      ...announcement,
      ...editable
    }"
  />
  <div class="d-flex mx-3">
    <div class="flex-grow-1">
      <v-text-field
        v-model="editable.title"
        label="Title"
        variant="outlined"
        @update:model-value="() => (changes = true)"
      />
      <v-textarea
        v-model="editable.description"
        label="Description"
        variant="outlined"
        placeholder="Shown in News page and SEO."
        @update:model-value="() => (changes = true)"
      />
      <v-textarea
        v-model="editable.content"
        label="Content"
        auto-grow
        placeholder="Markdown supported."
        max-rows="20"
        variant="outlined"
        @update:model-value="() => (changes = true)"
      />
      <v-switch
        v-model="editable.draft"
        label="Draft"
        color="primary"
        variant="inset"
        @update:model-value="() => (changes = true)"
      />
      <div>
        <v-tooltip location="top" activator="parent">
          Not implemented yet.
        </v-tooltip>
        <v-switch
          label="Publish to Flowinity"
          color="primary"
          variant="inset"
          :disabled="true"
        />
      </div>
      <v-switch
        v-model="editable.banner"
        label="Banner"
        color="primary"
        variant="inset"
        @update:model-value="() => (changes = true)"
      />
      <v-select
        :disabled="!editable.banner"
        v-model="editable.bannerType"
        :items="['error', 'warning', 'info', 'success']"
        label="Banner Type"
        variant="outlined"
        @update:model-value="() => (changes = true)"
      />
      <p class="mb-2">
        {{ editable.bannerExpiry || "No expiry for banner" }}
      </p>
      <v-text-field
        :disabled="!editable.banner"
        v-model="editable.bannerExpiry"
        label="Banner Expiry"
        type="datetime-local"
        variant="outlined"
        @update:model-value="() => (changes = true)"
      />
      <v-text-field
        :disabled="!editable.banner"
        v-model="editable.bannerText"
        label="Banner Text"
        variant="outlined"
        @update:model-value="() => (changes = true)"
      />
      <v-text-field
        v-model="editable.image"
        label="Image"
        variant="outlined"
        placeholder="https://i.flowinity.com/i/d102284d9082.png (optional)"
        @update:model-value="() => (changes = true)"
      />
      <small>
        The banner will be displayed on all pages on troplo.com at the top.
      </small>
    </div>
    <div style="width: 50%">
      <NewsItem
        :announcement="{
          ...announcement,
          ...editable
        }"
      />
    </div>
    <div
      class="position-fixed bottom-0 right-0"
      style="z-index: 9999; width: 100%"
    >
      <v-btn
        @click="updateAnnouncement"
        :loading="loading"
        :color="changes ? 'red' : 'blue'"
        block
      >
        <template v-if="changes"> ! UNSAVED CHANGES ! </template>
        Save Announcement Changes ({{ editable.draft ? "Draft" : "Published" }})
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnnouncementsStore } from "~/stores/announcements.store"
import { useApolloClient } from "@vue/apollo-composable"
import {
  AnnouncementDocument,
  type AnnouncementQuery,
  BannerType,
  CreateAnnouncementDocument,
  UpdateAnnouncementDocument
} from "~/gql/graphql"
import Banner from "~/components/Announcements/Banner.vue"
import NewsItem from "~/components/Announcements/NewsItem.vue"

const announcementsStore = useAnnouncementsStore()
const apolloClient = useApolloClient()
const announcement = ref<AnnouncementQuery["announcement"] | null>(null)
const loading = ref(false)
const route = useRoute()
const changes = ref(false)

const id = computed(() => route.params.id)

const editable = ref({
  title: "",
  description: "",
  draft: true,
  content: "" as string | null | undefined,
  banner: false,
  bannerType: BannerType.Error as BannerType | null | undefined,
  bannerExpiry: null as string | null | undefined,
  bannerText: "" as string | null | undefined,
  image: null as string | null | undefined
})

async function getAnnouncement() {
  loading.value = true
  try {
    const { data } = await apolloClient.client.query({
      query: AnnouncementDocument,
      variables: { announcementId: <string>id.value }
    })
    if (!data.announcement) {
      return
    }
    announcement.value = data.announcement
    editable.value.title = data.announcement.title
    editable.value.description = data.announcement.description
    editable.value.draft = data.announcement.draft
    editable.value.content = data.announcement.content
    editable.value.banner = data.announcement.banner
    editable.value.bannerType = data.announcement.bannerType
    editable.value.bannerExpiry = data.announcement.bannerExpiry
    editable.value.bannerText = data.announcement.bannerText
    editable.value.image = data.announcement.image
  } finally {
    loading.value = false
  }
}

const router = useRouter()
async function updateAnnouncement() {
  if (id.value === "new") {
    const { data } = await apolloClient.client.mutate({
      mutation: CreateAnnouncementDocument,
      variables: {
        input: {
          title: editable.value.title,
          description: editable.value.description,
          draft: editable.value.draft,
          content: editable.value.content || "",
          banner: editable.value.banner,
          bannerType: editable.value.bannerType || BannerType.Info,
          bannerExpiry:
            !editable.value.bannerExpiry?.includes("Z") &&
            editable.value.bannerExpiry
              ? editable.value.bannerExpiry + ":00Z"
              : editable.value.bannerExpiry || null,
          bannerText: editable.value.bannerText || ""
        }
      }
    })
    if (!data) return
    changes.value = false
    router.push(`/admin/announcements/${data.createAnnouncement.id}`)
    return
  }
  if (!announcement.value) {
    return
  }
  loading.value = true
  try {
    await apolloClient.client.mutate({
      mutation: UpdateAnnouncementDocument,
      variables: {
        input: {
          id: announcement.value.id,
          title: editable.value.title,
          description: editable.value.description,
          draft: editable.value.draft,
          content: editable.value.content || "",
          banner: editable.value.banner,
          bannerType: editable.value.bannerType || BannerType.Info,
          bannerExpiry:
            !editable.value.bannerExpiry?.includes("Z") &&
            editable.value.bannerExpiry
              ? editable.value.bannerExpiry + ":00Z"
              : editable.value.bannerExpiry || null,
          bannerText: editable.value.bannerText || ""
        }
      }
    })
    changes.value = false
  } finally {
    loading.value = false
  }
}

watch(
  () => id.value,
  () => {
    getAnnouncement()
  }
)

onMounted(() => {
  getAnnouncement()
})
</script>

<style scoped></style>
