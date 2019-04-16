import React from "react";

function Tweet(){
  const styleTweet = {
    borderRadius: '8px',
    border: '2px #349cdf solid',
    color: 'grey',
    fontSize: '16px',
    fontFamily: 'monospace'
  }

  return (
    <div >
      <button style={styleTweet} type="button">Tweet</button>
    </div>

  );
}

export default Tweet;
