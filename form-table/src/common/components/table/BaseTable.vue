<template>
  <div>
      <base-title :title="components.title"></base-title>
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <template v-for="(it, idex) in components.children">
          <el-table-column
            :key="idex"
            v-if="it.type"
            :label="it.label"
            :type="it.type"
            :index="indexMethod"
            :width="it.width">
          </el-table-column>
          <el-table-column
            :key="idex"
            v-else
            :label="it.label"
            :prop="it.prop"
            :width="it.width">
            <template slot-scope="scope">
              <BaseFiles :form="tableFormData[scope.$index]" v-bind:item="it.columnItem"></BaseFiles>
            </template>
          </el-table-column>
        </template>
        <el-table-column
          fixed="right"
          label="Title"
          width="100">
          <template slot-scope="scope">
            <span class="btn" @click="deleted(scope.row, scope.$index)"><i class="el-icon-delete"></i></span>
            <span class="btn" @click="down(scope.$index)"><i class="el-icon-arrow-down"></i></span>
            <span class="btn" @click="up(scope.$index)"><i class="el-icon-arrow-up"></i></span>
          </template>
        </el-table-column>
      </el-table>
      <el-button style="width: 100%; marginTop: 10px;" size="small" plain icon="el-icon-plus" @click="add">Addtion</el-button>
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
    tableFormData: {
      typeof: Array,
      default: () => []
    },
    tableData: {
      typeof: Array,
      default: () => []
    }
  },
  data() {
    return {
      // 表格表头的数据
      tableColunm: this.components.children
    }
  },
  methods: {
    // 增加
    add() {
      this.tableData && this.tableData.push({ index: this.tableData.length + 1 })
      this.tableFormData && this.tableFormData.push({})
    },
    // 删除
    deleted(row, index) {
      this.tableData.splice(index, 1)
      const res = this.tableData.slice(index)
      res.length && this.tableData.map((item, ind) => {
        item.index = ind + 1
        return item
      })
      this.tableFormData.splice(index, 1)
    },
    indexMethod(index) {
      return `#${(this.tableData[index].index)}.`
    },
    // 下移一格
    down(index) {
      if (index != this.tableData.length - 1) {
        this.tableData[index] = this.tableData.splice(index + 1, 1, this.tableData[index])[0]
      } else {
        this.tableData.unshift(this.tableData.splice(index, 1)[0])
      }
    },
    // 上移一格
    up(index) {
      if (index != 0) {
        this.tableData[index] = this.tableData.splice(index - 1, 1, this.tableData[index])[0]
      } else {
        this.tableData.push(this.tableData.shift())
      }
    }
  }
}
</script>

<style scoped>
.el-form-item {
  margin-bottom: 0px;
}
</style>
