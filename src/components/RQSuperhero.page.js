import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};

export const RQSuperheros = () => {
  const { isLoading, data, isError, error,isFetching} = useQuery(
    "super-heroes",
    fetchSuperHeros,
  );
  console.log({isLoading,isFetching})

  if (isLoading) {
    <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ SuperHeros</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
