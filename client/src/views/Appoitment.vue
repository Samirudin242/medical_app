<template>
  <div class="appoitment-page">
    <div class="alert" v-if="alert === true">
      <div>
      <p>Berhasil membuat janji</p>
      <p>Anda dapat melihat nya di halaman jadwal </p>
      </div>
      <div>
          <i class="fas fa-times times-icon" @click="deleteAlert()"></i>
        </div>
    </div>
    <div class="card">
      <div class="navigation-card">
        <router-link id="router" v-bind:to="{ name: 'DoctorDetail' }">
          <i class="fas fa-arrow-left"></i>
        </router-link>
        <p>
          Pilih Jadwal
        </p>
      </div>
      <div class="appoitment-card">
        <div class="name-appoitment">
          <p>Dokter Pilihan Anda</p>
          <div class="name-information">
            <i class="fas fa-user-circle icon_circle"></i>
            <div class="name-information-description">
              <p>{{doctorData[0].name}}</p>
              <p>{{doctorData[0].Field.name}}</p>
            </div>
          </div>
        </div>
        <div  class="location-appoitment">
          <p>Lokasi Praktik</p>
          <div class="location-list" v-for="hospital in doctorData[0].Hospitals" :key="hospital.id">
            <div class="location-information">
              <i class="fas fa-hospital"></i>
              <div class="location-information-description">
                <p>{{hospital.name}}</p>
                <p>
                  {{hospital.location}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="date-card">
        <p>Pilih Jadwal Praktik</p>
        <input type="date" v-model="isChooseDate"/>
        <div class="date-information" v-if="isChooseDate.length > 0">
          <div class="schedule-information">
            <p>
             {{chooseDate}} <i class="fas fa-chevron-down"></i>
            </p>
          </div>

          <div class="date-picker">
            <i class="far fa-sun"></i>
            <p>Pagi</p>
            <p>10.00 - 13.00</p>
            <button @click="makeAppointment('10.00 am - 13.00 pm', chooseDate)">Buat Janji</button>
          </div>
          <div class="date-picker">
            <i class="fas fa-sun"></i>
            <p>Siang</p>
            <p>13.00 - 15.30</p>
            <button @click="makeAppointment('13.00 am - 15.30 pm', chooseDate)">Buat Janji</button>
          </div>
        </div>
        <div v-if="isChooseDate.length === 0">
        <div class="date-information">
          <div class="schedule-information">
            <p>
              {{dateToday}} (Hari ini) <i class="fas fa-chevron-down"></i>
            </p>
          </div>

          <div class="date-picker">
            <i class="far fa-sun"></i>
            <p>Pagi</p>
            <p>10.00 - 13.00</p>
            <button @click="makeAppointment('10.00 am - 13.00 pm', dateToday)">Buat Janji</button>
          </div>
          <div class="date-picker">
            <i class="fas fa-sun"></i>
            <p>Siang</p>
            <p>13.00 - 15.30</p>
            <button @click="makeAppointment('13.00 pm - 15.30 pm', dateToday)">Buat Janji</button>
          </div>
        </div>
        <div class="date-information">
          <div class="schedule-information">
            <p>
              {{dateTomorrow}} (Besok) <i class="fas fa-chevron-down"></i>
            </p>
          </div>

          <div class="date-picker">
            <i class="far fa-sun"></i>
            <p>Pagi</p>
            <p>10.00 - 13.00</p>
            <button @click="makeAppointment('10.00 am - 13.00 pm', dateTomorrow)">Buat Janji</button>
          </div>
          <div class="date-picker">
            <i class="fas fa-sun"></i>
            <p>Siang</p>
            <p>13.00 - 15.30</p>
            <button @click="makeAppointment('13.00 am - 15.30 pm', dateTomorrow)">Buat Janji</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getDate, getTomorrow, dateConvertion} from "../helper/getDate"
