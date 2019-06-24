<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export class VueBase extends Vue{
/**
 *  .home-menu{
    --backgroundColor: #8b8397;
    background-color: var(--backgroundColor);
  }
  scss 变量要以--开头明明

  要在引入的节点处给节点起名字
  <div class="home-menu" ref="menu">
  ref=""

 */
  changeSkin(){
    // this.$refs.menu.style.setProperty("--backgroundColor",'#323232');
  }
}
</script>