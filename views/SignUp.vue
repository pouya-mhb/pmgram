<template>
  <div class="signUp">
    <v-card class="card animate__animated animate__fadeIn" flat tile>
      <v-toolbar color="#232F34" dark>
        <v-icon @click="goToWelcome()">mdi-arrow-left</v-icon>
        <v-toolbar-title class="pl-8 pt-2">Register</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <br />
    <br />
    <v-card 
    class="bc-primary animate__animated animate__fadeIn" 
    style="box-shadow: none !important; width:80vw">
      <v-text-field
        ref="firstName"
        v-model="firstName"
        autocomplete="off"
        :rules="[() => !!firstName || 'This field is required']"
        label="First Name"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="lastName"
        v-model="lastName"
        autocomplete="off"
        :rules="[() => !!lastName || 'This field is required']"
        label="Last Name"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="userName"
        v-model="userName"
        autocomplete="off"
        :rules="[() => !!userName || 'This field is required']"
        label="User Name"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="email"
        v-model="email"
        autocomplete="off"
        :rules="[() => !!email || 'This field is required']"
        label="Email"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="password"
        v-model="password"
        autocomplete="off"
        type="password"
        :rules="[() => !!password || 'This field is required']"
        label="Password"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="confirmPassword"
        v-model="confirmPassword"
        autocomplete="off"
        type="password"
        :rules="[() => !!confirmPassword || 'This field is required']"
        label="Confirm Password"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
    </v-card>
    <br />
    <v-btn 
    class="btn bc-secondary c-primary pt-1 animate__animated animate__fadeIn"
    @click="goToRegisterPage()"
      >Submit</v-btn
    >
    <br />
    <p class="goToLogin animate__animated animate__fadeIn">
      <a @click="goToLogin()">Registered before?</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  methods: {
    goToWelcome() {
      this.$router.push("/welcome");
    },
    goToLogin(){
      this.$router.push("/login");
    }
  },
};
</script>
