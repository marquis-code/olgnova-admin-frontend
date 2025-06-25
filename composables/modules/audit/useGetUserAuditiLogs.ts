import { ref } from 'vue'
import { audit_api, type AuditLog } from '@/api_factory/modules/audit'

export const useGetUserAuditLogs = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const auditLogs = ref<AuditLog[]>([])

  const getUserAuditLogs = async (userId: string, limit?: number) => {
    loading.value = true
    error.value = null

    try {
      const response = await audit_api.$_get_user_audit_logs(userId, limit)
      auditLogs.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch user audit logs'
      throw err
    } finally {
      loading.value = false
    }
  }

  const resetState = () => {
    loading.value = false
    error.value = null
    auditLogs.value = []
  }

  return {
    loading,
    error,
    auditLogs,
    getUserAuditLogs,
    resetState,
  }
}