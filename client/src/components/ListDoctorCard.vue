<template>
  <div>
    <div v-for="doctor in doctors" :key="doctor.id">
      <router-link id="router" v-bind:to="{ name: 'DoctorDetail' }">
        <div class="card_list_doctor" @click="setData(doctor.id)">
          <div>
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
          <i class="fas fa-user-circle icon_circle"></i>
          <div v-if="doctor.online === true" class="online">
            <i class="far fa-check-circle icon_check"></i>
            <p>Bisa buat janji online</p>
          </div>
        </div>
      </router-link>
      <!-- <div class="card_list_doctor">
        <div>
          <p class="name_card">dr. Agieta Zulkifli, SpTHT-KL</p>
          <div class="hospital">
            <i class="fas fa-clinic-medical icon_hopital"></i>
            <p>RS Pusat Pertamina</p>
          </div>
          <div class="schedule">
            <i class="far fa-clock icon_clock"></i>
            <p>Praktik hari ini (10.00 - 12.00)</p>
          </div>
        </div>
        <i class="fas fa-user-circle icon_circle"></i>
        <div class="online">
          <i class="far fa-check-circle icon_check"></i>
          <p>Bisa buat janji online</p>
        </div>
      </div>
      <div class="card_list_doctor">
        <div>
          <p class="name_card">dr. Agieta Zulkifli, SpTHT-KL</p>
          <div class="hospital">
            <i class="fas fa-clinic-medical icon_hopital"></i>
            <p>RS Pusat Pertamina</p>
          </div>
          <div class="schedule">
            <i class="far fa-clock icon_clock"></i>
            <p>Praktik hari ini (10.00 - 12.00)</p>
          </div>
        </div>
        <i class="fas fa-user-circle icon_circle"></i>
        <div class="online">
          <i class="far fa-check-circle icon_check"></i>
          <p>Bisa buat janji online</p>
        </div>
      </div>-->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  props: {
    cityName: String
  },
  data() {
    return {};
  },
  watch: {
    cityName: function() {
      let city = this.cityName;
      this.$store.dispatch("getDoctorData", { city });
      let field = this.$store.state.field;
      this.$store.dispatch("getDataByField", { field });
    }
  },
  computed: {
    doctors() {
      let datas = this.$store.state.doctor;
      datas.forEach(data => {
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
        // console.log(dayOutpu
      });
      return datas;
    }
  },
  methods: {
    setData(id) {
      this.$store.dispatch("getDataById", { id });
    }
  }
};
</script>

<style scoped>
.card_list_doctor {
  background-color: white;
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 0px 15px;
  width: 405px;
  border-radius: 7px;
  box-shadow: 1px 1px 3px 1px rgb(230, 227, 227);
  line-height: 2px;
  height: 160px;
  margin-top: 10px;
  cursor: pointer;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: #b2b5b8;
}

.icon_check {
  margin-right: 10px;
}

.online {
  margin-left: 15px;
  display: flex;
  align-items: center;
  background-color: #f4f6f8;
  justify-content: center;
  border-radius: 5px;
  width: 370px;
  margin-bottom: 15px;
  color: #085b9c;
  font-weight: bold;
}

#router {
  text-decoration: none;
}
</style>
