<template>
  <div class="searchPage">
    <v-card class="card" flat tile>
      <v-toolbar color="#232F34" dark>
        <v-icon @click="goToHome()">mdi-arrow-left</v-icon>
        <Search />
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import Search from "./../src/components/SearchBar.vue";
export default {
  components: {
    Search,
  },
  data() {
    return {};
  },
  methods:{
      goToHome(){
          this.$router.push("/home");
      },
  }
};
</script>
