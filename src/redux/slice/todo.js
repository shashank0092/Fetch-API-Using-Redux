import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })

            .addCase(fetchTodos.pending, (state, action) => {
                state.isLoading = true;
            })

            .addCase(fetchTodos.rejected, (state, action) => {
                console.log(action.payload, "error");
                state.isError = true;
            });
    }
});

export default todoSlice.reducer;
