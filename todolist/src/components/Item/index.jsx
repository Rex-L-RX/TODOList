import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

    state = {mouse: false};

    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag});
        }
    }

    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked);
        }
    }
    handleDelete = (id)=>{
        if(window.confirm('Are you sure to delete this task')){
            this.props.deleteTodo(id)
        }
        
    }
  render() {
    const {id,name,done}=this.props;
    return ( 
        <li style={{backgroundColor:this.state.mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
            <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
            </label>
            <button  onClick={()=>{this.handleDelete(id)}}className="btn btn-danger" style={{display:this.state.mouse?'block':'none'}}>Delete</button>  
        </li>
    )
  }
}
