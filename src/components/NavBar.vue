<template>
  <nav>
    <div class="left-side">
        <router-link to="/"><img :src="logo" alt="Novo Logo" class="logo"></router-link>
    </div>
    <div class="middle">
        <router-link to="/products">SHOP</router-link>
    </div>
    <div class="right-side">
        <router-link to="/cart"><img :src="cartLogo" alt="Cart Logo" class="cartLogo"></router-link>
        <router-link to="/login">Log In</router-link>
        <router-link to="/signUp">Sign Up</router-link>
        <router-link to="/account"><img :src="accLogo" alt="Account Logo" class="accLogo"></router-link>
    </div>
  </nav>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return{
            logo:'https://github.com/candice-dk3/novo/blob/frontend/src/assets/novo-logo.png?raw=true'
        }
    }
}
</script>
<style scoped>   
nav {
  padding: 0.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #0C264E;
  height: 5rem;
}

nav a {
    padding: 1rem;
    color: black;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.4rem;
}

nav a.router-link-exact-active {
    color: #CBB26A;
}
.logo{
    height: 4rem;
    margin-top: 0.4rem;
    margin-right: 15rem;
}
.right-side{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.middle{
    /* padding: 1rem; */
    margin-top: 1.4rem;
}
</style>