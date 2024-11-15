<script setup>
import { ref } from 'vue'

const tasks = ref([
  {
    title: 'Tâche de test',
    completed: true,
    date: 1,
  },
  {
    title: 'Tâche à faire',
    completed: false,
    date: 2,
  },
])
const newTask = ref('')
const addTask = () => {
  tasks.value.push({
    title: newTask.value,
    completed: false,
    date: Date.now(),
  })
  newTask.value = ''
}

const sortedTasks = () => {
  const sortedTasks = tasks.value.toSorted((a, b) => (a.completed > b.completed ? 1 : -1))
  if (hideCompletedTasks.value === true) {
    return sortedTasks.filter((t) => t.completed === false)
  }
  return sortedTasks
}

const hideCompletedTasks = ref(false)
</script>

<template>
  <h1>Grafikart - TP Todolist</h1>
  <div v-if="tasks.length === 0">Vous n'avez pas de tâche à faire</div>
  <form action="" @submit.prevent="addTask">
    <input type="text" placeholder="Ajouter une tâche" v-model="newTask" />
    <button :disabled="newTask.length === 0">Ajouter</button>
  </form>
  <ul>
    <li v-for="task in sortedTasks()" :key="task.date" :class="{ completed: task.completed }">
      <label for=""><input type="checkbox" v-model="task.completed" /></label>
      {{ task.title }}
    </li>
  </ul>
  <hr />
  <label><input type="checkbox" v-model="hideCompletedTasks" />Masquer les tâches completées</label>
</template>

<style scoped>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
