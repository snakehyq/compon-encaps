<template>

    <el-form ref="form" :model="form" label-width="80px" class="demo-dynamic">
      <div v-for="(item, index) in layouComponents" :key="index">
         <template  v-if="item.layout == 'base'">
            <div v-for="(it, ind) in item.children" :key="ind">
              <BaseFiles :form="form" v-bind:item="it" ></BaseFiles>
            </div>
         </template>
          <template  v-if="item.layout == 'card-layout'">
            <!--  申请调用人员信息的数据 -->
            <BaseForm ref="baseForm" :components="item.config" :configChildren="item.config.children[0]" :formData="formData"></BaseForm>
         </template>
         <template  v-if="item.layout == 'table-layout'">
            <!--  申请调用资源信息的数据 -->
            <BaseTable :components="item.config" :tableFormData="tableFormData" :tableData="tableData"></BaseTable>
         </template>
      </div>
    </el-form>
</template>

<script>
import { layouComponents } from '@/data/createUpdate'

export default {
  name: 'createUpdate',
  data() {
    return {
      form: {
      },
      layouComponents,
      formData: [{}],
      // 申请调用资源信息的数据
      tableFormData: [{}],
      tableData: [{ index: 1 }]
    }
  },
  methods: {
    // 初始化
    init() {
      this.layouComponents = JSON.parse(JSON.stringify(layouComponents))
      this.tableData = [{ index: 1 }]
      this.tableFormData = [{}]
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.form.formData = this.formData
          this.form.tableFormData = this.tableFormData
          console.log('form-from', this.form);
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      // 调用的是整个的表单重置，但是子组件是一个独立的form表单，因此需要调用子组件的form表单的重置
      this.$refs[formName].resetFields()
      console.log('baseForm', this.$refs.baseForm[0].$refs.baform);
      this.$refs.baseForm[0].$refs.baform.forEach((item) => {
        item.resetFields()
      })
      console.log('tableForm', this.tableForm);
    }
  }
}
</script>

<style>

</style>
