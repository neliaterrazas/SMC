import React from 'react';




function NavButtons() {

  const navStyle = {
    border: '1px #349cdf solid',
    borderRadius: '8px',
    padding: '5px',
    textDecoration: 'none',
    color: 'gray',
    marginRight: '25px',
    height: '10vh',
    fontFamily: 'monospace',
    fontSize: '16px'

  }
  return (
    <div>
      <a style={navStyle} href="#">Home</a>
      <a style={navStyle} href="#">Notifications</a>
      <a style={navStyle} href="#">Messages</a>
    </div>


  );
}

export default NavButtons;
