import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Import your slice reducer


export const store = configureStore({
        // Add your reducers here
        reducer:todoReducer
 }); 


 