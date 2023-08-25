<template>
    <div v-if="getproductid.data == undefined">
    <div class="w-full h-screen bg-transparent text-green-600 grid grid-cols-1 grid-rows-1 place-items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
      <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
    </svg>
    </div>
    </div>
    <div v-else>
    <main class="my-8">
        <div class="container h-screen mx-auto px-6">
            <div class="md:flex md:items-center">
                <div class="w-full h-64 md:w-1/2 lg:h-96">
                    <img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1328.jpg?size=626&ext=jpg&ga=GA1.1.1506769116.1690802231&semt=ais" class="h-full w-full rounded-md object-cover max-w-lg mx-auto">
                </div>
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 class="text-black uppercase text-lg">{{ getproductid.data.name }}</h3>
                    <span class="text-black mt-3">$125</span>
                    <hr class="my-3">
                    <div class="mt-2">
                        <label class="text-black text-sm" for="count">Count:</label>
                        <div class="flex items-center mt-1">
                            <button class="text-black focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <span class="text-black text-lg mx-2">20</span>
                            <button class="text-black focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label class="text-black text-sm" for="count">Color:</label>
                        <div class="flex items-center mt-1">
                            <button class="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                            <button class="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
                        </div>
                    </div>
                    <div class="flex items-center mt-6">
                        <!-- <div v-if="isAuthenticated"> -->
                        <button v-if="isAuthenticated" @click="addToCart({ variation_id : getproductid.data.variations[0].id,qty:1})" class="px-8 py-2 bg-green-500 text-black text-sm font-medium rounded hover:bg-green-800 focus:outline-none focus:bg-green-600">Order Now</button>
                        <button v-else @click="$router.push('/login')" class="px-8 py-2 bg-green-500 text-black text-sm font-medium rounded hover:bg-green-800 focus:outline-none focus:bg-green-600">Order Now</button>
                        <!-- </div> -->
                    <!-- <div v-else>
                        <button class="px-8 py-2 bg-green-500 text-black text-sm font-medium rounded hover:bg-green-800 focus:outline-none focus:bg-green-600">Order Now</button>
                    </div> -->
                        <button v-if="isAuthenticated" @click="$router.push('/cart')" class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                        <button v-else @click="$router.push('/login')" class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
</template>
<script>
import { mapState,mapGetters, mapActions } from 'vuex';
    export default {
    props: [
        'slug'
    ],
    mounted() {
        this.$store.dispatch("product/fetchProductsId", this.slug)
    },
    methods:{
        ...mapActions('cart' , ['addToCart']),
    },
    computed: {
        // ...mapState('product', ['addCart']),
        ...mapState('product', ['getproductid']),
        ...mapGetters('auth', ['isAuthenticated'])
    },
}
</script>