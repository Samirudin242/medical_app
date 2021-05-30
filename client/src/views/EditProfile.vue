<template>
  <div class="edit-page">
    <div class="card-edit">
      <div class="card">
        <div class="card-1">
          <div class="card-1-icon">
            <router-link v-bind:to="{name : 'User'}">
              <i class="fas fa-arrow-left"></i>
            </router-link>
          </div>
          <div class="card-1-paragraph">
            <p>Edit profile</p>
          </div>
        </div>
        <form @submit.prevent="editUser(id)">
          <div class="form">
            <div class="input">
              <label for="username">Name</label>
            </div>
            <input v-model="username" id="username" type="text" placeholder="Type your username" />
          </div>
          <div class="form">
            <div class="input">
              <label for="date">Date of Birth</label>
            </div>
            <input v-model="age" id="date" type="date" />
          </div>
          <div class="gender-form">
            <div class="gender">
              <p>Gender</p>
            </div>
            <div class="gender-radio">
              <div class="radio">
                <label for="Pria">Pria</label>
                <input
                  :selected="gender === 'Pria'"
                  v-model="gender"
                  value="Pria"
                  id="Pria"
                  type="radio"
                />
              </div>
              <div class="radio">
                <label for="Wanita">Wanita</label>
                <input
                  :selected="gender === 'Wanita'"
                  v-model="gender"
                  id="Wanita"
                  value="Wanita"
                  type="radio"
                />
              </div>
            </div>
          </div>
          <div class="form">
            <div class="input">
              <label for="email">Email</label>
            </div>
            <input v-model="email" id="email" type="email" placeholder="Type your email" />
          </div>
          <div class="form">
            <div class="input">
              <label for="weight">Weight</label>
            </div>
            <input v-model="weight" type="number" id="weight" />
          </div>
          <div class="form">
            <div class="input">
              <label for="height">Height</label>
            </div>
            <input v-model="height" type="number" id="height" />
          </div>
          <button type="submit">save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      username: JSON.parse(localStorage.getItem("user")).username,
      email: JSON.parse(localStorage.getItem("user")).email,
      age: JSON.parse(localStorage.getItem("user")).age,
      gender: JSON.parse(localStorage.getItem("user")).gender,
      weight: JSON.parse(localStorage.getItem("user")).weight,
      height: JSON.parse(localStorage.getItem("user")).height,
      id: JSON.parse(localStorage.getItem("user")).id
    };
  },
  methods: {
    editUser(id) {
      Axios({
        method: "put",
        url: `http://localhost:3000/edit/${id}`,
        data: {
          username: this.username,
          age: this.age,
          gender: this.gender,
          email: this.email,
          weight: this.weight,
          height: this.height
        }
      })
        .then(data => {
          localStorage.setItem("user", JSON.stringify(data.data.data));
          this.$router.push({ path: "/profile/user" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created: function() {
    console.log(JSON.parse(localStorage.getItem("user")).id);
  }
};
</script>

<style scoped>
.edit-page {
  background-color: #f6f7f8;
  min-height: 100vh;
  width: 100%;
}

.card-edit {
  margin: 0 37vw;
}

.card {
  width: 400px;
  height: 600px;
  background-color: white;
  margin: 0;
  box-shadow: 1px 1px 1px #ddd7d7;
}
.card-1 {
  margin-bottom: 20px;
}

.card .card-1 {
  display: grid;
  grid-template-columns: 15% 85%;
  /* margin-top: 10px; */
}

.card-1-icon {
  margin-top: 10px;
  margin-left: 15px;
  font-size: 20px;
}

.card-1-paragraph {
  margin-top: 10px;
  font-size: 20px;
}
.form {
  margin-left: 15px;
}

.form > input {
  width: 360px;
  border: none;
  height: 36px;
  margin: 5px 0px 10px 0px;
  padding: 10px;
  font-size: 15px;
  border-bottom: 1px solid #1d9648;
}
.form label {
  margin-top: 40px;
  color: #9a9c9a;
}
.gender-form {
  margin-left: 15px;
  border-bottom: 1px solid #1d9648;
  margin-right: 25px;
  margin-bottom: 10px;
}

.gender > p {
  margin: 5px 0px 5px 0px;
  color: #9a9c9a;
  margin-bottom: 10px;
}
.gender-radio {
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 50% 50%;
}

.radio > input {
  margin-left: 10px;
}

input[type="radio"]:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #d1d3d1;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #1d9648;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

form > button {
  margin: 40px 4.25cm;
  width: 80px;
  height: 40px;
  background-color: #9cecba;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  color: white;
}
@media (max-width: 800px) {
  .card-edit {
    margin: 0 9vw;
  }
}
</style>
