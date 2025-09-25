import React, { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import fetchPosts from "../API/api";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

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
    placeholderData:keepPreviousData  //it will render you the same page you are already in until the response came from the api
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
            </li>
          );
        })}
      </ul>

      <div className="flex gap-10 justify-center items-center">
        <button
          disabled={pageNumber===0?true :false}
          onClick={() => setPageNumber((prev) => prev - 3)}
          className="bg-green-300 text-white w-fit h-fit px-2 py-1"
        >
          Prev
        </button>
        <h2>{pageNumber/3}</h2>
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
