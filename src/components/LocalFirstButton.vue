<template>
  <span>
    <button @click="localAlert(message)">FirstButton</button>
  </span>
</template>
<script>
import mixin from "@/mixins/mixin";

export default {
  name: "GlobalFirstButton",
  mixins: [mixin],
  data() {
    return {
      message: "You clicked first button in the Local Instance",
    };
  },
};
</script>
