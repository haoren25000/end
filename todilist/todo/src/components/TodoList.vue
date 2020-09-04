<template>
  <ul class="todo-list">
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :id="index"
      :todo="todo"
      @delete-translate="$emit('delete-translate', $event)"
      @updata-content="$emit('updata-content', $event)"
    />
  </ul>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
};
</script>
<style>
</style>