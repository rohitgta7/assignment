<template>
  <span>
    <button @click="localAlert(message)">SecondButton</button>
  </span>
</template>
<script>
import mixin from "@/mixins/mixin";

export default {
  name: "GlobalSecondButton",
  mixins: [mixin],
  data() {
    return {
      message: "You clicked second button in the Local Instance",
    };
  },
};
</script>
