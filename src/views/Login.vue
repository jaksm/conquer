<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white">
    <h1 class="font-light uppercase">Moja igrica</h1>
    <button @click="login" class="px-6 py-3 bg-teal text-white uppercase font-bold tracking-wide rounded shadow-lg mt-6 text-sm hover:bg-red">Login with google</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      var provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$store.commit("setUser", result);
          this.$router.push({ name: "Game" });
        })
        .catch(error => console.error(error));
    }
  }
};
</script>
