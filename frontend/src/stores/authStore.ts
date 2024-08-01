import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as object | null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUser(user: object) {
      this.user = user;
    },
    clearAuth() {
      this.token = null;
      this.user = null;
    },
  },
});
