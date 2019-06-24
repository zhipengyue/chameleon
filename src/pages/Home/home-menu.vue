<template>
  <div class="home-menu" ref="menu">
    <!-- <el-row :gutter="0">
      <el-col :xs="24" :sm="2" :md="2" :lg="1" :xl="1">项目</el-col>
      <el-col :xs="24" :sm="2" :md="2" :lg="1" :xl="1">账户</el-col>
    </el-row> -->
    <el-menu
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="0" class="el-menu-item">首页</el-menu-item>
  <el-submenu index="1" class="el-submenu">
    <template slot="title" class="el-submenu-template">项目</template>
    <el-menu-item index="1-1">新建项目</el-menu-item>
    <el-menu-item index="1-2">项目列表</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title" class="el-submenu-template">账户管理</template>
    <el-menu-item index="2-1">添加子账户</el-menu-item>
    <el-menu-item index="2-1">子账户权限管理</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title" class="el-submenu-template">数据源管理</template>
    <el-menu-item index="3-1">创建数据源</el-menu-item>
    <el-menu-item index="3-1">数据源列表</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title" class="el-submenu-template">素材管理</template>
    <el-menu-item index="4-1">添加素材</el-menu-item>
    <el-menu-item index="4-2">素材列表</el-menu-item>
    <el-menu-item index="4-3">七牛云设置</el-menu-item>
  </el-submenu>
  <el-submenu index="5">
      <template slot="title" class="el-submenu-template">我的</template>
      <el-menu-item index="5-1">编辑器皮肤</el-menu-item>
      <el-menu-item index="5-2">账户信息</el-menu-item>
    </el-submenu>
</el-menu>

  </div>
</template>
<style scoped lang="scss">
  .home-menu{
   
    height: 40px;
    color: #ccc;
    
  }
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { VueBase } from '../../VueBase.vue'
import { Row,Col,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
@Component({
  components:{
    Row,
    Col,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
  }
})
export default class HomeMenu extends Vue {
  

  handleSelect(key:any, keyPath:any) {
    // console.log(key, keyPath);
    // this.$refs.menu.style.setProperty("--backgroundColor",'#323232');
  }
}
</script>
  