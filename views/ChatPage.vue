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
        <img
          src="./../src/assets/images/1.png"
          class="contact-img"
          v-show="!search"
          @click="openProfileModal()"
        />
        <h3 v-show="!search" @click="openProfileModal()" class="contact-name">
          <span>Name</span>
          <h6 class="status green--text pa-0">Actice</h6>
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
    <div class="main d-flex flex-column" id="container">
      <!-- No message box -->
      <div v-show="noMessage" class="no-message flex-center animated fadeIn">
        <div class="box">
          <span class="px-4">There is no message yet...</span>
        </div>
      </div>
      <!-- Messages box -->
      <div
        v-show="!noMessage"
        v-for="(item, index) in messages"
        :key="index"
        class="messages h-100"
      >
        <div
          :class="
            item.sender == 'user'
              ? 'user-box float-right'
              : 'system-box float-left'
          "
        >
          <div
            class="text pb-1"
            :class="item.sender == 'user' ? 'text-right' : 'text-left'"
          >
            <span class="text-break">{{ item.text }}</span>
          </div>
          <div
            class="time"
            :class="item.sender == 'user' ? 'float-left' : 'float-right'"
          >
            <span>{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- message input box -->
    <div class="newMessage-box pb-0 animated fadeIn">
      <v-row class="pa-0">
        <v-col cols="10" class="py-0">
          <input
            v-model="text"
            class="input grey--text px-1"
            type="text"
            placeholder="Write a message..."
            id="text-input"
          />
        </v-col>
        <v-col cols="2" class="pa-0">
          <v-icon @click="send()" :disabled="!text" class="icon"
            >mdi-send</v-icon
          >
        </v-col>
      </v-row>
    </div>
    <!-- Profile Modal -->
    <v-dialog
      v-model="profile"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <v-card class="card bc-primary" flat tile>
        <v-toolbar color="#232F34" dark>
          <v-icon v-show="!search" @click="profile = false" large
            >mdi-chevron-down</v-icon
          >
          <v-spacer></v-spacer>
          <v-icon @click="editName = true" v-show="!editName" class="pr-1 pt-2"
            >mdi-pencil-outline</v-icon
          >
          <span v-show="editName" @click="closeEditName()">Cancel</span>
          <span
            v-show="editName"
            :class="!newName ? 'disabled' : ''"
            class="pl-5"
            >Save</span
          >
        </v-toolbar>
        <div class="dialog-body">
          <div class="header">
            <v-row class="py-4" style="width: 100vw">
              <v-col cols="4">
                <img
                  src="./../src/assets/images/1.png"
                  class="profile-img float-right"
                  @click="profile = true"
                />
              </v-col>
              <v-col cols="8" class="pl-1 pt-5">
                <span class="info-title c-secondary">Contact name</span>
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
                <h3 v-show="!editName" class="profile-info white--text">
                  Name
                </h3></v-col
              >
            </v-row>
          </div>
          <div class="body">
            <span class="info-title c-secondary">Full name</span>
            <h3 class="profile-info white--text">
              Name Family
            </h3>
            <br />
            <span class="info-title c-secondary">Username</span>
            <h3 class="profile-info white--text">
              @username
            </h3>
            <br />
            <span class="info-title c-secondary">Bio</span>
            <h3 class="profile-info white--text">
              This is my bio :)
            </h3>
            <br />
            <span class="info-title c-secondary">Email</span>
            <h3 class="profile-info white--text">
              name@gmail.com
            </h3>
            <br />
            <span class="info-title c-secondary">Status</span>
            <h3 class="profile-info green--text">
              Active
            </h3>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
const Search = () => import("@/components/SearchBar");
import vClickOutside from "v-click-outside";
export default {
  components: {
    Search,
  },
  data() {
    return {
      text: "",
      showOptions: false,
      search: false,
      profile: false,
      editName: false,
      newName: "",
      noMessage: false,
      firstLetter: "",
      messages: [
        { text: "salaaam", sender: "user", time: "10:30" },
        { text: "khubi?", sender: "user", time: "10:31" },
        { text: "qorbunet", sender: "system", time: "10:31" },
        { text: "to chetori??", sender: "system", time: "10:32" },
      ],
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
    scrollToEnd() {
      // this function scroll the page to the bottom in every refreshing
      var container = document.querySelector("#container");
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },
    send() {
      let currentTime = new Date();
      this.messages.push({
        text: this.text,
        sender: "user",
        time: currentTime.getHours() + ":" + currentTime.getMinutes(),
      });
      this.text = "";
      this.scrollToEnd();
      document.getElementById("text-input").focus();
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.dialog-body {
  .header {
    background-color: #232f34;
    width: 100%;

    .profile-img {
      border-radius: 50%;
      max-height: 70px;
      max-width: 70px;
    }
    .info-title {
      font-size: 12px;
    }
    .profile-info {
      font-size: 20px;
      font-weight: 400;
    }
  }

  .body {
    padding: 50px;

    .info-title {
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
