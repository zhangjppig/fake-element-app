<template>
  <div id="app">
    <VHeader :seller="seller"></VHeader>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header';
import { getSeller } from 'api';
export default {
  name: 'App',
  components: {
    VHeader,
  },
  data() {
    return {
      seller: {},
    };
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

<style lang="stylus"></style>
