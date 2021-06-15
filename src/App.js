import './App.css';
import { useEffect, useState, useRef } from "react";
import Json from './data.json';
import Card from './components/MyAccordion';
import axios from 'axios'

function App() {
  //console.log(Data);

  let data = Json.results;
  let data2 = Json;

  const [apiData, setApiData] = useState(null)
  const nameForm = useRef(null)

  function fetchData() {

    fetch("http://swapi.dev/api/peopl")
      .then(res => res.json())
      .then(data => setApiData(data))
  }

  const getPage = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setApiData(data);
  }

  const searchFunc = async (searchUrl) => {
    searchUrl = `https://swapi.dev/api/people/?search=${nameForm.current.firstname.value}`
    console.log(nameForm.current.firstname.value)
    const response = await fetch(searchUrl);
    const data = await response.json();
    setApiData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  //apiData && apiData.results
  return (
    <div className="container m-5">

      <form ref={nameForm}>
        <input label={'first name'} name={'firstname'} />
      </form>
      <button onClick={() => searchFunc()}>gett value</button>

      <div className="row">
        {data.map((item, index) => {
          return <div className="col-6"> <Card
            key={index}
            fullName={item.name}
            gender={item.gender}
            height={item.height}
            birth_year={item.birth_year}
          ></Card></div>
        })}

      </div>
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
