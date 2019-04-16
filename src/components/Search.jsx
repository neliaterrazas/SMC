import React from "react";

function Search(){
  const styleSearch = {
    border: '2px #349cdf solid',
    borderRadius: '8px',
    marginLeft: '10px',
    fontSize: '16px',
    color: 'grey',
    marginLeft: '60vw',
    marginRight: '30px',
    fontFamily: 'monospace'


  }
  return (
    <div>
      <input style={styleSearch}  type="text" placeholder="Search"></input>
    </div>

  );
}

export default Search;
