import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {

    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp=(event)=>{
        const {target}=event
        if(event.key!=='Enter'){
           return ;
        }else{
            if(target.value.trim()===''){
                alert('Please enter your todo task')
                return
            }
            const todoObj = {id:nanoid(), name:target.value, done:false}
            this.props.addTodo(todoObj);
            //clear input 
            target.value='';
        }
        
     }
  render() {
    
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please enter your task"/>
        </div>
    )
  }
}
