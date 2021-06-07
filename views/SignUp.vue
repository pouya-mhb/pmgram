<template>
  <div class="signUp">
    <v-card class="card" flat tile>
      <v-toolbar color="#232F34" dark>
        <v-icon @click="goToWelcome()">mdi-arrow-left</v-icon>
        <v-toolbar-title class="pl-8">Register</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <br />
    <br />
    <v-card class="bc-primary" style="box-shadow: none !important; width:80vw">
        <v-text-field
      ref="firstName"
      v-model="firstName"
      :rules="[() => !!firstName || 'This field is required']"
      :error-messages="errorMessages"
      label="First Name"
      color="#F9AA33"
      required
      dark 
    ></v-text-field>
    <v-text-field
      ref="lastName"
      v-model="lastName"
      :rules="[() => !!lastName || 'This field is required']"
      :error-messages="errorMessages"
      label="Last Name"
      color="#F9AA33"
      required
      dark   
    ></v-text-field>
    <v-text-field
      ref="userName"
      v-model="userName"
      :rules="[() => !!userName || 'This field is required']"
      :error-messages="errorMessages"
      label="User Name"
      color="#F9AA33"
      required
      dark 
    ></v-text-field>
    <v-text-field
      ref="email"
      v-model="email"
      :rules="[() => !!email || 'This field is required']"
      :error-messages="errorMessages"
      label="Email"
      color="#F9AA33"
      required
      dark 
    ></v-text-field>
    <v-text-field
      ref="password"
      v-model="password"
      :rules="[() => !!password || 'This field is required']"
      :error-messages="errorMessages"
      label="Password"
      color="#F9AA33"
      required
      dark 
    ></v-text-field>
    <v-text-field
      ref="confirmPassword"
      v-model="confirmPassword"
      :rules="[() => !!confirmPassword || 'This field is required']"
      :error-messages="errorMessages"
      label="Confirm Password"
      color="#F9AA33"
      required
      dark 
    ></v-text-field>
    </v-card>
    <v-btn class="btn bc-secondary c-primary" @click="goToRegisterPage()">Submit</v-btn>
    <!-- <p class="font-color">Login / Forget Password</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        firstName:'',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
  },

  methods: {
    goToWelcome() {
      setTimeout(() => {
        this.$router.push("/welcome");
      }, 500);
    },
  },
};
</script>
