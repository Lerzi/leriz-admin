import { login } from '~/api/login';

export const useUserStore = defineStore('main', {
  // other options...
  state: () => {
    return {
      token: useStorage('token', ''),
    };
  },

  actions: {
    login(username: string, password: string) {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await login({ username, password });
          this.token = data.token;
          resolve(data);
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
    },
  },
});
