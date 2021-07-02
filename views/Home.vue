<template>
  <div class="home">
    <v-card class="card" flat tile>
      <v-toolbar height="60px" color="#232F34" dark>
        <v-icon @click.stop="sidebar = !sidebar">mdi-menu</v-icon>
        <h2 class="pl-6"><span style="color:#F9AA33">PM</span>gram</h2>
        <v-spacer></v-spacer>
        <v-icon @click="goToSearch()">mdi-magnify</v-icon>
      </v-toolbar>
    </v-card>

    <div class="chat-items animate__animated animate__fadeIn">
      <div class="item">
        <v-img
          max-height="55"
          max-width="55"
          src="./../src/assets/images/1.png"
          class="chat-img float-left"
          @click="profile = true"
        ></v-img>
        <h3 @click="goToChatPage()" class="chat-info">
          <span>Name</span>
          <h6 class="pa-0 green--text" style="font-size: 13px;">
            Active
          </h6>
        </h3>
      </div>
      <div class="item" v-for="(item, index) in chats" :key="index">
        <v-img
          max-height="55"
          max-width="55"
          src="./../src/assets/images/1.png"
          class="chat-img float-left"
          @click="profile = true"
        ></v-img>
        <h3 @click="openProfileModal()" class="chat-info">
          <span>{{ item.name }}</span>
          <h6
            class="pa-0"
            style="font-size: 13px;"
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

    <!-- Sidebar -->
    <v-navigation-drawer
      v-model="sidebar"
      absolute
      left
      dark
      class="blue-grey darken-3"
      style="width:75vw !important"
    >
      <div class="menu-header">
        <v-img
          max-height="65"
          max-width="65"
          src="./../src/assets/images/1.png"
          class="menu-img float-left mr-3"
        ></v-img>
        <h3 class="menu-info pt-4">
          User Name
          <p class="text-break grey--text">username@gmail.com</p>
        </h3>
      </div>
      <div class="menu-items">
        <li>
          <v-icon class="icon pr-2 pb-1">mdi-account-outline</v-icon>
          Contacts
        </li>
        <li @click="goToSeting()">
          <v-icon class="icon pr-2 pb-1">mdi-cog-outline</v-icon>
          Setting
        </li>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [
        { name: "Parnia", status: "Invisible" },
        { name: "Pouya", status: "Do not disturb" },
        { name: "Arash", status: "Away" },
        { name: "Sarina", status: "Active" },
        { name: "Nima", status: "Invisible" },
      ],
      logoutModal: false,
      sidebar: false,
    };
  },
  methods: {
    goToSearch() {
      this.$router.push("/search");
    },
    goToChatPage() {
      this.$router.push("/chatPage");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    openLogoutModal() {
      this.logoutModal = true;
    },
    goToSeting() {
      this.$router.push("/setting");
    },
  },
};
</script>

<style scoped>
.v-icon.v-icon::after {
  background-color: transparent !important;
}
.v-list--nav .v-list-item {
  padding-bottom: 2px;
}
.v-list-item__title {
  font-size: 14px !important;
}
</style>
