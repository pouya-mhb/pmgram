<template>
  <div class="contacts">
    <v-card class="card" flat tile>
      <v-toolbar color="#232F34" dark>
        <!-- the left icon when search is false -->
        <v-icon v-show="!search" @click="goToHome()">mdi-arrow-left</v-icon>
        <!-- the left icon when search is true -->
        <v-icon v-show="search" @click="search = false" color="#F9AA33"
          >mdi-arrow-left</v-icon
        >
        <Search v-show="search" />
        <v-toolbar-title v-show="!search" class="pl-8"
          >Contacts</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-icon
          v-show="!search"
          @click="goToNewContact()"
          class="mr-8"
          style="font-size: 26px"
          >mdi-account-plus-outline</v-icon
        >
        <v-icon v-show="!search" @click="search = !search">mdi-magnify</v-icon>
      </v-toolbar>
    </v-card>

    <div class="contacts animated fadeIn">
      {{ word }}
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
const Search = () => import("@/components/SearchBar");
export default {
  components: {
    Search,
  },
  props: ["word"],
  data() {
    return {
      search: false,
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
    goToNewContact() {
      this.$router.push("/newContact");
    },
  },
  computed: {
    computedContacts() {
      let filter;
      filter = this.contacts.filter((x) => x.name.includes(this.filter));
      return filter;
    },
  },
};
</script>
