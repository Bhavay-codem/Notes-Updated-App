import React, { useState } from "react";
import ReactQuill from "react-quill";
import "../../../node_modules/react-quill/dist/quill.snow.css";

function Format() {
  const [body, setBody] = useState("");

  const handleBody = (e) => {
    console.log(e);
    setBody(e);
  };
  return (
    <div className="style">
      <ReactQuill
        placeholder="Write anything.."
        modules={Format.modules}
        formats={Format.formats}
        onChange={handleBody}
        value={body}
      />
    </div>
  );
}

Format.modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, 3]}, {header:  [4, 5, 6] }, { font: [] }],
    ["link", "image"],
    ["clean"],
    ["code-block"],
    [{ size: [] }],
  ],
};

Format.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "code-block",
];

export default Format;
