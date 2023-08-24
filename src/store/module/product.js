import axios from "axios";

const product = {
  namespaced: true,
  state : {
    dataProducts: [],
    getproductid : [],
    addCart: [],
  },
  getters: {
    getProducts: (state) => state.dataProducts,
    getCartadd: (state) => state.addCart,
  },
  actions: {
    async fetchProducts({
      commit
    }) {
      try {
        const data =
          await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/search")
        commit('SET_PRODUCTS', data.data)
      } catch (error) {
        alert('Ada Error');
        console.log(error);
      }
    },
    async fetchProductsId({commit }, slug) {
      try {
        const data =
          await axios.get(`https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`)
        commit('SET_PRODUCTSID', data.data)
      } catch (error) {
        alert('Ada ERROR');
        console.log(error);
      }
    },
      async addToCart({ commit } , data ) {
    try {
      const response = await axios.post(
        `https://ecommerce.olipiskandar.com/api/v1/carts/add`,
        {
            "variation_id": data.variation_id,
            "qty": data.qty,
            // "temp_user_id": null,
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

      console.log(response.data);
      commit("ADD_TO_CART", response.data);
    } catch (error) {
      console.error(error);
    }
  },
  },
  mutations: {
    SET_PRODUCTS(state, product) {
      state.dataProducts = product
    },
    SET_PRODUCTSID(state, product) {
      state.getproductid = product
    },
    ADD_TO_CART(state, addtoCart) {
      state.addCart = addtoCart;
    },
  },
}

export default product;