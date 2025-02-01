import { useCurrentEditor } from "@tiptap/react";

const EditorJSONPreview = () => {
  const { editor } = useCurrentEditor();

  return <pre className="editor-json-preview">{JSON.stringify(editor?.getJSON(), null, 2)}</pre>;
};

export default EditorJSONPreview;
