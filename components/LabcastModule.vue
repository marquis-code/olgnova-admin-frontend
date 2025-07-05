<template>

</template>

<script setup lang="ts">
import { useCreateLabCast } from "@/composables/modules/labcast/useCreateLabCast"
import { useBatchCreateLabCast } from "@/composables/modules/labcast/useBatchCreateLabCast"
import { useGetLabCasts } from "@/composables/modules/labcast/useGetLabCasts"
import { useGetSeasons } from "@/composables/modules/labcast/useGetSeasons"
import { useGetLabCastStats } from "@/composables/modules/labcast/useGetLabCastStats"
import { useGetPopularTags } from "@/composables/modules/labcast/useGetPopularTags"
import { useGetEpisodesBySeason } from "@/composables/modules/labcast/useGetEpisodesBySeason"
import { useGetEpisodeBySeasonAndEpisode } from "@/composables/modules/labcast/useGetEpisodeBySeasonAndEpisode"
import { useGetLabCast } from "@/composables/modules/labcast/useGetLabCast"
import { useUpdateLabCast } from "@/composables/modules/labcast/useUpdateLabCast"
import { useDeleteLabCast } from "@/composables/modules/labcast/useDeleteLabCast"
import { useGetLatestEpisodes } from "@/composables/modules/labcast/useGetLatestEpisodes"
import { useSearchEpisodes } from "@/composables/modules/labcast/useSearchEpisodes"
import { useGetEpisodesByHost } from "@/composables/modules/labcast/useGetEpisodesByHost"
import { useGetEpisodesByGuest } from "@/composables/modules/labcast/useGetEpisodesByGuest"
import { useGetEpisodesByTags } from "@/composables/modules/labcast/useGetEpisodesByTags"
import { useGetActiveEpisodes } from "@/composables/modules/labcast/useGetActiveEpisodes"

// Create single LabCast episode
const {
  loading: createLoading,
  error: createError,
  success: createSuccess,
  labcastData: createLabcastData,
  createLabCast,
  resetState: resetCreateState
} = useCreateLabCast()

// Batch create LabCast episodes
const {
  loading: batchCreateLoading,
  error: batchCreateError,
  success: batchCreateSuccess,
  labcastData: batchCreateLabcastData,
  batchCreateLabCast,
  resetState: resetBatchCreateState
} = useBatchCreateLabCast()

// Get all LabCast episodes with filtering and pagination
const {
  loading: labcastsLoading,
  error: labcastsError,
  labcasts,
  totalCount: labcastsTotalCount,
  currentPage: labcastsCurrentPage,
  getLabCasts,
  resetState: resetLabcastsState
} = useGetLabCasts()

// Get all available seasons
const {
  loading: seasonsLoading,
  error: seasonsError,
  seasons,
  getSeasons,
  resetState: resetSeasonsState
} = useGetSeasons()

// Get LabCast statistics
const {
  loading: statsLoading,
  error: statsError,
  stats,
  getStats,
  resetState: resetStatsState
} = useGetLabCastStats()

// Get popular tags
const {
  loading: tagsLoading,
  error: tagsError,
  tags,
  getPopularTags,
  resetState: resetTagsState
} = useGetPopularTags()

// Get episodes by season
const {
  loading: episodesBySeasonLoading,
  error: episodesBySeasonError,
  episodes: episodesBySeason,
  getEpisodesBySeason,
  resetState: resetEpisodesBySeasonState
} = useGetEpisodesBySeason()

// Get specific episode by season and episode number
const {
  loading: episodeBySeasonAndEpisodeLoading,
  error: episodeBySeasonAndEpisodeError,
  episode: episodeBySeasonAndEpisode,
  getEpisodeBySeasonAndEpisode,
  resetState: resetEpisodeBySeasonAndEpisodeState
} = useGetEpisodeBySeasonAndEpisode()

// Get LabCast episode by ID
const {
  loading: labcastLoading,
  error: labcastError,
  labcast,
  getLabCast,
  resetState: resetLabcastState
} = useGetLabCast()

// Update LabCast episode
const {
  loading: updateLoading,
  error: updateError,
  success: updateSuccess,
  labcast: updateLabcast,
  updateLabCast,
  resetState: resetUpdateState
} = useUpdateLabCast()

// Delete LabCast episode
const {
  loading: deleteLoading,
  error: deleteError,
  success: deleteSuccess,
  deleteLabCast,
  resetState: resetDeleteState
} = useDeleteLabCast()

// Get latest episodes
const {
  loading: latestEpisodesLoading,
  error: latestEpisodesError,
  episodes: latestEpisodes,
  getLatestEpisodes,
  resetState: resetLatestEpisodesState
} = useGetLatestEpisodes()

// Search episodes
const {
  loading: searchLoading,
  error: searchError,
  episodes: searchEpisodes,
  searchTerm,
  searchEpisodes: performSearchEpisodes,
  resetState: resetSearchState
} = useSearchEpisodes()

// Get episodes by host
const {
  loading: episodesByHostLoading,
  error: episodesByHostError,
  episodes: episodesByHost,
  getEpisodesByHost,
  resetState: resetEpisodesByHostState
} = useGetEpisodesByHost()

// Get episodes by guest
const {
  loading: episodesByGuestLoading,
  error: episodesByGuestError,
  episodes: episodesByGuest,
  getEpisodesByGuest,
  resetState: resetEpisodesByGuestState
} = useGetEpisodesByGuest()

// Get episodes by tags
const {
  loading: episodesByTagsLoading,
  error: episodesByTagsError,
  episodes: episodesByTags,
  getEpisodesByTags,
  resetState: resetEpisodesByTagsState
} = useGetEpisodesByTags()

// Get active episodes
const {
  loading: activeEpisodesLoading,
  error: activeEpisodesError,
  episodes: activeEpisodes,
  totalCount: activeEpisodesTotalCount,
  getActiveEpisodes,
  resetState: resetActiveEpisodesState
} = useGetActiveEpisodes()
</script>