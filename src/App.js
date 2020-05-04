import React from "react";
import "./App.css";
import Todo from "./Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoText: "",
    };
    this.id = 1;

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTodo() {
    const { todos, todoText } = this.state;
    this.setState({
      todos: [...todos, { id: this.id, text: todoText }],
      todoText: "",
    });
    this.id++;
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  handleChange(e) {
    this.setState({
      todoText: e.target.value,
    });
  }

  render() {
    const { todos, todoText } = this.state;
    return (
      <div className="wrapper">
        <div className="add">
          <input type="text" value={todoText} onChange={this.handleChange} />
          <button className="add-todo" onClick={this.addTodo}>
            New
          </button>
        </div>
        <h2>Todo</h2>
        <div className="list">
          {todos.map((todo) => (
            <Todo todo={todo} deleteTodo={this.deleteTodo} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
