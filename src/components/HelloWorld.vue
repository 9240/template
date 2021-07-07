<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <HelloWorld2 />
  </div>
</template>

<script>
import HelloWorld2 from "./HelloWorld2";
export default {
  name: "HelloWorld",
  components: {
    HelloWorld2
  },
  data() {
    return {
      txt: "HelloWorld"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
