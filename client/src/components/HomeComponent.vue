<template>
  <div>
    <div class="home_container">
      <div class="img">
      <img
        style="width: 10rem; height: 11rem; margin-left: 0px; margin-top: 25px"
        src="../img/logo.png"
      />
      </div>
      <h2>Selamat datang di THEYAKU-MED</h2>
      <p>
        Kami memberikan pelayanan komperehensif dan terpadu dengan standar
        pelayanan terakreditasi.
      </p>
       <router-link id="router" v-bind:to="{ name: 'Doctors' }">
        <div class="card-home">
          <div class="card-icon">
            <i class="fas fa-stethoscope icon-docter"></i>
          </div>
          <div class="card-description">
            <h3>Cari Dokter</h3>
            <p>Umum dan spesialis</p>
          </div>
          <i class="fas fa-angle-right card-arrow"></i>
        </div>
      </router-link>
      <router-link id="router" v-bind:to="{ name: 'Booking' }">
      <div class="card-home">
        <div class="card-icon">
          <i class="fas fa-user-md icon-medic"></i>
        </div>
        <div class="card-description">
          <h3>Booking Cepat</h3>
          <p>Pesan dokter langganan</p>
        </div>
        <i class="fas fa-angle-right card-arrow"></i>
      </div>
      </router-link>
      <router-link id="router" v-bind:to="{ name: 'Hospital' }">
      <div class="card-home">
        <div class="card-icon">
          <i class="far fa-hospital icon-hospital"></i>
        </div>
        <div class="card-description">
          <h3>Cari Faskes</h3>
          <p>Rumah sakit dan klinik</p>
        </div>
        <i class="fas fa-angle-right card-arrow"></i>
      </div>
      </router-link>
      <router-view />
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent";
export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
.home_container {
  margin: 0 37vw;
}


.home_container > img {
  object-fit: cover;
  object-position: 20% 10%;
}

h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  color: #085b9c;
  margin-top: 0px;
}

h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  color: #085b9c;
}

p {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 17px;
  text-align: left;
  line-height: 22px;
  width: 400px;
  color: #9a9c9a;
  font-weight: 200;
  margin: 10px 0px 10px 0px;
}

.icon-medic {
  font-size: 30px;
  border: 3px solid #b0d2f7;
  padding: 15px;
  border-radius: 30px;
  color: #5c9adb;
  font-weight: 500;
}

.icon-hospital {
  font-size: 30px;
  border: 3px solid #9cecba;
  padding: 15px;
  border-radius: 30px;
  color: #1d9648;
}

.icon-docter {
  font-size: 30px;
  border: 3px solid #9cecba;
  padding: 15px;
  border-radius: 30px;
  color: #1d9648;
}

.card-home {
  background-color: white;
  width: 400px;
  height: 100px;
  display: grid;
  grid-template-columns: 30% 50% 20%;
  border-radius: 5px;
  box-shadow: 2px 1px 1px #d1caca;
  margin-top: 10px;
  cursor: pointer;
}
#router {
  text-decoration: none;
}

.card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-description {
  line-height: 4px;
  margin-top: 30px;
}

.card-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cdd1ce;
  font-size: 23px;
  text-decoration: none;
}

@media (max-width: 800px) {
  .home_container {
    margin: 0 9vw;
  }
}
</style>
