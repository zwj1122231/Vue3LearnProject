<!--条件渲染-->
<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle(){
 awesome.value=!awesome.value
}
</script>

<template>
    <button @click="toggle">toggle</button>
    <h1 v-if="awesome"> Vue3 is awesome</h1>
    <h1 v-else>Oh no!😢</h1>
</template>
