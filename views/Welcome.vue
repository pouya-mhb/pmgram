<template>
  <div class="welcome">
    <div class="logo" style="position: relative;">
      <v-icon class="p-icon">mdi-message-text</v-icon>
      <v-icon medium class="m-icon">mdi-alpha-m</v-icon>
    </div>
    <div class="title">
      <h2>PMgram</h2>
      <p class="pt-1">Free, Fast And Secure</p>
    </div>
    <br>
    <br>
    <v-btn class="btn bc-secondary c-primary" @click="goToRegisterPage()">start</v-btn>
  </div>
</template>

<script>
import router from './../router'
export default {
    data() {
        return {

        }
    },

    methods:{
        goToRegisterPage(){
            router.push("/register");
        },
    },
}
</script>
