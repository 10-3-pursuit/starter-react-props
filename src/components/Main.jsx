import React from "react";

const getAverage = (dogArray) => {
  let sum = 0;
  for (let dog of dogArray) {
    sum += parseInt(dog.grade);
  }
  return (sum / dogArray.length).toFixed(2);
};



function Main(props) {
  const average = getAverage(props.dogs)
  return (
    <main>
      <h2>Class Average:</h2>
      <h3>Notable performances and grades:</h3>
    
      <ul>
      {dogs.map((dog) => {
    return (
      <li key={dog.name}>
        <span>{dog.name}:</span> {dog.notes}
        <span>&nbsp; Grade:</span> {dog.grade}
      </li>
    );
  })}
      </ul>
    </main>
  );
}

export default Main;
