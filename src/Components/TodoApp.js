import React from "react";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
  constructor(){
    super();
    this.state={
      inputData:"",
      todoItems:[]
    }
  }
  changeTodoInput = (event) =>{
    this.setState({inputData:event.target.value})
  }

  addTodo = (event) =>{
    if(this.state.inputData!==''){
      let newTodoItems=[...this.state.todoItems,this.state.inputData];
      this.setState({todoItems:newTodoItems, inputData:""}) 
    }
  }

  deleteTodo =(index) =>{
    let todoItems=[...this.state.todoItems];
    let newTodoItems=todoItems.filter((value, key)=>{
       return index!==key
    })
    this.setState({todoItems:newTodoItems})
  }
  render(){
  return (
   <div className="container">
     <div className="row">
       <div className="col-md-6">
         <h3 className="text-center">Todo List</h3>
         <div className="col-md-12">
            <div className="input-group text-center">
                <input type="text" placeholder=" Enter value" className="form-control" onChange={this.changeTodoInput} value={this.state.inputData}/>
                <div className="input-group-append">
                <button className="btn btn-danger btn btn-outline-success " onClick={this.addTodo}>Add</button>
                </div>
                </div>
                
            </div> 
                 <TodoList items={this.state.todoItems} deleteTodo={this.deleteTodo}/>
       </div>
     </div>
   </div>

  );
  }
}

export default TodoApp;