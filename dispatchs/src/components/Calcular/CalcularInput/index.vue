<template>
  <input type="text" @blur="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'calcularInput',
  props: {
    value: Number
  },
}
</script>

<style>
input {
  margin: 10px;
  display: inline;
}
</style>