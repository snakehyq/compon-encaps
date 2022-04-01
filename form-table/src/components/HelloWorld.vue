<template>
  <div class="hello">
      <el-button type="success" @click="showDiaglog">点击显示表单弹框</el-button>
  <!-- 弹框 -->
  <el-dialog
      title="表单"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <CreateUpdate ref="CreateUpdate"></CreateUpdate>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import CreateUpdate from './CreateUpdate'

export default {
  name: 'HelloWorld',
  components: {
    CreateUpdate
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    // 调用子组件的submitForm方法，进行验证
    submitForm(form) {
      this.$refs.CreateUpdate.submitForm(form)
    },
    showDiaglog() {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.CreateUpdate.init()
        console.log('create', this.$refs.CreateUpdate);
      })
    },
    handleClose() {
      this.dialogVisible = false
      this.$refs.CreateUpdate.resetForm('form')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
