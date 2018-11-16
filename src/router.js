import Vue from "vue";
import Router from "vue-router";

const Login = () => import("@/views/Login");
const Game = () => import("@/views/Game");
const Invite = () => import("@/views/Invite");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/game",
      name: "Game",
      component: Game
    },
    {
      path: "/invite",
      name: "Invite",
      component: Invite
    }
  ]
});
