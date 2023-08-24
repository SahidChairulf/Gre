<template>
<!-- Container -->
<div class="flex flex-wrap w-full min-h-screen content-center justify-center py-10 bg-gray-100">
  
  <!-- Login component -->
  <div class="flex shadow-lg">
    <!-- Login form -->
    <div class="flex flex-wrap content-center justify-center rounded-l-md bg-white" style="width: 24rem; height: 32rem;">
      <div class="w-72">
        <!-- Heading -->
        <h1 class="text-xl font-semibold">Welcome back</h1>
        <small class="text-gray-400">Welcome back! Please enter your details</small>

        <!-- Form -->
        <form class="mt-4" @submit.prevent="performLogin">
          <div class="mb-3">
            <label class="mb-2 block text-xs font-semibold">Email</label>
            <input type="text" v-model="email" placeholder="Enter your email" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>

          <div class="mb-3">
            <label class="mb-2 block text-xs font-semibold">Password</label>
            <input type="password" v-model="password" placeholder="*****" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>

          <div class="mb-3 flex flex-wrap content-center">
            <input id="remember" type="checkbox" class="mr-1 checked:bg-purple-700" /> <label for="remember" class="mr-auto text-xs font-semibold">Remember me</label>
            <a href="#" class="text-xs font-semibold text-purple-700">Forgot password?</a>
          </div>

          <div class="mb-3">
            <button type="submit" class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign in</button>
            <button class="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
              <img class="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA">
              Sign in with Google
            </button>
          </div>
          <!-- Footer -->
        <div class="text-center">
          <span class="text-xs text-gray-400 font-semibold">Don't have account?</span>
          <button class="text-xs font-semibold text-purple-700">Sign Up</button>
        </div>
        </form>
      </div>
    </div>

    <!-- Login banner -->
    <div class="flex flex-wrap content-center justify-center rounded-r-md" style="width: 24rem; height: 32rem;">
      <img class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg">
    </div>

  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        async performLogin() {
            const credentials = {
                email: this.email,
                password: this.password,
            };

            const success = await this.login(credentials);

            if (success) {
                // Redirect to the desired route on successful login
                this.$router.push('/');
            } else {
                alert("Login Failed");
            }
        },
    },
};
</script>