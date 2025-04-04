import { createSlice, nanoid } from "@reduxjs/toolkit";
// In Redux, a reducer is a pure function that determines changes to an application's state. It takes the current state and an action as arguments and returns a new state. Reducers are one of the core building blocks of Redux and play a crucial role in managing the state of an application.


const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}
// Create a Slice of the Redux Store
// A slice is a collection of Redux reducer logic and actions for a single feature of your app. It contains the initial state, the reducers, and the actions that can be dispatched to modify that state.

function sayHello() {
    console.log("Hello world")
}
//create Slice 
export const todoSlice = createSlice({
    name: "todo",// slice name 
    initialState,// initial state of the slice
    // reducers is a collection of property (addTodo) and function (sayHello).
    reducers: {
        // addTodo:sayHello,//method reference.
        // Redusx toolkit allow us to create medthod defnition while in the context API does not allow us to create method defnition. allow us to only method reference.
        // state and action two properties acces in the reducer function.
        addTodo: (state, action) => {// here state  is the initial state of todos and action is the action object that is dispatched to the reducer.
            const todo = {
                id: nanoid(),// nanoid() method is used to generates a unique id for each todo item
                text: action.payload,// payload is the data passed to the action creator
            }
            state.todos.push(todo);// push the todo object to the todos array in the state.
        },

        removeTodo:(state, action) => {
            state.todos=state.todos.filter((todo)=> todo.id !==action.payload)// filter the todos array to remove the todo item with the id passed in the action payload.
        },
        updateTodo:(state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id); // find the todo by id
            if (todo) {
                todo.text = action.payload.text; // update the text of the found todo
            }
        }
    }
    });
// export the actions created by the slice
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;