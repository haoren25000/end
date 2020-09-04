<template>
  <li>
    <input type="checkbox" name id v-model="todo.complated" />
    <span
      v-show="!editing"
      :class="{complated: todo.complated}"
      @dblclick="newContent = todo.content; editing=true"
    >{{todo.content}}</span>
    <input
      v-show="editing"
      @keyup.enter="$emit('updata-content', {content: newContent, index: id}); editing=false"
      @keyup.esc="editing=false"
      type="text"
      v-model="newContent"
    />
    <i @click="deleteTranslate">X</i>
  </li>
</template>
<script>
export default {
  props: ["todo", "id"],
  components: {},
  data() {
    return {
      editing: false,
      newContent: "",
    };
  },
  methods: {
    deleteTranslate: function () {
      this.$emit("delete-translate", this.id);
    },
  },
};
</script>
<style scoped>
.complated {
  text-decoration: line-through;
}
</style>