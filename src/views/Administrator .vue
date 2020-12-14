<template>
  <div>
    <div>
      <el-button style="margin-left:80%">创建</el-button>
    </div>
    <br/>
       <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="ID"
          width="135">
        </el-table-column>
        <el-table-column
          prop="name"
          label="账号"
          width="135">
        </el-table-column>
        <el-table-column
          prop="address"
          label="姓名"
          width="135">
        </el-table-column>
        <el-table-column
          prop="date"
          label="部门"
          width="135">
        </el-table-column>
        <el-table-column
          prop="name"
          label="职位"
          width="135">
        </el-table-column>
        <el-table-column
          prop="address"
          label="创建时间"
          width="135">
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作"
          width="157">
             <template>
              <el-link  :underline="false" type="primary" >查看</el-link>
              <el-link  :underline="false" type="primary" style="margin-left:15px">编辑</el-link>
            </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016',
        name: '王小虎',
        address: '上海市'
      }],
      value: ''
    }
  }
}

</script>

<style>

</style>
