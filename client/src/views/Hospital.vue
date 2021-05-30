<template>
    <div class="booking-container">
      <div class="top_page">
        <div class="top1">
          <router-link v-bind:to="{ name: 'Home' }">
            <i class="fas fa-arrow-left arrow_left"></i>
          </router-link>
          <div class="form">
            <div>
              <p>Dokter di sekitar</p>
              <select class="form_city">
                <option
                  class="text_form"
                  value="Jakarta Selatan"
                  >Jakarta Selatan</option
                >
                <option
                  class="text_form"
                  value="Jakarta Barat"
                  >Jakarta Barat</option
                >
                <option
                  @click="setCity('Jakarta Utara')"
                  class="text_form"
                  value="Jakarta Utara"
                  selected
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
            class="form_search"
            placeholder="Cari nama dokter..."
          />
        </div>
      </div>
      <h1>Cooming Soon</h1>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.booking-container {
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
.booking-container > h1 {
    margin-top: 3cm;
    margin-left: 4cm;
}

@media (max-width: 800px) {
  .booking-container {
    margin: 0 2vw;
  }
}
</style>