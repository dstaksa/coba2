<template>
  <div
    class="flex items-center justify-center grow bg-center bg-no-repeat page-bg"
  >
    <div class="card max-w-[370px] w-full">
      <form
        @submit.prevent="handleSubmit"
        class="card-body flex flex-col gap-5 p-10"
        id="sign_in_form"
      >
        <div class="text-center mb-2.5">
          <h3 class="text-lg font-medium text-gray-900 leading-none mb-2.5">
            Sign in
          </h3>
          <div class="flex items-center justify-center font-medium">
            <span class="text-2sm text-gray-700 me-1.5">Need an account?</span>
            <router-link
              class="text-2sm link"
              to="https://keenthemes.com/metronic/tailwind/demo1/authentication/classic/sign-up/"
            >
              Sign up
            </router-link>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2.5">
          <a class="btn btn-light btn-sm justify-center" href="#">
            <img
              alt=""
              class="size-3.5 shrink-0"
              src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/brand-logos/google.svg"
            />
            Use Google
          </a>
          <a class="btn btn-light btn-sm justify-center" href="#">
            <img
              alt=""
              class="size-3.5 shrink-0 dark:hidden"
              src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/brand-logos/apple-black.svg"
            />
            <img
              alt=""
              class="size-3.5 shrink-0 light:hidden"
              src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/brand-logos/apple-white.svg"
            />
            Use Apple
          </a>
        </div>
        <div class="flex items-center gap-2">
          <span class="border-t border-gray-200 w-full"></span>
          <span class="text-2xs text-gray-500 font-medium uppercase">Or</span>
          <span class="border-t border-gray-200 w-full"></span>
        </div>
        <div class="flex flex-col gap-1">
          <label class="form-label font-normal text-gray-900">Email</label>
          <input
            v-model="email"
            class="input"
            placeholder="email@email.com"
            type="text"
          />
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between gap-1">
            <label class="form-label font-normal text-gray-900">Password</label>
            <router-link
              class="text-2sm link shrink-0"
              to="https://keenthemes.com/metronic/tailwind/demo1/authentication/classic/reset-password/enter-email/"
            >
              Forgot Password?
            </router-link>
          </div>
          <div class="input" :data-toggle-password="true">
            <input
              v-model="password"
              name="user_password"
              placeholder="Enter Password"
              type="password"
            />
            <button
              @click="togglePasswordVisibility"
              class="btn btn-icon"
              type="button"
            >
              <i
                v-if="isPasswordVisible"
                class="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"
              ></i>
              <i
                v-else
                class="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"
              ></i>
            </button>
          </div>
        </div>
        <label class="checkbox-group">
          <input
            v-model="rememberMe"
            class="checkbox checkbox-sm"
            name="check"
            type="checkbox"
            value="1"
          />
          <span class="checkbox-label">Remember me</span>
        </label>
        <button class="btn btn-primary flex justify-center grow" type="submit">
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      isPasswordVisible: false,
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here (e.g., validate, send request)
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Remember me:", this.rememberMe);
    },
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
  },
};
</script>

<style scoped>
.page-bg {
  background-image: url("https://keenthemes.com/static/metronic/tailwind/dist/assets/media/images/2600x1200/bg-10.png");
}
.dark .page-bg {
  background-image: url("https://keenthemes.com/static/metronic/tailwind/dist/assets/media/images/2600x1200/bg-10-dark.png");
}
</style>
