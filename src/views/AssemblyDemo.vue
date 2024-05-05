<script setup>
import childComp from './ChildComp.vue'
import {ref} from "vue"

const temp =ref("shgfkl")
</script>

<template>
    <p>{{ temp }}</p>
    <childComp />
    <childComp :msg="temp"/>
</template>