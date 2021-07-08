const initialState = {
    todos: [
        {id: 1, title: 'Take out the trash', completed: false},
        {id: 2, title: 'Take out the garbage', completed: true}
    ],
};   

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            }
        case 'COMPLETE_TODO':
            const index = state.todos.findIndex(
                (task) => task.id === action.payload
            )
            state.todos[index].completed = !state.todos[index].completed
            return {
                ...state,
                todos: [...state.todos]
            }
            default:
                return state;
    }
}

export default reducer;
