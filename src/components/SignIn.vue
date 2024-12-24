<!-- src/components/SignIn.vue -->
<template>
  <div
    class="flex items-center justify-center grow bg-center bg-no-repeat page-bg"
  >
    <div class="card max-w-[370px] w-full">
      <form
        @submit.prevent="submitForm"
        class="card-body flex flex-col gap-5 p-10"
        id="sign_in_form"
      >
        <div class="text-center mb-2.5">
          <h3 class="text-lg font-medium text-gray-900 leading-none mb-2.5">
            Sign in
          </h3>
          <div class="flex items-center justify-center font-medium">
            <span class="text-2sm text-gray-700 me-1.5">Need an account?</span>
            <router-link to="/sign-up" class="text-2sm link"
              >Sign up</router-link
            >
          </div>
        </div>

        <!-- Google and Apple Sign-in Buttons -->
        <div class="grid grid-cols-2 gap-2.5">
          <button
            @click="useGoogle"
            class="btn btn-light btn-sm justify-center"
          >
            <img
              alt=""
              class="size-3.5 shrink-0"
              src="@/assets/images/google.svg"
            />
            Use Google
          </button>
          <button @click="useApple" class="btn btn-light btn-sm justify-center">
            <img
              alt=""
              class="size-3.5 shrink-0 dark:hidden"
              src="@/assets/images/apple-black.svg"
            />
            <img
              alt=""
              class="size-3.5 shrink-0 light:hidden"
              src="@/assets/images/apple-white.svg"
            />
            Use Apple
          </button>
        </div>

        <div class="flex items-center gap-2">
          <span class="border-t border-gray-200 w-full"></span>
          <span class="text-2xs text-gray-500 font-medium uppercase">Or</span>
          <span class="border-t border-gray-200 w-full"></span>
        </div>

        <!-- Email Input -->
        <div class="flex flex-col gap-1">
          <label class="form-label font-normal text-gray-900">Email</label>
          <input
            v-model="email"
            class="input"
            placeholder="email@email.com"
            type="email"
          />
        </div>

        <!-- Password Input -->
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between gap-1">
            <label class="form-label font-normal text-gray-900">Password</label>
            <router-link to="/reset-password" class="text-2sm link"
              >Forgot Password?</router-link
            >
          </div>
          <div class="input" data-toggle-password="true">
            <input
              v-model="password"
              name="user_password"
              placeholder="Enter Password"
              type="password"
            />
            <button
              class="btn btn-icon"
              data-toggle-password-trigger="true"
              type="button"
            >
              <i
                class="ki-filled ki-eye text-gray-500 toggle-password-active:hidden"
              ></i>
              <i
                class="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"
              ></i>
            </button>
          </div>
        </div>

        <!-- Remember Me Checkbox -->
        <label class="checkbox-group">
          <input
            class="checkbox checkbox-sm"
            name="check"
            type="checkbox"
            v-model="rememberMe"
          />
          <span class="checkbox-label">Remember me</span>
        </label>

        <!-- Sign In Button -->
        <button type="submit" class="btn btn-primary flex justify-center grow">
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
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log(
        "Form submitted with:",
        this.email,
        this.password,
        this.rememberMe
      );
    },
    useGoogle() {
      // Handle Google sign-in
      console.log("Using Google login");
    },
    useApple() {
      // Handle Apple sign-in
      console.log("Using Apple login");
    },
  },
};
</script>

<style scoped>
.page-bg {
  background-image: url("@/assets/images/bg-10.png");
}

.dark .page-bg {
  background-image: url("@/assets/images/bg-10-dark.png");
}
</style>
