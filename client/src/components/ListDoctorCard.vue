<template>
  <div>
    <div
      class="list_doctor_container"
      v-for="doctor in doctors"
      :key="doctor.id"
    >
      <router-link id="router" v-bind:to="{ name: 'DoctorDetail' }">
        <div class="card_list_doctor" @click="setDataDoctor(doctor.id)">
          <div>
            <div class="doctor_information">
              <p class="name_card">{{ doctor.name }}</p>
              <div class="hospital">
                <i class="fas fa-clinic-medical icon_hopital"></i>
                <p>{{ doctor.Hospitals[0].name }}</p>
              </div>
              <div class="schedule">
                <i class="far fa-clock icon_clock"></i>
                <p>{{ doctor.schedule }}</p>
              </div>
            </div>
            <div class="online">
              <i class="far fa-check-circle icon_check"></i>
              <p>Bisa buat janji online</p>
            </div>
          </div>
          <div>
            <i class="fas fa-user-circle icon_circle"></i>
          </div>
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Axios from "axios";
export default {
  props: {
    cityName: String,
  },
  data() {
    return {};
  },
  watch: {
    cityName: function() {
      let city = this.cityName;
      this.$store.dispatch("setCity", { city });
      this.$store.dispatch("getDoctorData", { city });
      let field = this.$store.state.field;
      this.$store.dispatch("getDataByField");
    },
  },
  computed: {
    doctors() {
      let datas = this.$store.state.doctor;
      datas.forEach((data) => {
        let days = data.schedule;
        let day = new Date().getDay();
        let dayName = "";
        day === 1
          ? (dayName = "Senin")
          : day === 2
          ? (dayName = "Selasa")
          : day === 3
          ? (dayName = "Rabu")
          : day === 4
          ? (dayName = "Kamis")
          : day === 5
          ? (dayName = "Jumat")
          : day === 6
          ? (dayName = "Sabtu")
          : (dayName = "Minggu");

        let dayOutput = "";
        function getDay(days) {
          let today = false;
          let dayArray = days.split(",");
          for (let i = 0; i < dayArray.length; i++) {
            if (dayArray[i].includes(dayName)) {
              let day = dayArray[i].replace(dayName, "Hari ini");
              dayOutput = day;
              today = true;
            }
          }
          if (today === false) {
            dayOutput = dayArray[0];
          }
        }

        getDay(days);
        data.schedule = dayOutput;
        this.$store.dispatch("setSchedule", { dayOutput });
      });
      return datas;
    },
  },
  methods: {
    setDataDoctor(id) {
      this.$store.dispatch("getDataById", { id });
    },
  },
};
</script>

<style scoped>
.list_doctor_container {
  width: 500px;
}

.card_list_doctor {
  background-color: white;
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 0px 5px 0px 25px;
  width: 450px;
  border-radius: 7px;
  box-shadow: 1px 1px 3px 1px rgb(230, 227, 227);
  line-height: 2px;
  height: 180px;
  margin-top: 10px;
  cursor: pointer;
}

.doctor_information {
  line-height: 30px;
  margin: 10px 0px 0px 5px;
}

.hospital {
  display: flex;
  align-items: center;
}

.schedule {
  display: flex;
  align-items: center;
  color: #3c854f;
}
.name_card {
  margin-left: 15px;
  color: #085b9c;
  font-weight: bold;
}
.icon_hopital {
  margin: 0px 10px 0px 15px;
  color: #b2b5b8;
}

.icon_clock {
  margin: 0px 10px 0px 15px;
}

.icon_circle {
  margin: 40px 5px 0px 15px;
  font-size: 60px;
  color: #b2b5b8;
}

.icon_check {
  margin-right: 10px;
}

.online {
  margin: 15px 0px 15px 15px;
  display: flex;
  align-items: center;
  background-color: #f4f6f8;
  justify-content: center;
  border-radius: 5px;
  width: 270px;
  height: 35px;
  color: #085b9c;
  font-weight: bold;
}

#router {
  text-decoration: none;
}
</style>
