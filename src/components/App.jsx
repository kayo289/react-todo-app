import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  // データ保存
  handleAdd(e){
   // console.log(e.target.title.value);
    e.preventDefault();
    this.state.todos.push({title: e.target.title.value, done: false});
    this.setState({todo: this.state.todos});
    e.target.title.value = '';
  }

  // 削除
  handleRemove(i){
    this.state.todo.splice(i, 1);
    this.setState({todos: this.state.todos});
  }

  // 完了
  handleDone(i){
    this.state.todos[i].done = true;
    // const todo_copy = this.state.todos.slice();
    // todo_copy[i].done = true;
    this.setState({todos: this.state.todos});
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todos}　handleRemove={this.handleRemove} handleDone={this.handleDone}/>
      </div>
    );
  }
}