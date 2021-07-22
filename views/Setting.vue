<template>
  <div class="setting">
    <v-card class="card" flat tile>
      <v-toolbar color="#232F34" dark>
        <v-icon @click="goToHome()">mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>
        <v-icon @click="showOptions = true">mdi-dots-vertical</v-icon>
      </v-toolbar>
    </v-card>
    <!-- Options -->
    <div
      v-show="showOptions"
      v-click-outside="onClickOutside"
      class="options py-2 px-3 animate__animated animate__fadeInDown"
    >
      <div class="item" @click="editProfile('name')">
        <v-icon color="grey">mdi-pencil-outline</v-icon>
        <span class="grey--text pl-3">Edit Name</span>
      </div>
      <div class="item" @click="openLogoutModal()">
        <v-icon color="grey">mdi-logout</v-icon>
        <span class="grey--text pl-3">Log Out</span>
      </div>
    </div>
    <div class="header">
      <v-row class="pb-5" style="width: 100vw">
        <v-col cols="6">
          <img
            src="./../src/assets/images/1.png"
            class="img float-right"
            @click="profile = true"
          />
          <p class="set-pic bc-primary flex-center">
            <v-icon class="white--text v-align">mdi-camera-plus</v-icon>
          </p>
        </v-col>
        <v-col cols="6" class="pl-1 pt-5">
          <h3 class="name white--text">
            User Name
          </h3>
          <span class="status green--text">Active</span>
        </v-col>
      </v-row>
    </div>
    <div class="account animated fadeIn">
      <p class="c-secondary mb-3">Account</p>
      <div class="box py-2 px-3">
        <span class="account-title">Email</span>
        <h3 class="account-info white--text">
          username@gmail.com
        </h3>
      </div>
      <br />
      <div class="box py-2 px-3">
        <span class="account-title">Username</span>
        <v-row>
          <v-col>
            <h3 class="account-info white--text">
              @username
            </h3>
          </v-col>
          <v-col>
            <v-icon
              @click="editProfile('userName')"
              color="grey"
              class="float-right pr-2"
              dense
              >mdi-pencil-outline</v-icon
            >
          </v-col>
        </v-row>
      </div>
      <br />
      <div class="box py-2 px-3">
        <span class="account-title">Bio</span>
        <v-row>
          <v-col>
            <h3 class="account-info white--text">
              This is my bio :)
            </h3>
          </v-col>
          <v-col>
            <v-icon
              @click="editProfile('bio')"
              color="grey"
              class="float-right pr-2"
              dense
              >mdi-pencil-outline</v-icon
            >
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="part animated fadeIn">
      <p class="c-secondary mb-2">Setting</p>
      <v-row class="pt-2 px-2">
        <v-col class="pr-0">
          <span class="item text-break"
            >Show my email address to everyone.</span
          >
          <br />
          <small class="grey--text small-font"
            >You can turn it off to hide your email address in your profile.
            also you won't see email address for other people.</small
          >
        </v-col>
        <v-col cols="2" class="pt-2">
          <v-switch
            v-model="showEmail"
            color="orange"
            class="mt-0"
            inset
            hide-details
          ></v-switch>
        </v-col>
      </v-row>
      <v-row class="pt-2 px-2">
        <v-col class="pr-0">
          <span class="item text-break"
            >Show my profile picture to everyone.</span
          >
          <br />
          <small class="grey--text small-font"
            >You can turn it off to hide your profile picture in your profile.
          </small>
        </v-col>
        <v-col cols="2" class="pt-2">
          <v-switch
            v-model="showPic"
            color="orange"
            class="mt-0"
            inset
            hide-details
          ></v-switch>
        </v-col>
      </v-row>
    </div>
    <!-- logout message modal -->
    <v-dialog v-model="logoutModal">
      <v-card
        class="text-center pa-6 blue-grey darken-3"
        style="border-radius: 20px"
      >
        <v-card-text class="px-0">
          <p class="white--text" style="font-size: 17px">
            Are you sure you want to leave?
          </p>
        </v-card-text>
        <v-card-action>
          <v-btn
            class="mx-4"
            color="blue-grey lighten-3 text-capitalize bold"
            to="/login"
          >
            Yes
          </v-btn>
          <v-btn
            class="mx-4"
            color="orange lighten-4 text-capitalize bold"
            @click="logoutModal = false"
          >
            No
          </v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>
    <!-- name edit modal -->
    <v-dialog v-model="editModal" fullscreen scrollable>
      <v-card class="card" flat tile>
        <v-toolbar color="#232F34" dark>
          <v-icon @click="editModal = false">mdi-close</v-icon>
          <span v-if="editName" class="dialog-title pl-8">Edit Name</span>
          <span v-if="editUserName" class="dialog-title pl-8"
            >Edit Username</span
          >
          <span v-if="editBio" class="dialog-title pl-8">Edit Bio</span>
          <v-spacer></v-spacer>
          <v-btn
            class="float-right bc-primary c-secondary text-capitalize bold"
            rounded
            :disabled="!edited.firstName && !edited.username && !edited.bio"
            >Save</v-btn
          >
        </v-toolbar>
        <div class="dialog-body pa-5">
          <v-text-field
            v-model="edited.firstName"
            v-if="editName"
            label="First Name"
            color="#f9aa33"
            dark
          >
          </v-text-field>
          <v-text-field
            v-model="edited.lastName"
            v-if="editName"
            label="Last Name (Optional)"
            color="#f9aa33"
            dark
          >
          </v-text-field>
          <div v-if="editUserName">
            <v-text-field
              v-model="edited.username"
              prepend-inner-icon="mdi-at"
              label="Username"
              color="#f9aa33"
              counter
              maxlength="15"
              dark
              hint="You can use a-z , 0-9 and underscores."
              persistent-hint
            >
            </v-text-field>
            <br />
            <small class="grey--text text--lighten-2 small-font"
              >You can choose a username. So people will be able to find you by
              this username without needing your phone number.</small
            >
          </div>
          <div v-if="editBio">
            <v-text-field
              v-model="edited.bio"
              label="Bio"
              color="#f9aa33"
              counter
              maxlength="50"
              dark
            >
            </v-text-field>
            <br />
            <small class="grey--text text--lighten-2 small-font"
              >You can add a few lines about yourself. Anyone who opens your
              profile will see this text.</small
            >
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
export default {
  data() {
    return {
      showOptions: false,
      logoutModal: false,
      showEmail: false,
      showPic: true,
      editModal: false,
      editName: false,
      editUserName: false,
      editBio: false,
      edited: {},
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    onClickOutside() {
      this.showOptions = false;
    },
    goToHome() {
      this.$router.push("/home");
    },
    openLogoutModal() {
      this.logoutModal = true;
    },
    editProfile(item) {
      this.editModal = true;
      if (item == "name") {
        this.editName = true;
        this.editUserName = false;
        this.editBio = false;
        this.edited = {};
      } else if (item == "userName") {
        this.editName = false;
        this.editUserName = true;
        this.editBio = false;
        this.edited = {};
      } else if (item == "bio") {
        this.editName = false;
        this.editUserName = false;
        this.editBio = true;
        this.edited = {};
      }
    },
  },
};
</script>
