<!-- 表单绑定 -->
<script setup>
 import { ref } from 'vue';
const textDemo =ref('')
</script>

<template>
    <input v-model="textDemo" placeholder="Type here">
    <p>{{textDemo}}</p>
    <h3>afsda</h3>
</template>