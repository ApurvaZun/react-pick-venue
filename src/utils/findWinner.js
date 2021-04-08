export const findWinner = (topVenue, selectVenue) => {
    
    const copyVenue = topVenue.map((venue) => {
        if (venue.id === selectVenue) {
          return { ...venue, vote: venue.vote + 1 };
        } else {
          return venue;
        }
      });

      const tempWinnerVenueId = copyVenue.reduce((prev, current) =>
        prev.vote > current.vote ? prev : current
      );

      const venueWithWinner = copyVenue.map((venue) => {
        if (venue.id === tempWinnerVenueId.id) {
          return { ...venue, winner: true };
        } else {
          return { ...venue, winner: false };
        }
      });

      return venueWithWinner;
}

