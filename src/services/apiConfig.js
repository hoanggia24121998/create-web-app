import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

// Get all posts
export const getAllPosts = async () => {
  const { data } = await axios.get('http://20.78.92.240/blogs')
  return await data
}

// Get post detail
export const getPostDetails = async (id) => {
  const { data } = await axios.get(`http://20.78.92.240/blogs/${id}`)
  return await data
}

// Add new post

// Update a post

// Delete a post
export const deleteAPost = async (id) => {
  const { data } = await axios.delete(`http://20.78.92.240/blogs/${id}`)
  return await data
}