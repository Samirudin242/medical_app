<template>
  <div id="app">
    <!-- <Home /> -->
    <router-view />
  </div>
</template>

<script></script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-color: #dae8e0;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;
  box-sizing: border-box;
}

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
