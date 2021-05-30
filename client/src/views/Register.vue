<template>
  <div>
    <div class="register-card">
      <div class="error-card" v-if="isError">
        <div class="error">
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </div>
        <div>
          <i class="fas fa-times times-icon" @click="deleteErrors()"></i>
        </div>
      </div>

      <div class="card">
        <h1>Register</h1>
        <form @submit.prevent="register()">
          <div class="input-register">
            <label for="username">Username</label>
            <div class="input-form">
              <i class="fas fa-user"></i>
              <input
                id="username"
                type="text"
                placeholder="Type your username"
                v-model="username"
              />
            </div>
          </div>
          <div class="input-register">
            <label for="username">Email</label>
            <div class="input-form">
              <i class="fas fa-envelope"></i>
              <input
                id="username"
                type="text"
                placeholder="Type your email"
                v-model="email"
              />
            </div>
          </div>
          <div class="input-register">
            <label for="password">Password</label>
            <div class="input-form">
              <i class="fas fa-lock"></i>
              <input
                id="password"
                type="password"
                placeholder="Type your password"
                v-model="password"
              />
            </div>
          </div>
          <button type="submit">register</button>
        </form>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent";
import Axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      errors: [],
      username: "",
      email: "",
      password: "",
      isError: false,
    };
  },
  methods: {
    register() {
      this.checkForm();
      if (this.errors.length) {
        this.isError = true;
      } else {
        Axios({
          method: "post",
          url: "http://localhost:3000/register",
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
          },
        })
          .then((data) => {
            console.log(data.data);
          })
          .catch((err) => {
            this.errors.push("User already exists, please login !");
            this.isError = true;
          });
        this.$router.push({ path: "/profile" });
      }
    },
    checkForm() {
      this.errors = [];
      if (!this.username) {
        this.errors.push("Username required");
      }
      if (!this.password) {
        this.errors.push("Password required");
      }
      if (!this.email) {
        this.errors.push("Email required");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required");
      }
    },
    validEmail(email) {
      let reqex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reqex.test(email);
    },
    deleteErrors() {
      this.errors = [];
      this.isError = false;
    },
  },
  watch: {},
};
</script>
<style scoped>
.register-card {
  margin: 0 37vw;
  min-height: 100vh;
  box-sizing: border-box;
}

.error-card {
  position: absolute;
  top: 30%;
  z-index: 2;
  left: 40%;
  /* min-height: 100px; */
  width: 300px;
  background-color: rgb(240, 172, 172);
  display: grid;
  grid-template-columns: 90% 10%;
  border-radius: 3px;
}

.error > ul {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.error > ul > li {
  /* text-align: center;*/
  margin-top: 5px;
  font-size: 20px;
  list-style-type: none;
  color: white;
}
.times-icon {
  cursor: pointer;
  font-size: 25px;
  margin-top: 3px;
  color: white;
}

.times-icon:hover {
  color: black;
}

.card {
  width: 400px;
  height: 550px;
  margin-top: 1cm;
  background-color: white;
  border-radius: 10px;
  position: fixed;
  box-shadow: 1px 1px 10px grey;
}

.card h1 {
  text-align: center;
  margin-top: 1cm;
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

.input-register {
  margin: 20px 50px;
  line-height: 40px;
}

.input-form {
  display: inline;
}

.input-register > label {
  display: block;
  font-size: 25px;
}
.input-form > i {
  font-size: 20px;
  color: #9cecba;
  margin-right: 5px;
}
.input-form > input {
  /* display: block; */
  font-size: 20px;
  border: none;
  background-color: white;
  padding: 10px;
  border-bottom: 1px solid #9cecba;
  width: 270px;
}

.register {
  text-align: center;
  line-height: 26px;
}

@media (max-width: 800px) {
  .register-card {
    margin: 0 9vw;
  }

  .error-card {
    left: 22%;
  }
}
</style>
