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
      <div class="min-w-screen min-h-screen bg-gray-100">
      <div class="mx-auto bg-white ronded max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-3xl">
          <header class="text-center">
            <h1 class="text-xl font-bold text-green-600 sm:text-3xl">Your Cart</h1>
          </header>

          <div class="mt-8">
            <ul class="space-y-4">
              <li class="flex items-center gap-4" v-for="(cart) in cartGetData.cart_items.data" :key="cart.id">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt="" class="h-16 w-16 rounded object-cover" />

                <div>
                  <h3 class="text-sm text-gray-900">{{ cart.name }} </h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt class="inline">Price:</dt>
                      <dd class="inline">£ {{ cart.regular_price * cart.qty }}</dd>
                    </div>
                    <div>
                      <dt class="inline">Stock:</dt>
                      <dd class="inline">{{ cart.stock }}</dd>
                    </div>
                    <div>
                      <dt class="inline">qty:</dt>
                      <dd class="inline">{{ cart.qty }}</dd>
                    </div>
                    <div>
                      <dt class="inline">Color:</dt>
                      <dd class="inline">White</dd>
                    </div>

                  </dl>
                </div>
                <!-- {{ cart.cart_id }} -->
                <div class="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label for="Line1Qty" class="sr-only"> Count </label>
                    <div class="flex border-gray-100">
                            <span @click="fetchEditData({cart_id :cart.cart_id, type:'plus'})" class=" cursor-pointer text-black focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </span>
                            <span class="text-black focus:outline-none focus:text-gray-600 mx-2">{{ cart.qty }}</span>
                            <span @click="fetchEditData({cart_id :cart.cart_id, type:'minus'})" class="cursor-pointer text-black focus:outline-none focus:text-gray-600">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </span>
                    </div>
                    <!-- <input type="number" value="1" min="1" id="Line1Qty"
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" /> -->
                  </form>
                  <button @click="fetchDeleteData(cart.cart_id)" class="text-gray-600 transition hover:text-red-600">
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
                <!-- <dl class="space-y-0.5 text-sm text-gray-700">
                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£{{ getSubtotal }}</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£{{ getDiscount }}</dd>
                  </div>

                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£{{ getTotal }}</dd>
                  </div>
                </dl> -->

                <!-- <div class="flex justify-end">
                  <span
                    class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                    </svg>

                    <p class="whitespace-nowrap text-xs">1 Discounts Applied</p>
                  </span>
                </div> -->

                <div class="flex justify-end">
                  <!-- Button trigger modal -->
                  <a href="#"
                    class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    data-te-toggle="modal"
                    data-te-target="#exampleModal"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
<!-- Modal -->
<div
  data-te-modal-init
  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
    <div
      class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <!--Modal title-->
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalLabel">
          Modal title
        </h5>
        <!--Close button-->
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!--Modal body-->
      <div class="relative flex-auto p-4" data-te-modal-body-ref>
        <section>
      <div class="min-w-screen min-h-screen bg-gray-100">
      <div class="mx-auto bg-white ronded max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-3xl">

          <div class="mt-2">
            <ul class="space-y-4">
              <li class="flex items-center gap-4" v-for="(cart) in cartGetData.cart_items.data" :key="cart.id">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt="" class="h-16 w-16 rounded object-cover" />

                <div>
                  <h3 class="text-sm text-gray-900">{{ cart.name }} </h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt class="inline">Price:</dt>
                      <dd class="inline">£ {{ cart.regular_price * cart.qty }}</dd>
                    </div>
                    <div>
                      <dt class="inline">Stock:</dt>
                      <dd class="inline">{{ cart.stock }}</dd>
                    </div>
                    <div>
                      <dt class="inline">qty:</dt>
                      <dd class="inline">{{ cart.qty }}</dd>
                    </div>
                    <div>
                      <dt class="inline">Color:</dt>
                      <dd class="inline">White</dd>
                    </div>

                  </dl>
                </div>
              </li>
            </ul>

            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="w-screen max-w-lg space-y-4">
                <dl class="space-y-0.5 text-sm text-gray-700">
                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£{{ getSubtotal }}</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£{{ getDiscount }}</dd>
                  </div>

                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£{{ getTotal }}</dd>
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

                    <p class="whitespace-nowrap text-xs">1 Discounts Applied</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
      </div>

      <!--Modal footer-->
      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <button
          type="button"
          class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
;
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('cart', ['cartGetData']),
    getSubtotal() {
      return this.cartGetData.cart_items.data.reduce(
        (a, b) => a + b.regular_price * b.qty,
        0
      )
    },
    getDiscount() {
      return this.cartGetData.cart_items.data.reduce(
        (a, b) => a + b.dicounted_price,
        0
      )
    },
    getTotal() {
      return this.cartGetData.cart_items.data.reduce(
        (a, b) => a + b.regular_price * b.qty - b.dicounted_price,
        0
      )
    },
  },
  mounted() {
    this.$store.dispatch("cart/fetchgetCartData", localStorage.getItem('token'))
  },
  methods: {
    ...mapActions('cart', ['fetchDeleteData']),
    ...mapActions('cart', ['fetchEditData']),
  },
}; 
import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Modal, Ripple });
</script>