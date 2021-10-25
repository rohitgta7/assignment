<template>
  <div>
    <span>
      <button @click="optionMerge()">Option Merge</button>
    </span>
    |
    <span>
      <button @click="customMergeOption()">Custom Merge</button>
    </span>
  </div>
</template>
<script>
import mixin from "@/mixins/mixin";

export default {
  name: "GlobalFirstButton",
  mixins: [mixin],
  data() {
    return {
      firstName: "John",
      lastName: "Ibrahim",
      age: 59,
      message: "You clicked first button",
    };
  },
  computed: {
    customMergeOption() {
      return () => {
        window.alert("Clicked in the component");
      };
    },
  },
};
</script>
