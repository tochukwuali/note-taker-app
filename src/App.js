import React from 'react';
import './App.css';
import Editor from './editor/Editor'
import Sidebar from './sidebar/Sidebar'

const firebase = require("firebase");

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }
  }

  render() {
      return (
      <div className="app-container">
        <Sidebar notes={this.state.notes}/>
        <Editor /> 
      </div>
    );
  }
  
  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data()
          data['id'] = _doc.id
          return data
        })
        console.log(notes)
         this.setState({
           notes: notes
         })
      })
  }
}

export default App
