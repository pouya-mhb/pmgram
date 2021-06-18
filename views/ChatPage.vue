<template>
  <div class="chat-page">
    <v-card class="card" flat tile>
      <v-toolbar height="60px" color="#232F34" dark>
        <!-- the left icon when search is false -->
        <v-icon v-show="!search" @click="goToHome()">mdi-arrow-left</v-icon>
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
          @click="openProfileModal()"
        ></v-img>
        <h3 v-show="!search" @click="openProfileModal()" class="contact-name">
          <span>Name</span>
          <h6 class="green--text pa-0" style="font-size: 13px;">Actice</h6>
        </h3>
        
        <v-spacer></v-spacer>
        <v-icon
          v-show="!search"
          class="options-icon"
          @click="showOptions = true"
          >mdi-dots-vertical</v-icon
        >
      </v-toolbar>
    </v-card>
    <!-- Options -->
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
    <!-- No message box -->
    <div v-show="noMessage" class="no-message flex-center animate__animated animate__fadeIn">
      <div class="box">
        <span class="px-4">There is no message yet...</span>
      </div>
    </div>
    <!-- Messages box -->
    <!-- <div v-show="!noMessage" class="send-messages">
      <div class="box float-right">
        <div class="text pb-1">
          <span>salaaaaaam</span>
        </div>
        <div class="time">
        <span>10:30</span>
        </div>
      </div>
    </div> -->
    <!-- message input box -->
    <div class="newMessage-box pb-0 animate__animated animate__fadeIn">
      <v-row class="pa-0">
        <v-col cols="10" class="py-0">
          <input
            v-model="newMessage"
            class="input grey--text px-1"
            type="text"
            placeholder="Write a message..."
          />
        </v-col>
        <v-col cols="2" class="pa-0">
          <v-icon :class="{ disabled: !newMessage }" class="icon">mdi-send</v-icon>
        </v-col>
      </v-row>
    </div>
    <!-- Profile Modal -->
    <v-dialog
      v-model="profile"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card class="card" flat tile>
        <v-toolbar style="box-shadow: none !important" color="#232F34" dark>
          <v-icon v-show="!search" @click="profile = false" large
            >mdi-chevron-down</v-icon
          >
          <v-spacer></v-spacer>
          <v-icon @click="editName = true" v-show="!editName" class="pr-1 pt-2"
            >mdi-pencil</v-icon
          >
          <v-icon v-show="editName" @click="closeEditName()">mdi-close</v-icon>
          <v-icon v-show="editName" :disabled="!newName" class="pl-5">mdi-check</v-icon>
        </v-toolbar>
        <div class="dialog-body">
          <div class="header">
            <v-row class="py-4" style="width: 100vw">
              <v-col cols="4">
                <v-img
                  max-height="70"
                  max-width="70"
                  src="./../src/assets/images/1.png"
                  class="profile-img float-right"
                  v-show="!search"
                  @click="profile = true"
                ></v-img>
              </v-col>
              <v-col cols="8" class="pl-1 pt-5">
                <span style="font-size:12px;" class="c-secondary"
                  >Contact name</span
                >
                <v-text-field
                  placeholder="Enter a name"
                  color="#F9AA33"
                  v-show="editName"
                  v-model="newName"
                  class="pa-0"
                  dark
                  autofocus
                  style="position: absolute; top:95px"
                >
                </v-text-field>
                <h3 v-show="!editName" class="profile-name white--text">
                  Name
                </h3></v-col
              >
            </v-row>
          </div>
          <div class="body">
            <span style="font-size:12px" class="c-secondary">Full name</span>
            <h3 class="profile-name white--text">
              Name Family
            </h3>
            <br />
            <span style="font-size:12px" class="c-secondary">Username</span>
            <h3 class="profile-name white--text">
              @username
            </h3>
            <br />
            <span style="font-size:12px" class="c-secondary">Bio</span>
            <h3 class="profile-name white--text">
              This is my bio :)
            </h3>
            <br />
            <span style="font-size:12px" class="c-secondary">Email</span>
            <h3 class="profile-name white--text">
              name@gmail.com
            </h3>
            <br />
            <span style="font-size:12px" class="c-secondary">Status</span>
            <h3 class="profile-name green--text">
              Active
            </h3>
          </div>
        </div>
      </v-card>
    </v-dialog>
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
      newMessage: "",
      showOptions: false,
      search: false,
      profile: false,
      editName: false,
      newName: "",
      noMessage: true,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
    openSearch() {
      this.search = true;
      this.showOptions = false;
    },
    onClickOutside() {
      this.showOptions = false;
    },
    openProfileModal() {
      this.profile = true;
      this.editName = false;
      this.newName = "";
    },
    closeEditName() {
      this.editName = false;
      this.newName = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.v-icon.v-icon::after {
  background-color: transparent !important;
}
.dialog-body {
  height: 92vh;
  background-color: #344955;

  .header {
    background-color: #232f34;
    width: 100%;

    .title {
      color: #f9aa33;
      font-size: 12px;
    }
    .profile-img {
      border-radius: 50%;
    }
    .profile-name {
      font-size: 21px;
      font-weight: 400;
    }
  }

  .body {
    padding: 50px;

    .title {
      color: #f9aa33;
      font-size: 12px;
    }
    h3 {
      font-weight: 400;
      font-size: 17px;
    }
  }
}
</style>
