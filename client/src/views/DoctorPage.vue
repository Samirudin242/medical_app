<template>
  <div class="container">
    <div class="doctorPage_container">
      <div class="top_page">
        <div class="top1">
          <router-link v-bind:to="{ name: 'Home' }">
            <i class="fas fa-arrow-left arrow_left"></i>
          </router-link>
          <div class="form" v-if="inputSearch.length === 0">
            <div>
              <p>Dokter di sekitar</p>
              <select v-model="cityName" class="form_city">
                <option
                  @click="setCity('Jakarta Selatan')"
                  class="text_form"
                  value="Jakarta Selatan"
                  :selected="cityName === 'Jakarta Selatan'"
                  >Jakarta Selatan</option
                >
                <option
                  @click="setCity('Jakarta Barat')"
                  class="text_form"
                  value="Jakarta Barat"
                  :selected="cityName === 'Jakarta Barat'"
                  >Jakarta Barat</option
                >
                <option
                  @click="setCity('Jakarta Utara')"
                  class="text_form"
                  value="Jakarta Utara"
                  :selected="cityName === 'Jakarta Utara'"
                  >Jakarta Utara</option
                >
              </select>
            </div>
            <i class="fas fa-angle-down arrow_right"></i>
          </div>
        </div>
        <div class="form">
          <i class="fas fa-search"></i>
          <input
            v-model="inputSearch"
            class="form_search"
            placeholder="Cari nama dokter..."
          />
        </div>
      </div>
      <h3 v-if="inputSearch.length === 0">Spesialisasi Dokter</h3>
      <DoctorCompponent v-if="inputSearch.length === 0" />
      <ListDoctorCard v-if="inputSearch.length > 0" />
    </div>
    <router-view />
  </div>
</template>

<script>
import DoctorCompponent from "../components/DoctorComponent";
import ListDoctorCard from "../components/ListDoctorCard.vue";
export default {
  components: {
    DoctorCompponent,
    ListDoctorCard,
  },
  data() {
    return {
      cityName: this.$store.state.city,
      inputSearch: "",
      isSearch: false,
    };
  },
  watch: {
    cityName: function() {
      let city = this.cityName;
      this.$store.dispatch("setCity", { city });
      this.$store.dispatch("getDoctorData", { city });
    },
    inputSearch: function() {
      let name = this.inputSearch;
      this.$store.dispatch("getAllData", { name });
    },
  },
  methods: {
    setCity(city) {
      this.$store.dispatch("setCity", { city });
    },
  },
  created() {
    let city = this.cityName;
    this.$store.dispatch("getDoctorData", { city });
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
}

.doctorPage_container {
  width: 500px;
  margin: 0 37vw;
}

.top_page {
  background-color: white;
  height: 160px;
  box-shadow: 1px 1px 4px #d8d3d3;
}

.top1 {
  display: flex;
  align-items: center;
  background-color: white;
  width: 434px;
  margin: 0 15px;
}

.form {
  padding: 0px 0px 0px 10px;
  display: flex;
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

.form_search {
  width: 380px;
  height: 30px;
  border: none;
  margin-top: 20px;
  font-size: 17px;
  font-family: "Source Sans Pro", sans-serif;
  border-radius: 3px;
}

::placeholder {
  color: #9c9ea1;
}

.text_form {
  font-size: 20px;
  color: #085b9c;
}

input {
  padding-left: 10px;
}

p {
  margin-left: 10px;
  margin-bottom: 0;
  font-family: "Source Sans Pro", sans-serif;
  color: #8b8c8d;
  margin-top: 15px;
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
  margin: 20px 10px 0px 6px;
}

h3 {
  margin: 40px 15px 20px 15px;
  font-family: "Source Sans Pro", sans-serif;
  color: #8b8c8d;
}

#router {
  text-decoration: none;
}

@media (max-width: 800px) {
  .doctorPage_container {
    margin: 0 40vw 0 5vw;
  }
}
</style>
