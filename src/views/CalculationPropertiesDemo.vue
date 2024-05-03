<!--计算属性-->
<script setup>
import { ref, computed } from 'vue';

// 给每个 头都对象一个唯一的id
let id=0

const newTodo= ref('')
const todos= ref([
    {id: id++,text:'learn Html',done:true},
    {id: id++,text:'learn javaScipt',done:true},
    {id: id++,text:'learn vue',done:false}
    ])
const hideCompleted =ref(false)
const filteredTodos = computed(()=>{
  // 根据 `todos.value` & `hideCompleted.value`
  // 返回过滤后的 todo 项目
  return hideCompleted.value?todos.value.filter(V=>!V.done):todos.value
}
)
function addToDo(){
    todos.value.push({id:id++,text:newTodo.value,done:false})
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
    <li v-for=" todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done">
        <span :class="{done:todo.done}">{{ todo.text }}</span>
          <button @click="removeToDo(todo)">X</button>
    </li>
   </ul>
   <button @click="hideCompleted=!hideCompleted">
     {{ hideCompleted?'Show all':'Hide completed' }}
   </button>
</template>

<style>
.done{
    text-decoration: line-through;
}
</style>