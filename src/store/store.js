import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todo"

export const store = configureStore({
    reducer: {
        todo,
    }
})