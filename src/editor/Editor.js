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

    updateBody = async (value) => {
         await this.setState({
           body: value
         });
         this.update();
    }

    update = debounce(() => {
        //Come back later
        console.log('UPDATING DATABASE')
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
