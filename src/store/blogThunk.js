import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


// const baseUrl = 'http://localhost:5000/api/';
const baseUrl = import.meta.env.VITE_BASEURL


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

const fetchBlogPostById = createAsyncThunk(
  'blogs/fetchBlogById',
  async (id) => {
    const response = await axios.get(`${baseUrl}blog/${id}`);
    return response.data;
  }
);


const fetchRelatedPosts = createAsyncThunk(
  'blogs/fetchRelatedPosts',
  async ({category, id}) => {
    const response = await axios.get(`${baseUrl}blog/similar/${category}/${id}`);
    return response.data;
  }
);

export {fetchBlogPosts, fetchCategory, fetchBlogPostById, fetchRelatedPosts};