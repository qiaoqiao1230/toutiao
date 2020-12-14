<template>
<div>
  <el-row>
    <el-col :span="5">
      <div class="grid-content bg-purple">Hi号
       <el-input v-model="input" placeholder="请输入" maxlength = "11" style="width:120px"></el-input>
      </div>
    </el-col>
    <el-col :span="5">
      <div class="grid-content bg-purple">体现状态
        <el-select v-model="value" placeholder="请选择" style="width:60%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
      </div>
    </el-col>
    <el-col :span="5">
         <div class="grid-content bg-purple">审核人
            <el-select v-model="genre" placeholder="请选择" style="width:60%">
                <el-option
                  v-for="item in mold"
                  :key="item.genre"
                  :label="item.labe"
                  :value="item.genre">
                </el-option>
            </el-select>
        </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">
        <el-button type="primary">搜索</el-button>
        <!-- <el-button type="primary" style="width:80px">创建</el-button> -->
      </div>
    </el-col>
  </el-row>
  <br>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="提现ID"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Hi号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="昵称"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="交易编号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="提现方式"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="支付合作"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="审核状态"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="说明"
          width="100">
        </el-table-column>
          <el-table-column
          prop="name"
          label="创建时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="审核时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="审核人"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作"
          width="130">
           <template>
          <el-link  :underline="false" type="primary" >通过</el-link>
          <el-link  :underline="false" style="margin-left:15px" type="primary" >驳回</el-link>
        </template>
        </el-table-column>
      </el-table>
</div>
</template>

<script>
export default {
  name: 'About',
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
      }, {
        date: '2016',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016',
        name: '王小虎',
        address: '上海市'
      }],
      options: [{
        value: '选项1',
        label: '男'
      }, {
        value: '选项2',
        label: '男男'
      }, {
        value: '选项3',
        label: '女'
      }, {
        value: '选项4',
        label: '女女'
      }],
      mold: [{
        genre: '选项1',
        labe: '陪玩'
      }, {
        genre: '选项2',
        labe: '老板'
      }],
      status: [{
        state: '选项1',
        condition: '正常'
      }, {
        state: '选项2',
        condition: '封号中'
      }],
      state: '',
      value: '',
      genre: '',
      input: ''
    }
  },
  methods: {
    handleClick () {
      alert('button click')
    }
  }
}
</script>

<style>
.el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
