<template>
  <div class="welcome">
    <div 
    class="logo animate__animated animate__fadeIn" 
    style="position: relative;">
      <v-icon class="p-icon">mdi-message-text</v-icon>
      <v-icon medium class="m-icon">mdi-alpha-m</v-icon>
    </div>
    <div class="title mt-1 animate__animated animate__fadeIn">
      <h2>PMgram</h2>
      <p class="pt-1">Free, Fast And Secure</p>
    </div>
    <br>
    <br>
    <v-btn 
    class="btn bc-secondary c-primary pt-2 animate__animated animate__fadeIn" 
    @click="goToRegisterPage()">start</v-btn>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods:{
        goToRegisterPage(){
          this.$router.push("/register");
        },
    },
}
</script>