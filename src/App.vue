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
export default {
  name: 'App',
  components: {
    VHeader,
    Tab,
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
      },
      {
        label: '评论',
      },
      {
        label: '商家',
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
