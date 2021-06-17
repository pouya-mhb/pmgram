<template>
  <div class="chat-page">
    <v-card class="card" flat tile>
      <v-toolbar height="60px" color="#232F34" dark>
        <!-- the left icon when search is false -->
        <v-icon v-show="!search" @click="goToLogin()">mdi-arrow-left</v-icon>
        <!-- the left icon when search is true -->
        <v-icon v-show="search" @click="search = false" color="#F9AA33"
          >mdi-arrow-left</v-icon
        >
        <Search v-show="search" />
        <v-img
          max-height="40"
          max-width="40"
          src="./../src/assets/images/1.png"
          class="contact-img"
          v-show="!search"
        ></v-img>
        <h3 v-show="!search" class="contact-name">Name</h3>
        <v-spacer></v-spacer>
        <v-icon
          v-show="!search"
          class="options-icon"
          @click="showOptions = true"
          >mdi-dots-vertical</v-icon
        >
      </v-toolbar>
    </v-card>

    <div
      v-show="showOptions"
      v-click-outside="onClickOutside"
      class="options py-2 px-3 animate__animated animate__fadeInDown"
    >
      <div class="item" @click="openSearch()">
        <v-icon color="grey">mdi-text-search</v-icon>
        <span class="grey--text pl-3">Search</span>
      </div>
      <div class="item disabled">
        <v-icon color="grey">mdi-trash-can-outline</v-icon>
        <span class="grey--text pl-3">Delete chat</span>
      </div>
    </div>

    <div class="no-message flex-center animate__animated animate__fadeIn">
      <div class="box">
        <span class="px-4">There is no message yet...</span>
      </div>
    </div>

    <div class="message-box pb-0 animate__animated animate__fadeIn">
      <v-row class="pa-0">
        <v-col cols="10" class="py-0">
          <input
            v-model="message"
            class="input grey--text"
            type="text"
            placeholder="Write a message..."
          />
        </v-col>
        <v-col cols="2" class="pa-0">
          <v-icon :class="{ disabled: !message }" class="icon">mdi-send</v-icon>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Search from "./../src/components/SearchBar.vue";
import vClickOutside from "v-click-outside";
export default {
  components: {
    Search,
  },
  data() {
    return {
      message: "",
      showOptions: false,
      search: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    openSearch() {
      this.search = true;
      this.showOptions = false;
    },
    onClickOutside() {
      this.showOptions = false;
    },
  },
};
</script>
