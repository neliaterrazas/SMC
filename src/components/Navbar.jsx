
import React from "react";
import Search from "./Search";
import Tweet from "./Tweet";
import NavButtons from "./NavButtons";





function Navbar(){
  const test = {
    display: 'flex',
    justifyContent: 'space-around',
  }
  return (
    <div style={test}>
        <NavButtons/>
        <Search/>
        <Tweet/>
      <hr/>
    </div>


  );
}

export default Navbar;
