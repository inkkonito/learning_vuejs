<script setup>
const props = defineProps({
  promptText: String,
})
</script>
<template>
  <p class="sectionGroup">Prompt Genius</p>
  <div class="promptBlock" v-html="promptText"></div>
</template>
<style scoped>
.sectionGroup {
  text-align: center;
}
.promptBlock {
  margin: 0 auto;
  width: 80%;
  padding: 30px 20px;
  background-color: lightcyan;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
