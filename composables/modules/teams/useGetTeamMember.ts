import { ref } from 'vue'
import { teams_api, type TeamMember } from '@/api_factory/modules/teams'

export const useGetTeamMember = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const teamMember = ref<TeamMember | null>(null)

  const getTeamMember = async (memberId: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await teams_api.$_get_team_member(memberId)
      teamMember.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch team member'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    teamMember.value = null
  }

  return {
    loading,
    error,
    teamMember,
    getTeamMember,
    resetState,
  }
}