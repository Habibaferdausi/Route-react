import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const singledata = useLoaderData();
  console.log(singledata);
  return (
    <div>
      <h2>I'm your friend</h2>
      <p>Name:{singledata.name}</p>
      <p> Phone: {singledata.phone}</p>
    </div>
  );
};

export default FriendDetails;
