<script setup lang="ts">
import { ref } from 'vue'



const inputValue = ref('Test')

function handleClick() {
  console.log('clicked')
}

</script>

<template>
<Button primary uppercase @click="handleClick">Test</Button>
<SInput class="border-red" v-model="inputValue" >
  <template #prependIcon>
    <span>Prepend</span>
  </template>
  <template #appendIcon>
    <span>Append</span>
  </template>
</SInput>

Valor: {{ inputValue }}


</template>
<style>
.border-red {
  border: 1px solid red;
}
</style>