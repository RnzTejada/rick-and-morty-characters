import React, { useState, useEffect } from "react";
//Core Imports
//Axios
import { getCharacters } from "./axios";
//Components
//Logo
import Logardo from "./components/Logo";
//CharacterCard
import CharacterCard from "./components/CharacterCard";
//React bootstrap components
import { Container, Row } from "react-bootstrap";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ info: {}, results: [] });
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async (page) => {
      console.log(page);
      setLoading(false);
      setError(null);
      let res = await getCharacters(page);
      console.log(res);
      setData({ info: res.data.info, results: res.data.results });
    };
    fetchCharacters(nextPage);
  }, [nextPage]);
  return (
    <div className="App">
      {error ? (
        <div>Error</div>
      ) : (
        <Container className="text-center">
          <Logardo clasname="text-center" />
          <Row>
            {data &&
              data.results.map((character) => (
                <CharacterCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
              ))}
          </Row>

          {loading && <p clasname="textCenter">Loading...</p>}
          {!loading && data.info.next && (
            <button
              onClick={() => {
                setNextPage(nextPage + 1);
                setLoading(true);
              }}
            >
              Load More
            </button>
          )}
        </Container>
      )}
    </div>
  );
}

export default App;
