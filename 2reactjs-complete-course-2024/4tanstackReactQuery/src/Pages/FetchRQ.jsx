import React, { useState } from "react";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import fetchPosts, { deletePost, updatePost } from "../API/api";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const queryClient = useQueryClient();

  const {
    data = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", pageNumber], //think this as useState
    queryFn: () => fetchPosts(pageNumber), //think this as useEffect
    // gcTime:10 ,   // cache data will be deleted after every 10milliseconds
    // staleTime : 5000    // after every 5 seconds data will become stale data
    // refetchInterval: 1000, //sends request to the server every 1 second to refetch the data
    // refetchIntervalInBackground: true, // if its true then we if are doing something in other tabs then fetching will not stop and the request still continues to go into the server
    placeholderData: keepPreviousData, //it will render you the same page you are already in until the response came from the api
  });

  //mutation to delete the post
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      //console.log(data,id)   //data is like convermation like success code and id is the id in which we are performing operations
      queryClient.setQueryData(["posts", pageNumber], (curElem) => {
        return curElem?.filter((post)=>post.id !== id)    //i.e the id which matches the postId remain it as it is here and return all the other i.e it is deleting/not showing us the same id one 
      });
    },
  });

  //mutation to update the post
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apiData, postId) => {
      //console.log(data,id)   //data is like confermation like success code and id is the id in which we are performing operations
      queryClient.setQueryData(["posts", pageNumber], (postData) => {
        return postData?.map((curPost)=>{
          return curPost.id === postId ? {...curPost,title:apiData.data.title} :curPost
        })
      });
    },
  });

  //conditional rendering based on loading, error , and posts data
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error:{error.message || "Something went wrong!"}</p>;

return (
  <div>
    <ul>
      {data.map((curElem) => {
        const { id, title, body } = curElem;
        return (
          <li key={id}>
            <NavLink to={`/rq/${id}`}>
              <p>{title}</p>
              <p>{body}</p>
              <br />
            </NavLink>

            <button
              onClick={() => deleteMutation.mutate(id)}
              className="bg-green-300 text-white w-fit h-fit px-2 py-1"
            >
              Delete
            </button>

            <button
              onClick={() => updateMutation.mutate(id)}
              className="bg-green-300 text-white w-fit h-fit px-2 py-1"
            >
              Update
            </button>
          </li>
        );
      })}
    </ul>

    <div className="flex gap-10 justify-center items-center">
      <button
        disabled={pageNumber === 0 ? true : false}
        onClick={() => setPageNumber((prev) => prev - 3)}
        className="bg-green-300 text-white w-fit h-fit px-2 py-1"
      >
        Prev
      </button>
      <h2>{pageNumber / 3}</h2>
      <button
        onClick={() => setPageNumber((prev) => prev + 3)}
        className="bg-green-300 text-white w-fit h-fit px-2 py-1 hover:cursor-pointer"
      >
        Next
      </button>
    </div>
  </div>
);

};

export default FetchRQ;
