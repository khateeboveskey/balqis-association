  <template>
    <div class="editor mx-24">
      <QuillEditor v-model:content="content" contentType="html" theme="snow" toolbar="full" @textChange="onTextChange" @selectionChange="onSelectionChange" />
      <div class="w-full text-left">
        <button class="publish-button bg-primary-600 text-white px-4 py-2.5 rounded-lg my-5 hover:opacity-90" @click="exportMarkdown">نشر</button>
      </div>
    </div>
  </template>

<script>
import { ref, onMounted } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import TurndownService from 'turndown'

export default {
  name: 'EditorView',
  components: {
    QuillEditor
  },
  setup() {
    const content = ref('')

    onMounted(() => {
      const style = document.createElement('style')
      style.innerHTML = `
          .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
            right: auto;
            left: 0;
          }
          .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) .ql-picker-label {
            padding-right: 8px;
            padding-left: 20px;
          }
          .ql-snow .ql-picker-label::before {
            right: auto;
            left: 0;
          }
          .ql-editor {
            direction: rtl;
            text-align: right;
          }
          .ql-snow .ql-tooltip {
            direction: rtl;
            text-align: right;
          }
        `
      document.head.appendChild(style)
    })

    const onTextChange = (delta) => {
      // Handle text change
      console.log('Text change:', delta)
    }

    const onSelectionChange = (range) => {
      // Handle selection change
      console.log('Selection change:', range)
    }

    const exportMarkdown = () => {
      const turndownService = new TurndownService()
      const markdown = turndownService.turndown(content.value)
      const blob = new Blob([markdown], { type: 'text/markdown' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'content.md'
      a.click()
      window.URL.revokeObjectURL(url)
    }

    return {
      content,
      onTextChange,
      onSelectionChange,
      exportMarkdown
    }
  }
}
</script>

<style>
.editor {
  height: 100%;
  padding: 20px;
}

.ql-editor {
  min-height: 300px;
}

/* RTL Support */
.ql-container {
  direction: rtl;
  text-align: right;
}

.ql-toolbar.ql-snow {
  direction: rtl;
}

.ql-toolbar.ql-snow .ql-formats {
  margin-right: 0;
  margin-left: 15px;
}

.publish-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.publish-button:hover {
  background-color: #45a049;
}
</style>