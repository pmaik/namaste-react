import React from "react";
import { Box, Image, Heading } from "grommet";
import { logoUrl, cartUrl } from "./constants";

const Header = () => {
  return (
    <Box
      direction="row"
      justify="between"
      pad="medium"
      style={{
        transition: "box-shadow 0.2s",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      hoverIndicator={{ background: "light-3" }}
    >
      <Box width="small" height="xsmall">
        <Image fit="cover" style={{ borderRadius: "10px" }} src={logoUrl} />
      </Box>
      <Box direction="row" gap="large" align="center">
        <Heading level="3">Home</Heading>
        <Heading level="3">About</Heading>
        <Heading level="3">Profile</Heading>
        <Box width="50px" height="50px">
          <Image src={cartUrl} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
