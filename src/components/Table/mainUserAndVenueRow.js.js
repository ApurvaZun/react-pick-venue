import React, { useState } from "react";

import { Button, Input } from "../FormField/index";
import UserRow from "./userRow";
import UserVenueRow from "./userVenueRow";
import { findWinner } from "../../utils/findWinner";

const MainUserAndVenueRow = ({ topVenue, setTopVenue }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [selectVenue, setselectVenue] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = (venue) => {
    setCount(count + 1);
    if (count === 1) {
      setselectVenue(venue.id);
    }
  };

  const addParticipants = () => {
    if (currentUser !== "" && selectVenue !== "") {
      setUsers((prevUsers) => [
        ...prevUsers,
        { name: currentUser, venueId: selectVenue },
      ]);

      const venueWithWinner = findWinner(topVenue, selectVenue);

      setTopVenue(venueWithWinner);
      setCurrentUser("");
      setselectVenue("");
      setCount(0);
    }
  };

  return (
    <>
      <UserRow users={users} topVenue={topVenue} />

      {topVenue.length !== 0 ? (
        <div>
          <div className="row">
            <Input
              inputValue={currentUser}
              handleOnChange={setCurrentUser}
              classes="cell first"
            />
            <UserVenueRow
              handleClick={handleClick}
              selectVenue={selectVenue}
              topVenue={topVenue}
            />
          </div>

          
        </div>
      ) : null}
      <br />
      <Button handleOnClick={addParticipants} child="Add Participants" />
    </>
  );
};

export default MainUserAndVenueRow;
