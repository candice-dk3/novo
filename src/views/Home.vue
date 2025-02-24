<template>
<section class="inner-sec">
    <div class="first-sec">
        <div class="container">
            <div class="SP">
                <div class="image">
                    <img :src="first" alt="Home Picture" class="first-image">
                </div>
                <div class="text">
                    <h1>
                        Find a piece <br> to make <br> your house <br> feel like a <br> HOME.
                    </h1>
                    <button>
                        <router-link to="/products" class="btn">Explore more</router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="second-sec">
        <div class="inner-categories">
            <div class="categories">
                <div v-for="category in categories" :key="category.id" class="category">
                <router-link to="/products">
                    <div class="category-image" :style="{ backgroundImage: `url(${category.image})` }">
                        <div class="category-text">
                            {{ category.name }}
                        </div>
                    </div>
                </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="sale-sec">
        <div class="container">
            
        </div>
    </div>
    <div class="third-sec">
        <h1>Why Choose Us</h1>
        <div class="inner-third-sec">
            <div class="info">
                <div class="info-text">
                    <div class="first-part"></div>
                    <div class="second-part"></div>
                    <a href="/about">Read more</a>
                </div>
                <div class="info-img">
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    data(){
        return{
            first:'https://github.com/candice-dk3/novo/blob/frontend/src/assets/first.jpg?raw=true',
            categories: [
                { id: 1, name: 'Living Room', image: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/living-room.jpg?raw=true' },
                { id: 2, name: 'Bedroom', image: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/bed-room.jpg?raw=true' },
                { id: 3, name: 'Bathroom', image: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/bath-room.png?raw=true' },
                { id: 4, name: 'Kitchen', image: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/kitchen.jpg?raw=true' },
            ],
        }
    }
}
</script>
<style scoped>
.inner-sec{
    color: white;
}
/* First Section */
.first-sec {
  position: relative;
  padding: 0px;
  height: 850px;
}
.first-image {
  width: 100%;
  height: 850px;
  padding: 0;
  object-fit: cover;
}
/* .SP{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
} */
.text {
  position: absolute;
  top: 50%; 
  left: 20%; 
  transform: translate(-50%, -50%);
  text-align: center;
  color: black; 
  font-size: 5rem;
  font-weight: 200;
  margin: 0; 
  text-align: left
}
.text h1{
    font-size: 5rem;
    margin-bottom: 1rem;
    font-weight: 500;
}
.text a{
    text-decoration: none;
    /* color: white; */
    font-size: 1.3rem;
    color: white;
    padding: 0.4rem;
}
button{
    border: none;
    background-color: #0C264E;
    height: 60px;
    width: 226px;
}

/* Second Section */
.second-sec{
    background-image: url('https://github.com/candice-dk3/novo/blob/frontend/src/assets/category-bg.png?raw=true');
    background-repeat: repeat;
    object-fit: contain;
    width: 100%;
}
.inner-categories{
    /* padding: 50px; */
    width: 100%;
}
.inner-categories h1{
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
}
.categories {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    padding: 40px;
}
.category {
    margin: 45px;
    width: 600px;
    height: 320px;
    margin-bottom: 30px;
}
.category-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
.category-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 95%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 1rem;
  font-size: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category-image:hover .category-text {
  transform: translateY(0);
}
/* Third Section */
.third-sec{
    width: 85%;
    display: inline-block;
}
/* .inner-third-sec{
    width: 100%;
} */
.third-sec h1{
    font-size: 38px;
    font-weight: 400;
    text-align: left;
    margin: 40px 0 20px 0;
}
.info{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.info-img{
    background: url('https://github.com/candice-dk3/novo/blob/frontend/src/assets/why-choose-us.png?raw=true');
    background-repeat: no-repeat;
    height: 650px;
    width: 100%;
    padding: 20px;
}
</style>