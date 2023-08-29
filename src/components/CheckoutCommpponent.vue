<style>
/*
module.exports = {
    plugins: [require('@tailwindcss/forms'),]
};
*/
.form-radio {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    flex-shrink: 0;
    border-radius: 100%;
    border-width: 2px;
}

.form-radio:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
    border-color: transparent;
    background-color: currentColor;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
<template>
    <!-- component -->


    <div class="min-w-screen min-h-screen bg-gray-50 py-5">
        <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
            <div class="w-full">
                <div class="-mx-3 md:flex items-start">
                    <div class="px-3 md:w-7/12 lg:pr-10">
                        <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6"
                            v-for="(cart) in getCartData.cart_items.data" :key="cart.id">
                            <div class="w-full flex items-center">
                                <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                    <img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1328.jpg?size=626&ext=jpg&ga=GA1.1.1506769116.1690802231&semt=ais"
                                        alt="">
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-semibold uppercase text-gray-600">{{ cart.name }}</h6>
                                    <p class="text-gray-400">x {{ cart.qty }}</p>
                                    <p class="text-gray-500 font-semibold">price: ${{ cart.regular_price }}</p>
                                </div>
                                <div>
                                    <span class="font-semibold text-gray-600 text-xl">${{ cart.regular_price * cart.qty
                                    }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="mb-6 pb-6 border-b border-gray-200">
                            <div class="-mx-2 flex items-end justify-end">
                                <div class="flex-grow px-2 lg:max-w-xs">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                                    <div>
                                        <input
                                            class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors"
                                            placeholder="XXXXXX" type="text" />
                                    </div>
                                </div>
                                <div class="px-2">
                                    <button
                                        class="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                                </div>
                            </div>
                        </div> -->
                        <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                            <div class="w-full flex mb-3 items-center">
                                <div class="flex-grow">
                                    <span class="text-gray-600">Subtotal</span>
                                </div>
                                <div class="pl-3">
                                    <span class="font-semibold">${{ getSubtotal }}</span>
                                </div>
                            </div>
                            <div class="w-full flex items-center">
                                <div class="flex-grow">
                                    <span class="text-gray-600">Delivery</span>
                                </div>
                                <div class="pl-3">
                                    <span class="font-semibold">-$8.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                            <div class="w-full flex items-center">
                                <div class="flex-grow">
                                    <span class="text-gray-600">Total</span>
                                </div>
                                <div class="pl-3">
                                    <span class="font-semibold text-gray-400 text-sm">IDR</span> <span
                                        class="font-semibold">${{ getTotal }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 md:w-5/12">
                        <div
                            class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-3 items-center">
                                <div class="w-32">
                                    <span class="text-gray-600 font-semibold">Recipient's Name</span>
                                </div>
                                <div class="flex-grow pl-3">
                                    <span>{{ getUser.name }}</span>
                                </div>
                            </div>
                            <div class="w-full flex items-center">
                                <div class="w-32">
                                    <span class="text-gray-600 font-semibold">Billing Address</span>
                                </div>
                                <div class="flex-grow pl-3" v-for="(address) in getAddres.data" :key="address.id">
                                    <span>{{ address.address }},{{ address.postal_code }}<br>{{ address.city
                                    }},{{ address.state }},{{ address.country }},{{ address.phone}}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                            <div class="w-full p-3 border-b border-gray-200">
                                <form class="mt-5 grid gap-6">
                                    <div class="relative">
                                        <input class="peer hidden" id="radio_1" type="radio" value="standard"
                                            v-model="deliveryType" />
                                        <span
                                            class="peer-checked:border-green-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                        <label
                                            class="peer-checked:border-2 peer-checked:border-green-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                            for="radio_1">
                                            <img class="w-14 object-contain"
                                                src="https://componentland.com/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                                            <div class="ml-5">
                                                <span class="mt-2 font-semibold">Fedex Delivery - Standard</span>
                                                <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="relative">
                                        <input class="peer hidden" id="radio_2" type="radio" value="express"
                                            v-model="deliveryType" />
                                        <span
                                            class="peer-checked:border-green-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                        <label
                                            class="peer-checked:border-2 peer-checked:border-green-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                            for="radio_2">
                                            <img class="w-14 object-contain"
                                                src="https://componentland.com/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                                            <div class="ml-5">
                                                <span class="mt-2 font-semibold">Fedex Delivery - Express</span>
                                                <p class="text-slate-500 text-sm leading-6">Delivery: 1-2 Days</p>
                                            </div>
                                        </label>
                                    </div>
                                </form>
                            </div>

                            <div class="w-full p-3">
                                <label for="type2" class="flex items-center cursor-pointer">
                                    <input type="radio" v-model="paymentType" value="cash_on_delivery"
                                        class="cursor-pointer form-radio h-5 w-5 text-green-500" name="type" id="type2">
                                    <img src="https://img.freepik.com/premium-vector/cash-delivery_569841-176.jpg?size=626&ext=jpg&ga=GA1.2.1506769116.1690802231&semt=ais"
                                        width="80" class="ml-3" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                @click="performCheckout"
                                class="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-2 font-semibold"><i
                                class="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            paymentType: '',
            deliveryType: '',
        };
    },
    computed: {
        ...mapState('cart', ['cartGetData']),
        ...mapGetters('user', ['getUser', 'getAddres']),
        ...mapGetters('cart', ['getCartData'] ),
        getSubtotal() {
            return this.cartGetData.cart_items.data.reduce(
                (a, b) => a + b.regular_price * b.qty,
                0
            )
        },
        // getDiscount() {
        //     return this.cartGetData.cart_items.data.reduce(
        //         (a, b) => a + b.dicounted_price,
        //         0
        //     )
        // },
        getTotal() {
            return this.cartGetData.cart_items.data.reduce(
                (a, b) => a + (b.regular_price * b.qty),
                80000
            )
        },
    },
    mounted() {
        this.$store.dispatch("cart/fetchgetCartData", localStorage.getItem('token'))
    },
    methods: {
        ...mapActions('user', ['fetchUser', 'fetchUserAddress']),
        ...mapActions('user' , ['getAddres']),
        async performCheckout() {
            // Collect the product IDs to be checked out
            const cartItemIds = this.getCartData.cart_items.data.map( (cart) => cart.cart_id);
            // Get user address
            const userAddressResponse = await this.$store.dispatch('user/fetchUserAddress');
            const userAddressId = userAddressResponse.data[0].id;

            const checkoutPayload = {
                shippingAddress: userAddressId,
                billingAddress: userAddressId,
                paymentType: this.paymentType,
                deliveryType: this.deliveryType,
                cart_item_ids: cartItemIds
            };

            // Call the checkout action with the collected IDs and user address
        await this.$store
        .dispatch('cart/checkoutCart', checkoutPayload)
        .then(() => {
          this.$router.push(`/order/${this.getCartData.order_code}`);
        });
        }
    },
    created() {
        this.fetchUser();
        this.fetchUserAddress();
    },
}; 
</script>