export const getCachedAnnouncementBannerHome = cachedEventHandler(
  () => {
    return announcementsStore.getAnnouncement()
  },
  {
    // 20 minutes
    maxAge: 1200000,
    getKey: () => "news-item-banner-home"
  }
)
