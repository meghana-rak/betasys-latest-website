import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL



const postInquiry = createAsyncThunk(
  'post/postInquiry',
  async (payload) => {
    console.log("thunk paylod", payload)
    const response = await axios.post(`${baseUrl}inquiry/add`, payload, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data;
  }
)


export { postInquiry };