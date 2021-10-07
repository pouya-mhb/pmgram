<template>
  <div class="pa-4 grey lighten-3 fill-height">
    <v-text-field v-model="userName" placeholder="Username" type="text">
    </v-text-field>
    <v-text-field v-model="password" placeholder="Password" type="password">
    </v-text-field>
    <v-btn class="blue white--text" @click="register()">Register</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$http.post();
    },
  },
};
</script>
