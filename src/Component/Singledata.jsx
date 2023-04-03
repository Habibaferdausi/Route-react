import React from "react";
import { Link } from "react-router-dom";
import "./SingleData.css";

const Singledata = (singledata) => {
  console.log(singledata);
  const { email, name, id, phone } = singledata.singledata;

  return (
    <div className="about">
      <p>Email:{email}</p>
      <p>Name : {name}</p>
      <p>Id:{id}</p>
      <p>Number:{phone}</p>
      <p>
        <Link to={`/singledata/${id}`}>Show me details</Link>
      </p>
    </div>
  );
};

export default Singledata;
