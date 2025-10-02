import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchUsers } from "../API/api";
import { useInView } from "react-intersection-observer";

const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage, allPages) => {
        //the use of getNextPageParamis to check whether there is any next page or not
        console.log("lastpage", lastPage, allPages); //basically the use of the last page is the content we are seeing and allPages is number of pages rendered
        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
    });

  console.log(data);

  // const handleScroll = ()=>{
  //   const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1

  //   if(bottom && hasNextPage){
  //     fetchNextPage()
  //   }
  // }

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    // window.addEventListener('scroll',handleScroll)
    // return()=>window.removeEventListener('scroll',handleScroll)
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage,inView, fetchNextPage, hasNextPage]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error fetching data</div>;

  return (
    <div>
      <h1>Infinite Scroll with React Query v5</h1>

      {data?.pages?.map((page, index) => (
        <ul key={index}>
          {page.map((user) => (
            <li key={user.id} className="p-2 border-[#ccc]">
              <p>{user.login}</p>
              <img
                src={user.avatar_url}
                alt={user.login}
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      ))}

      {/* if we want loading state while its fetching the component */}
      {/* {isFetchingNextPage && <div>Loading more...</div>} */}

      <div ref={ref} className="p-5 text-center ">
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Scroll down to load more"
          : "No more users"}
      </div>
    </div>
  );
};

//college work

export default InfiniteScroll;
