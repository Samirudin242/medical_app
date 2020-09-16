import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doctors: [],
    doctor: [],
    doctorId: [],
    schedule: "",
    city: "Jakarta Selatan",
    field: "",
  },
  mutations: {
    SET_DATA(state, payload) {
      state.doctors = payload;
    },
    SET_DATA_FIELD(state, payload) {
      state.doctor = payload;
    },
    SET_DATA_ID(state, payload) {
      state.doctorId = payload;
    },
    SET_FIELD(state, payload) {
      state.field = payload;
    },
    SET_SCHEDULE(state, payload) {
      state.schedule = payload;
    },
    SET_CITY(state, payload) {
      state.city = payload;
    },
  },
  actions: {
    getDoctorData(context, payload) {
      Axios({
        method: "get",
        url: `http://localhost:3000/doctor/${payload.city}`,
      })
        .then((data) => {
          let doctorsData = data.data;
          context.commit("SET_DATA", doctorsData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDataByField(context, payload) {
      let doctorField = [];
      let datas = this.state.doctors;
      datas.forEach((data) => {
        if (data.Field.name === payload.field) {
          doctorField.push(data);
        }
      });
      context.commit("SET_DATA_FIELD", doctorField);
    },
    getDataById(context, payload) {
      Axios({
        method: "GET",
        url: `http://localhost:3000/doctor/find/${payload.id}`,
      })
        .then((data) => {
          context.commit("SET_DATA_ID", data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setField(context, payload) {
      context.commit("SET_FIELD", payload.field);
    },
    setSchedule(context, payload) {
      context.commit("SET_SCHEDULE", payload.dayOutput);
    },
    setCity(context, payload) {
      context.commit("SET_CITY", payload.city);
    },
  },
  modules: {},
});
