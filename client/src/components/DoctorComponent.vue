<template>
  <div>
    <div class="doctor_component">
      <router-link id="router" to="/doctor/doctor_umum">
        <div class="doctor_card" @click="getData('Dokter Umum')">
          <div class="doctor_card_text">
            <h3 class="text1">Dokter Umum</h3>
            <p class="text2">Praktisi Umum</p>
          </div>
          <i class="fas fa-angle-right icon"></i>
        </div>
      </router-link>
      <router-link id="router" to="/doctor/doctor_gigi">
        <div class="doctor_card" @click="getData('Dokter Gigi')">
          <div class="doctor_card_text">
            <h3 class="text1">Dokter Gigi</h3>
            <p class="text2">Praktisi gigi, rongga mulut dan rahang</p>
          </div>
          <i class="fas fa-angle-right icon"></i>
        </div>
      </router-link>
      <router-link id="router" to="/doctor/kardiologi">
        <div class="doctor_card" @click="getData('Dokter Spesialis Jantung')">
          <div class="doctor_card_text">
            <h3 class="text1">Dokter Spesialis Jantung</h3>
            <p class="text2">Kardiologi</p>
          </div>
          <i class="fas fa-angle-right icon"></i>
        </div>
      </router-link>
      <router-link id="router" to="/doctor/dermatologi">
        <div class="doctor_card" @click="getData('Dokter Spesialis Kulit dan Kelamin')">
          <div class="doctor_card_text">
            <h3 class="text1">Dokter Spesialis Kulit dan Kelamin</h3>
            <p class="text2">Dermatologi</p>
          </div>
          <i class="fas fa-angle-right icon"></i>
        </div>
      </router-link>
      <router-link id="router" to="/doctor/otolaringologi">
        <div class="doctor_card" @click="getData('Dokter Spesialis THT')">
          <div class="doctor_card_text">
            <h3 class="text1">Dokter Spesialis THT</h3>
            <p class="text2">Otolaringologi</p>
          </div>
          <i class="fas fa-angle-right icon"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    getData(field) {
      this.$store.dispatch("setField", { field });
      this.$store.dispatch("getDataByField");
    }
  }
};
</script>

<style scoped>
.doctor_card {
  background-color: white;
  display: grid;
  width: 500px;
  border-bottom: 2px solid #cdd1ce;
  grid-template-columns: 80% 20%;
  cursor: pointer;
  padding: 20px;
}

.doctor_card_text {
  margin: 0px 15px;
  font-family: "Source Sans Pro", sans-serif;
  justify-content: center;
}

.icon {
  justify-content: center;
  align-items: center;
  color: #cdd1ce;
  font-size: 23px;
  text-decoration: none;
}

.text2 {
  color: #929794;
  margin-top: 0px;
}
.text1 {
  margin-bottom: 10px;
  font-weight: normal;
  color: black;
}

#router {
  text-decoration: none;
}
</style>
