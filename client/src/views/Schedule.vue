<template>
  <div class="schedule">
    <div class="schedule-card">
      <div v-for="(data, idx) in datas" :key="idx">
      <div  class="schedule-date">
        <div class="dot"></div>
      <p>{{data.dateName}}</p>
      </div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
       <div v-for="list in data.datas" :key="list.id" class="schedule-list">
         <div>
        <div class="schedule-description">
          <i class="fas fa-user-md"></i>
        <p>{{list.doctorName}}</p>
        </div>
        <div class="schedule-description">
          <i class="fas fa-clock"></i>
        <p>{{list.time}}</p>
        </div>
        <div class="schedule-description">
          <i class="fas fa-hospital"></i>
        <p>{{list.hospital}}</p>
        </div>
        <div class="schedule-description">
          <i class="fas fa-map-marker-alt"></i>
        <p>{{list.location}}</p>
        </div>
         </div>
          <i @click="deleteSchedule(list.id)" class="fas fa-times times-icon"></i>
      </div>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent";
import {scheduleConverter} from "../helper/getDate"
import Axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      datas: [],
    }
  },
  methods: {
    renderingData() {
    Axios({
      method: "get",
      url: `http://localhost:3000/getSchedule/${this.user.id}`
      })
      .then(data => {
      this.datas = scheduleConverter(data.data.data.Schedules);
      })
      .catch(err => {
      console.log(err);
     })
    },
    deleteSchedule(id) {
      Axios({
        method: "delete",
        url: `http://localhost:3000/deleteSchedule/${id}`
      })
      .then(data => {
        this.renderingData();
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    this.renderingData()
  }
};
</script>

<style scoped>


.schedule-card {
  margin: 0 37vw;
  min-height: 100vh;
  margin-top: 0px;

}

.schedule-date {
  display: flex;
  padding-top: 10px;
}

.dot {
  height: 10px;
  width:10px;
  background-color: #aeb2b6;
  border-radius: 10px;
  align-items: center;
  margin-top: 5px;
  margin-right: 10px;
}

.line {
  margin-bottom: 3px;
  margin-left: 4.3px;
  height: 5px;
  border-left: 1px solid #aeb2b6;
}

.schedule-list {
  background-color: white;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 3px;
  display: grid;
  grid-template-columns: 95% 5%;
}

.schedule-list > i {
  cursor: pointer;
}

.schedule-description {
  display: flex;
  padding: 2px;
}
.schedule-description  > i {
  margin-right: 5px;
  color: #aeb2b6;
}
.schedule-description > p {
  color: #085b9c
}

@media (max-width: 800px) {
  .schedule-card {
    margin: 0 9vw;
  }
}

</style>
