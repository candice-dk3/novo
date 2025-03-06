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
                <!-- <div class="sort-by-bar">
                    <label for="Sort-by" class="sort">Sort By:</label>
                    <select id="categoryFilter" v-model="selectedCategory">
                        <option value="">All Categories</option>
                        <option value="Paint">Paint</option>
                        <option value="Paint Brush">Paint Brush</option>
                        <option value="Canvas">Canvas</option>
                        <option value="Stationary">Stationary</option>
                    </select>
                    <select id="priceFilter" v-model="selectedPriceOrder">
                        <option value="">Price:</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div> -->
            </div>
            <div class="bottom-sect" v-if="filteredItems.length > 0">
                <Card v-for="prod in filteredItems" :key="prod.prodID" class="item-card">
                    <template #cardHeader>
                        <div class="image">
                            <img :src="prod.prodImg" :alt="prod.prodName" width="260px" height="auto">
                        </div>
                    </template>
                    <template #cardBody>
                        <div class="card-details">
                            <router-link :to="{ name: 'prod', params: { id: prod.prodID } }">
                                <div class="name">
                                    <h4 class="item-name">{{ prod.prodName }}</h4>
                                </div>
                            </router-link>
                            <div class="details">
                                <h4 class="item-price">Price: R{{ prod.prodPrice }}</h4>
                                <button class="purchase">Purchase</button>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
            <!-- <div v-else-if="searchQuery !== ''">
                <p>No items found matching your search query.</p>
            </div> -->
            <div v-else>
                <p v-if="loading">Loading...</p>
                <p v-if="error">{{ error }}</p>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import Card from '@/components/Card.vue';
import axios from 'axios';
export default {
    components:{
        Card
    },
    data(){
        return{
            // selectedPriceOrder: '',
            prods: [],
            loading: false,
            error: '',
        }
    },
    computed: {
        filteredItems() {
            console.log("Filtering items...");
            return this.prods
                .map(prod => {
                    if (!prod.prodName) console.warn("Missing prodName:", prod);
                    return { ...prod, quantity: 0 };
                })
                // .filter(prod => prod.prodName && prod.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()))
                // .sort((a, b) => (this.selectedPriceOrder === 'asc' ? a.prodPrice - b.prodPrice : b.prodPrice - a.prodPrice));
        }
    },
    methods:{
        async getProds() {
            this.loading = true;
            try {
                const response = await axios.get('https://novo-w3dd.onrender.com/items');
                console.log(response.data); 
                this.prods = response.data || [];
            } catch (error) {
                this.error = error.message;
                this.prods = [];
            } finally {
                this.loading = false;
            }
        }
    },
    created() {
    this.getProds();
  },
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
        color: #fff;
        margin: 40px 0 0 0;
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
        font-size: 18px;
        color: #fff;
        font-weight: 350;
        margin: 10px 0 10px 0;
        /* margin-bottom: 10px; */
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
    .bottom-sect{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .item-card{
        margin: 0 0 40px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    a{
        text-decoration: none;
    }
</style>