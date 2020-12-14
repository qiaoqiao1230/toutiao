<template>
<el-container>
  <el-header style="text-align: right; width:100%; font-size: 14px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
  <el-container>
    <el-aside style="background-color: rgb(238, 241, 246);width:15%">
      <el-menu router :default-openeds="['1', '3']" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i><span>用户管理</span>
          </template>
          <div>
            <el-menu-item index="/about"><i class="el-icon-s-unfold"></i>用户基本信息</el-menu-item>
            <!-- <el-menu-item index="/ban">封号</el-menu-item> -->
          <!-- </el-menu-item-group> -->
          </div>
        </el-submenu>
        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>封号</span>
        </template>
        <div>
          <el-menu-item index="/ban"><i class="el-icon-s-unfold"></i>封号</el-menu-item>
          <!-- <el-menu-item index="2-2"><i class="el-icon-s-unfold"></i>解封</el-menu-item> -->
        </div>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>权限管理</span>
        </template>
        <div>
          <el-menu-item index="/administrator "><i class="el-icon-s-unfold"></i>管理员</el-menu-item>
          <el-menu-item index="/role-based"><i class="el-icon-s-unfold"></i>角色管理</el-menu-item>
        </div>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>礼物管理</span>
        </template>
        <div>
          <el-menu-item index="/present"><i class="el-icon-s-unfold"></i>礼物库</el-menu-item>
          <el-menu-item index="/gift show"><i class="el-icon-s-unfold"></i>礼物展示</el-menu-item>
          <el-menu-item index="/probability"><i class="el-icon-s-unfold"></i>概率礼物</el-menu-item>
        </div>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>虚拟物品</span>
        </template>
        <div>
          <el-menu-item index="/virtual Items"><i class="el-icon-s-unfold"></i>虚拟物品</el-menu-item>
        </div>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>审核</span>
        </template>
        <div>
          <el-menu-item index="/personal"><i class="el-icon-s-unfold"></i>个人资料</el-menu-item>
          <el-menu-item index="/dynamic"><i class="el-icon-s-unfold"></i>动态</el-menu-item>
        </div>
      </el-submenu>
      <el-menu-item index="/hall">
        <i class="el-icon-document"></i>
        <span slot="title">厅内</span>
      </el-menu-item>
      <el-menu-item index="/withdraw">
        <i class="el-icon-document"></i>
        <span slot="title">提现</span>
      </el-menu-item>
      <el-submenu index="">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>聊天室</span>
        </template>
        <div>
          <el-menu-item index="/room"><i class="el-icon-s-unfold"></i>创建聊天室</el-menu-item>
        </div>
      </el-submenu>
      <el-menu-item index="dataa">
        <i class="el-icon-document"></i>
        <span slot="title">数据</span>
      </el-menu-item>
    </el-menu>
      <!-- </el-menu> -->
    </el-aside>
    <el-main>
        <router-view></router-view>
      </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
