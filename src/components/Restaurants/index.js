import React from "react";
import PropTypes from "prop-types";
import { Box } from "grommet";
import Restaurant from "../Restaurant";

const Restaurants = ({ restaurants }) => {
  return (
    <Box direction="row" wrap gap="medium" pad="small">
      {restaurants.map((restaurant) => (
        <Restaurant data={restaurant} />
      ))}
    </Box>
  );
};

Restaurants.prototype = {
  restaurants: PropTypes.array,
};

export default Restaurants;
