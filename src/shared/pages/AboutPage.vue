<template>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//   import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';  
//   import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';

  export default defineComponent({
    components: {
      ckeditor: CKEditor.component,
    },
    setup() {
      const editorData = ref('<p>Escribe aquí...</p>');
      const editor = ClassicEditor;
      const editorConfig = {
        // plugins: [HtmlEmbed, Bold, Italic, Underline ],
        // toolbar: {
        //   items: ['heading', '|', 'bold', 'italic', 'underline', '|', 'htmlEmbed', '|', 'undo', 'redo'],
        // },
        // htmlEmbed: {
        //   showPreviews: true,
        // },
      };
 //mostrar plugins disponibles
      // ClassicEditor.builtinPlugins.map( plugin => console.log(plugin.pluginName));

  
      return {
        editorData,
        editor,
        editorConfig,
      };
    },
  });
  </script>