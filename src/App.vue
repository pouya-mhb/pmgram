<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&family=Ubuntu:wght@300;400&display=swap");
body {
  font-family: "Nunito";
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  font-family: "Nunito";
}
.animate__animated.animate__fadeIn {
  --animate-duration: 0.7s;
}

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
</style>
