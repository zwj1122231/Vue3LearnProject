<!--列表渲染-->
<script setup>
import { ref } from 'vue';

// 给每个 头都对象一个唯一的id
let id=0

const newTodo= ref('')
const todos= ref([
    {id: id++,text:'learn Html'},
    {id: id++,text:'learn javaScipt'},
    {id: id++,text:'learn vue'}
    ])
function addToDo(){
    todos.value.push({id:id++,text:newTodo.value})
    newTodo.value=''
}

function removeToDo(todo){
 todos.value=todos.value.filter((v)=>v!=todo)
}
</script>

<template>
   <form @submit.prevent="addToDo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
   </form>
   <ul>
    <li v-for=" todo in todos" :key="todo.id">
          {{ todo.text }}
          <button @click="removeToDo(todo)">X</button>
    </li>
   </ul>
</template>