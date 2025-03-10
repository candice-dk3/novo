<template>
  <section class="item">
    <div class="container-fluid">
      <a href="/products">
        <img :src="continueS" alt="Go Back" class="shopping">
      </a>
      <div v-if="product" class="product">
        <div class="item-card">
          <div class="item-image">
            <img :src="product.prodImg" :alt="product.prodName" class="item-img">
          </div>
          <div class="item-detail">
            <h1 class="item-name">{{ product.prodName }}</h1>
            <p class="card-text">{{ product.prodDesc }}</p>
            <div class="pp">
              <p class="card-text">Price: R{{ product.prodPrice }}</p>
              <button class="purchase">Purchase</button>
            </div>
          </div>
        </div>
        <div class="desc-sec">
          <div class="tabs">
            <span :class="{ active: activeTab === 'description' }" @click="activeTab = 'description'">
              Product Description
            </span>
            <span :class="{ active: activeTab === 'specification' }" @click="activeTab = 'specification'">
              Product Specification
            </span>
          </div>
          <div class="tab-content">
            <p v-if="activeTab === 'description'" class="item-desc">
              {{ product.Description }}
            </p>
            <p v-else-if="activeTab === 'specification'" class="item-spec">
              <span class="spec">Product Code : {{ product.prodCode }}</span>
              <span class="spec">Collection : {{ product.Type }}</span>
              <span class="spec">Category : {{ product.prodCategory }}</span>
              <span class="spec">Type : {{ product.prodType }}</span>
              <span class="spec">Material : {{ product.prodMaterial }}</span>
              <span class="spec">Colour : {{ product.Colour }}</span>
              <span class="spec">Assembly : {{ product.prodAssem}}</span>
            </p>
          </div>
        </div>
      </div>

      <div v-else>
        <p>Loading product details...</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      continueS: 'https://github.com/candice-dk3/novo/blob/frontend/src/assets/icons8-go-back-48.png?raw=true',
      // addToCart: 'https://github.com/candice-dk3/artisanAura-images/blob/main/purchase.png?raw=true',
      activeTab: 'description'
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  methods: {
    getProd() {
      const productId = this.$route.params.id;
      console.log("Fetching product with ID:", productId);
      if (!productId) {
        console.error("Error: No product ID found in route params.");
        return;
      }
      this.$store.dispatch('getProd', productId);
    }
  },
  mounted() {
    this.getProd();
  }
};
</script>

<style scoped>
.item {
  color: #fff;
}
.product {
  padding: 40px;
  display: grid;
  justify-items: center;
}
.item-img {
  width: 728px;
  height: 458px;
  margin: 0 0 0 90px;
}
.item-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  /* height: 580px; */
}
.purchase {
  width: 200px;
  height: 40px;
  background-color: #0C264E;
  color: #CBB26A;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Kalnia';
  border: none;
  cursor: pointer;
}
.desc-sec {
  border-top: 1px solid #fff;
  margin: 70px 0 0 0;
  width: 70%;
  display: flex;
  flex-direction: column;
}
.tabs {
  display: flex;
  /* padding: 10px; */
}
.tabs span {
  /* padding: 10px 15px; */
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  margin: 20px 50px 0 30px;
  font-size: 24px;
  font-weight: 400;
}
.tabs span.active {
  color: #CBB26A;
  border-bottom: 1px solid #cbb36a92;
}
.item-desc {
  text-align: left;
  margin: 30px 0 0 40px;
  width: 950px;
  font-weight: 400;
  font-size: 18x;
}
.item-spec{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 30px 0 0 40px;
  font-size: 18px;
  font-weight: 400;
  width: 950px;
}
.item-detail{
  height: 460px;
}
.spec{
  margin: 0 0 12px 0px;
}
.item-name{
  font-size: 36px;
  text-align: left;
  font-weight: 400;
  margin: 0 0 20px 40px;
  color: #CBB26A;
}
.card-text{
  text-align: left;
  margin: 0 0 0 40px;
  font-size: 20px;
  font-weight: 350;
}
.pp{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 70px 0 0 0;
}
.shopping{
  width: 42px;
  align-content:end;
}
</style>