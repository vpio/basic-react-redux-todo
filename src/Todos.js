import React from 'react'
import {connect} from 'react-redux'

const Todos = (props) => {

  const todoList = props.todos.length ? (
    props.todos.map(todo => {
      console.log(props.deleteTodo)
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => props.deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p>You have no todo's left, yay</p>
  )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
      deleteTodo: (id) => { dispatch({type: 'DELETE_TODO', id: id})}
  }
}

export default connect(undefined, mapDispatchToProps)(Todos)