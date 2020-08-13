import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import "./styles.css";

export function Editor({
  selectedNote,
  selectedNoteIndex,
  notes,
  noteUpdate,
  deleteNote
}) {
  const editorState = {
    title: "",
    body: "",
    id: ""
  };
  const [state, setState] = useState(editorState);

  useEffect(() => {
    setState(prevState => {
      return {
        ...prevState,
        title: selectedNote.title,
        body: selectedNote.body,
        id: selectedNote.id
      };
    });
  }, [selectedNote]);

  // useEffect(() => {
  //  if(props.selectedNote.id !== state.id){
  //    setState(prevState => {
  //     return {
  //     ...prevState,
  //     title: props.selectedNote.title,
  //     body: props.selectedNote.body,
  //     id: props.selectedNote.id
  //      }
  //     })
  //   }
  // })

  const updateBody = async value => {
    await setState(prevState => {
      return {
        ...prevState,
        body: value
      };
    });
    if (state.body !== "") {
      noteUpdate(state.id, {
        title: state.title,
        body: state.body
      });
    }
  };

  const updateTitle = async e => {
    let title = e.target.value;
    await setState(prevState => {
      return {
        ...prevState,
        title: title
      };
    });
    console.log(state);
    noteUpdate(state.id, {
      title: state.title,
      body: state.body
    });
  };

  const update = debounce(() => {
    noteUpdate(state.id, {
      title: state.title,
      body: state.body
    });
  }, 1500);

  return (
    <div className="editorContainer">
      <div className="title-stuff">
        <div className="editor-title">
          <input
            className="title-cont"
            type="text"
            placeholder="Note Title..."
            value={state.title ? state.title : " "}
            onChange={updateTitle}
          />
        </div>
        <div className="editor-text-icons">
          <a href="https://twitter.com/tochukwuali3" className="share-icon">
            <i className="fa fa-share-alt"></i>
          </a>
          <a href="https://twitter.com/tochukwuali3" className="delete-icon">
            <i className="fa fa-trash-o"></i>
          </a>
        </div>
      </div>

      <ReactQuill value={state.body} onChange={updateBody} />
    </div>
  );
}

export default Editor;
