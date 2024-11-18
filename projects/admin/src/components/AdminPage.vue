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
            <button :disabled="newUsername.length === 0">Add</button>
          </div>
        </fieldset>
      </form>
    </div>
    <hr />
    <div class="input-group">
      <input type="checkbox" v-model="areAllUsersSelected" @change="selectAllUsers" />Select all
      users : {{ selectedUsersCount }} selected
      <div v-if="areAllUsersSelected"><button @click="deleteUsers">Delete</button></div>
    </div>
    <hr />
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Id</th>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td><input type="checkbox" v-model="user.isSelected" /></td>
          <td>{{ user.id }}</td>
          <td @click="editingUserId !== user.id && displayInput(user.id)">
            <div v-if="editingUserId === user.id">
              <input
                type="text"
                v-model="user.name"
                @blur="updateUserName(user.id, user.name)"
                @keyup.enter="updateUserName(user.id, user.name)"
              />
            </div>
            <div v-else>
              {{ user.name }}
            </div>
          </td>

          <td>
            <select>
              <option :selected="user.status">Active</option>
              <option :selected="user.status">Inactive</option>
            </select>
          </td>
          <td>
            <button @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<script setup>
import { computed, ref } from 'vue'

// init user list
const users = ref([
  {
    id: 0,
    isSelected: false,
    name: 'Jon',
    status: true,
  },
  {
    id: 1,
    isSelected: false,
    name: 'Max',
    status: false,
  },
])
const newUsername = ref('')
let userCount = 2

// Add new user
const addUser = () => {
  users.value.push({
    id: userCount,
    isSelected: false,
    name: newUsername.value,
    status: true,
  })
  userCount++
  newUsername.value = ''
}

// Select all users
const areAllUsersSelected = ref(false)
const selectAllUsers = () => {
  users.value.forEach((user) => {
    user.isSelected = areAllUsersSelected.value
  })
}

// Count users selected
const selectedUsersCount = computed(() => {
  return users.value.filter((user) => user.isSelected).length
})

// Delete Users
const deleteUsers = () => {
  users.value = users.value.filter((user) => !user.isSelected)
}

// Edit username
const editingUserId = ref(null)
const displayInput = (id) => {
  editingUserId.value = id
}

// Save username modification
const updateUserName = (id, newName) => {
  const user = users.value.find((user) => user.id === id)
  if (user) {
    user.name = newName
    editingUserId.value = null
  }
}

// Update status
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
