<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <!-- {{$store.state.name}}
    {{$store.state.count}}
    <button @click="add">+</button>
    <button @click="asyncAdd">+</button>
    <br> -->
    <router-link tag="a" to="/">home</router-link>
    <router-link tag="a" to="/about">about</router-link>
    <router-link tag="a" to="/test2">test</router-link>
    <router-view></router-view>
    <icon-svg icon-class="#calc" />
    <svg>
      <use xlink:href="#calc"></use>
    </svg>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import calc from "./svg/calc.svg";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created() {
    // console.log(this)
  },
  methods: {
    add() {
      this.$store.commit("addCount", 1);
    },
    asyncAdd() {
      this.$store.dispatch("asyncAdd", 2);
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
</style>
