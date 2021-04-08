import React, { useEffect, useState } from "react";

import { getVenueDetails, getVenues } from "./api/fetchAPI";
import MainUserAndVenueRow from "./components/Table/mainUserAndVenueRow.js";
import { Button, Input } from "./components/FormField/index";
import "./App.css";
import "./style/table.css";
import VenueRow from "./components/Table/venueRow";

const App = () => {
  const [topVenue, setTopVenue] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.trim() !== "") {
      setTopVenue([]);
      getVenues(search).then((res) => {
        const venues = res.response.venues;
        venues.forEach((element) => {
          getVenueDetails(element.id)
            .then((res) => {
              const venueResponse = res.response.venue;
              setTopVenue((prevTopVenue) => [
                ...prevTopVenue,
                { id: element.id, name:element.name, 
                  category: venueResponse.categories[0].name, 
                  url: venueResponse.url,
                  ratings: venueResponse.rating,
                  vote:0, winner: false },
              ]);
            });
        });
      });
    }
  }, [search]);

  const handleClick = () => {
    setSearch(query);
  };

  return (
    <section className="App">
      <h3>Lunchplace</h3>
      <section className="input-container">
        <Input inputValue={query} handleOnChange={setQuery} />
        <Button query={query} handleOnClick={handleClick} child="Search" />
      </section>

      {topVenue.length !== 0 ? (
        <article className="table-grid">
          <VenueRow topVenue={topVenue} />
          <MainUserAndVenueRow topVenue={topVenue} setTopVenue={setTopVenue} />
        </article>
      ) : null}
    </section>
  );
};

export default App;
