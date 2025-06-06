import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

const limit = 400;
function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async (page) => {
    const apiUrl = "http://localhost:1000/character";
    setIsLoading(true);
    const result = await axios.get(apiUrl, { params: { page, limit } });
    setCharacters(result.data.characters);
    setIsLoading(false);
  };

  const handleNext = async () => {
    const nextPage = page + 1;
    await fetchCharacters(nextPage);
    setPage(nextPage);
  };

  const handlePrev = async () => {
    const prevPage = page - 1;
    await fetchCharacters(prevPage);
    setPage(prevPage);
  };

  return (
    <div className="container">
      <div className='header'>
        <div className='header-content'>
          <img src="logo.png" alt="logo" className="logo" />
        </div>
      </div>
      {isLoading ? <div>Now Loading...</div> :
        <main>
          <div className="cards-container">
            {characters.map((character, index) => {
              return (
                <div className="card" key={character.id} >
                  <img src={character.images[0] != null ? character.images[0] : "dummy.png"} alt="character" className="card-image" />
                  <div className="card-content">
                    <h3 className="card-title">{`No.${character.id + 1}`} ｜ {character.name}</h3>
                    <p className="card-description">
                      {`デビュー作：${character.debut != null ? character.debut.appearsIn : "なし"}`}
                    </p>
                    <div className="card-footer">
                      <span className="affiliation">
                        {`所属：${character.personal?.species ?? "なし"}`}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="pager">
            <button disabled={page === 1} className="prev" onClick={handlePrev}>Previous</button>
            <span className="page-number">{page}</span>
            <span className="">{characters.id}</span>
            <button disabled={limit > characters.length} className="next" onClick={handleNext}>NEXT</button>
          </div>
        </main >}
    </div >
  );
}

export default App;
