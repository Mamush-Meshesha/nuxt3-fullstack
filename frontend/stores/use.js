import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    accessToken: null,
    refreshToken: null, // If using refresh tokens
  }),
  actions: {
    async login(credentials) {
      // Login logic, fetch access token and user data
      this.accessToken = accessToken; // Access token from API response
      this.user = userData; // User data from API response
      this.isAuthenticated = true;
    },
    logout() {
      // Logout logic, clear state and tokens
      this.isAuthenticated = false;
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
    },
  },
});