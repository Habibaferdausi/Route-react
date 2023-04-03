import React from "react";
import { Link } from "react-router-dom";

const Singledata = (singledata) => {
  console.log(singledata);
  const { email, name, id, phone } = singledata.singledata;

  return (
    <div>
      <h1>Email:{email}</h1>
      <h2>Name : {name}</h2>
      <h3>Id:{id}</h3>
      <h4>Number:{phone}</h4>
      <p>
        <Link to={`/singledata/${id}`}>Show me details</Link>
      </p>
    </div>
  );
};

export default Singledata;
