import { useState } from "react";
import people from "./data.js";
import { FaBeer } from 'react-icons/fa';

const App = () => {

  const [person, setPerson] = useState(0);

  const {name, job, image, text} = people[person];


  function prevPerson(){
    setPerson((currentIndex) =>{
      const newIndex = currentIndex -1;
      if(newIndex < 0){
        return people.length -1;
      }
      return newIndex;
    });
  }

  function nextPerson(){
    setPerson((currentIndex) =>{
      const newIndex = currentIndex + 1;
      if(newIndex > people.length -1){
        return 0;
      }
      return newIndex;
    })
  }

function randomReview(){
  let newReview = Math.floor(Math.random() * people.length);
  if(newReview == people.length){
    newReview = people.length + 1;
  }
  setPerson(newReview);

}



  return(
    <>
    <FaBeer className='beer' />
    <main style={{backgroundColor: "whitesmoke"}}>
      <h1>{name}</h1>
      <h2>{job}</h2>
      <img  className="img" style={{width: "200px", height: "200px"}} src={image} alt={name}></img>
      <p className="text">{text}</p>
      <button onClick={nextPerson}>Next</button><button onClick={prevPerson}>Prev</button>
      <button onClick={randomReview}>Random</button>
      
    </main>
    </>
  );
};
export default App;
