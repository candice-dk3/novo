<template>
<nav v-if="showNavbar" >
    <div class="left-side">
        <router-link to="/"><img :src="logo" alt="Novo Logo" class="logo"></router-link>
    </div>
    <div class="middle">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Shop</router-link>
        <router-link to="/service">Services</router-link>
        <router-link to="/about">About</router-link>
    </div>
    <div class="right-side">
      <div class="log-sign-sec">
        <!-- <button @click="showModal = true">Log In</button> -->
        <router-link to="/">Log In</router-link>
        <router-link to="/">Sign Up</router-link>
      </div>
      <div class="acc-sec">
        <router-link to="/cart"><img :src="cartLogo" alt="Cart Logo" class="Logo"></router-link>
        <router-link to="/account"><img :src="accLogo" alt="Account Logo" class="Logo"></router-link>
      </div>
    </div>
    <div class="hamburger" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <div class="mobile-menu" :class="{ 'active': mobileMenuActive }">
        <router-link to="/products">SHOP</router-link>
        <router-link to="/">LOG IN</router-link>
        <router-link to="/">SIGN UP</router-link>
        <router-link to="/cart">CART</router-link>
        <router-link to="/account">ACCOUNT</router-link>
    </div>

    <!-- Log In modal -->
    <div class="modal" v-if="showModal">
      <div class="modal-background" @click="showModal = false"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>Log In</h2>
          <button class="close" @click="showModal = false">&times;</button>
        </div>
        <div class="modal-body">
          <!-- Log in form goes here -->
          <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Log In">
          </form>
        </div>
      </div>
    </div>
</nav>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return{
            logo:'https://github.com/candice-dk3/novo/blob/frontend/src/assets/novo-logo.png?raw=true',
            cartLogo: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/cart.png?raw=true',
            accLogo: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/account.png?raw=true',
            mobileMenuActive: false,
            showNavbar: true,
            showModal: false,
            username: '',
            password: ''
        }
    },
    methods: {
    toggleMenu() {
        this.mobileMenuActive = !this.mobileMenuActive;
      },
    hideNavbar() {
      this.showNavbar = false;
      },
    login() {
      // Call your login API or authentication logic here
      // For demonstration purposes, we'll just log a success message
      console.log('Login successful!');
      this.showModal = false;
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
    position: relative;
}
nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.4rem;
    margin-top: 1.4rem;
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
     margin-top: 1.4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.log-sign-sec a, .acc-sec a {
  margin-right: 2rem;
}
.acc-sec {
 text-align: right;
}
.log-sign-sec {
  text-align: right;
  margin-right: -8rem;
}
.middle{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.Logo{
    width: 2.5rem;
    margin-top: -0.5rem;
}
.hamburger {
    display: none;
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 1rem;
}
.hamburger .line {
    width: 2rem;
    height: 0.2rem;
    background-color: black;
    margin-bottom: 0.5rem;
    }
.mobile-menu {
    display: none;
    position: absolute;
    top: 5rem;
    right: 0;
    background-color: #0C264E;
    padding: 1rem;
    width: 100%;
}
.mobile-menu a {
    display: block;
    margin-bottom: 1rem;
}
.mobile-menu.active {
    display: block;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000; 
}

.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background-color: #f9f9f9;
  margin: 10px;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.modal-header h2 {
  margin: 0;
}

.close {
  cursor: pointer;
  font-size: 24px;
  margin-left: 10px;
}

.modal-body {
  padding: 20px;
}
@media screen and (max-width: 390px) {
nav {
    grid-template-columns: 1fr;
    height: auto;
}
.left-side, .middle, .right-side {
    grid-column: 1;
    margin-bottom: 1rem;
}
.logo {
    margin-right: 0;
}
.right-side {
    grid-template-columns: 1fr;
}
.Logo {
    margin-top: 0;
}
nav a {
    font-size: 1.2rem;
}
.hamburger {
    display: block;
}
.right-side, .middle {
    display: none;
}
}
@media screen and (max-width: 768px) and (min-width: 391px) {
  nav {
    grid-template-columns: 1fr;
    height: auto;
  }
  .left-side, .middle, .right-side {
    grid-column: 1;
    margin-bottom: 1rem;
  }
  .logo {
    /* margin-right: 2rem; */
    text-align: right;
  }
  .right-side {
    grid-template-columns: 1fr;
  }
  .Logo {
    margin-top: 0;
  }
  nav a {
    font-size: 1.2rem;
  }
  .hamburger {
    display: block;
  }
  .right-side, .middle {
    display: none;
  }
}
@media screen and (max-width: 1024px) and (min-width: 769px){
  .left-side, .middle, .right-side {
    grid-column: auto;
    margin-bottom: 0;
  }
  .logo {
    margin-right: 0rem;
  }
  .right-side {
    grid-template-columns: repeat(4, 1fr);
  }
  .Logo {
    margin-top: -0.5rem;
  }
  nav a {
    font-size: 1.4rem;
  }
  .hamburger {
    display: none;
  }
  .middle{
    margin-top: 0rem;
  }
  .right-side, .middle {
    display: grid;
  }
}
</style>