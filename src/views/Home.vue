<template>
<section class="inner-sec">
    <div class="first-sec">
        <div class="SP">
            <div class="image">
                <img :src="first" alt="Home Picture" class="first-image">
            </div>
            <div class="text">
                <h1>
                    Find a piece <br> to make <br> your house <br> feel like a <br> HOME.
                </h1>
                <router-link to="/products" class="btn">Explore more</router-link>
            </div>
        </div>
    </div>
    <div class="second-sec">
        <div class="inner-categories">
            <h1>Categories</h1>
            <div class="container">
                <div class="categories">
                <div v-for="category in categories" :key="category.id" class="category">
                <router-link :to="`/products`">
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
    </div>
    <div class="third-sec"></div>
</section>
</template>
<script>
export default {
    data(){
        return{
            first:'https://github.com/candice-dk3/novo/blob/frontend/src/assets/first.jpg?raw=true',
            categories: [
        { id: 1, name: 'Furniture', image: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/living-room.jpg?raw=true' },
        { id: 2, name: 'Decor', image: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/bed-room.jpg?raw=true' },
        { id: 3, name: 'Lighting', image: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/bath-room.png?raw=true' },
        { id: 4, name: 'Lighting', image: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/bath-room.png?raw=true' },
        // Add more categories here
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
    .first-sec{
        padding: 1rem;
        height: 51.6rem;
    }
    .first-image{
        width: 40rem;
        height: 30rem;
        padding: 5rem;
    }
    .SP{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .text{
        padding: 4rem;
        text-align: left;
        margin-left: 12rem;
    }
    .text h1{
        font-size: 5rem;
        margin-bottom: 1rem;
        font-weight: 200;
    }
    .text a{
        text-decoration: none;
        color: white; 
    }
    .btn{
        background-color: #0C264E;
    }
    /* End of First Section */

    /* Second Section */
    .second-sec{
        height: 60rem;
        background-color: #0C264E;
    }
    .inner-categories{
        padding: 4rem;
    }
    .inner-categories h1{
        font-weight: 500;
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
    .categories {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
    }

    .category {
    margin: 1rem;
    width: 40rem;
    height: 20rem;
    
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
  display: flex; /* Add this line */
  justify-content: center; /* Add this line */
  align-items: center; /* Add this line */
}

.category-image:hover .category-text {
  transform: translateY(0);
}
    /* End of Second Section */

    /* Third Section */
    .third-sec{
        height: 50rem;
    }
    /* End of  Third Section */

</style>