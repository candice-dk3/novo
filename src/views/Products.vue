<template>
<section>
    <div class="text-overlay">
        <h1>Shop Novo</h1>
        <h5>Crafted for Living, Designed for You: Experience Novo's Furniture.</h5>
    </div>
    <div class="inner-products">
        <div class="filter-section">
            <div class="header">
                <h3>Filter</h3>
                <span>Clear All</span>
            </div>
            <div class="body">
                <div class="filter-group"></div>
            </div>
        </div>
        <div class="product-section">
            <div class="top-sect">
                <div class="sort-by-bar">
                    <label for="Sort-by" class="sort">Sort By:</label>
                    <!-- <select id="categoryFilter" v-model="selectedCategory">
                        <option value="">All Categories</option>
                        <option value="Paint">Paint</option>
                        <option value="Paint Brush">Paint Brush</option>
                        <option value="Canvas">Canvas</option>
                        <option value="Stationary">Stationary</option>
                    </select> -->
                    <select id="priceFilter" v-model="selectedPriceOrder">
                        <option value="">Price:</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>
            <div class="bottom-sect">
                <Card>
                    <template #cardHeader>
                        <div>
                            <img src="" alt="">
                        </div>
                    </template>
                    <template #cardBody>
                        <div class="name">
                            <h4 class="item-name">Random item</h4>
                        </div>
                        <div class="details">
                            <h4 class="item-price">Price: 200</h4>
                            <button class="purchase">Purchase</button>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import Card from '@/components/Card.vue';
export default {
    components:{
        Card
    }
}
</script>
<style scoped>
    .text-overlay{
        height: 600px;
        width: 100%;
        background-color: #0c264e7e;
    }
    .text-overlay h1{
        color: #CBB26A;
        font-weight: 500;
        font-size: 120px;
        text-align: center;
        position: relative;
        top: 30%;
    }
    .text-overlay h5{
        color: white;
        font-weight: 400;
        font-size: 22px;
        position: relative;
        top: 30%;
    }
    .inner-products{
        display: flex;
        justify-items: center;
        flex-direction: row;
    }
    .filter-section{
        width: 30%;
    }
    .product-section{
        width: 70%;
        display: flex;
        flex-direction: column;
    }
    .sort{
        background-color: #0c264e7e;
    }
    .item-name{
        font-size: 20px;
        color: #fff;
        font-weight: 400;
        margin-bottom: 10px;
    }
    .details{
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-family: 'Kalnia';
        color: #fff;
    }
    .item-price{
        font-weight: 400;
    }
    .purchase{
        cursor: pointer;
        background-color: transparent;
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        font-family: 'Kalnia';
        text-align: center;
        border: none;
    }
    .purchase:hover{
        color: #CBB26A;
        background-color: #0c264e7e;
        transition: 0.9s;
    }
</style>