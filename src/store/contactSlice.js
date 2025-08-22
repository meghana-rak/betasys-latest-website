import { createSlice } from "@reduxjs/toolkit";
import { postInquiry } from "./contactThunk";
import toast from "react-hot-toast";



export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contactData: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postInquiry.pending, (state) => {
                state.loading = true
            })
            .addCase(postInquiry.fulfilled, (state, action) => {
                state.loading = false;
                state.contactData = action.payload
                toast.success(action.payload.message || "contact submitted successfully!");
            })
            .addCase(postInquiry.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }

})

export default contactSlice.reducer