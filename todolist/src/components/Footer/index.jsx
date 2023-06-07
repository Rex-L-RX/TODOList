import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  render() {
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox"/>
            </label>
            <span>
                <span>Finished tasks 0</span>/ Total tasks 2 
            </span>
            <button className="btn btn-danger">Clear all finished tasks</button>
      </div>
    )
  }
}