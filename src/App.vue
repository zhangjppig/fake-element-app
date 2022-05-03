<template>
  <div id="app">
    <div>
      <label for="name">name: </label>
      <cube-input v-model="name"></cube-input>
    </div>
    <cube-button class="bottom-btn" @click="sayHi">click</cube-button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Tom",
    };
  },
  methods: {
    sayHi() {
      this.$createDialog({
        type: "alert",
        title: "Hello",
        content: this.name,
      }).show();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bottom-btn {
  position: fixed;
  bottom: 0;
}
</style>