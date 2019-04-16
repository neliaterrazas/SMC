import React from 'react';




function NavButtons() {

  const navStyle = {
    border: '1px #cccccc solid',
    padding: '5px',
    textDecoration: 'none',
    color: 'gray'
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
