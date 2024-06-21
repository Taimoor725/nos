
import { useEffect, useRef,useState } from "react";
import { format } from "prettier/standalone";
import { html } from "prettier/parser-html";
import { Editor as DraftEditor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

export function Editor({ value, onChange }) {
  const editorRef = useRef();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    // Sync the value prop with the editor state
    const content = editorState.getCurrentContent().getPlainText();
    if (content !== value) {
      onChange(content);
    }
  }, [editorState, value, onChange]);

  useEffect(() => {
    // Focus the editor on mount
    editorRef.current.focus();
  }, []);

  const handleKeyCommand = (command, editorState) => {
    // Handle keyboard shortcuts for formatting
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = (inlineStyle) => {
    // Toggle the inline style of the selected text
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const toggleBlockType = (blockType) => {
    // Toggle the block type of the current block
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const formatCode = () => {
    // Format the code using prettier
    const content = editorState.getCurrentContent().getPlainText();
    const formatted = format(content, { parser: "html", plugins: [html] });
    onChange(formatted);
  };

  return (
    <div className="editor border rounded-lg overflow-hidden">
      <div className="toolbar bg-black text-[red] flex p-6">
        <button
          className="mx-1"
          onClick={() => toggleInlineStyle("BOLD")}
          title="Bold (Ctrl+B)"
        >
          <i className="fas fa-bold bg-[yellow] text-[pink]"></i>
        </button>
        <button
          className="mx-1 bg-[green] w-[30rem ]"
          onClick={() => toggleInlineStyle("ITALIC")}
          title="Italic (Ctrl+I)"
        >
          <i className="fas fa-italic"></i>
        </button>
        <button
          className="mx-1"
          onClick={() => toggleInlineStyle("UNDERLINE")}
          title="Underline (Ctrl+U)"
        >
          <i className="fas fa-underline"></i>
        </button>
        <button
          className="mx-1 bg-black"
          onClick={() => toggleBlockType("unordered-list-item")}
          title="Unordered List (Ctrl+Shift+8)"
        >
          <i className="fas fa-list-ul"></i>
        </button>
        <button
          className="mx-1 text-[red]"
          onClick={() => toggleBlockType("ordered-list-item")}
          title="Ordered List (Ctrl+Shift+7)"
        >
          <i className="fas fa-list-ol"></i>
        </button>
        <button className="mx-1" onClick={formatCode} title="Format Code">
          <i className="fas fa-code"></i>
        </button>
      </div>
      <div className="content p-2">
        <DraftEditor
          ref={editorRef}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
}
