<template>
  <p>Todolist - Exercice</p>
  <br />
  <div v-if="todos.length === 0">There is no task to do</div>
  <div v-else>
    There is currently {{ todos.length }} tasks in the list and
    {{ todos.filter((t) => t.completed === false).length }} to do
  </div>
  <hr />
  <form action="" @submit.prevent="addTodo">
    <input type="text" placeholder="Description" v-model="newTodo" /><button
      :disabled="newTodo.length === 0"
    >
      Add
    </button>
  </form>
  <ul>
    <li v-for="todo in sortedTodos()" :key="todo.id" :class="{ completed: todo.completed }">
      <input type="checkbox" v-model="todo.completed" /> {{ todo.title }}
    </li>
  </ul>
  <hr />
  <input type="checkbox" v-model="hideCompletedTodos" />Hide completed tasks
</template>
<script setup>
import { ref } from 'vue'
const newTodo = ref('')
let id = 2
const addTodo = () => {
  id++
  todos.value.push({
    id: id,
    title: newTodo.value,
    completed: false,
  })
  newTodo.value = ''
}
const todos = ref([
  {
    id: 1,
    title: 'Todo à faire',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo faite',
    completed: true,
  },
])
const hideCompletedTodos = ref(false)
const sortedTodos = () => {
  const sortedTodos = todos.value.toSorted((a, b) => (a.completed > b.completed ? 1 : -1))
  if (hideCompletedTodos.value === true) {
    return todos.value.filter((todo) => todo.completed === false)
  }
  return sortedTodos
}
</script>

<style scoped>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
