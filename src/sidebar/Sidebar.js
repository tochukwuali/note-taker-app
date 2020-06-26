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
    this.props.newNote(this.state.title)
    this.setState({
      title: null,
      addingNote: false
    })
  }

  render() {

    const { notes } = this.props
    
    if (notes) {
      return (
        <div>
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
            <div>
              {
                notes.map((note, index) => (
                  <div key={index}>
                 <SidebarItem 
                  index={index} 
                  note={note}
                  selectNote={this.selectNote}
                  deleteNote={this.deleteNote} /> <hr/>
                 </div>
                   )
                )
              }
            </div>
          </div>
        );
      } else {
        return (<div></div>)
      }
        
    }

  selectNote = (n, i) => {
    this.props.selectNote(n, i)
  }
  deleteNote = (note) => {
    this.props.deleteNote(note)
  }
}
export default Sidebar
