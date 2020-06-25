import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import debounce from '../helpers'
import './styles.css'

export class Editor extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            body: '',
            id: ''
        }
    }

    componentDidMount = () => {
      this.setState({
        title: this.props.selectedNote.title,
        body: this.props.selectedNote.body,
        id: this.props.selectedNote.id
        })
    }

    componentDidUpdate = () => {
     if(this.props.selectedNote.id !== this.state.id){
       this.setState({
        title: this.props.selectedNote.title,
        body: this.props.selectedNote.body,
        id: this.props.selectedNote.id
        })
     }
    }

    updateBody = async (value) => {
      await this.setState({
        body: value
     });
      this.update();
    }

    update = debounce(() => {
        this.props.noteUpdate(this.state.id, {
          title: this.state.title,
          body: this.state.body
        });
    }, 1500)

    render() {
        return (
            <div className="editorContainer">
                <ReactQuill 
                    value={this.state.body}
                    onChange={this.updateBody}
                />
            </div>
        )
    }
}

export default Editor
