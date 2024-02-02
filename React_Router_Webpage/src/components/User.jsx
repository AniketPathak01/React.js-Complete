import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="p-4 bg-gray-600 text-2xl text-white">User: {userid}</div>
  );
}

export default User;
