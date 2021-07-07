<template>
  <div>
    <div class="test">{{ title }}</div>
    <router-link to="/">入口2组件1</router-link>
    <router-link to="/component1">入口2组件2</router-link>
    <router-link to="/component2">入口2组件3</router-link>
    <button @click="openEntry1">打开入口1组件3</button>
    <button @click="test">log</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "entry2",
  data() {
    return {
      title: "entry2",
    };
  },
  methods: {
    openEntry1() {
      window.open("/entry1.html#/component3");
    },
    test() {
      console.log($(".test"));
    },
  },
};
</script>
