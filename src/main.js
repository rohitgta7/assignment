import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    globalAlert(value) {
      return window.alert(value);
    },
  },
  computed: {
    customMergeOption() {
      return () => {
        window.alert("Clicked in the mixin");
      };
    },
  },
});

Vue.config.optionMergeStrategies.computed = (toVal, fromVal) => {
  return toVal || fromVal; // mixin || component
};

new Vue({
  render: (h) => h(App),
}).$mount("#app");
