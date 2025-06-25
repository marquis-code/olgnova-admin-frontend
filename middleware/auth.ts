import { defineNuxtRouteMiddleware, navigateTo } from "#app"

export default defineNuxtRouteMiddleware((to, from) => {
  // Check if user is authenticated
  const token = localStorage.getItem("token")

  if (!token) {
    return navigateTo("/")
  }
})
