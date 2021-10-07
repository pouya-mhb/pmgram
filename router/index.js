import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// import pages
import Welcome from "./../views/auth/Welcome";
import Register from "./../views/auth/Register";
import Login from "./../views/auth/Login";
import Home from "./../views/Home";
import NewContact from "./../views/NewContact";
import NewMessage from "./../views/NewMessage";
import ChatPage from "./../views/ChatPage";
import Setting from "./../views/Setting";
import Search from "./../views/Search";
import Contacts from "./../views/Contacts";
import Test from "./../views/RegisterTest";

export default new Router({
  mode: "history", // https://router.vuejs.org/api/#mode

  routes: [
    {
      path: "/welcome",
      component: Welcome,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/newContact",
      component: NewContact,
    },
    {
      path: "/newMessage",
      component: NewMessage,
    },
    {
      path: "/chatPage",
      component: ChatPage,
    },
    {
      path: "/setting",
      component: Setting,
    },
    {
      path: "/search",
      component: Search,
    },
    {
      path: "/contacts",
      component: Contacts,
    },
    {
      path: "/registerTest",
      component: Test,
    },
    {
      path: "/",
      redirect: "/welcome",
    },
  ],
});
