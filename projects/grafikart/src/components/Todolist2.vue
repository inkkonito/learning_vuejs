<script setup>
import { ref } from 'vue'
const todos = ref([
  {
    id: 1,
    title: 'Une tâche terminée',
    completed: true,
    date: 2,
  },
  {
    id: 2,
    title: 'Une tâche à faire',
    completed: false,
    date: 1,
  },
])
let id = 3
const newTodo = ref('')
const addTodo = () => {
  id++
  todos.value.push({
    id: id,
    title: newTodo.value,
    completed: false,
    date: Date.now(),
  })
  newTodo.value = ''
}

const sortedTodos = () => {
  const sortedTodos = todos.value.toSorted((a, b) => (a.completed > b.completed ? 1 : -1))
  if (hideCompletedTodos.value === true) {
    return sortedTodos.filter((t) => t.completed === false)
  }
  return sortedTodos
}
const hideCompletedTodos = ref(false)

const deleteTodo = (id) => {
  todos.value = todos.value.filter((t) => t.id !== id)
}
</script>

<template>
  <div v-if="todos.length === 0">Il n'y a pas de tâches</div>
  <div v-else>
    Il y a actuellement {{ todos.length }} tâches dans la liste dont
    {{ todos.filter((t) => t.completed === false).length }} à faire
  </div>
  <form action="" @submit.prevent="addTodo">
    <input type="text" placeholder="Ajouter une tâche" v-model="newTodo" />
    <button :disabled="newTodo.length === 0">Ajouter</button>
  </form>
  <p>Liste des tâches:</p>
  <ul>
    <li
      v-for="todo in sortedTodos()"
      v-bind:key="todo.date"
      v-bind:class="{ completed: todo.completed }"
    >
      <input type="checkbox" v-model="todo.completed" />
      {{ todo.title }}
      <button @click="deleteTodo(todo.id)">Effacer</button>
    </li>
  </ul>
  <hr />
  <input type="checkbox" v-model="hideCompletedTodos" />Masquer les tâches terminées
</template>
<style scoped>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
