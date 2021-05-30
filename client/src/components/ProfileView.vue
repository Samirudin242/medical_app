<template>
  <div>
    <div class="user-card">
      <div class="card">
        <div class="card-info1">
          <div class="photo">
            <i class="fas fa-user-circle icon_circle"></i>
          </div>
          <div class="name">
            <p>{{user.username ? user.username : ""}}</p>
            <p>{{user.gender ? user.gender : ""}}</p>
            <p>{{user.email ? user.email : ""}}</p>
          </div>
          <div class="edit">
            <router-link v-bind:to="{ name: 'editUser' }">
              <i class="far fa-edit"></i>
            </router-link>
          </div>
        </div>
        <div class="card-info2">
          <div class="age">
            <i class="fas fa-calendar-alt"></i>
            <p>{{user.age ? `${user.age} tahun` : "-"}}</p>
          </div>
          <div class="weight">
            <i class="fas fa-weight"></i>
            <p>{{user.weight ? `${user.weight} kg` : "-"}}</p>
          </div>
          <div class="height">
            <i class="fas fa-ruler-vertical"></i>
            <p>{{user.height ? `${user.height} cm` : "-"}}</p>
          </div>
        </div>
      </div>
      <div class="riwayat-card">
        <div class="icon-watch">
          <i class="fas fa-history"></i>
        </div>
        <div class="word">
          <p>Riwayat transaksi</p>
        </div>
        <div class="icon-angle">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    };
  }
  // created: function() {
  //   console.log(this.$store.state.users, "«««««");

  //   this.user = this.$store.state.users;
  // }
};
</script>

<style scoped>
.user-card {
  margin: 0 37vw;
  min-height: 100vh;
}
.card {
  width: 400px;
  height: 220px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 1px 1px #d1caca;
}

.card-info1 {
  display: grid;
  grid-template-columns: 30% 50% 20%;
}

.photo {
  margin-left: 40px;
  margin-top: 30px;
}

.photo .fas {
  font-size: 60px !important;
  color: #aeb2b6;
}

.name {
  margin-top: 30px;
}

.name > p:nth-child(1) {
  font-size: 20px;
  color: #085b9c;
}
.name > p:nth-child(2) {
  color: #aeb2b6;
}
.name > p:nth-child(3) {
  color: #aeb2b6;
}

.edit {
  margin-top: 30px;
  margin-left: 30px;
}

.edit > i {
  cursor: pointer;
  color: #085b9c;
}

.card-info2 {
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
}

.age {
  text-align: center;
  line-height: 27px;
  color: #aeb2b6;
}

.weight {
  text-align: center;
  line-height: 27px;
  color: #aeb2b6;
}

.height {
  text-align: center;
  line-height: 27px;
  color: #aeb2b6;
}

.riwayat-card {
  display: grid;
  grid-template-columns: 20% 70% 10%;
  height: 50px;
  background-color: white;
  width: 400px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 2px 1px 1px #d1caca;
  align-items: center;
}

.riwayat-card .icon-watch {
  margin-left: 15px;
  font-size: 20px;
  color: #aeb2b6;
}

.riwayat-card .word {
  font-size: 18px;
  color: #085b9c;
}

.riwayat-card .icon-angle {
  font-size: 20px;
  color: #aeb2b6;
}

@media (max-width: 800px) {
  .user-card {
    margin: 0 9vw;
  }
}
</style>
