<template>
  <div class="editor">
    <EditorLeftBar></EditorLeftBar>
    <EditorCanvas></EditorCanvas>
    <EditorAttributesBar></EditorAttributesBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EditorCanvas from './editor-canvas.vue'; 
import EditorLeftBar from './editor-left-bar.vue';
import EditorAttributesBar from './editor-attributes-bar.vue';
@Component({
  components: {
    EditorLeftBar,
    EditorCanvas,
    EditorAttributesBar
  }
})
export default class Editor extends Vue {}
</script>
