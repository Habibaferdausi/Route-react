import React from "react";
import { useLoaderData } from "react-router-dom";
import Singledata from "./Singledata";

const About = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      <h2>This is about page : {data.length}</h2>
      <div>
        {data.map((singledata) => (
          <Singledata key={singledata.id} singledata={singledata}></Singledata>
        ))}
      </div>
    </div>
  );
};

export default About;
