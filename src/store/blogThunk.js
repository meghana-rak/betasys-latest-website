import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const baseUrl = 'http://localhost:5000/api/';


const fetchCategory = createAsyncThunk(
  'blogs/fetchCategory',
  async () => {
    const response = await axios.get(`${baseUrl}category/active`);
    return response.data;
  }
);

 const fetchBlogPosts = createAsyncThunk(
  'blogs/fetchBlogs',
    async ({search, addedFor='company', category, page, limit}) => {
    const response = await axios.get(`${baseUrl}blog/filter?search=${search}&addedFor=${addedFor}&category=${category}&page=${page}&limit=${limit}`);
    return response.data;
    }
);


export {fetchBlogPosts, fetchCategory};