<!-- 父组件通过插槽（slots）将模板片段传递给子组件 -->

<script setup>

import { ref }  from 'vue'
import SlotFather from './SlotFather.vue'

const msg =ref('from parent')
</script>

<template>
    <SlotFather>
    Message:{{ msg }}
    </SlotFather>
</template>
