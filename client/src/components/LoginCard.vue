<template>
  <div class="login-card">
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
      <h1>Login</h1>
      <form @submit.prevent="Login()">
        <div class="input-login">
          <label for="email">Email</label>
          <div class="input-form">
            <i class="fas fa-user"></i>
            <input v-model="email" id="email" type="text" placeholder="Type your email" />
          </div>
        </div>
        <div class="input-login">
          <label for="password">Password</label>
          <div class="input-form">
            <i class="fas fa-lock"></i>
            <input
              v-model="password"
              id="password"
              type="password"
              placeholder="Type your password"
            />
          </div>
        </div>
        <button>Login</button>
      </form>
      <div class="register">
        <p>Not have an account yet?</p>
        <router-link v-bind:to="{ name: 'Register' }">
          <p>Register</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      isError: false
    };
  },
  methods: {
    Login() {
      this.checkForm();
      if (this.errors.length) {
        this.isError = true;
      } else {
        Axios({
          method: "post",
          url: "http://localhost:3000/login",
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(data => {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.data));
            this.$store.dispatch("setToken", data.data.token);
            this.$store.dispatch("setDataUser", data.data.data);
            console.log("succes login");
            this.$router.push({ path: "/profile/user" });
          })
          .catch(err => {
            this.errors.push("Wrong password or email");
            this.isError = true;
          });
      }
    },
    onClickButton(event) {
      this.$emit("clicked", event);
    },
    checkForm() {
      this.errors = [];
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
    }
  }
};
</script>

<style scoped>
.login-card {
  margin: 0 37vw;
  min-height: 100vh;
  box-sizing: border-box;
}

.error-card {
  position: absolute;
  top: 30%;
  z-index: 2;
  left: 40%;
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
  margin-top: 5px;
  font-size: 20px;
  list-style-type: none;
  color: white;
  padding: 5px 0px 5px 0px;
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
  box-shadow: 2px 1px 1px #d1caca;
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

.input-login {
  margin: 20px 50px;
  line-height: 50px;
}

.input-form {
  display: inline;
}

.input-login > label {
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
  .login-card {
    margin: 0 9vw;
  }
  .error-card {
    left: 22%;
  }
}
</style>
