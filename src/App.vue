<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&family=Montserrat:wght@100&display=swap');
 /* color: #2c3e50; */
body{
  font-family: 'Baloo Tammudu 2';
}
h1, h2, h3, h4, h5, h6, p, span{
  font-family: 'Baloo Tammudu 2';
}
.animate__animated.animate__fadeIn {
  --animate-duration: 0.7s;
}
</style>
