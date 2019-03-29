<template>
  <a-row class="add-template">
    <a-col :span="12">
      <a-input
        v-model.lazy="value"
        placeholder="请输入待办事项"
      />
    </a-col>
    <a-col :span="1"></a-col>
    <a-col :span="2">
      <a-button
        type="primary"
        @click="add"
      >添加</a-button>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: "Add",
  data: function() {
    return { value: "" };
  },
  methods: {
    add: function() {
      if (this.value === "") {
        this.$message.warning("请输入待办事项");
        return;
      }
      this.$emit("addList", this.value);
      this.value = "";
    }
  }
};
</script>