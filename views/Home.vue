<template>
  <div class="home">
    <v-card class="card" flat tile>
      <v-toolbar height="60px" color="#232F34" dark>
        <v-icon @click.stop="sidebar = !sidebar">mdi-menu</v-icon>
        <h2 class="pl-6"><span class="c-secondary">PM</span>gram</h2>
        <v-spacer></v-spacer>
        <v-icon @click="goToNewMessage()" class="mr-6"
          >mdi-pencil-plus-outline</v-icon
        >
        <v-icon @click="goToSearch()">mdi-magnify</v-icon>
      </v-toolbar>
    </v-card>
    <!-- Chats  -->
    <div class="chat-items animated fadeIn">
      <div class="item">
        <img
          src="./../src/assets/images/1.png"
          class="chat-img float-left"
          @click="profile = true"
        />
        <h3 @click="goToChatPage()" class="chat-info">
          <v-row>
            <v-col class="pl-0">
              <span class="name">Name</span>
            </v-col>
            <v-col>
              <v-chip class="float-right mt-1" color="#232f34" dark small
                >12</v-chip
              >
            </v-col>
          </v-row>
          <h6 class="pa-0 green--text" style="font-size: 13px;">
            Active
          </h6>
        </h3>
      </div>
      <div class="item" v-for="(item, index) in chats" :key="index">
        <img
          src="./../src/assets/images/1.png"
          class="chat-img float-left"
          @click="profile = true"
        />
        <h3 @click="openProfileModal()" class="chat-info">
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
        <img
          src="./../src/assets/images/1.png"
          class="menu-img float-left mr-3"
        />
        <h3 class="menu-info pt-4">
          User Name
          <p class="text-break grey--text">username@gmail.com</p>
        </h3>
      </div>
      <div class="menu-items">
        <li @click="goToContacts()">
          <v-icon class="icon pr-2 pb-1">mdi-account-outline</v-icon>
          Contacts
        </li>
        <li @click="goToSeting()">
          <v-icon class="icon pr-2 pb-1">mdi-cog-outline</v-icon>
          Setting
        </li>
      </div>
    </v-navigation-drawer>

    <!-- New message button -->
    <!--<div class="newMessage-btn">
      <v-btn
        class="c-secondary bc-third text-capitalize"
        height="45"
        elevation="5"
        rounded
        to="/newMessage"
        ><v-icon class="mr-1">mdi-pencil-plus-outline</v-icon>New Message</v-btn
      >
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [
        { name: "Parnia", status: "Invisible" },
        { name: "Pouya", status: "Do not disturb" },
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
    goToContacts() {
      this.$router.push("/contacts");
    },
    goToNewMessage() {
      this.$router.push("/newMessage");
    },
  },
};
</script>

<style>
.v-list--nav .v-list-item {
  padding-bottom: 2px;
}
.v-list-item__title {
  font-size: 18px !important;
}
</style>
