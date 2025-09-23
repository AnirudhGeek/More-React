import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPosts from "../API/api";

const FetchRQ = () => {
  const {
    data = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"], //think this as useState
    queryFn: fetchPosts, //think this as useEffect
  });

  //conditional rendering based on loading, error , and posts data
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error:{error.message||"Something went wrong!"}</p>;

  return (
    <div>
      <ul>
        {data.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchRQ;
