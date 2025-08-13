import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogPosts, fetchCategory } from './blogThunk.js';

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        categories: [],
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = { ...state.filter, ...action.payload };
        },

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {  
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchBlogPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBlogPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchBlogPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});


export const { setFilter } = blogSlice.actions;
export default blogSlice.reducer;