<!--生命周期和模板引用-->
<script setup>
import { ref ,onMounted} from 'vue';

const pElementRef =ref(null)

onMounted(()=>{
    //此时组件已经挂载
    pElementRef.value.textContent='sdf'
    
})
</script>

<template>
   <p ref="pElementRef">hello</p>
</template>