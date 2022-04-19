<template>
  <div class="page">
      <counter-result :result="result"></counter-result>
      <Button
       action="PLUS"
       innerText="+"
       @dispatchs="dispatchs"
      ></Button>
       <Button
       action="MINUS"
       innerText="-"
       @dispatchs="dispatchs"
      ></Button>
  </div>
</template>

<script>
import CounterResult from './CounterResult'
import Button from './Button'
import dispatchs from '@/dispatchs/counter'
export default {
    name: 'page',
    components: {
        CounterResult,
        Button
    },
    data() {
        return {
            result: 0
        }
    },
    methods: {
        dispatchs(...args) {
            dispatchs(this)(...args)
        }
    }
}
</script>

<style>
.page {
    width: 200px;
    margin: 80px;
}
</style>