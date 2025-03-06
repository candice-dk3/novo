import { createStore } from 'vuex';
import axios from 'axios';
import router from '../router/index.js';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
// import {useCookies} from 'vue-cookies'

const apiURL = 'https://novo-w3dd.onrender.com/'; // Corrected API base URL

export default createStore({
  state: {
    products: [], // Make sure this is 'products' as mentioned in the mutation
    product: null
  },
  getters: {},
  mutations: {
    setProds(state, payload) {
      state.products = payload; // Updated to 'products' instead of 'prods'
    },
    setProd(state, payload) {
      state.product = payload; // Updated to 'product' instead of 'prod'
    },
  },
  actions: {
    async getProds({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}items`); // Corrected URL
        commit('setProds', data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async getProd({ commit }, id) {
      try {
        const { data } = await axios.get(`${apiURL}items/${id}`); // Corrected URL
        console.log(data);
        commit('setProd', data[0]); // Assuming data is an array and you want the first item
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },
  },
  modules: {}
});
