<!--侦听器-->
<script setup>
import { ref ,watch} from 'vue';

// 给每个 头都对象一个唯一的id
const todoId= ref(1)
const todoData= ref(null)

async function fetchData(){
    todoData.value=null
    const res =await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`

      // `符号是在~位置

    )

    todoData.value=await res.json()
}

fetchData()

watch(todoId,(fetchData))
</script>

<template>
   <p>Todo id:{{ todoId }}</p>
   <button @click="todoId++" :disabled="!todoData">Fech next Todo</button>
   <p v-if="!todoData">Loading...</p>
   <pre v-else>{{todoData }}</pre>
</template>