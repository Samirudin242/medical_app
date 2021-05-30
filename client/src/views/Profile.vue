<template>
  <div class="profile">
    <h4 style="color:#dae8e0;">tres</h4>
    <Navbar />
    <LoginCard v-if="!token" />
    <ProfileView v-if="token || token1" />
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent";
import LoginCard from "../components/LoginCard";
import ProfileView from "../components/ProfileView";
export default {
  components: {
    Navbar,
    LoginCard,
    ProfileView
  },
  data() {
    return {
      token: ""
    };
  },
  computed: {
    token1: function() {
      return this.$store.state.token;
    }
  },
  created: function() {
    this.token = localStorage.getItem("token");
  }
};
</script>

<style scoped>
.profile {
  height: 100%;
}
</style>
