<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <HomeMenu></HomeMenu>
    <HomeDemo></HomeDemo>
    <HomeLatestProjects></HomeLatestProjects>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import HomeMenu from './home-menu.vue';
import HomeDemo from './home-demo.vue';
import  HomeLatestProjects from './home-latest-projects.vue';
@Component({
  components: {
    HomeMenu,
    HomeDemo,
    HomeLatestProjects
  }
})
export default class Home extends Vue {}
</script>
