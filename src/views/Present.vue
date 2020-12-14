<template>
  <div>
    <div style="margin-left:40%">
      礼物名称
       <el-input v-model="input" placeholder="请输入" maxlength = "11" style="width:150px;"></el-input>
      <el-button style="margin-left:15px" >查询</el-button>
      <el-button >创建</el-button>
    </div>
    <br/>
       <el-table
        :data="tableData"
        border
        style="width: 80%;margin-left:7%">
        <el-table-column
          prop="date"
          label="礼物ID"
          width="123">
        </el-table-column>
        <el-table-column
          prop="date"
          label="名称"
          width="130">
        </el-table-column>
        <el-table-column
          prop="date"
          label="图片"
          width="130">
        </el-table-column>
        <el-table-column
          prop="name"
          label="动画"
          width="130">
        </el-table-column>
        <el-table-column
          prop="address"
          label="创建时间"
          width="130">
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作"
          width="129">
             <template>
              <el-link  :underline="false" type="primary" >编辑</el-link>
              <el-link  :underline="false" type="primary" style="margin-left:15px">删除</el-link>
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
