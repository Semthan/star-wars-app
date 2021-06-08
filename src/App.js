import './App.css';
import { useEffect, useState } from "react";
import Json from './data.json';

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
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>

          </div>
        )

      })}
    </div>



    /*     < div >
          {
            Data.map((item, index) => {
              return (
                <div key={index}>
                  <h1>{item.username}</h1>
                </div>
              )
    
            })
          }
        </div > */
  );
}

export default App;
