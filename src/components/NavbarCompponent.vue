<template>
  <!-- component -->
  <div class="text dark:bg-gray-900">
    <div>
      <div class="relative">
        <!-- For md screen size -->
        <!-- <div id="md-searchbar"
          class="bg-white dark:bg-white hidden lg:hidden py-5 px-6 items-center justify-between shadow-lg">
          <div class="flex items-center space-x-3 text-green-600 hover:text-green-800 dark:text-white">
            <div>
              <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" stroke-width="1.25"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <input type="text" placeholder="Search for products"
              class="text-sm bg-white leading-none dark:text-gray-300 dark:bg-[#a1cd46} text-green-600 hover:text-green-800 focus:outline-none" />
          </div>
          <div class="space-x-6">
            <button aria-label="view favourites"
              class="text-green-600 hover:text-green-800 dark:text-white focus:outline-none">
              <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button aria-label="go to cart"
              class="text-green-600 hover:text-green-800 dark:text-white focus:outline-none">
              <svg class="fill-stroke" width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z"
                  stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 4.2002H17" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999"
                  stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div v-if="cartGetData.cart_items != undefined && cartGetData.cart_items.data.length > 0">
                             <span class="absolute -top-2 left-5 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                              {{ cartGetData.cart_items.data.length }}
                          </span>
                </div>
            </button>
            <button aria-label="user"
              class="text-green-600 hover:text-green-800 dark:hover:text-gray-300 dark:text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </button>
          </div>
        </div> -->
        <!-- For md screen size -->

        <!-- For large screens -->
        <div class="dark:bg-[#a1cd46} bg-white px-6 py-6 shadow-lg">
          <div class="container mx-auto flex items-center justify-between">
            <RouterLink to="/">
            <h1 class="text-2xl cursor-pointer dark:text-white"
              aria-label="the Crib.">
              <h1 class="logo text-green-600 hover:text-[#002D74]">Green<span class="text-[#002D74] hover:text-green-600">Grosir</span></h1>
            </h1>
          </RouterLink>
            <ul class="hidden w-8/12 md:flex items-center justify-center space-x-8">
              <RouterLink to="/">
                <li>
                  <a href="javascript:void(0)"
                    class="dark:text-white text-bold text-green-600 hover:text-green-800 focus:outline-none hover:underline"><b>Home</b></a>
                </li>
              </RouterLink>
              <RouterLink to="/product">
                <li>
                  <a href="javascript:void(0)"
                    class="dark:text-white text-bold text-green-600 hover:text-green-800 focus:outline-none hover:underline"><b>Product</b></a>
                </li>
              </RouterLink>
              <RouterLink to="/categori">
                <li>
                  <a href="javascript:void(0)"
                    class="dark:text-white text-bold text-green-600 hover:text-green-800 focus:outline-none hover:underline"><b>Categories</b></a>
                </li>
              </RouterLink>
              <RouterLink to="/brand">
                <li>
                  <a href="javascript:void(0)"
                    class="dark:text-white text-bold text-green-600 hover:text-green-800 focus:outline-none hover:underline"><b>Brand</b></a>
                </li>
              </RouterLink>
            </ul>
            <div v-if="isAuthenticated" class=" justify-end flex items-center space-x-4 xl:space-x-8">
              <div class="hidden lg:flex items-center space-x-4 xl:space-x-8">
                <RouterLink to="/">
                  <button aria-label="view favourites"
                    class="text-green-600 hover:text-green-800 dark:hover:text-gray-300 dark:text-white focus:outline-none">
                    <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </RouterLink>
                <RouterLink to="/cart">
                  <div class="flex items-center justify-center bg-white">
                    <div class="relative scale-75">
                      <button aria-label="go to cart"
                    class="text-green-600 hover:text-green-800 dark:hover:text-gray-300 dark:text-white focus:outline-none">
                    <svg class="fill-stroke" width="26" height="26" viewBox="0 0 26 26" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1 5.7998H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div v-if="cartGetData.cart_items != undefined && cartGetData.cart_items.data.length > 0">
                             <span class="absolute -top-2 left-5 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                              {{ cartGetData.cart_items.data.length }}
                          </span>
                        </div>
                  </button>
                </div>
                  </div>

                </RouterLink>
                <RouterLink to="/user">
                  <button aria-label="user"
                    class="text-green-600 hover:text-green-800 dark:hover:text-gray-300 dark:text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                      class="bi bi-person-circle" viewBox="0 0 16 16">
                      <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                  </button>
                </RouterLink>
              </div>
              <button @click="logout" type="button"
                class="block lg:inline-block text-md font-bold  text-green-600 sm:hover:border-indigo-400  hover:text-green-700 mx-2 focus:text-[#ff8906]  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                LOGOUT
              </button>
              <button aria-label="open menu" onclick="openMenu()"
                class="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none rounded focus:ring-green-600 hover:text-green-700">
                <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M10 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M6 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div v-else class="flex md:order-2">
              <router-link to="/login" type="button"
                class="block lg:inline-block text-md font-bold  text-green-600 sm:hover:border-indigo-400  hover:text-green-700 mx-2 focus:text-[bg-green-800]  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                LOGIN
              </router-link>
              <router-link to="/signup" type="button"
                class="block lg:inline-block text-md font-bold  text-green-600 sm:hover:border-indigo-400  hover:text-green-700 mx-2 focus:text-[bg-green-800]  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                SIGN UP
              </router-link>
            </div>
          </div>
        </div>
        <!-- For small screen -->
        <div id="mobile-menu">
        <div v-if="isAuthenticated"
          class="hidden absolute dark:bg-[#a1cd46} z-10 inset-0 md:hidden bg-white flex flex-col h-screen w-full">
          <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
            <div class="flex items-center space-x-3">
              <div>
                <svg class="fill-stroke text-green-600 hover:text-green-800 dark:text-white" width="20" height="20"
                  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" stroke-width="1.25"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <input type="text" placeholder="Search for products"
                class="text-sm bg-white dark:bg-[#a1cd46} text-green-600  placeholder-green-600 hover:text-green-800 dark:placeholder-gray-300 focus:outline-none" />
            </div>

            <button onclick="closeMenu()" aria-label="close menu"
              class="focus:outline-none rounded focus:ring-green-600 hover:text-green-700">
              <svg class="fill-stroke text-green-600 hover:text-green-800 dark:text-white" width="16" height="16"
                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 4L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="mt-6 p-4">
            <ul class="flex flex-col space-y-6">
              <RouterLink to="/">
              <li>
                <a href="javascript:void(0)"
                  class="dark:text-white flex items-center justify-between hover:underline text-bold text-green-600 hover:text-green-800 focus:outline-none">
                  Home
                  <div>
                    <svg class="fill-stroke text-black dark:text-white" width="12" height="12" viewBox="0 0 12 12"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="0.75" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
            </RouterLink>
            <RouterLink to="/product">
              <li>
                <a href="javascript:void(0)"
                  class="dark:text-white flex items-center justify-between hover:underline text-bold text-green-600 hover:text-green-800 focus:outline-none">
                  Product
                  <div>
                    <svg class="fill-stroke text-black dark:text-white" width="12" height="12" viewBox="0 0 12 12"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="0.75" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
            </RouterLink>
            <RouterLink to="/categori">
              <li>
                <a href="javascript:void(0)"
                  class="dark:text-white flex items-center justify-between hover:underline text-bold text-green-600 hover:text-green-800 focus:outline-none">
                  Categori
                  <div>
                    <svg class="fill-stroke text-black dark:text-white" width="12" height="12" viewBox="0 0 12 12"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="0.75" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
            </RouterLink>
            <RouterLink to="/brand">
              <li>
                <a href="javascript:void(0)"
                  class="dark:text-white flex items-center justify-between hover:underline text-bold text-green-600 hover:text-green-800 focus:outline-none">
                  Brand
                  <div>
                    <svg class="fill-stroke text-black dark:text-white" width="12" height="12" viewBox="0 0 12 12"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="0.75" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
            </RouterLink>
            </ul>
        </div>
        <div class="flex items-end">
          <ul class="flex flex-col space-y-8 bg-white w-full py-10 p-4 dark:bg-gray-800">
            <RouterLink to="/cart">
            <li>
              <a href="javascript:void(0)"
                class="dark:text-white text-green-600 hover:text-green-800 flex items-center space-x-2 focus:outline-none hover:underline">
                <div>
                  <svg class="fill-stroke" width="22" height="22" viewBox="0 0 22 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                      stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 5H21" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path
                      d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                      stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <p class="text-bold">Cart</p>
              </a>
            </li>
          </RouterLink>
            <li>
              <a href="javascript:void(0)"
                class="dark:text-white text-green-600 hover:text-green-800 flex items-center space-x-2 focus:outline-none hover:underline">
                <div>
                  <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <p class="text-bold">Wishlist</p>
              </a>
            </li>
            <RouterLink to="/user">
            <li>
              <a href="javascript:void(0)"
                class="dark:text-white text-green-600 hover:text-green-800 flex items-center space-x-2 focus:outline-none hover:underline">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                    class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </div>
                <p class="text-bold">User</p>
              </a>
            </li>
          </RouterLink>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rowdies&display=swap');

.text {
  font-family: 'Poppins', sans-serif;
}

.logo {
  font-family: 'Rowdies', cursive;
}</style>
<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
        ...mapState('cart', ['cartGetData'])
    },
    mounted() {
        this.$store.dispatch("cart/fetchgetCartData", localStorage.getItem('token'));
    },
    methods: {
        ...mapActions('auth', ['logout']),
    },
    components: { RouterLink }
};
</script>