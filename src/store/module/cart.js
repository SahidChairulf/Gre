import axios from "axios";

const cart = {
    namespaced: true,
    state: {
        // cartData: [],
        cartGetData: [],
    },
    getters: {
        // getCart: (state) => state.cartData,
        getCartData: (state) => state.cartGetData,
    },
    actions: {
        // async fetchCartData({ commit }, token) {

        //     try {
        //         const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
        //             {
        //                 Sahid : null
        //             },
        //             {
        //                 headers: {
        //                     Authorization: `Bearer ${token}`
        //                 }
        //             });
        //         // console.log(response.data);
        //         commit("CART_INFO", response.data);
        //     }
        //     catch (err) {
        //         console.log(err);
        //         console.log({ success: false, err });
        //         commit("CART_INFO", { success: false, err });
        //     }
        // },
        async fetchgetCartData({ commit }, token) {

          try {
              const response = await axios.post('https://ecommerce.olipiskandar.com/api/v1/carts',
                  {
                      Sahid : null
                  },
                  {
                      headers: {
                          Authorization: `Bearer ${token}`
                      }
                  });
            //   console.log(response.data);
              commit("CART_INFO_ITEM", response.data);
          }
          catch (err) {
              console.log(err);
              console.log({ success: false, err });
              commit("CART_INFO_ITEM", { success: false, err });
          }
      },
    },
    mutations: {
        // CART_INFO(state, cart) {
        //     state.cartData = cart;
        // },
        CART_INFO_ITEM(state, cartInfo) {
          state.cartGetData = cartInfo;
        },
    }
}

export default cart;