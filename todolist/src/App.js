import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css';
import { Component } from 'react';


export default class App extends Component {

  state = {todos:[
    {id:'001', name:'eating', done:true},
    {id:'002', name:'sleeping', done:true},
    {id:'003', name:'coding', done:false},
  ]}
  
  addTodo =(todoObj)=>{
    //get todos
    const {todos}= this.state;
    const newTodos = [todoObj,...todos];
    this.setState({todos:newTodos})

  }

  updateTodo=(id,done)=>{
    const {todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      if(todoObj.id===id) return{...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }
  render(){
    const {todos}=this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo}/>
          <Footer/>
        </div>
      </div>    
    );
  }
}
  

