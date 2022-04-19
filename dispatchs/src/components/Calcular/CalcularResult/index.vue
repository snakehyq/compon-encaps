<template>
  <h2 class="counter-result">
      {{ result }}
  </h2>
</template>

<script>
export default {
    name: 'counterPage',
    props: {
        result: Number
    }
}
</script>

<style>

</style>