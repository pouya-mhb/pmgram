<template>
  <div class="home">
    <v-card class="card" flat tile>
      <v-toolbar height="60px" color="#232F34" dark>
        <v-icon @click.stop="sidebar = !sidebar">mdi-menu</v-icon>
        <h2 class="pl-6"><span style="color:#F9AA33">PM</span>gram</h2>
        <v-spacer></v-spacer>
        <v-icon @click="goToSearch()">mdi-magnify</v-icon>
        <v-icon class="pl-6" @click="openLogoutModal()">mdi-logout</v-icon>
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
      temporary
      dark
      class="blue-grey darken-3"
      style="width:82vw !important"
    >
      <div class="menu-header">
        <v-img
          max-height="65"
          max-width="65"
          src="./../src/assets/images/1.png"
          class="menu-img float-left mr-3"
        ></v-img>
        <h3 class="menu-info py-3">
          MyName
          <p class="c-secondary text-break">myname@gmail.com</p>
        </h3>
      </div>

      <v-list nav dense>
        <v-list-item-group
        >
          <v-list-item>
            <v-list-item-title>
            <v-icon class="pr-2 pb-1">mdi-account-outline</v-icon>
            Contacts
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
            <v-icon class="pr-2 pb-1">mdi-cog-outline</v-icon>
            Setting
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Logout modal -->
    <v-dialog v-model="logoutModal">
      <v-card
        class="text-center pa-6 blue-grey darken-2"
        style="border-radius: 20px"
      >
        <v-card-text class="px-0">
          <p class="white--text" style="font-size: 17px">
            Are you sure you want to leave?
          </p>
        </v-card-text>
        <v-card-action>
          <v-btn class="mx-4" color="blue-grey lighten-3" @click="goToLogin()">
            Yes
          </v-btn>
          <v-btn
            class="mx-4"
            color="orange lighten-4"
            @click="logoutModal = false"
          >
            No
          </v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>
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
  },
};
</script>

<style scoped>
.v-icon.v-icon::after {
  background-color: transparent !important;
}
.v-list-item__title {
  font-size: 14px !important;
}
</style>
