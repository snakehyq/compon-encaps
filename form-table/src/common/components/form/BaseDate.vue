<template>
  <el-form-item :label="attr.name" :prop="attr.value"  :rules="rule" :label-width="attr.labelWidth">
    <el-date-picker type="date"  v-bind="attr"  v-model="form[attr.value]" style="width: 100%;"></el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    attr: Object,
    form: Object
  },
  computed: {
    rule() {
      const message = `请输入${this.attr.name.substring(0, this.attr.name.length - 1)}`
      return this.attr.required && [
        { required: true, message, trigger: 'blur' }
      ]
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
