<template>
  <div>
    <p>a</p>
    <div class="article-container">
    <h1>Cooming Soon</h1>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent";
export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>

.article-container {
  margin: 15vw 42vw;
}

p {
  color: #9cecba
}

@media (max-width: 800px) {
  .article-container {
    margin: 15vw 27vw;
  }
}
</style>
