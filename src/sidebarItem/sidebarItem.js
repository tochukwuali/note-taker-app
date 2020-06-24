import React, { Component } from 'react'

export class sidebarItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {note} = this.props
        return (
            <>
              <li> {note.title} </li>
            </>
        )
    }
}

export default sidebarItem
