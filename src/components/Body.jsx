import React from "react";
import Profile from "./Profile";
import Bio from "./Bio";


function Body(){
  const bodyTest = {
    backgroundColor: 'red',
  }
  return (
    <div style={bodyTest}>
      <Profile/>
      <Bio/>
    </div>
  );
}

export default Body;
