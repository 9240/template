<template>
  <div>
    <div class="test">{{ title }}</div>
    <router-link to="/">入口1组件1</router-link>
    <router-link to="/component1">入口1组件2</router-link>
    <router-link to="/component2">入口1组件3</router-link>
    <button @click="openEntry2">打开入口2组件2</button>
    <button @click="test">log</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "entry1",
  data() {
    return {
      title: "entry1",
    };
  },
  methods: {
    openEntry2() {
      window.open("/entry2.html#/component2");
    },
    test() {
      console.log($(".test"));
    },
  },
};
</script>
