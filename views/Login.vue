<template>
  <div class="login">
    <v-card class="card" flat tile>
      <v-toolbar color="#232F34" dark>
        <v-icon @click="goToSignUp()">mdi-arrow-left</v-icon>
        <v-toolbar-title class="pl-8">Login</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <br />
    <br />
    <div 
    class="bc-primary animate__animated animate__fadeIn" 
    style="width:80vw">
      <v-text-field
        ref="email"
        v-model="login.email"
        autocomplete="off"
        label="Username"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
      <v-text-field
        ref="password"
        v-model="login.password"
        autocomplete="off"
        type="password"
        label="Password"
        color="#F9AA33"
        required
        dark
      ></v-text-field>
    </div>
    <br />
    <br />
    <v-btn 
    class="btn bc-secondary c-primary animate__animated animate__fadeIn"
      >Login</v-btn
    >
    <br />
    <p class="goToSignUp animate__animated animate__fadeIn">
      <a>Forgot password?</a>
    </p>
    <p @click="goToHome()" class="goToSignUp animate__animated animate__fadeIn">
      <a class="c-third">Home</a>
    </p>
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      login:{},
    }
  },
  methods:{
    goToSignUp(){
      this.$router.push("/register");
    },
    goToHome(){
      this.$router.push("/home");
    }
  }
}
</script>
