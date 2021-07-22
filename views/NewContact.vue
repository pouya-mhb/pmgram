<template>
  <div class="newContact">
    <v-card class="card" flat tile>
      <v-toolbar color="#232F34" dark>
        <v-icon @click="goToHome()">mdi-arrow-left</v-icon>
        <v-toolbar-title class="pl-8">New Contact</v-toolbar-title>
      </v-toolbar>
    </v-card>

    <div class="addType animated fadeIn">
      <v-row class="pt-5 pb-8" @click="openModal('email')">
        <div class="addType-box">
          <v-icon class="icon">mdi-email-outline</v-icon>
          <p class="text-center">Add By Email</p>
        </div>
      </v-row>
      <v-row @click="openModal('id')">
        <div class="addType-box">
          <v-icon class="icon">mdi-at</v-icon>
          <p class="text-center">
            Add By ID
          </p>
        </div>
      </v-row>
    </div>
    <v-dialog v-model="openAddContactModal" fullscreen>
      <v-card class="card bc-primary" flat tile>
        <v-toolbar color="#232F34" dark>
          <v-icon @click="openAddContactModal = false">mdi-close</v-icon>
          <span v-if="byEmail" class="dialog-title pl-8"
            >Add Contact
            <small class="grey--text">(By Email Address)</small></span
          >
          <span v-if="byId" class="dialog-title pl-8"
            >Add Contact <small class="grey--text">(By PMgram ID)</small></span
          >
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="dialog-body pa-5">
          <v-text-field
            v-model="userEmail"
            v-if="byEmail"
            label="User Email Address"
            color="#f9aa33"
            dark
          >
          </v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-at"
            v-model="userId"
            v-if="byId"
            label="User PMgram ID"
            color="#f9aa33"
            dark
          >
          </v-text-field>

          <v-btn
            class="bc-secondary text-capitalize float-right mt-7 bold"
            rounded
            :disabled="(byEmail && !userEmail) || (byId && !userId)"
          >
            Send Request
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openAddContactModal: false,
      byEmail: false,
      byId: false,
      userEmail: "",
      userId: "",
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/contacts");
    },
    openModal(type) {
      this.openAddContactModal = true;
      if (type == "email") {
        this.byEmail = true;
        this.byId = false;
      } else if (type == "id") {
        this.byEmail = false;
        this.byId = true;
      }
    },
  },
};
</script>
