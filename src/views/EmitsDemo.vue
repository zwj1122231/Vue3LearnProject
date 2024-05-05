<!-- 子组件向父组件触发事件 -->
<script setup>

import HelloWorld from './EmitsFatherDemo.vue'
import {ref} from 'vue'

const childMsg =ref("No child msg yet")

</script>

<template>
    <HelloWorld @response ="msg => msg=childMsg"/>
    <p>{{ childMsg }}</p>
</template>