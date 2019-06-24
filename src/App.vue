<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/main">进入编辑器</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app{
  /* position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #000; */

}
.body-padding{
  padding: 0;
  margin: 0;
  background-color: #1b1b1b;
}
</style>

<script lang="ts">
export default {
  beforeCreate() {
    document.getElementsByTagName("body")[0].className="body-padding";
  },
}
</script>