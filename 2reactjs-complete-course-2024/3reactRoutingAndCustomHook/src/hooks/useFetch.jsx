import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  //here we are creating a data fetching URL and other data related to that

  //we want to call the API here and return back the data to the component where we are using this custom hook
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();

      if (result) {
        setData(result);
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
   }

  useEffect(() => {
    fetchData();
  }, [url]);

  return{
    data,loading,error
  }
}

//practiced more useFetch custom hook

// power cut in my area😭

export default useFetch;


//useFetch prac
//routing