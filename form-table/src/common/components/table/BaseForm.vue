<template>
  <div>
    <base-title :title="components.title"></base-title>
      <div class="children-item" v-for="(item, index) in components.children" :key="index">
        <div>
          <div class="title">
            <div class="text">#{{ item.index }}.{{ item.title }}</div>
            <div>
              <span class="btn" @click="deleted(index)"><i class="el-icon-delete"></i></span>
              <span class="btn" @click="down(index)"><i class="el-icon-arrow-down"></i></span>
              <span class="btn" @click="up(index)"><i class="el-icon-arrow-up"></i></span>
            </div>
          </div>
            <!-- 表单验证需要用到绑定的form才能验证成功，所以需要el-form -->
            <el-form ref="baform" :model="formData[index]" label-width="80px">
               <div v-for="(pem, i) in item.children" :key="i">
                  <BaseFiles :form="formData[index]" v-bind:item="pem"></BaseFiles>
                </div>
            </el-form>
        </div>
      </div>
    <el-button style="width: 100%" size="small" plain icon="el-icon-plus" @click="add">Addtion</el-button>
  </div>
</template>

<script>
export default {
  name: 'baseTable',
  props: {
    components: {
      typeof: Object,
      default: () => {}
    },
    configChildren: {
      typeof: Object,
      default: () => {}
    },
    formData: {
      typeof: Array,
      default: () => []
    }
  },
  data (){
    return {
      formItem: this.configChildren
    }
  },
  methods: {
    // 增加
    add() {
      console.log('formItem', this.formItem);
      this.components.children && this.components.children.push(Object.assign({}, this.formItem, { index: this.components.children.length + 1 }))
      this.formData && this.formData.push({})
      console.log('components', this.components.children);
    },
    // 删除
    deleted(index) {
      this.components.children.splice(index, 1)
      const res = this.components.children.slice(index)
      res.length && this.components.children.map((item, ind) => {
        item.index = ind + 1
        return item
      })
      this.formData.splice(index, 1)
    },
    // 下移一格
    down(index) {
      if (index != this.components.children.length - 1) {
        this.components.children[index] = this.components.children.splice(index + 1, 1, this.components.children[index])[0]
      } else {
        this.components.children.unshift(this.components.children.splice(index, 1)[0])
      }
    },
    // 上移一格
    up(index) {
      if (index != 0) {
        this.components.children[index] = this.components.children.splice(index - 1, 1, this.components.children[index])[0]
      } else {
        this.components.children.push(this.components.children.shift())
      }
    }
  }
}
</script>

<style scoped>
.children-item {
  padding: 10px;
}
  .title {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content:space-between;
    color: #000;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
</style>
