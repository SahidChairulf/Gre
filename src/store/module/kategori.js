import axios from "axios";

const categori = {
  namespaced: true,
  state: {
    categoriData: [],
  },

  getters: {
    getCategori: (state) => state.categoriData,
  },
  actions: {
    async fetchCategori({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-categories");
        commit("SET_CATEGORIES", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_CATEGORIES(state, categori) {
      state.categoriData = categori;
    },
  },
};

export default categori;