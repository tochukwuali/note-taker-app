import React from 'react'
import './settings.css'

const Settings = (props) => {
    return (
      <div className="settings">
        <a
          href="https://twitter.com/tochukwuali3"
          className="toggle-icon"
        >
          <i className="fa fa-align-right"></i>
        </a>

        <a
          href="https://twitter.com/tochukwuali3"
          className="setting-icon"
        >
          <i className="fa fa-cog"></i>
        </a>
      </div>
    );
}

export default Settings
