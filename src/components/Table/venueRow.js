import React from "react";

const VenueRow = ({ topVenue }) => {
  return (
      <div className="row">

        <div className="cell first">participants</div>

        {topVenue.map((venue) => {
          const cell_color = venue.winner ? "cell cell_pistachio" : "cell";

          return (
            <div className={cell_color} key={venue.id}>

              <section className="table-grid__name">
                <a href={venue.url} target="_blank" rel="noreferrer">{venue.name}</a>
                {venue.winner ? <i className="fas fa-check fa-lg"></i> : null}
              </section>

              <section className="table-grid__category">{venue.category}</section>
              <p className="table-grid__ratings">
                <strong>{venue.ratings}</strong>
              </p>
              
            </div>
          );
        })}
      </div>
  );
};

export default VenueRow;
