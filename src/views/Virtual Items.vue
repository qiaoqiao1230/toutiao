<template>
<div>
  <el-row>
    <el-col :span="5">
      <div class="grid-content bg-purple">礼物名称
       <el-input v-model="input" placeholder="请输入" maxlength = "11" style="width:120px"></el-input>
      </div>
    </el-col>
    <el-col :span="5">
      <div class="grid-content bg-purple">标签
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
         <div class="grid-content bg-purple">状态
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
    <el-col :span="5">
         <div class="grid-content bg-purple">tab
            <el-select v-model="state" placeholder="请选择" style="width:60%">
                <el-option
                  v-for="item in status"
                  :key="item.state"
                  :label="item.condition"
                  :value="item.state">
                </el-option>
            </el-select>
        </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">
        <el-button type="primary">查询</el-button>
        <el-button type="primary" style="width:80px">创建</el-button>
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
          label="ID"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="价格"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="类型"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="tab"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="获得方式"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="排序"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="图片"
          width="100">
        </el-table-column>
          <el-table-column
          prop="name"
          label="动画"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="上架时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="状态"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="操作"
          width="130">
           <template>
          <el-link  :underline="false" type="primary" >编辑</el-link>
          <el-link  :underline="false" style="margin-left:15px" type="primary" >删除</el-link>
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