import Axios from "axios";
export default {
  data() {
    return {
      isChooseDate: "",
      dateToday: "",
      dateTomorrow: "",
      chooseDate: "",
      doctorData: this.$store.state.doctorId,
      user: JSON.parse(localStorage.getItem("user")),
      alert: false,
    }
  },
  methods: {
    setChooseDate() {
      this.isChooseDate = true;
    },
    makeAppointment(time, date) {
      Axios({
        method: "post",
        url: "http://localhost:3000/addSchedule",
        data: {
          doctorName: this.doctorData[0].name,
          time: time,
          date: date,
          hospital: this.doctorData[0].Hospitals[0].name,
          location: this.doctorData[0].Hospitals[0].location,
          UserId: this.user.id
        }
      })
      .then(data => {
        // console.log(data.data);
      })
      .catch(err => {
        console.log(err);
      })

      this.alert = true;
    },
    deleteAlert() {
      this.alert = false;
    }
  },
  mounted() {
    this.dateToday = getDate();
    this.dateTomorrow = getTomorrow();
  },
  beforeUpdate() {
    this.chooseDate = dateConvertion(this.isChooseDate)
  },
  created: function() {
    console.log(this.$store.state.doctorId);
    console.log(this.doctorData[0].id);
  }
};


</script>

<style scoped>
.appoitment-page {
  background-color: #f6f7f8;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
}

.alert {
  position: absolute;
  height: 100px;
  width: 340px;
  background-color: #bbf5c0;
  border-radius: 10px;
  margin: 24vw 41vw;
  text-align: center;
  padding: 20px 7px 0px 7px;
  opacity: 0.74;
  display: grid;
  grid-template-columns: 90% 10%;
}
.times-icon {
  cursor: pointer;
  font-size: 20px;
}
.card {
  margin: 0 37vw;
}

.navigation-card {
  display: flex;
  background-color: white;
  width: 450px;
  height: 40px;
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 1px 1px #d1caca;
}

#router {
  margin-left: 20px;
  text-decoration: none;
}
#router > i {
  text-decoration: none;
  color: #8b8c8d;
  font-size: 28px;
}

.navigation-card > p {
  font-size: 20px;
  margin-left: 20px;
  color: #aeb2b6;
}

.appoitment-card {
  width: 450px;
  height: 100%;
  background-color: white;
  box-shadow: 2px 1px 1px #d1caca;
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;
}

.name-appoitment {
  margin-bottom: 10px;
}
.name-appoitment > p {
  font-size: 20px;
  color: #0a851a;
}
.name-information {
  display: flex;
}

.name-information > i {
  color: #aeb2b6;
  font-size: 50px;
  margin-top: 10px;
}

.name-information-description {
  margin-top: 10px;
  margin-left: 20px;
}
.name-information-description > p:nth-child(1) {
  font-size: 20px;
  color: #085b9c;
}
.name-information-description > p:nth-child(2) {
  color: #aeb2b6;
}
.location-appoitment {
  border-top: 1px solid #aeb2b6;
}
.location-appoitment > p {
  font-size: 20px;
  color: #0a851a;
  margin-top: 10px;
  margin-bottom: 7px;
}

.location-list {
  margin-bottom: 10px;
}
.location-information {
  display: grid;
  grid-template-columns: 15% 85%;
}
.location-information > i {
  color: #aeb2b6;
  font-size: 50px;
  margin-top: 9px;
}
.location-information-description > p:nth-child(1) {
  font-size: 20px;
  color: #085b9c;
}

.location-information-description > p:nth-child(2) {
  font-size: 16px;
  color: #aeb2b6;
}

.date-card {
  background-color: white;
  width: 450px;
  height: 100%;
  margin-top: 15px;
  box-shadow: 2px 1px 1px #d1caca;
  border-radius: 10px;
  padding: 17px;
}

.date-card > p {
  font-size: 20px;
  color: #0a851a;
}
.date-card > input {
  width: 410px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  border: 1px solid #aeb2b6;
  border-radius: 10px;
}
.schedule-information > p {
  margin-bottom: 10px;
  /* line-height: 1.5; */
  border-bottom: 1px solid #aeb2b6;
  padding-bottom: 6px;
  cursor: pointer;
}
.schedule-information > p > i {
  /* margin-left: 4.8cm; */
  position: relative;
  float: right;
  margin-right: 17px;
}

.date-information {
  margin-top: 10px;
  border: 1px solid #aeb2b6;
  padding: 4px;
  border-radius: 3px;
}

.date-picker {
  display: grid;
  grid-template-columns: 10% 25% 40% 35%;
  margin-top: 10px;
  color: #aeb2b6;
}
.date-picker > button {
  width: 90px;
  height: 27px;
  padding: 2px;
  color: white;
  background-color: #0a851a;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.date-picker > i {
  color: #085b9c;
}

@media(max-width: 800px) {
  .card {
    margin: 0 6vw;
  } 
  .alert {
  margin: 24vw 20vw;
  }
}
</style>
