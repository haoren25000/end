<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>todos</h1>
    <UserInput v-on:translate-value="addTodo" />
    <TodoList :todos="currentTodos" @delete-translate="deleteTodo" @updata-content="updataContent" />
    <TodoFilter
      @change-filter="currentFilter= $event"
      :count="activeTodos.length"
      @clear-complated="clearComplated"
      :currentFilter="currentFilter"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UserInput from "./components/UserInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFilter from "./components/TodoFilter.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [
        {
          content: "111",
          complated: true,
        },
        {
          content: "222",
          complated: false,
        },
        {
          content: "333",
          complated: true,
        },
      ],
      currentFilter: "all",
    };
  },
  components: {
    // HelloWorld
    UserInput,
    TodoList,
    TodoFilter,
  },
  methods: {
    addTodo: function (newValue) {
      // console.log('xxx', newValue);
      this.todos.push({
        content: newValue,
        complated: false,
      });
    },
    deleteTodo: function (index) {
      // console.log('yy',id);
      this.todos.splice(index, 1);
    },

    clearComplated: function () {
      this.todos = this.activeTodos;
    },
    updataContent: function (payload) {
      console.log("payload", payload);

      this.todos[payload.index].content = payload.content
      // Vue.set() **
    },
  },

  computed: {
    complatedTodos: function () {
      return this.todos.filter((element) => element.complated);
    },
    activeTodos: function () {
      return this.todos.filter((element) => !element.complated);
    },
    currentTodos: function () {
      if (this.currentFilter == "active") {
        return this.activeTodos;
      } else if (this.currentFilter == "complated") {
        return this.complatedTodos;
      } else {
        return this.todos;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 640px;
  margin: 0 auto;
  background: lightblue;
}
</style>
