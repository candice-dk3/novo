<template>
<section class="inner-sec">
    <div class="first-sec">
        <div class="SP">
            <div class="image">
                <img :src="first" alt="Home Picture">
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
            <div class="categories">
                <div class="category">

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

        }
    }
}
</script>
<style scoped>
    .inner-sec{
        color: white;
    }
    .first-sec{
        padding: 1rem;
    }
    .SP{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .text{
        padding: 2rem;
        text-align: left;
        margin-left: 12rem;
    }
    .text h1{
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    .text a{
        text-decoration: none;
        color: white; 
    }
    .btn{
        background-color: #0C264E;
    }
</style>