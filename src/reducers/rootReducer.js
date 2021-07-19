const initState = {
  todos: [
    {id: 1, title: 'a', content: 'asdf'},
    {id: 2, title: 'b', content: 'squid'},
    {id: 3, title: 'c', content: 'ward'},
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_TODO') {
    let newTodos = state.todos.filter(todo => todo.id !== action.id)

    return {
      ...state,
      todos: newTodos
    }
  }
  return state;
}

export default rootReducer