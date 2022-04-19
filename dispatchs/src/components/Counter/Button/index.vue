<template>
  <button
    :action="action"
    @click="compute"
    >
    {{ innerText }}
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        action: String,
        innerText: String,
    },
    methods: {
        compute() {
            this.$emit('dispatchs', this.action)
        }
    }
}
</script>

<style>
button {
    padding: 3px 5px;
    margin-right: 10px;
}
</style>