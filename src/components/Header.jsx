import React from "react";

function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>title: {props.name}</h1>
      <h2></h2>
    </header>
  );
}

export default Header;
