import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import conf from '../conf'

function RTE({ onChange, defaultValue }) {
  return (
    <Editor
    apiKey={conf.rteApiKey}
      initialValue={defaultValue}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table code help wordcount",
        ],
        toolbar:
          "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
      }}
      onEditorChange={onChange}
    />
  )
}

export default RTE
