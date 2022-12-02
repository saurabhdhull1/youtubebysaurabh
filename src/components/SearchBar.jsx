import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }

  }

  return(
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
      borderRadius: 20,
      border: "1px solid #e3e3e3",
      pl: 2,
      boxShadow: "none",
      // here we can also give properties for specific width
      
    }}
  >
    <input
      type="text"
      sx={{ 
        height:"100%",
        ml: { md:2 },
      }}
      placeholder='Search videos here'
      className="search-bar"
      name="name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value) }
    />
    <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
      <Search />
    </IconButton>
  </Paper>
  )
};

export default SearchBar;
