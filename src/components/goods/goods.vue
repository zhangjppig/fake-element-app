<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav :side="true" :data="goods" :options="scrollOptions">
        <cube-scroll-nav-panel
          v-for="good in goods"
          :key="good.name"
          :label="good.name"
          :title="good.name"
        >
          <ul>
            <li v-for="food in good.foods" :key="food.name" class="food-item">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" />
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating }}%</span>
                </div>
                <div class="price">
                <span class="now">￥{{ food.price }}</span>
                <span class="old" v-show="food.oldPrice"
                  >￥{{ food.oldPrice }}</span
                >
                </div>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
import { getGoods } from 'api';
export default {
  name: 'goods',
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      goods: [],
      scrollOptions: {
        click: false,
        directionLockThreshold: 0,
      },
    };
  },
  methods: {
    async fetch() {
      const goods = await getGoods();
      this.goods = goods;
    },
    // fetch() {
    //   getGoods().then((goods) => {
    //     this.goods = goods;
    //   });
    // },
  },
};
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin";
  @import "~common/stylus/variable";
  .goods
    position: relative
    text-align: left
    height: 100%
    .scroll-nav-wrapper
      position: absolute
      width: 100%
      top: 0
      left: 0
      bottom: 48px
    >>> .cube-scroll-nav-bar
      width: 80px
      white-space: normal
      overflow: hidden
    .food-item
      display: flex
      margin: 18px
      padding-bottom: 18px
      position: relative
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57px
        margin-right: 10px
        img
          height: auto
      .content
        flex: 1
        .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          font-size: $fontsize-medium
          color: $color-dark-grey
        .desc, .extra
          line-height: 10px
          font-size: $fontsize-small-s
          color: $color-light-grey
        .desc
          line-height: 12px
          margin-bottom: 8px
        .extra
          .count
            margin-right: 12px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: $fontsize-medium
            color: $color-red
          .old
            text-decoration: line-through
            font-size: $fontsize-small-s
            color: $color-light-grey
</style>
