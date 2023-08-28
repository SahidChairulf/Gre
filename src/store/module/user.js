import axios from "axios";

const user = {
  namespaced: true,
  state: {
    userData: [],
    userAddres: [],
  },
  getters: {
    getUser: (state) => state.userData,
    getAddres: (state) => state.userAddres
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/info",
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        );
        // console.log(data.data)
        commit("SET_USER", data.data['user']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchUserAddress({ commit }) {
      try {
        const getUserAddres = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/addresses",
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        );
        // console.log(getUserAddres.data.data)
        commit("SET_USER_ADDRESS", getUserAddres.data);
        return getUserAddres.data
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.userData = user;
    },
    SET_USER_ADDRESS(state, user) {
      state.userAddres = user;
    },
  },
};

export default user;