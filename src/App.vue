<template>
  <div>
    <Spinner v-if="showSpinner" />
    <div v-else>
      <NavBar/>
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';

export default {
  components: {
    NavBar,
    Footer,
    Spinner
  },
  data() {
    return {
      showSpinner: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false
    }, 2000)
  },
  watch: {
    $route() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style>
*{
  margin: 0;
}
#app {
  font-family: "Gilda Display", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
}
html{
    scroll-behavior: smooth;
}
body::-webkit-scrollbar{
  display: none;
}
</style>