<template>
  <div>
    <h3>待办事项列表</h3>
    <a-list
      :dataSource="data"
      bordered
    >
      <a-list-item
        slot="renderItem"
        slot-scope="item"
        key="item.key"
        @click="toggleCompleted(item.key)"
        :class="{completed:item.isCompleted}"
      >
        {{ item.text }}
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
export default {
  name: "List",
  props: ["data"],
  methods: {
    toggleCompleted: function(key) {
      this.$emit("toggle", key);
    }
  }
};
</script>
<style>
.completed {
  text-decoration: line-through;
}
</style>
