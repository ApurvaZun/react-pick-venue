import React, { useState } from "react";

const AddButton = ({ topVenue, setTopVenue }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [selectVenue, setselectVenue] = useState("");

  const addParticipants = () => {

    setUsers((prevUsers) => [
      ...prevUsers,
      { name: currentUser, venueId: selectVenue },
    ]);

    const copyVenue = topVenue.map((venue) => {
      if (venue.id === selectVenue) {
        return { ...venue, vote: venue.vote + 1 };
      } else {
        return venue;
      }
    });

    const tempWinnerVenueId = copyVenue.reduce((prev, current) => (prev.vote > current.vote) ? prev : current);

    const venueWithWinner = copyVenue.map(venue => {
        if (venue.id === tempWinnerVenueId.id) {
            return { ...venue, winner: true };
          } else {
            return venue;
          }
    })
    console.log(tempWinnerVenueId);
    setTopVenue(venueWithWinner);
  };

  return (
    <div className="display-block_users">
      <div className="display-block_displayUsers">
        {users &&
          users.map((user, i) => (
            <tr>
              <td>
                <p>{user.name}</p>
              </td>
              {topVenue.map((venue) => (
                <td>{venue.id === user.venueId ? "Yes" : "No"}</td>
              ))}
            </tr>
          ))}

        <div className="display-block_userInput">
          <input
            type="text"
            value={currentUser}
            onChange={(event) => setCurrentUser(event.target.value)}
          />
        </div>
        <div></div>
        {topVenue.map((venue) => (
          <div>
            <div className="display-block_venueInput">
              <input
                type="radio"
                name="optVenue"
                value={venue.id}
                onChange={(event) => setselectVenue(event.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="display-block_add" onClick={addParticipants}>
        Add Participants
      </button>
    </div>
  );
};

export default AddButton;
