<!-- <template>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
  import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';  
  export default defineComponent({
    components: {
      ckeditor: CKEditor.component,
    },
    setup() {
      const editorData = ref('<p>Escribe aquí...</p>');
      const editor = ClassicEditor;
      const editorConfig = {
        plugins: [EasyImage, HtmlEmbed],
        toolbar: {
          items: ['heading', '|', 'bold', 'italic', 'underline', '|', 'imageUpload', 'htmlEmbed', '|', 'undo', 'redo'],
        },
        image: {
          toolbar: ['imageTextAlternative', '|', 'imageStyle:full', 'imageStyle:side'],
        },
        htmlEmbed: {
          showPreviews: true,
        },
      };
  
      return {
        editorData,
        editor,
        editorConfig,
      };
    },
  });
  </script> -->