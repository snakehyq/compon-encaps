<template>
  <div class="page">
      <!-- 加减组件 -->
      <Counter></Counter>
      <hr>
      <!-- 计算器加减乘除组件 -->
      <Calcular></Calcular>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import Calcular from '@/components/Calcular'
export default {
    name: 'page',
    components: {
        Counter,
        Calcular
    },
}
</script>

<style>
.page {
    width: 200px;
    margin: 80px;
}
</style>