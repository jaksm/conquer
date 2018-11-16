import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import store from './store'

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB2U89gN9olDPLqrOK1QIDcINHWIcnUNCg",
  authDomain: "chicken-evidence.firebaseapp.com",
  databaseURL: "https://chicken-evidence.firebaseio.com",
  projectId: "chicken-evidence",
  storageBucket: "chicken-evidence.appspot.com",
  messagingSenderId: "644980962375"
};

firebase.initializeApp(config);
let firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

Vue.prototype.$firebase = firebase;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
