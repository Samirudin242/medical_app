<template>
  <div class="container">
    <div class="page_container">
      <div class="name_container">
        <div class="name_icon">
          <router-link id="router" v-bind:to="{ name: 'DoctorList' }">
            <i class="fas fa-arrow-left"></i>
          </router-link>
          <i class="fas fa-share-alt"></i>
        </div>
        <div class="name_description">
          <div class="name_description_text">
            <h3>{{ doctor.name }}</h3>
            <p class="name_description_text_gender">{{ doctor.gender }}</p>
          </div>
          <div class="name_description_icon">
            <i class="fas fa-user-circle icon_circle"></i>
          </div>
        </div>
      </div>
      <div class="schedule_container">
        <p>Jadwal Praktik Terdekat</p>
        <div class="schedule_container_text">
          <ul>
            <li>{{ doctor.Hospitals[0].name }}</li>
            <li>{{ day }}</li>
            <!-- <li>10.00 - 12.00</li> -->
          </ul>
          <p>BUAT JANJI</p>
          <div class="schedule_container_icon">
            <p>Lihat Semua</p>
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
      <div class="location_container">
        <p>Lokasi Praktik</p>
        <div class="location_container_item">
          <div
            class="location_container_text"
            v-for="hospital in doctor.Hospitals"
            :key="hospital.id"
          >
            <p>{{ hospital.name }}</p>
            <div class="location_container_icon">
              <i class="fas fa-map-marker-alt"></i>
              <p>
                {{ hospital.location }}
              </p>
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
          <!-- <div class="location_container_text">
            <p>Rumah Sakit Pertamina</p>
            <div class="location_container_icon">
              <i class="fas fa-map-marker-alt"></i>
              <p>
                jl. Kyai Maja No. 43, Rt 4 Rw 8, Gunung, Kebayoran Baru Jakarta
              </p>
              <i class="fas fa-angle-right"></i>
            </div>
          </div> -->
          <div class="location_container_button">
            <p>Lihat Semua</p>
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
      <div class="ability_container" v-if="abilities.length >= 1">
        <p>Keahlian</p>
        <div class="ability_container_text">
          <ul v-for="(ability, idx) in abilities" :key="idx">
            <li>{{ ability }}</li>
          </ul>
          <div class="ability_container_button">
            <p>Lihat Semua</p>
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
      <div class="ability_container" v-if="diseases.length >= 1">
        <p>Penyakit Terkait</p>
        <div class="ability_container_text">
          <ul v-for="(disease, idx) in diseases" :key="idx">
            <li>{{ disease }}</li>
          </ul>
          <div class="ability_container_button">
            <p>Lihat Semua</p>
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: this.$store.state.schedule,
      abilities: [],
      diseases: [],
    };
  },
  mounted() {
    // console.log(this.$store.state.schedule, "detail");
  },
  computed: {
    doctor() {
      console.log(this.$store.state.doctorId, "detail");
      let datas = this.$store.state.doctorId;
      let doctorAbility = [];
      let doctorDisease = [];
      // console.log(datas.ability);
      function getAbilities(ability) {
        if (ability !== "") {
          for (let i = 0; i < ability.length; i++) {
            if (ability[i] === ",") {
              doctorAbility = ability.split(",");
              return;
            }
          }
        } else if (ability !== "") {
          doctorAbility.push(ability);
        }
      }

      function getDisieases(disease) {
        if (disease !== "") {
          for (let i = 0; i < disease.length; i++) {
            if (disease[i] === ",") {
              doctorDisease = disease.split(",");
              return;
            }
          }
        } else if (disease !== "") {
          doctorDisease.push(disease);
        }
      }

      getAbilities(datas.ability);
      getDisieases(datas.disease);
      this.diseases = doctorDisease;
      this.abilities = doctorAbility;
      return datas;
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
}

.name_container {
  background-color: white;
  width: 435px;
  box-shadow: 1px 1px 1px rgb(230, 226, 226);
}

.name_icon {
  display: flex;
  justify-content: space-between;
  color: #8b8c8d;
  cursor: pointer;
}
.fas {
  margin: 15px 15px 0px 15px;
}

.name_description {
  display: flex;
}

.name_description_text {
  margin: 0px 15px;
  line-height: 10px;
}
h3 {
  color: #085b9c;
}
.name_description_text_gender {
  color: #8b8c8d;
  font-weight: 250;
}
.name_description_icon {
  color: #aeb2b6;
  font-size: 60px;
  margin-left: 20px;
  margin-bottom: 10px;
}
#router {
  text-decoration: none;
  color: #8b8c8d;
}

.schedule_container {
  margin: 0px 15px;
}
.schedule_container > p {
  color: #8b8c8d;
}

.schedule_container_text {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px rgb(230, 228, 228);
}

.schedule_container_text > ul {
  list-style-type: none;
  line-height: 25px;
  margin-top: 0px;
  padding: 0;
}
.schedule_container_text > ul > li:nth-child(1) {
  color: #085b9c;
}
.schedule_container_text > ul > li:nth-child(2) {
  font-weight: 100;
}
.schedule_container_text > ul > li:nth-child(3) {
  color: #aeb2b6;
}
.schedule_container_text > p {
  background-color: #0a851a;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}
.schedule_container_icon {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #e2e5e7;
  cursor: pointer;
}
.schedule_container_icon > i {
  color: #8b8c8d;
  font-size: 22px;
}
.schedule_container_icon > p {
  color: #1ec27e;
  margin-bottom: 0px;
}
.location_container {
  margin: 0px 15px;
}
.location_container > p {
  color: #8b8c8d;
}
.location_container_item {
  background-color: white;
  padding: 15px;
  box-shadow: 1px 1px 2px rgb(230, 228, 228);
  border-radius: 5px;
}
.location_container_text {
  border-bottom: 2px solid #e2e6eb;
}
.location_container_text > p {
  color: #085b9c;
}
.location_container_icon {
  display: grid;
  grid-template-columns: 10% 80% 10%;
  margin: 0px;
  color: #8b8c8d;
  margin-bottom: 10px;
}
.location_container_icon > p {
  margin: 0px;
}
.location_container_icon > i {
  margin: 0px;
  font-size: 22px;
}
.location_container_button {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0px 15px 0px;
}
.location_container_button > p {
  color: #1ec27e;
  margin-bottom: 0px;
}
.location_container_button > i {
  color: #8b8c8d;
  font-size: 22px;
  justify-content: center;
}

.ability_container {
  margin: 0px 15px;
}
.ability_container > p {
  color: #8b8c8d;
}
.ability_container_text {
  background-color: white;
  padding: 0px 15px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgb(221, 202, 202);
}
.ability_container_text > ul {
  list-style-type: none;
  padding: 0;
  line-height: 40px;
  color: #8b8c8d;
}
.ability_container_text > ul > li {
  border-bottom: 2px solid #f0f3f5;
}
.ability_container_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.ability_container_button > p {
  margin: 0px;
  color: #1ec27e;
}
.ability_container_button > i {
  color: #8b8c8d;
  font-size: 22px;
  align-self: center;
  justify-self: center;
  margin-right: 25px;
  margin-bottom: 10px;
}
</style>
