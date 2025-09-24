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
    // gcTime:10 ,   // cache data will be deleted after every 10milliseconds
    // staleTime : 5000    // after every 5 seconds data will become stale data
    refetchInterval : 1000,  //sends request to the server every 1 second to refetch the data
    refetchIntervalInBackground : true // if its true then we if are doing something in other tabs then fetching will not stop and the request still continues to go into the server
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
