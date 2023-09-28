import { createSlice } from "@reduxjs/toolkit";

const initialState = [
        {id: "1", title: "Post 1", content: "This is the first post"},
        {id: "2", title: "Post 2", content: "This is the second post"}
]

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;