import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    accessToken: null,
  }),
  actions: {
    async login(credentials) {
      this.accessToken = accessToken; 
      this.user = userData; 
      this.isAuthenticated = true;
    },
    logout() {

      this.isAuthenticated = false;
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
    },
  },
});