<template>
<div>
  <div>
    <div>
      <el-button style="margin-left:66%">创建</el-button>
    </div>
    <br/>
       <el-table
        :data="tableData"
        border
        style="width:61%;margin-left:13%">
        <el-table-column
          prop="date"
          label="展示礼物ID"
          width="144">
        </el-table-column>
        <el-table-column
          prop="date"
          label="名称"
          width="140">
        </el-table-column>
        <el-table-column
          prop="name"
          label="价格"
          width="140">
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作"
          width="165">
             <template>
              <el-link  :underline="false" type="primary" style="margin-left:15px">编辑</el-link>
              <el-link  :underline="false" type="primary" style="margin-left:15px">删除</el-link>
            </template>
        </el-table-column>
      </el-table>
  </div>
  <br/><br/>
  <div>
    <div >
      <div class="grid-content bg-purple" style="margin-left:27%">选择礼物
            <el-select v-model="genre" placeholder="请选择" style="width:30%">
                <el-option
                  v-for="item in mold"
                  :key="item.genre"
                  :label="item.labe"
                  :value="item.genre">
                </el-option>
            </el-select>
            <el-button style="margin-left:20px">查询</el-button>
            <el-button >添加</el-button>
        </div>
    <br/>
       <el-table
        :data="tableData"
        border
        style="width:61%;margin-left:13%">
        <el-table-column
          prop="date"
          label="礼物库ID"
          width="144">
        </el-table-column>
        <el-table-column
          prop="date"
          label="礼物库名称"
          width="140">
        </el-table-column>
        <el-table-column
          prop="name"
          label="概率"
          width="140">
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作"
          width="165">
             <template>
              <el-link  :underline="false" type="primary" style="margin-left:15px">编辑</el-link>
              <el-link  :underline="false" type="primary" style="margin-left:15px">删除</el-link>
            </template>
        </el-table-column>
      </el-table>
       <br/>
       <span style="margin-left:15%">
          执行时间
       </span>
        <el-time-select
            placeholder="起始时间"
            style="width:25%"
            v-model="startTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }">
          </el-time-select>
          <el-time-select
            placeholder="结束时间"
             style="width:25%;margin-left:10px"
            v-model="endTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
              minTime: startTime
            }">
        </el-time-select>
  </div>
  </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      mold: [{
        genre: '选项1',
        labe: '陪玩'
      }, {
        genre: '选项2',
        labe: '老板'
      }],
      tableData: [{
        date: '2016',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016',
        name: '王小虎',
        address: '上海市'
      }],
      value: '',
      genre: ''
    }
  }
}

</script>

<style>

</style>
