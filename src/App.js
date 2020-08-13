import React, {useState, useEffect} from 'react';
import './App.css';
import Editor from './editor/Editor';
import Sidebar from './sidebar/Sidebar';
import Settings from './settings/Settings';

const firebase = require("firebase");

function App() {
    const initialState = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  
    const [state, setState] = useState(initialState)

  useEffect(() => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data()
          data['id'] = _doc.id
          return data
        }) 
        setState(prevState => {
           return {
           ...prevState,
           notes: notes
           }
         })
      })
  }, [])
    

 const selectNote = (note, index) => {
    setState(prevState => { 
      return {
        ...prevState,
        selectedNoteIndex: index,
        selectedNote: note
      } 
      
    })
  }

  const noteUpdate = (id, noteObj) => {
    console.log(noteObj)
    firebase
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
      })
  }

  const newNote = async (title) => {
    const note = {
      title: title,
      body: ''
    }

    const newfromDB = await firebase
      .firestore()
      .collection("notes")
      .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      const newID = newfromDB.id
      await setState(prevState => {
        return {
          ...prevState, 
        notes: [...state.notes, note]
      }})
      const newNoteIndex = state.notes.indexOf(state.notes.filter(_note => _note.id === newID)[0])
      setState(prevState => {
        return {
        ...prevState,
        selectedNote: state.notes[newNoteIndex],
        selectedNoteIndex: newNoteIndex,
        }
      });
  }

  const deleteNote = async (note) => {
    const noteIndex = state.notes.indexOf(note)
     await setState(prevState => { return {...prevState, notes: state.notes.filter(_note => _note !== note) }})
     if (state.selectedNoteIndex === noteIndex) {
       setState(prevState => {
         return {
        ...prevState, 
         selectedNote: null,
         selectedNoteIndex: null
        }
         })
     } else {
       state.notes.length > 1 ?
       selectNote(state.notes[state.selectedNote - 1], state.selectedNoteIndex - 1) :
         setState(prevState => {
           return {
            ...prevState,
            selectedNoteIndex: null,
            selectedNote: null
           }
         })
     }
      firebase
        .firestore()
        .collection('notes')
        .doc(note.id)
        .delete()
  }

  return (
    <div className="app-container">
      <div className="container">
        <Settings />
        <Sidebar
          selectedNoteIndex={state.selectedNoteIndex}
          notes={state.notes}
          selectNote={selectNote}
          deleteNote={deleteNote}
          newNote={newNote}
        />

        {state.selectedNote ? (
          <Editor
            selectedNote={state.selectedNote}
            selectedNoteIndex={state.selectedNoteIndex}
            deleteNote={deleteNote}
            notes={state.notes}
            noteUpdate={noteUpdate}
          />
        ) : <div></div>}
      </div>
    </div>
  );

}

export default App
