<template>
  <div class="calcular">
    <CalcularResult :result="result"></CalcularResult>
    <CalcularInput v-model.number="leftValue"></CalcularInput>
    <CalcularInput v-model.number="rightValue"></CalcularInput>
    <Button
     action="PLUS"
     innerText="+"
     @dispatch="dispatch"
    ></Button>
    <Button
     action="MINUS"
     innerText="-"
     @dispatch="dispatch"
    ></Button>
    <Button
     action="MUL"
     innerText="*"
     @dispatch="dispatch"
    ></Button>
    <Button
     action="DIV"
     innerText="/"
     @dispatch="dispatch"
    ></Button>
  </div>
</template>

<script>

import CalcularResult from './CalcularResult'
import Button from './Button'
import CalcularInput from './CalcularInput'
import dispatch from '@/dispatchs/calcular'
export default {
    name: 'calcular',
    components: {
        CalcularResult,
        Button,
        CalcularInput
    },
    data() {
      return {
        result: 0,
        leftValue: 0,
        rightValue: 0
      }
    },
    methods: {
      dispatch(...arg) {
        dispatch(this)(...arg, this.leftValue, this.rightValue)
      }
    }
}
</script>

<style>

</style>