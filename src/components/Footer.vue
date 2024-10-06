<template>
<footer>
    <div class="content">
        <div class="about-div">
            <h2>About</h2>
            <div class="about-content">
                <a href="/about">Our Story</a>
                <a href="/about">Sustainability</a>
                <a href="/about">Careers</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
        <div class="customer-S">
            <h2>Customer Service</h2>
            <div class="customerS-content">
                <a href="/">Prices & Payments</a>
                <a href="/">Shipping</a>
                <a href="/">Return Policy</a>
                <a href="/">Terms of Services</a>
                <a href="/">Privacy Policy</a>
            </div>   
        </div>
        <div class="social-M">
            <h2>Social Media</h2>
            <div class="socialM-content">
                <a href="">
                    <img :src="twitterLogo" alt="Twitter" class="logo"><h4>@NovoFurniture</h4>
                </a>
                <a href="">
                    <img :src="instaLogo" alt="Instagram" class="logo"><h4>@Novo_Furniture</h4>
                </a>
                <a href="">
                    <img :src="fbLogo" alt="Facebook" class="logo"><h4>Novo Modern Furniture</h4>
                </a>
            </div>
        </div>
        <div class="Logo">
            <img :src="couchLogo" alt="Novo Logo" class="couchLogo">
        </div>
    </div>
    <div class="copyRight">
        <h3>@ Novo {{ new Date().getFullYear() }} | All Rights Reserved</h3>
    </div>
</footer>
</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            couchLogo:'https://github.com/candice-dk3/novo/blob/frontend/src/assets/novo-couch.png?raw=true',
            twitterLogo:'https://github.com/candice-dk3/novo/blob/frontend/src/assets/twitter.png?raw=true',
            instaLogo:'https://github.com/candice-dk3/novo/blob/frontend/src/assets/instagram.png?raw=true',
            fbLogo:'https://github.com/candice-dk3/novo/blob/frontend/src/assets/facebook.png?raw=true'
        }
    }
}
</script>
<style scoped>
footer{
    background-color: #0C264E;
    height: auto;
    padding: 1rem;
}
.content{
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
}
.couchLogo{
    border-radius: 50%;
    width: 19rem;
    border: 5px solid #CBB26A;
    margin-top: 3.2rem;
}
.social-M, .about-div, .customer-S{
    padding: 3rem;
    text-align: start;
    color: white;
}
h2{
    margin-bottom: 2rem;
    font-weight: 500;
}
.socialM-content a, .about-content a, .customerS-content a{
    display: flex;
    padding: 0.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-decoration: none;
    color: white;
}
.logo{
    width: 2.4rem;
    padding: 0.2rem;
}
h4{
    margin-top: 1rem;
    font-weight: 400;
}
h3{
    color: white;
    font-weight: 400;
}
@media screen and (max-width: 390px) {
footer{
    height: auto;
    padding: 1rem;
}
    .content{
    grid-template-columns: repeat(1, 1fr); 
}   
}
@media screen and (max-width:768px) and (min-width: 391px) {
.couchLogo{
    width: 14rem;
    margin-top: 3.2rem;
}
h2{
    margin-bottom: 2rem;
    font-size: 1rem;
}
.social-M, .about-div, .customer-S{
    padding: 2rem;
}
.logo{
    width: 2rem;
    padding: 0.1rem;
}
}
</style>