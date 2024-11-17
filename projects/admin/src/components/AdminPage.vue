<template>
  <header class="container"><p>Admin Panel in Vue.js</p></header>
  <main class="container">
    <p v-if="users.length == 0">List is empty</p>
    <hr />
    <div>
      <form action="" @submit.prevent="addUser">
        <fieldset class="group">
          <div class="input-group">
            <div>New user</div>
            <input type="text" placeholder="Username" v-model="newUsername" />
            <button>Add</button>
          </div>
        </fieldset>
      </form>
    </div>
    <hr />
    <input type="checkbox" v-model="areAllUsersSelected" @change="selectAllUsers" />Select all users
    <hr />
    <table>
      <thead>
        <tr>
          <th>Selected</th>
          <th>Id</th>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td><input type="checkbox" v-model="isSelected" /></td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>
            <select>
              <option :selected="user.status">Active</option>
              <option :selected="user.status">Inactive</option>
            </select>
          </td>
          <td>
            <div class="action-buttons">
              <button>Update</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<script setup>
import { ref } from 'vue'
const selectAll = ref(false)
const areAllUsersSelected = ref(false)
const users = ref([
  {
    id: 0,
    isSelected: false,
    name: 'Jon',
    status: true,
  },
  {
    id: 1,
    name: 'Max',
    status: false,
  },
])
const newUsername = ref('')
let userCount = 2
const isActive = ref(false)
const addUser = () => {
  users.value.push({
    id: userCount,
    name: newUsername,
    status: isActive,
  })
  userCount++
  newUsername.value = ''
}
const selectAllUsers = () => {}
</script>

<style scoped>
.input-group {
  display: flex;
  gap: 8px; /* Optional gap between input and button */
}
.action-buttons {
  display: flex;
  gap: 10px; /* Adds space between the "Update" and "Delete" buttons */
}
</style>
