import "./App.css";
import Map from "./components/Map";
import Hotel from "./components/Hotel";
import React, { useEffect, useState } from "react";
function App() {
  const [restaurant, setRest] = useState([]);
  const [id, setId] = useState();
  const [search, setSearch] = useState("");
  const [get, getQuery] = useState([0, ""]);

  useEffect(() => {
    getRestaurants();
  }, [get]);

  const getRestaurants = async () => {
    if (!(get[0] === 0 && get[1] === "")) {
      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?entity_id=${get[0]}&entity_type=city&q=${get[1]}&count=10`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "user-key": "01674c59601696499799390356e2e66c",
          },
        }
      );
      const data = await response.json();
      setRest(data.restaurants);
    }
  };

  const updateID = (e) => {
    setId(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    getQuery([id, search]);
  };

  return (
    <div className="App">
      <div className="appp">
        <form className="searchBar" onSubmit={getSearch}>
          <div>
            <select
              id="select_id"
              className="city form-control"
              onChange={updateID}
            >
              <option value="0" hidden>
                Select City
              </option>
              <option value="3">Bengaluru</option>
              <option value="2">Mumbai</option>
              <option value="1">Delhi</option>
            </select>
            <button id="getMessage" className="search-btn">
              Search
            </button>
          </div>
        </form>
      </div>

      {restaurant.map((rest) => (
        <Hotel
          name={rest.restaurant.name}
          locality={rest.restaurant.location.locality}
          address={rest.restaurant.location.address}
          cost={rest.restaurant.average_cost_for_two}
          rating={rest.restaurant.user_rating.aggregate_rating}
          votes={rest.restaurant.user_rating.votes}
          rating_color={rest.restaurant.user_rating.rating_obj.bg_color.type}
        />
      ))}
      <Map />
    </div>
  );
}

export default App;
