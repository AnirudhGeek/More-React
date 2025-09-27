import axios from "axios";

export default async function fetchPosts(pageNumber) {
  try {
    const res = await axios.get(`https://dummyjson.com/posts?limit=3&skip=${pageNumber}`);
    return res.status === 200 ? res.data.posts : [];
  } catch (error) {
    console.log(error);
  }
}


//to fetch the individual data
export const fetchInvPost =async (id) =>{
  try {
    const res = await axios.get(`https://dummyjson.com/posts/${id}`)
    return res.status ===200 ? res.data : [ ]
  } catch (error) {
    console.log(error)
  }
}

//to delete post 
export const deletePost = async(id)=>{
  return await axios.delete(`https://dummyjson.com/posts/${id}`)
}

//to update the post
export const updatePost = async(id)=>{
  return await axios.patch(`https://dummyjson.com/posts/${id}`,{title : "I have updated"})
}