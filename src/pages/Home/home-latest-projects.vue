<template>
    <div class="home-demo">
     <span class="title">最近编辑项目</span>
     <!-- <el-divider></el-divider> -->
     <el-row :gutter="10">
        <el-col :xs="12" :span="4">
          <router-link to="editor">
            <el-image
            style="width: 100%; height: 100%"
            :src="url"
            :fit="fit"></el-image>
          </router-link>
        </el-col>
        <el-col :xs="12" :span="4">
            <el-image
            style="width: 100%; height: 100%"
            :src="url"
            :fit="fit"></el-image>
        </el-col>
        <el-col :xs="12" :span="4">
            <el-image
            style="width: 100%; height: 100%"
            :src="url"
            :fit="fit"></el-image>
        </el-col>
        <el-col :xs="12" :span="4">
         <el-image
          style="width: 100%; height: 100%"
          :src="url"
          :fit="fit"></el-image>
        </el-col>
        <el-col :xs="12" :span="4">
            <el-image
              style="width: 100%; height: 100%"
              :src="url"
              :fit="fit"></el-image>
        </el-col>
        <el-col :xs="12" :span="4">
          <el-image
            style="width: 100%; height: 100%"
            :src="url"
            :fit="fit"></el-image>
        </el-col>
      </el-row>
    </div>
  </template>
  <style scoped lang="scss">
    .home-demo{
      margin-top: 20px;
      padding: 20px;
      max-width: 1900px;
      height: 40px;
      .title{
        color: #fff;
      }
    }
  </style>
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Row,Col,Divider} from 'element-ui';
  @Component({
    components:{
      Row,Col,Divider
    }
  })
  export default class HomeLatestProjects extends Vue {
    public fit:string='cover';
    public url:string='http://pic37.nipic.com/20140113/8800276_184927469000_2.png';
    
  }
  </script>
    