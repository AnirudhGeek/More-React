import { useEffect, useState } from "react";

export function Users() {
  const [usersList, setUsersList] = useState([]);
  const [pending, setPending] = useState(true);

  async function fetchAllUsers() {
    try {
      setPending(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();
      console.log(result);
      if (result.users) {
        setUsersList(result.users);
      } else {
        setUsersList([]);
      }
      setPending(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  console.log(usersList);

  if(pending){
    return(
        <div>
            No users found.
        </div>
    )
  }

  return (
    <div>
      <h1>All Users Lists</h1>

      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((userItem) => (
            <li key={userItem.id}>
              {userItem.firstName} {userItem.lastName}
            </li>
          ))
        ) : (
          <li>No users found in the list</li>
        )}
      </ul>
    </div>
  );
}
