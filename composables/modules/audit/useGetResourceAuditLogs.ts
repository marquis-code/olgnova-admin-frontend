import { ref } from 'vue'
import { audit_api, type AuditLog } from '@/api_factory/modules/audit'

export const useGetResourceAuditLogs = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const auditLogs = ref<AuditLog[]>([])

  const getResourceAuditLogs = async (resource: string, resourceId?: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await audit_api.$_get_resource_audit_logs(resource, resourceId)
      auditLogs.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch resource audit logs'
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
    getResourceAuditLogs,
    resetState,
  }
}