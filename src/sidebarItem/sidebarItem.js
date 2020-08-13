import React from 'react'
import './styles.css'

import { removeHTMLTags } from '../helpers'

export function sidebarItem(props) {

    const selectNote = (n, i) => props.selectNote(n, i)
    const deleteNote = (note) => {
        if(window.confirm(`Are you sure you want ${note.title}`)) {
           props.deleteNote(note)
         }
    }   
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const getDate =  props.note.timestamp ? props.note.timestamp.toDate().getDate() : null
    const getDay = props.note.timestamp ? props.note.timestamp.toDate().getDay() : null
   return (
     <>
       <div
         key={props.index}
         className="sidebar-item"
         onClick={() => selectNote(props.note, props.index)}
       >
         <div className="date">
           <p className="date-number"> {getDate} </p>
           <p className="day"> {(days[getDay]).substring(0, 3)} </p>
         </div>

         <div className="text">
           <p className="title"> {props.note.title} </p>
           <p className="body">{removeHTMLTags(props.note.body.substring(0, 45)) + "..."}</p>
           {/* <span onClick={() => deleteNote(props.note)}>delete</span> */}
         </div>
       </div>
     </>
   ); 
}


export default sidebarItem
