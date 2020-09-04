<template>
  <div class="todo-filter">
    <div class="counter">{{count}} item</div>
    <div class="filter">
      <span :class="{active: currentFilter=='all'}" @click="$emit('change-filter', 'all')">all</span>
      <span
        :class="{active: currentFilter=='active'}"
        @click="$emit('change-filter', 'active')"
      >active</span>
      <span
        :class="{active: currentFilter=='complated'}"
        @click="$emit('change-filter', 'complated')"
      >complated</span>
    </div>
    <div class="clear" @click="$emit('clear-complated')">清除所有已完成</div>
  </div>
</template>
<script>
export default {
  props: ["count", "currentFilter"],
  data() {
    return {
      userInputValue: "",
    };
  },

  methods: {
    getUserInputValue: function () {
      // console.log('xxx', this.userInputValue);
      this.$emit("translate-value", this.userInputValue);
    },
  },
};
</script>
<style>
.todo-filter {
  display: flex;
  justify-content: space-between;
}
.filter span {
  margin: 0 10px;
}
.filter span.active {
    background: red;
}
</style>