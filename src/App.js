import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    text: "",
    todolist: []
  }

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.updateText = this.updateText.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    this.setState({todolist: [...this.state.todolist, this.state.text], text: ""})
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  updateTodo(e) {
    if(e.target.checked) {
      const target = this.state.todolist.indexOf(e.target.value);
      console.log(this.state.todolist, target);
      if (target > -1) {
        const filterList = this.state.todolist;
        filterList.splice(target, 1)
        this.setState({todolist: filterList});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Todo app</h1>
        <form onSubmit={this.addTodo}>
          <label htmlFor="add-todo">Todo item:</label>
          <input 
          id="add-todo" 
          type="text"
          onChange={this.updateText}
          value={this.state.text} />
          <button type="submit">Add todo item</button>
        </form>
        <ul id="todo">
          {this.state.todolist.map((todo, i) => <li key={`todo-${i}`}>
          <label htmlFor={`todo-${i}`}>Remove</label>
          <input type="checkbox" id={`todo-${i}`} style={{opacity:0}} value={todo} checked={false} onChange={(e) => {
            this.updateTodo(e)
          }} />
          <strong>{todo}</strong>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
