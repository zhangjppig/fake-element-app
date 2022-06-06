<template>
  <div id="app">
    <VHeader :seller="seller"></VHeader>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header';
import { getSeller } from 'api';
import Tab from './components/tab/tab.vue';
import Goods from './components/goods';
import Seller from './components/seller';
import Ratings from './components/ratings';
export default {
  name: 'App',
  components: {
    VHeader,
    Tab,
    Goods,
    Seller,
    Ratings,
  },
  data() {
    return {
      seller: {},
    };
  },
  computed: {
    tabs() {
      return [{
        label: '商品',
        component: Goods,
        data: {
         seller: this.seller,
        }
      },
      {
        label: '评论',
        component: Ratings,
        data: {
         seller: this.seller,
        },
      },
      {
        label: '商家',
        component: Seller,
        data: {
          seller: this.seller,
        }
      },
      ];
    },
  },
  created() {
   this._getSeller();
  },
  methods: {
    async _getSeller() {
      const seller = await getSeller();
      this.seller = seller;
    },
  },
};
</script>

<style lang="stylus" scoped>
#app
  .tab-wrapper
    position: fixed
    top: 136px
    left: 0
    right: 0
    bottom: 0
</style>
