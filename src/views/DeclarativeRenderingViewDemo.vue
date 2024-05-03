<!--声明渲染-->
<script setup>
 import { reactive,ref } from 'vue';
 const counter=reactive({
    count:0
 })
 const message =ref('test')

 counter.count++
 message.value='wuyayi'
</script>


<template>
    <div class="declarative">
      <h1>{{ message.split('').reverse().join('') }}</h1>
      <p>
        count is :{{ counter.count }}
      </p>
    </div>
</template>
  