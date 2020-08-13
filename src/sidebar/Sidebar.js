import React, { useState } from 'react'
import './styles.css'
import SidebarItem from '../sidebarItem/sidebarItem'

export function Sidebar(props) {
   const initialState = {
        title: '',
        addingNote: false
        }

const [state, setState] = useState(initialState)

  const newBtnClick = () => {
    setState({
      title: '',
      addingNote: !state.addingNote
    })
  }

  const selectNote = (n, i) => {
    props.selectNote(n, i);
  };
  const deleteNote = note => {
    props.deleteNote(note);
  };

  const onChange = (e) => {
    let title = e.target.value
   setState(prevState => {
      return {
      ...prevState,
      title : title
      }
    });
  }

  const newNote = () => {
    props.newNote(state.title)
      setState({
       title: null,
       addingNote: false
    })
  }
    
    if (props.notes) {
      return (
        <div className="sidebar">
          <div>
            <div>
              <input type="search" className="search" placeholder="Search Notes"/>
            </div>
            <div>
              {props.notes.map((note, index) => (
                <div key={index}>
                  <SidebarItem
                    index={index}
                    note={note}
                    selectNote={selectNote}
                    deleteNote={deleteNote}
                  />{" "}
                  <hr />
                </div>
              ))}
            </div>

            <button onClick={newBtnClick}>
              {" "}
              {state.addingNote ? "Cancel" : "Add a Note"}{" "}
            </button>
            {state.addingNote ? (
              <div className="input-text">
                <input
                  type="text"
                  value={state.title}
                  name="title"
                  className="enter-title"
                  placeholder="Add Note"
                  onChange={onChange}
                />
                <button onClick={newNote} className="submit-button">
                  Continue
                </button>
              </div>
            ) : null}
          </div>
        </div>
      );
      } else {
        return (<div></div>)
      }

}
export default Sidebar
