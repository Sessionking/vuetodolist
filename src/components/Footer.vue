<template>
  <a-radio-group
    @change="change"
    v-model="value"
  >
    <a-radio-button value="all">全部</a-radio-button>
    <a-radio-button value="false">进行中</a-radio-button>
    <a-radio-button value="true">已完成</a-radio-button>
  </a-radio-group>
</template>
<script>
export default {
  name: "Footer",
  data: function() {
    return {
      value: "all"
    };
  },
  methods: {
    change: function(e) {
      this.value = e.target.value;
      this.$emit("click", this.value);
    }
  }
};
</script>
