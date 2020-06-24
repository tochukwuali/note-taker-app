import React, { Component } from 'react'
import './styles.css'
import SidebarItem from '../sidebarItem/sidebarItem'

export class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            addingNote: false
        }
    }

     newBtnClick = () => {
         this.setState({
             title: '',
             addingNote: !this.state.addingNote
         })
     }

     onChange = (e) => {
          return this.setState({
            [e.target.name]: e.target.value
          });
     }

     newNote = () => {
       console.log(this.state)
     }

    render() {

      const { notes } = this.props
      console.log(notes)
    
      if (notes) {
          return (
          <div>
            <h4> Hello from the Sidebar</h4>
            <button onClick={this.newBtnClick}> {this.state.addingNote ? 'CANCEL' : 'NEW NOTE'} </button>
            {this.state.addingNote ? (
              <div>
                <input
                  type="text"
                  value={this.state.title}
                  name="title"
                  placeholder="Enter title"
                  onChange={this.onChange}
                />
                <button 
                  onClick={this.newNote}
                  className="submit-button"
                >
                  SUBMIT
                </button>
              </div>
            ) : null}
            <ul>
              {
                notes.map((note, index) => (
                 <SidebarItem key={index} note={note} /> 
                   )
                )
              }
            </ul>
          </div>
        );
      } else {
        return (<div></div>)
      }
        
    }
}

export default Sidebar
