import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

function Free() {
  
  return(
    <div className="Free">
      <h1>Free</h1>
      <CKEditor
        onInit={ editor => {
          console.log( 'Editor is ready to use!', editor );

          // Insert the toolbar before the editable area.
          editor.ui.getEditableElement().parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
          );
        } }
        onChange={ ( event, editor ) => console.log( { event, editor } ) }
        editor={ DecoupledEditor }
        data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
        config={ {
          fontSize: {
            options: [ 9, 11, 13, 'default', 17, 19, 21, 32, 44, 52 ]
          },
        } }
      />
    </div>
  )
}

export default Free;