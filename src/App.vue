<template>
  <div id="app">
    <div style="marginBottom: 10px;">
      <div>Local Instance of Mixin</div>
      <LocalFirstButton /> |
      <LocalSecondButton />
    </div>
    <hr />
    <div style="marginBottom: 10px;">
      <div>Global Instance of Mixin</div>
      <GlobalFirstButton /> |
      <GlobalSecondButton />
    </div>
    <hr />
    <div>
      <div>Option Merging in Mixin</div>
      <OptionMerge />
    </div>
  </div>
</template>

<script>
import GlobalFirstButton from "./components/GlobalFirstButton.vue";
import GlobalSecondButton from "./components/GlobalSecondButton.vue";
import LocalFirstButton from "./components/LocalFirstButton.vue";
import LocalSecondButton from "./components/LocalSecondButton.vue";
import OptionMerge from "./components/OptionMerge.vue";

export default {
  name: "App",
  components: {
    LocalFirstButton,
    GlobalFirstButton,
    GlobalSecondButton,
    LocalSecondButton,
    OptionMerge,
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
