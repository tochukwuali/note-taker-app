import React, { Component } from 'react'
import './styles.css'

import { removeHTMLTags } from '../helpers'

export class sidebarItem extends Component {
   
    render() {
        const {note, index, selectedNoteIndex} = this.props
        return (
            <>
            <div 
              key={index}
              className="sidebar-item"
              onClick={() => this.selectNote(note, index)}>
              <p> {note.title} </p>
              <p>{ removeHTMLTags(note.body.substring(0, 30)) + '...'}</p>
              
            </div>
            <span onClick={() => this.deleteNote(note)}>delete</span>
            </>
        )
    }

       selectNote = (n, i) => this.props.selectNote(n, i)
       deleteNote = (note) => {
           if(window.confirm(`Are  you sure you want ${note.title}`)) {
               this.props.deleteNote(note)
           }
       }
}

export default sidebarItem
