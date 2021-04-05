import React, { useEffect, useState } from "react";

import { getVenueDetails, getVenues } from "./api/fetchAPI";
import AddButton from "./components/AddButton";
import "./App.css";

const App = () => {
  const [topVenue, setTopVenue] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("blank");

  useEffect(() => {
    getVenues(search)
      .then((res) => {
        const venues = res.response.venues;
        venues.forEach((element) => {
          getVenueDetails(element.id)
            .then((res) => {
              const venueResponse = res.response.venue;
              setTopVenue((prevTopVenue) => [
                ...prevTopVenue,
                { id: element.id, vote:0, winner: false },
              ]);
            });
        });
      });
  }, [search]);

  return (
    <div className="App">
      <h3>Lunchplace</h3>
      <div className="input__container">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="submit"
          className="search__button"
          onClick={() => setSearch(query)}
        >
          Search
        </button>
      </div>

      <div className="display-block">
        <div className="display-block_header">
          <div className="display-block_list">participants</div>
          {topVenue &&
            topVenue.map((venue) => {
              return (
                <div key={venue.id} className="display-block_list">
                  <p>{venue.id}</p><span>{venue.winner ? 'Winner' : null}</span>
                </div>
              );
            })}
        </div>

        <AddButton topVenue={topVenue} setTopVenue={setTopVenue} />
      </div>
    </div>
  );
};

export default App;
