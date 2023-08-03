import React from "react";
import PropTypes from "prop-types";
import { Box, Image, Heading } from "grommet";

const Restaurant = ({ data }) => {
  const { name, tags, star, price, time, img: imgUrl } = data;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      border
      round
      pad="small"
      gap="small"
      margin="small"
      style={{
        boxShadow: isHovered ? "5px 5px 2px 1px rgba(0, 0, 0, 0.2)" : "none",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box height="200px" width="300px">
        <Image fit="cover" style={{ borderRadius: "10px" }} src={imgUrl} />
      </Box>
      <Heading margin="none" level="3">
        {name}
      </Heading>
      <Heading margin="none" level="4">
        {star}*
      </Heading>
      <Heading margin="none" level="4">
        {tags}
      </Heading>
      <Heading margin="none" level="4">
        {price}*
      </Heading>
      <Heading margin="none" level="4">
        {time}
      </Heading>
    </Box>
  );
};

Restaurant.prototype = {
  data: PropTypes.object,
};

export default Restaurant;
