<template>
  <div class="title">
    <div class="text">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    title: String
  }
}
</script>

<style scoped>
  .title {
    height: 55px;
    line-height: 55px;
    width: 100%;
    background-color: #ddd;
    text-align: left;
    padding-left: 15px;
    margin-top: 15px;
  }
  .text{
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
</style>
