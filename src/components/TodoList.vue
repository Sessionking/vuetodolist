<template>
  <div class="todo-list">
    <h2>事件记录</h2>
    <a-row :gutter="16"><Add v-on:addList="addList"></Add></a-row>
    <a-row :gutter="16"><List @toggle="toggle" :data="showLists"></List></a-row>
    <a-row :gutter="16"><Footer @click="clickAll"></Footer></a-row>
  </div>
</template>
<script>
  import List from './List'
  import Footer from './Footer'
  import Add from './Add'
  import {generateHash} from '../const/index.js'
  const todoLists = [
    {text: '我是一个用例', key: generateHash(), isCompleted: false},
  ]
  export default {
    name: 'TodoList',
    components: {Add, List, Footer},
    data: function() {
      return {
        showLists: todoLists,
      }
    },
    methods: {
      addList: function(value) {
        const tmp = {
          text: value || '',
          key: generateHash(),
          isCompleted: false,
        }
        todoLists.push(tmp)
        this.showLists = todoLists
      },
      toggle: function(key) {
        todoLists.forEach(list => {
          if (list.key === key) list.isCompleted = !list.isCompleted
        })
        this.showLists = todoLists
      },
      clickAll: function(value) {
        if (value === 'all') {
          this.showLists = todoLists
        } else {
          this.showLists = todoLists.filter(
            list => `${list.isCompleted}` === value,
          )
        }
      },
    },
  }
</script>
<style>
  .todo-list {
    padding: 10%;
    text-align: left;
  }
  .todo-list .ant-row {
    margin-bottom: 20px;
  }
</style>
