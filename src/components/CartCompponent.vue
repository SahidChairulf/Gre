<template>
  <div v-if="cartGetData.cart_items == undefined">
    <div class="w-full h-screen bg-transparent text-green-500 grid grid-cols-1 grid-rows-1 place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
        class="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
        <path
          d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
        <path fill-rule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
      </svg>
    </div>
  </div>
  <div v-else>
    <!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-3xl">
          <header class="text-center">
            <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div class="mt-8">
            <ul class="space-y-4">
              <li class="flex items-center gap-4" v-for="(product) in cartGetData.cart_items.data" :key="product.id">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt="" class="h-16 w-16 rounded object-cover" />

                <div>
                  <h3 class="text-sm text-gray-900">{{ product.name }} </h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt class="inline">Price:</dt>
                      <dd class="inline">£ {{ product.regular_price }}</dd>
                    </div>
                    <div>
                      <dt class="inline">Stock:</dt>
                      <dd class="inline">{{ product.stock }}</dd>
                    </div>

                    <div>
                      <dt class="inline">Color:</dt>
                      <dd class="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div class="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label for="Line1Qty" class="sr-only"> Quantity </label>

                    <input type="number" min="1" value="1" id="Line1Qty"
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                  </form>

                  <button class="text-gray-600 transition hover:text-red-600">
                    <span class="sr-only">Remove item</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>

            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="w-screen max-w-lg space-y-4">
                <dl class="space-y-0.5 text-sm text-gray-700">
                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>

                <div class="flex justify-end">
                  <span
                    class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                    </svg>

                    <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
                  </span>
                </div>

                <div class="flex justify-end">
                  <a href="#"
                    class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div class="relative mx-auto w-full bg-white">
  <div class="grid min-h-screen grid-cols-10">
    <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
      <div class="mx-auto w-full max-w-lg">
        <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span class="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
        <form action="" class="mt-10 flex flex-col space-y-4">
          <div><label for="email" class="text-xs font-semibold text-gray-500">Email</label><input type="email" id="email" name="email" placeholder="john.capler@fang.com" class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
          <div class="relative"><label for="card-number" class="text-xs font-semibold text-gray-500">Card number</label><input type="text" id="card-number" name="card-number" placeholder="1234-5678-XXXX-XXXX" class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /><img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" class="absolute bottom-3 right-3 max-h-4" /></div>
          <div>
            <p class="text-xs font-semibold text-gray-500">Expiration date</p>
            <div class="mr-6 flex flex-wrap">
              <div class="my-1">
                <label for="month" class="sr-only">Select expiration month</label
                ><select name="month" id="month" class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                  <option value="">Month</option>
                </select>
              </div>
              <div class="my-1 ml-3 mr-6">
                <label for="year" class="sr-only">Select expiration year</label
                ><select name="year" id="year" class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                  <option value="">Year</option>
                </select>
              </div>
              <div class="relative my-1"><label for="security-code" class="sr-only">Security code</label><input type="text" id="security-code" name="security-code" placeholder="Security code" class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
            </div>
          </div>
          <div><label for="card-name" class="sr-only">Card name</label><input type="text" id="card-name" name="card-name" placeholder="Name on the card" class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
        </form>
        <p class="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" class="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and Conditions</a></p>
        <button type="submit" class="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg">Place Order</button>
      </div>
    </div>
    <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
      <h2 class="sr-only">Order summary</h2>
      <div>
        <img src="https://source.unsplash.com/random/900×700/?3d-renders"  alt="" class="absolute inset-0 h-full w-full object-cover" />
        <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
      </div>
      <div class="relative">
        <ul class="space-y-5">
          <li class="flex justify-between" v-for="(product) in cartGetData.cart_items.data" :key="product.id">
            <div class="inline-flex">
              <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhaXIlMjBkcnllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" class="max-h-16" />
              <div class="ml-3">
                <p class="text-base font-semibold text-white">{{ product.name }}</p>
                <p class="text-sm font-medium text-white text-opacity-80">leftover items {{ product.stock }}</p>
              </div>
            </div>
            <p class="text-sm font-semibold text-white">${{ product.regular_price }}</p>
          </li>
        </ul>
        <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div class="space-y-2">
          <p class="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>$510.00</span></p>
          <p class="flex justify-between text-sm font-medium text-white"><span>Vat: 10%</span><span>$55.00</span></p>
        </div>
      </div>
      <div class="relative mt-10 text-white">
        <h3 class="mb-5 text-lg font-bold">Support</h3>
        <p class="text-sm font-semibold">+01 653 235 211 <span class="font-light">(International)</span></p>
        <p class="mt-1 text-sm font-semibold">support@nanohair.com <span class="font-light">(Email)</span></p>
        <p class="mt-2 text-xs font-medium">Call us now for payment related issues</p>
      </div>
      <div class="relative mt-10 flex">
        <p class="flex flex-col"><span class="text-sm font-bold text-white">Money Back Guarantee</span><span class="text-xs font-medium text-white">within 30 days of purchase</span></p>
      </div>
    </div>
  </div>
</div> -->
  </div>
</template>
<script>
;
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('cart', ['cartGetData'])
  },
  mounted() {
    this.$store.dispatch("cart/fetchgetCartData", localStorage.getItem('token'))
  },
};
</script>