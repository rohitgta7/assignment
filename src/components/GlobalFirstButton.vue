<template>
  <span>
    <button @click="globalAlert(message)">FirstButton</button>
  </span>
</template>
<script>
export default {
  name: "GlobalFirstButton",
  data() {
    return {
      message: "You clicked first button in the Global instance",
    };
  },
};
</script>
