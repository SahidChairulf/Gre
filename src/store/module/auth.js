import axios from "axios";

const auth = {
  namespaced: true,
  state: {
  token: localStorage.getItem("token") || "",
  },
  getters: {
    isAuthenticated: (state) => (!!state.token && state.token != 'undefined'),
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/auth/login",
          credentials
        );
        const token = response.data.access_token;
        if(token == undefined) {
          this.$router.push('/login');
        }
        // Save token to localStorage
        localStorage.setItem("token", token);

        commit("SET_TOKEN", token);
        console.log("Token saved:", token);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async Signup({ commit }, credentials) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/auth/signup",
          credentials
        );
        const token = response.data.access_token;
        if(token == undefined) {
          this.$router.push('/login');
        } else if (token == true) {
          this.$router.get('/login');
          alert('Anda Sudah Login')
        }

        // Save token to localStorage
        localStorage.setItem("token", token);

        commit("SET_TOKEN", token);
        console.log("Token saved:", token);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem("token");
      localStorage.removeItem("token");
      commit("SET_TOKEN", "");
      // Log token removed
      console.log("Token removed:", token);
      window.location.href = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
};

export default auth;