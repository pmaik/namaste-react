import React, { useState, useEffect } from "react";
import { Box, Button, TextInput } from "grommet";
import { Search } from "grommet-icons";
import Restaurants from "../Restaurants";
import { fetchRestaurantsData } from "../../api";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resData = await fetchRestaurantsData();
        setRestaurants(resData);
        setFilteredRest(resData);
        console.log(resData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const filterTopRestaurants = () => {
    const filtredRestaurants = filteredRest.filter(
      (restaurant) => restaurant.star > 4
    );

    setFilteredRest(filtredRestaurants);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    const filtredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredRest(filtredRestaurants);
  };

  return (
    <Box>
      <Box
        pad={{ horizontal: "small", vertical: "medium" }}
        justify="between"
        direction="row"
      >
        <Button
          primary
          label="Filter Top Rated Restaurant"
          style={{ fontWeight: "bold", background: "#f13f9b" }}
          onClick={filterTopRestaurants}
        />
        <Box>
          <TextInput
            placeholder="Search..."
            onChange={handleSearch}
            size="medium"
            dropHeight="large"
            icon={<Search />}
          />
        </Box>
      </Box>
      <Restaurants restaurants={filteredRest} />
    </Box>
  );
};

export default Body;
