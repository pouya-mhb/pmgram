<template>
  <div class="newMessage">
    <v-card class="card" flat tile>
      <v-toolbar color="#232F34" dark>
        <v-icon @click="goToHome()">mdi-arrow-left</v-icon>
        <v-toolbar-title class="pl-8">New Message</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <v-row class="search-box">
      <v-col cols="2" class="px-0 pb-0 flex-center">
        <span class="white--text">To: </span>
      </v-col>
      <v-col cols="10" class="pl-0 pb-0">
        <v-text-field
          v-model="filter"
          autofocus
          rounded
          dark
          autocomplete="off"
          placeholder="Enter a name..."
          id="filterInput"
          color="grey"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="contacts animated fadeIn">
      <div class="contact" v-for="(item, index) in contacts" :key="index">
        <img
          src="./../src/assets/images/1.png"
          class="contact-img float-left"
          @click="profile = true"
        />
        <h3 @click="openProfileModal()" class="contact-info">
          <span class="name">{{ item.name }}</span>
          <h6
            class="status pa-0"
            :class="{
              'green--text': item.status == 'Active',
              'grey--text': item.status == 'Invisible',
              'warning--text': item.status == 'Away',
              'error--text': item.status == 'Do not disturb',
            }"
          >
            {{ item.status }}
          </h6>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
      contacts: [
        { name: "Arash", status: "Away" },
        { name: "Ashkan", status: "Invisible" },
        { name: "Nima", status: "Active" },
        { name: "Parisa", status: "Active" },
        { name: "Parnia", status: "Invisible" },
        { name: "Pouya", status: "Do not disturb" },
        { name: "Romina", status: "Away" },
        { name: "Sarina", status: "Active" },
      ],
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style>
.v-input__slot {
  margin-top: 7px;
}
</style>
