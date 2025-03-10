<template>
    <section>
      <div class="text-overlay">
        <h1>Shop Novo</h1>
        <h5>Crafted for Living, Designed for You: Experience Novo's Furniture.</h5>
      </div>
      <div class="inner-products">
        <!-- FILTER SECTION -->
        <div class="filter-section">
          <div class="header">
            <h3>Filter</h3>
            <span @click="clearFilters">Clear All</span>
          </div>
          <div class="body">
            <!-- Filter Groups -->
            <div v-for="(options, filter) in filters" :key="filter" class="filter-group">
              <div class="filter-header" @click="toggleFilter(filter)">
                <h4>{{ filter }}</h4>
                <span>{{ isOpen[filter] ? '▲' : '▼' }}</span>
              </div>
              <div v-if="isOpen[filter]" class="filter-options">
                <label v-for="option in options" :key="option">
                  <input type="checkbox" :value="option" v-model="selectedFilters[filter]" />
                  {{ option }}
                </label>
              </div>
            </div>
          </div>
        </div>
  
        <!-- PRODUCT SECTION -->
        <div class="product-section">
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
          <div v-else>
            <p v-if="loading">Loading...</p>
            <p v-if="error">{{ error }}</p>
            <p v-if="!loading && filteredItems.length === 0">No products match the selected filters.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  import axios from 'axios';
  
  export default {
    components: {
      Card
    },
    data() {
      return {
        prods: [],
        loading: false,
        error: '',
        isOpen: {
          Department: false,
          Category: false,
          Material: false,
          Price: false,
          Color: false
        },
        filters: {
          Department: ["Living Room", "Bed Room", "Bath Room", "Kitchen"],
          Category: ["Couch", "Bed", "Side Table", "Armchair", "Bedside Table"],
          Material: ["Wood", "Metal", "Glass", "Fabric"],
          Price: ["Under R1000", "R1000 - R5000", "R5000+"],
          Color: ["Black", "White", "Gray", "Brown"]
        },
        selectedFilters: {
          Department: [],
          Category: [],
          Material: [],
          Price: [],
          Color: []
        }
      };
    },
    computed: {
      filteredItems() {
        return this.prods.filter(prod => {
          return (
            (this.selectedFilters.Department.length === 0 || this.selectedFilters.Department.includes(prod.prodCategory)) &&
            (this.selectedFilters.Category.length === 0 || this.selectedFilters.Category.includes(prod.prodType)) &&
            (this.selectedFilters.Material.length === 0 || this.selectedFilters.Material.includes(prod.prodMaterial)) &&
            (this.selectedFilters.Color.length === 0 || this.selectedFilters.Color.includes(prod.Colour)) &&
            (this.selectedFilters.Price.length === 0 || this.priceFilterMatch(prod.prodPrice))
          );
        });
      }
    },
    methods: {
      async getProds() {
        this.loading = true;
        try {
          const response = await axios.get('https://novo-w3dd.onrender.com/items');
          this.prods = response.data || [];
        } catch (error) {
          this.error = error.message;
          this.prods = [];
        } finally {
          this.loading = false;
        }
      },
      toggleFilter(filter) {
        this.isOpen[filter] = !this.isOpen[filter];
      },
      clearFilters() {
        for (const key in this.selectedFilters) {
          this.selectedFilters[key] = [];
        }
      },
      priceFilterMatch(price) {
        if (this.selectedFilters.Price.includes("Under R1000") && price < 1000) return true;
        if (this.selectedFilters.Price.includes("R1000 - R5000") && price >= 1000 && price <= 5000) return true;
        if (this.selectedFilters.Price.includes("R5000+") && price > 5000) return true;
        return false;
      }
    },
    created() {
      this.getProds();
    }
  };
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
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    h3{
        font-size: 32px;
        font-weight: 400;
        text-align: left;
    }
    span{
        font-size: 18px;
        font-weight: 400;
    }
  /* FILTER SECTION */
  .filter-section {
    width: 30%;
  }
  .header {
    display: flex;
    justify-content: space-around;
    padding: 0px 40px 10px 40px;
  }
  .header span {
    cursor: pointer;
    color: #CBB26A
  }
  .filter-group {
    background: #000;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .filter-header {
    display: flex;
    justify-content: space-around !important;
    padding: 10px;
    background: #0c264e7e ;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    width: 260px;
    justify-content: center;
}
.filter-header h4{
    font-size: 24px;
    font-weight: 400;
  }
  .filter-options {
    padding: 10px;
    /* background: #0C264E; */
  }
  .filter-options label {
    display: block;
    color: white;
    margin: 5px 0;
    font-size: 24px;
    font-weight: 300;

  }
  
  /* PRODUCT SECTION */
  .product-section {
    width: 70%;
  }
  .bottom-sect {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .item-card {
    margin-bottom: 40px;
  }
  .item-name {
    font-size: 18px;
    color: #fff;
  }
  .details {
    display: flex;
    justify-content: space-between;
  }
  .purchase {
    background: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  .purchase:hover {
    color: gold;
    background: #0c264e7e;
    transition: 0.3s;
  }
  </style>
  