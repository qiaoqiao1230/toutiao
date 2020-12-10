<template>
  <el-row class="tac">
  <el-col :span="4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>用户管理</span>
        </template>
        <div>
          <el-menu-item index="1-1"><i class="el-icon-s-unfold"></i>用户基本信息</el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-s-unfold"></i>封号</el-menu-item>
        </div>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>封号</span>
        </template>
        <div>
          <el-menu-item index="2-1"><i class="el-icon-s-unfold"></i>封号</el-menu-item>
          <el-menu-item index="2-2"><i class="el-icon-s-unfold"></i>解封</el-menu-item>
        </div>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>权限管理</span>
        </template>
        <div>
          <el-menu-item index="3-1"><i class="el-icon-s-unfold"></i>管理员</el-menu-item>
          <el-menu-item index="3-2"><i class="el-icon-s-unfold"></i>角色管理</el-menu-item>
        </div>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>礼物管理</span>
        </template>
        <div>
          <el-menu-item index="4-1"><i class="el-icon-s-unfold"></i>礼物库</el-menu-item>
          <el-menu-item index="4-2"><i class="el-icon-s-unfold"></i>礼物展示</el-menu-item>
          <el-menu-item index="4-3"><i class="el-icon-s-unfold"></i>概率礼物</el-menu-item>
        </div>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>虚拟物品</span>
        </template>
        <div>
          <el-menu-item index="5-1"><i class="el-icon-s-unfold"></i>虚拟物品</el-menu-item>
        </div>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>审核</span>
        </template>
        <div>
          <el-menu-item index="6-1"><i class="el-icon-s-unfold"></i>个人资料</el-menu-item>
          <el-menu-item index="6-2"><i class="el-icon-s-unfold"></i>动态</el-menu-item>
        </div>
      </el-submenu>
      <el-menu-item index="7">
        <i class="el-icon-document"></i>
        <span slot="title">厅内</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-document"></i>
        <span slot="title">提现</span>
      </el-menu-item>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>聊天室</span>
        </template>
        <div>
          <el-menu-item index="9-1"><i class="el-icon-s-unfold"></i>创建聊天室</el-menu-item>
        </div>
      </el-submenu>
      <el-menu-item index="10">
        <i class="el-icon-document"></i>
        <span slot="title">数据</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
export default {
  // methods: {
  //   handleOpen (key, keyPath) {
  //     console.log(key, keyPath)
  //   },
  //   handleClose (key, keyPath) {
  //     console.log(key, keyPath)
  //   }
  // },
  name: 'Home'

}
</script>
