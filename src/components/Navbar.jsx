import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/Constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      zIndex:10,
      // width:'95vw',
      paddingRight:'15px',
      justifyContent: "space-between",
    }}
  >
    <Link to="/" sx={{ display:{ md:"flex", sm:'none' }, alignItems:{md: "center"
  } }}>
      <img src={logo} alt="Logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
