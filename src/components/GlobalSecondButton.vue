<template>
  <span>
    <button @click="globalAlert(message)">SecondButton</button>
  </span>
</template>
<script>
export default {
  name: "GlobalSecondButton",
  data() {
    return {
      message: "You clicked second button in the Global instance",
    };
  },
};
</script>
