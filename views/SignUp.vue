<template>
  <div class="signUp">
    <v-card class="card" flat tile>
      <v-toolbar color="#232F34" dark>
        <v-icon @click="goToWelcome()">mdi-arrow-left</v-icon>
        <v-toolbar-title class="pl-8">Register</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <br />
    <div class="bc-primary animated fadeIn" style="width:80vw">
      <v-text-field
        ref="firstName"
        v-model="register.firstName"
        autocomplete="off"
        :rules="[() => !!register.firstName || 'This field is required']"
        label="First Name"
        color="#F9AA33"
        required
        dark
        class="pt-0"
      ></v-text-field>
      <v-text-field
        ref="lastName"
        v-model="register.lastName"
        autocomplete="off"
        :rules="[() => !!register.lastName || 'This field is required']"
        label="Last Name"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="userName"
        v-model="register.userName"
        autocomplete="off"
        :rules="[() => !!register.userName || 'This field is required']"
        label="User Name"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="email"
        v-model="register.email"
        autocomplete="off"
        :rules="[() => !!register.email || 'This field is required']"
        label="Email"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="password"
        v-model="register.password"
        autocomplete="off"
        type="password"
        :rules="[() => !!register.password || 'This field is required']"
        label="Password"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="confirmPassword"
        v-model="register.confirmPassword"
        autocomplete="off"
        type="password"
        :rules="[() => !!register.confirmPassword || 'This field is required']"
        label="Confirm Password"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
    </div>
    <br />
    <v-btn class="btn bc-secondary c-primary animated fadeIn">Submit</v-btn>
    <br />
    <p class="goToLogin animated fadeIn">
      <a @click="goToLogin()">Registered before?</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {},
    };
  },

  methods: {
    goToWelcome() {
      this.$router.push("/welcome");
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
