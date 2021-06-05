import Vue from "vue";
import Router from 'vue-router';
Vue.use(Router);

// import pages
import Welcome from './../views/Welcome'
import SignUp from './../views/SignUp'
import Login from './../views/Login'
import Home from './../views/Home'
import NewContact from './../views/NewContact'
import NewMessage from './../views/NewMessage'
import ChatPage from './../views/ChatPage'
import Profile from './../views/Profile'
import Setting from './../views/Setting'
import Search from './../views/Search'


export default new Router({
  mode: "history", // https://router.vuejs.org/api/#mode

  routes: [
    {
      path: "/welcome",
      component: Welcome
    },
    {
      path: "/register",
      component: SignUp
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/newContact",
      component: NewContact
    },
    {
      path: "/newMessage",
      component: NewMessage
    },
    {
      path: "/chatPage",
      component: ChatPage
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/setting",
      component: Setting
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/",
      redirect: "/welcome"
    },
  ],
});