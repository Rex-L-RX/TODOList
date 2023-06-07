import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  handleDeleteAllDone=()=>{
    this.props.deleteAllDone()
  }

  render() {
    const {todos}=this.props
    const done=todos.reduce((pre, current)=>{return pre+(current.done? 1:0) },0)
    const total=todos.length
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={this.handleCheckAll}checked={done===total && total!==0? true:false}/>
            </label>
            <span>
                <span>Finished tasks {done}</span>/ Total tasks {total}
            </span>
            <button onClick={this.handleDeleteAllDone}className="btn btn-danger">Clear all finished tasks</button>
      </div>
    )
  }
}
