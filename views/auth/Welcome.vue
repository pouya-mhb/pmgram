<template>
  <div class="welcome">
    <div class="logo animated fadeIn">
      <v-icon class="p-icon">mdi-message-text</v-icon>
      <v-icon medium class="m-icon">mdi-alpha-m</v-icon>
    </div>
    <div class="title animated fadeIn mt-1">
      <h2>PMgram</h2>
      <p class="pt-1">Free, Fast And Secure</p>
    </div>
    <br />
    <br />
    <v-btn
      class="btn bc-secondary c-primary animated fadeIn"
      @click="goToRegisterPage()"
      >start</v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    goToRegisterPage() {
      this.$router.push("/register");
    },
  },
};
</script>
