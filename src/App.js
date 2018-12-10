import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true},
        { description: 'Throw the dishes away', isCompleted: false},
        { description: 'Buy new dishes', isCompleted: false},
      ],
      newTodoDescription: ''
    };
  }

/* Delete item by passing in the index of the array*/
deleteToDo(index){
  /*Make a copy of the todos array*/
  const todos = this.state.todos.slice();
  /*stores the deleted todo item in deletedToDo*/
  const deletedToDo = todos[index];
  /*filters out the index todo that was deleted*/
  let filterToDos =todos.filter((item) => item !== deletedToDo)
  /*Sets the old array values (todos) to the new array values*/
  this.setState({todos: filterToDos})
}

handleChange(e){
  this.setState({ newTodoDescription: e.target.value})
}

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.newTodoDescription){return}
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false};
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: ''});
  }

    toggleComplete(index){
        const todos = this.state.todos.slice();
        const todo = todos[index];
        todo.isCompleted = todo.isCompleted ? false :true;
        this.setState({ todos: todos});
    }

  render() {
    return (
      <div className="App">
<ul>
  { this.state.todos.map((todo, index) =>
  <ToDo key={ index } description={ todo.description} isCompleted={ todo.isCompleted} toggleComplete={ ()=>this.toggleComplete(index)} deleteToDo={ ()=>this.deleteToDo(index)}/>
  )}
</ul>
<form onSubmit ={(e) => this.handleSubmit(e)}>
  <input type="text" value={ this.state.newTodoDescription } onChange= { (e) => this.handleChange(e)}/>
  <input type="submit"/>
</form>
      </div>
    );
  }
}

export default App;
