import { useState, useEffect } from "react";
import axios from "axios";

export const Superhero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheros")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>Traditional Super Heros</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
