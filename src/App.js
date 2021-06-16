import './App.css';
import { useEffect, useState, useRef } from "react";
import Json from './data.json';
import Card from './components/MyAccordion';
import { Button } from 'react-bootstrap'
import MyHeader from './components/Header'
import Header from './components/Header';

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
      <Header />
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
      <div className="row border">

        {apiData && (apiData.next || apiData.previous) ? (
          <>
            <div className="col-6">
              <Button variant="outline-success"
                disabled={!apiData.previous}
                onClick={() => getPage(apiData.previous)}
              >
                Previous page
              </Button>
            </div>
            <div className="col-6">
              <Button variant="outline-success"
                disabled={!apiData.next}
                onClick={() => getPage(apiData.next)}
              >
                Next page
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
