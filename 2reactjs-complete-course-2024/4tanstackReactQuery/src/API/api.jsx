import axios from "axios";

export default async function fetchPosts() {
  try {
    const res = await axios.get("https://dummyjson.com/posts");
    return res.status === 200 ? res.data.posts : [];
  } catch (error) {
    console.log(error);
  }
}
