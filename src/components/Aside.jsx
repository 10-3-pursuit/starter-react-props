import React from "react";

function Aside(props) {
  return (

    <aside>
      <h3>Roster:</h3>
      <ol>
        {props.dogs.map((dog) => 
            dog.present ? <li>{dog.name}</li> : null
      )}
      </ol>
    </aside>
  );
}

export default Aside;
