<template>
  <div>
    <nav>
      <ul class="navbar_app">
        <div>
          <router-link to="/">
            <b-icon class="icon" font-scale="2" icon="house-door" variant="success"></b-icon>
          </router-link>
          <li>Home</li>
        </div>
        <div>
          <router-link v-bind:to="{ name: 'Schedule' }">
            <b-icon class="icon" font-scale="2" icon="calendar2-week-fill" variant="success"></b-icon>
          </router-link>
          <li>Jadwal</li>
        </div>
        <div>
          <router-link v-bind:to="{ name: 'Payment' }">
            <b-icon class="icon" font-scale="2" icon="wallet2" variant="success"></b-icon>
          </router-link>
          <li>Bayar</li>
        </div>
        <div>
          <router-link v-bind:to="{ name: 'Profile' }">
            <b-icon class="icon" font-scale="2" icon="person" variant="success"></b-icon>
          </router-link>
          <li>Profil</li>
        </div>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.navbar_app {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  background-color: white;
  height: 80px;
  bottom: 0;
  margin-bottom: 0;
  position: fixed;
  width: 99%;
  flex-wrap: wrap;
  padding: 0;
}

li {
  font-family: "Source Sans Pro", sans-serif;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  margin-bottom: 3px;
  cursor: pointer;
}
</style>