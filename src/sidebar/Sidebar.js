import React, { Component } from 'react'
import './styles.css'

export class Sidebar extends Component {
    constructor(){
        super()
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

    render() {
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
              </div>
            ) : null}
          </div>
        );
    }
}

export default Sidebar
