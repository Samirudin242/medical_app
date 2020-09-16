<template>
  <div>
    <nav>
      <ul class="navbar_filter">
        <div class="navbar_text left">
          <router-link to="/" id="router">
            <i class="fas fa-list icon_nav"></i>
          </router-link>
          <li>Filter</li>
        </div>
        <div class="navbar_text right">
          <router-link id="router" v-bind:to="{ name: 'Schedule' }">
            <i class="fas fa-arrow-down icon_nav"></i>
          </router-link>
          <li>Urutkan</li>
        </div>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.navbar_filter {
  display: grid;
  grid-template-columns: 50% 50%;
  list-style-type: none;
  background-color: white;
  height: 50px;
  bottom: 0;
  margin-bottom: 0;
  position: fixed;
  width: 435px;
  flex-wrap: wrap;
  padding: 0;
  box-shadow: 1px 1px 1px #888888;
}

li {
  font-family: "Source Sans Pro", sans-serif;
  color: #085b9c;
  font-size: 19px;
  margin-left: 15px;
  font-weight: 600;
}

.icon_nav {
  color: #8b8c8d;
  font-size: 22px;
}

.navbar_text {
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
}

.left {
  border-right: 1px solid #8b8c8d;
}
.right {
  border-left: 1px solid #8b8c8d;
}
</style>