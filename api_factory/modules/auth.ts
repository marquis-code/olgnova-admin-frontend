import { GATEWAY_ENDPOINT } from "../axios.config"

// Type Definitions
export type LoginCredentials = {
  email: string
  password: string
}

export type SignupData = {
  firstName: string
  lastName: string
  email: string
  password: string
  role?: 'super_admin' | 'admin' | 'editor'
}

export type AuthUser = {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
}

export type AuthResponse = {
  access_token: string
  user: AuthUser
}

// API Factory
export const auth_api = {
  $_login: async (credentials: LoginCredentials) => {
    const url = `/auth/login`
    return GATEWAY_ENDPOINT.post(url, credentials)
  },

  $_signup: async (userData: SignupData) => {
    const url = `/users/signup`
    return GATEWAY_ENDPOINT.post(url, userData)
  },
}