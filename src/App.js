import './App.css';
import { useEffect, useState } from "react";
import Json from './data.json';
import Card from './components/MyAccordion';
import axios from 'axios'

function App() {
  //console.log(Data);

  //let data = Json.results;
  let data2 = Json;

  const [apiData, setApiData] = useState(null)

  function fetchData() {

    fetch("http://swapi.dev/api/people")
      .then(res => res.json())
      .then(data => setApiData(data))

  }

  const getPage = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setApiData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container m-3">
      {apiData && apiData.results.map((item, index) => {
        return <Card
          key={index}
          fullName={item.name}
          gender={item.gender}
          height={item.height}
          birth_year={item.birth_year}
        ></Card>
      })}

      {apiData && (apiData.next || apiData.previous) ? (
        <div>
          <button
            disabled={!apiData.previous}
            onClick={() => getPage(apiData.previous)}
          >
            Previous page
          </button>
          <button
            disabled={!apiData.next}
            onClick={() => getPage(apiData.next)}
          >
            Next page
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
