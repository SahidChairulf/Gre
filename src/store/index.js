import { createStore } from "vuex";
import auth from "./module/auth";
import product from "./module/product";
import kategori from "./module/kategori"
import brand from "./module/brand";
import user from "./module/user";
import cart from "./module/cart";
import order from "./module/order";
const store = createStore({
  modules: {
    auth,
    product,
    kategori,
    brand,
    user,
    cart,
    order
  },
});

export default store;