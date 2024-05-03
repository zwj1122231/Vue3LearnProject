<!--事件监听-->
<script setup>
import { ref } from 'vue'

const count=ref(0)

function increment(){
    //更新组件状态
    count.value=count.value+2;
}
</script>

<template>
    <!--使此按钮生效-->
    <button @click="increment"> count is :{{count}}</button>
</template>