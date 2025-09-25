import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchInvPost } from "../../API/api";
import { NavLink, useParams } from "react-router-dom";

const FetchInd = () => {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts",id],
    queryFn: () => fetchInvPost(id),
  });
  console.log(data);
  //conditional rendering based on loading, error , and posts data
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error:{error.message || "Something went wrong!"}</p>;
  return (
    <div>
        <ul>
            <li>
                <p>{data.id}</p>
                <p>{data.title}</p>
                <p>{data.body}</p>
            </li>
        </ul>
        <NavLink to={'/rq'}>
            <button className="bg-green-300 text-white w-fit h-fit - px-2 py-1">Go back</button>
        </NavLink>
    </div>);
};

export default FetchInd;
