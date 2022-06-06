<template>
  <div class="tab">
    <cube-tab-bar
    :showSlider="true"
    v-model="selectedLabel"
    :data="tabs" ref="tabBar"
    class="border-bottom-1px"
    >
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
      :loop="false"
      :auto-play="false"
      :show-dots="false"
      :initial-index="index"
      ref="slide"
      @change="onChange"
      @scroll="onScroll"
      :options="slideOptions"
      >
        <cube-slide-item><goods></goods></cube-slide-item>
        <cube-slide-item><ratings></ratings></cube-slide-item>
        <cube-slide-item><seller></seller></cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import Goods from '../goods/goods.vue';
import Ratings from '../ratings/ratings.vue';
import Seller from '../seller/seller.vue';
export default {
  name: 'tab',
  data() {
    return {
      index: 0,
      tabs: [
        {
          label: '商品',
        },
        {
          label: '评价',
        },
        {
          label: '商家',
        },
      ],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0,
      }
    };
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label;
      },
      set(nexVal) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === nexVal;
        });
      },
    },
  },
  methods: {
    onChange(current) {
      this.index = current;
    },
  onScroll(pos) {
    console.log(pos.x);
    const tabBarWidth = this.$refs.tabBar.$el.clientWidth;
    const slideWidth = this.$refs.slide.slide.scrollerWidth;
    const transform = -pos.x / slideWidth * tabBarWidth;
    this.$refs.tabBar.setSliderTransform(transform);
  },
  },
  components: {
    Seller,
    Ratings,
    Goods,
  },
};
</script>

<style lang="stylus" scoped>
 @import "~common/stylus/variable"
  .tab
    display: flex
    flex-direction: column
    height: 100%
    >>> .cube-tab
      padding: 10px 0
    .slide-wrapper
      flex: 1
      overflow: hidden
</style>
