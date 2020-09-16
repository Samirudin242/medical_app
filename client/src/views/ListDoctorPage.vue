<template>
  <div class="container">
    <div class="doctorPage_container">
      <div class="top_page">
        <div class="top1">
          <router-link v-bind:to="{ name: 'Doctors' }">
            <i class="fas fa-arrow-left arrow_left"></i>
          </router-link>
          <div class="form">
            <p>Dokter di sekitar</p>
            <select class="form_city" v-model="cityName">
              <option
                class="text_form"
                value="Jakarta Selatan"
                :selected="cityName === 'Jakarta Selatan'"
                >Jakarta Selatan</option
              >
              <option
                class="text_form"
                value="Jakarta Barat"
                :selected="cityName === 'Jakarta Barat'"
                >Jakarta Barat</option
              >
              <option
                class="text_form"
                value="Jakarta Utara"
                :selected="cityName === 'Jakarta Utara'"
                >Jakarta Utara</option
              >
            </select>
          </div>
          <i class="fas fa-angle-down arrow_right"></i>
          <i class="fas fa-search"></i>
        </div>
        <div class="filter_top">
          <p class="filter_text active">Semua</p>
          <p class="filter_text">Praktik hari ini</p>
          <p class="filter_text">Booking online</p>
        </div>
      </div>
    </div>
    <DoctorCard class="doctor_card" :cityName="cityName" />
    <NavbarDoctor />
    <router-view />
  </div>
</template>

<script>
import NavbarDoctor from "../components/NavbarDoctor.vue";
import DoctorCard from "../components/ListDoctorCard.vue";
export default {
  components: {
    NavbarDoctor,
    DoctorCard,
  },
  data() {
    return {
      cityName: this.$store.state.city,
    };
  },
  watch: {
    cityName: function() {
      let city = this.cityName;
      this.$store.dispatch("setCity", { city });
      this.$store.dispatch("getDoctorData", { city });
    },
  },
  methods: {
    setCity(cityName) {
      this.$store.dispatch("setCity", { city });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #f6f7f8;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}

.top_page {
  background-color: white;
  height: 160px;
  box-shadow: 1px 1px 4px #e0dddd;
  width: 434px;
}

.top1 {
  display: flex;
  align-items: center;
  background-color: white;
  margin: 0 15px;
}

.form {
  padding: 0px 0px 0px 10px;
}

.form_city {
  border: none;
  height: 40px;
  width: 165px;
  -webkit-appearance: none;
  font-size: 23px;
  font-family: "Source Sans Pro", sans-serif;
  color: #085b9c;
  margin-left: 5px;
}

.filter_top {
  display: flex;
  width: 100%;
  justify-content: space-around;
  cursor: pointer;
}

.filter_text {
  border: 1px solid #8b8c8d;
  padding: 10px;
  border-radius: 25px;
}
.active {
  background-color: rgb(197, 247, 205);
  border: none;
  color: #085b9c;
}

p {
  margin-left: 15px;
  margin-bottom: 0;
  font-family: "Source Sans Pro", sans-serif;
  color: #8b8c8d;
}
.arrow_left {
  color: #8b8c8d;
  font-size: 25px;
  margin-top: 16px;
}
.arrow_right {
  color: #8b8c8d;
  font-size: 22px;
  margin-top: 38px;
}

.fa-search {
  color: #085b9c;
  font-size: 25px;
  margin-right: 10px;
  margin-left: 4cm;
}

h3 {
  margin: 40px 15px 20px 15px;
  font-family: "Source Sans Pro", sans-serif;
  color: #8b8c8d;
}

#router {
  text-decoration: none;
}
.doctor_card {
  margin-top: 25px;
}
</style>
