import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddForm'
import { connect } from 'react-redux'

class App extends Component {
  // deleteTodo = (id) => {
  //   const todos = this.state.todos.filter(todo => {
  //     return todo.id !== id
  //   })
  //   this.setState({
  //     todos
  //   })
  // }
  // addTodo = (todo) => {
  //   todo.id = Math.random()
  //   let todos = [...this.state.todos, todo]
  //   this.setState({todos})
  // }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.props.todos} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      deleteTodo: (id) => { dispatch({type: 'DELETE_TODO', id: id})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
