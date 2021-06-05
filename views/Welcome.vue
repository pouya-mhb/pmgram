<template>
  <div>
    <h1>Welcome to PMgram</h1>
    <br>
    <v-btn @click="goToLoginPage()" color="primary" elevation="10">login</v-btn>
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
        goToLoginPage(){
            router.push("/login");
        },
    },
}
</script>
