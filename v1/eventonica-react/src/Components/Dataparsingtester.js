import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:9000/testAPI"); // sample
      let response = await res.json();
      setData(response.text); // parse json
    };
    fetchData();
  }, []);
  return <div>{JSON.parse(data)}</div>; //here will be shown data
};

export default Fetch;
