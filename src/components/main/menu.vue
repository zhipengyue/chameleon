<template>
  <div class="menu">
    main-page
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenuComponnet extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">

</style>