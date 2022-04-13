import React from 'react';

import Editor from '@monaco-editor/react';

const jsonEditorStyle = {
  width: '100%',
  height: '200px',
  border: '1px solid #ccc',
};

function JSONEditor() {
  return (
    <div style={jsonEditorStyle}>
      <Editor
        defaultLanguage="json"
        defaultValue={'[{"totalCount":0},{"_EXECUTE_TIME":"64ms"}]'}
        theme={'light'}
      />
    </div>
  );
}

export default JSONEditor;
