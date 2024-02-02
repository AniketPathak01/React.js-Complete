import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/BenzoDude")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center p-4 m-4 text-3xl text-white bg-gray-600">
      Name : {data.name}
      <img
        className="rounded-full"
        width={300}
        src={data.avatar_url}
        alt="github img"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/BenzoDude");
  return response.json();
};
