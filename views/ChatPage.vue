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
        <h3 class="contact-name">Name</h3>
        <v-spacer></v-spacer>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-toolbar>
    </v-card>

    <div class="no-message flex-center">
      <div class="box">
        <span class="px-4">There is no message yet...</span>
      </div>
    </div>

    <div class="message-box pb-0">
      <v-row class="pa-0">
        <v-col cols="10" class="py-0">
          <input
            v-model="message"
            class="input grey--text"
            type="text"
            placeholder="Write a message..."
          />
        </v-col>
        <v-col cols="2" class="pa-0">
          <v-icon :class="{'disabled':!message}" class="icon">mdi-send</v-icon>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:"",
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
