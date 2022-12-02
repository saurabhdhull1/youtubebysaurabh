// import { Category } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/Constants";

// const selectedCategory = "Home";

const Sidebar = ({ selectedCategory, setselectedCategory }) => {

return(
  <Stack direction="row" sx={{
    overflow: "auto",
    background: "#000",
    height: {
      sx: "auto",
      md: "95%",
    },
    flexDirection: {
      md: "column",
    },
    borderTop:".5px solid rgba(211, 211, 211, 0.445)",
    zIndex:10,
  }}
>
  {categories.map((Category) => (
    <button
      className="category-btn"
      onClick={() => {
        setselectedCategory(Category.name);
      }}
      style={{
        background: Category.name === selectedCategory && "#FC1503",
        color: "white",
      }}
      key={Category.name}
    >
      <span
        style={{
          color: Category.name === selectedCategory ? "white" : "red",
          marginRight: "15px",
        }}
      >
        {Category.icon}
      </span>
      <span
        style={{
          opacity: Category.name === selectedCategory ? "1" : "0.8",
          // marginRight: { sx: "55px", md: "0px" },
        }}
      >
        {Category.name}
      </span>
    </button>
  ))}
</Stack>
)};

export default Sidebar;
