import './App.css';
import { useEffect, useState, useRef } from "react";
import Json from './data.json';
import Card from './components/MyAccordion';
import MyHeader from './components/Header'


function App() {

  let data = Json.results;
  let data2 = Json;

  const [apiData, setApiData] = useState(null)
  const nameForm = useRef(null)

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

  const searchFunc = async () => {
    const searchUrl = `https://swapi.dev/api/people/?search=${nameForm.current.firstname.value}`
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
    <div className="container mt-1">
      <MyHeader />

      <div id="search_bar" className="row mt-4 text-center">
        <div className="col">
          <form ref={nameForm}>
            <input label={'first name'} name={'firstname'} placeholder="Search for specific character.." />

          </form>
          <div className="col">
            <button onClick={() => searchFunc()}>Search</button>
          </div>
        </div>
      </div>

      <div className="row">
        {apiData && apiData.results.map((item, index) => {
          return <div className="col-6"> <Card
            key={index}
            fullName={item.name}
            gender={item.gender}
            height={item.height}
            birth_year={item.birth_year}
          ></Card></div>
        })}

      </div>
      <div className="row m-3 text-center">

        {apiData && (apiData.next || apiData.previous) ? (
          <>
            <div className="col-4">
              <button className="my_button"
                disabled={!apiData.previous}
                onClick={() => getPage(apiData.previous)}
              >
                Previous page
              </button>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <button className="my_button"
                disabled={!apiData.next}
                onClick={() => getPage(apiData.next)}
              >
                Next page
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
