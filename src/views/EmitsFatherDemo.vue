<script setup>
const emits =defineEmits(['response'])
emits('response','hello from child')
</script>

<template>
    <h2>Child component</h2>
</template>