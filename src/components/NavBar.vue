<template>
  <nav>
    <div class="left-side">
        <router-link to="/products">SHOP</router-link>
    </div>
    <div class="middle">
        <router-link to="/">Novo Logo</router-link>
    </div>
    <div class="right-side">
        <router-link to="/cart">Cart</router-link>
        <router-link to="/account">Account</router-link>
    </div>
  </nav>
</template>
<script>
export default {
    name:'Navbar'
}
</script>
<style scoped>   
nav {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #0C264E;
  height: 2.2rem;
}

nav a {
    padding: 1rem;
    color: black;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.4rem;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>