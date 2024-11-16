<template>
  <div v-if="actions.length === 0">There is no action</div>
  <div v-else>{{ actions.length }} {{ actions.length > 1 ? 'actions' : 'action' }} in the list</div>
  <hr />
  <form action="" @submit.prevent="addAction">
    <input type="text" placeholder="New action description" v-model="newAction" />
    <button :disabled="newAction.length === 0">Add</button>
  </form>
  <ul>
    <li v-for="action in sortActions()" :key="action.date" :class="{ completed: action.status }">
      <input type="checkbox" v-model="action.status" />{{ action.title }}
    </li>
  </ul>
  <hr />
  <input type="checkbox" v-model="hideCompletedActions" />Hide completed actions
</template>
<script setup>
import { ref } from 'vue'
const actions = ref([])
const hideCompletedActions = ref(false)
const newAction = ref('')
const addAction = () => {
  actions.value.push({
    title: newAction.value,
    status: false,
    date: Date.now(),
  })
  newAction.value = ''
}
const sortActions = () => {
  const sortedActions = actions.value.toSorted((a, b) => (a.status > b.status ? 1 : -1))
  if (hideCompletedActions.value === true) {
    return sortedActions.filter((action) => action.completed === false)
  }
  return sortedActions
}
</script>
<style scoped>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
