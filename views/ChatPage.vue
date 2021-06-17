<template>
  <div class="chat-page">
    <v-card class="card animate__animated animate__fadeIn" flat tile>
      <v-toolbar height="60px" color="#232F34" dark>
        <v-icon @click="goToLogin()">mdi-arrow-left</v-icon>
        <v-img
          max-height="40"
          max-width="40"
          src="./../src/assets/images/1.png"
          class="contact-img"
        ></v-img>
        <h3 class="contact-name">Pouya</h3>
        <v-spacer></v-spacer>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
      goToLogin(){
          this.$router.push("/login");
      },
  }
};
</script>

