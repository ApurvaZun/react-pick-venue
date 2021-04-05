import { CLIENT_ID, CLIENT_SECRET } from "./config";

const API = "https://api.foursquare.com/v2/venues";

export const getVenues = (search) => {
  return fetch(
    `${API}/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190724&near=${search}&intent=browse&radius=10000&query=lunch&limit=3`
  ).then((res) => res.json());
};

export const getVenueDetails = (id) => {
  return fetch(
    `${API}/${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190724`
  ).then((res) => res.json());
};
