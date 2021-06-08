import './App.css';
import { useEffect, useState } from "react";
import Json from './data.json';
import Card from './components/Card';

function App() {
  //console.log(Data);

  let data = Json.results;

  /*   const [results, setResults] = useState([])
  
    function fetchData() {
  
      //const data = './data.json'
      fetch(Data
        , {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      )
        .then((res) => res.json())
        .then((data) => setResults(data.results))
    } */

  /*   function fetchData() {
  
      fetch("https://swapi.dev/api/people/")
        .then(res => res.json())
        .then(data => setResults(data.results))
    }
   */
  /*   useEffect(() => {
      fetchData();
    }, []); */


  return (
    <div className="container m-3">
      {data.map((item, index) => {
        return <Card
          key={index}
          fullName={item.name}
        ></Card>
      })}

    </div>
  );
}

export default App;
