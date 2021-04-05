import React, { useEffect, useState } from 'react';
import './App.css';

const CLIENT_ID = 'KQHHVUMHYAYMDYVQPDKXI0ZPKUSKV5GGBR5UN3A4BD55MLGB';
const CLIENT_SECRET = '4XN2EQQ4ZXGENLVHEOZ2MFAWPZJFCJXMMSQPDO5LQDAVL231';

const App = () => {

  const [topVenue, setTopVenue] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("blank");


  useEffect(() => {
    fetch(`https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190724&near=${search}&intent=browse&radius=10000&query=lunch&limit=3`)
      .then(res => res.json())
      .then(res => {
        const venues = res.response.venues;
        venues.forEach(element => {
        fetch(`https://api.foursquare.com/v2/venues/${element.id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190724`)
          .then(res => res.json())
          .then(res => {
             const venueResponse = res.response.venue;
             setTopVenue(prevTopVenue => [...prevTopVenue, {id: element.id}]);           
            })
        });

      })

  }, [search]);

  return (
    <div className="App">
      <h3>Lunchplace</h3>
      <div className="input__container">
        <input 
          type="text" 
          value={query} onChange={(event) => setQuery(event.target.value)} />
        <button type="submit" className="search__button" onClick={() => setSearch(query)}>Search</button>
      </div>
      
      <div className="display-block">
        <div className="display-block_header">
        <div className="display-block_list">participants</div>
          {topVenue && topVenue.map(venue => {
            return(
              <div key={venue.id} className="display-block_list">{venue.id}</div>
            )
          })}
        </div>
        <div className="display-block_add">
          <button className="display-block_button">Add Participants</button>
        </div>
      </div>

    </div>
  )
}

export default App;
