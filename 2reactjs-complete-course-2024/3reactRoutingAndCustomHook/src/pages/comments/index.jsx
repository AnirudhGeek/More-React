import useFetch from "../../hooks/useFetch";

function CommentList() {
  const { data, loading } = useFetch("https://dummyjson.com/comments");
  if (loading) return <h1>Fetching comments! Please wait</h1>;

  return (
    <div>
      <h1>Comments List page</h1>
      <ul>
        {data?.comments?.length > 0
          ? data?.comments.map((commnentItem) => (
              <div>
                <label>{commnentItem.body}</label>
                <p>{commnentItem.likes}</p>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default CommentList;
