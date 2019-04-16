import React from "react";

function Bio(){
  const bioRules = {
    border: '1px solid blue',
    height: '50vh',
    width: '50vw'
  }
  return(
    <div style={bioRules}>
      <h3>This is a bio</h3>
    </div>
  );
}

export default Bio;
