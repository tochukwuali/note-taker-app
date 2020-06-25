import React, { Component } from 'react'
import './styles.css'

import { removeHTMLTags } from '../helpers'

export class sidebarItem extends Component {
   
    render() {
        const {note, index, selectNote} = this.props
        return (
            <div 
              className="sidebar-item"
              onClick={() => selectNote(note, index)}>
              <p> {note.title} </p>
              <p>{ removeHTMLTags(note.body.substring(0, 30)) + '...'}</p>
            </div>
        )
    }

    // selectNote = (n, i) => this.props.selectNote(n, i)
}

export default sidebarItem
