import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErrMsg(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText ? res.statusText : "Not Found");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrMsg(err.message);
      });
  }, [url]);
  return { data, isLoading, errMsg };
};

export default useFetch;
