import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { featchFromAPI } from "../utils/featchFromAPI";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    featchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" },}}>
      <Box
        sx={{
          height: { sm: "auto", md: "100vh" },
          // border: "1px solid #3d3d3d",
          background:'black',
          px: { sx: 0, md: 2 },
          position:'sticky',
          top:'80px'
        }}
      >
        {/* Component */}

        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ 
            mt: 1.5, 
            color: "#fff",
            position:{md:'sticky', sm:'fixed'},
            bottom:'0px',
            padding:'5px',
            backgroundColor:'#000'
           }}
        >
          YouTube by Saurabh
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", background:'linear-gradient( to right, #000 , #fc1503 900%)'  }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#Fc1503" }}>Videos</span>
        </Typography>

        {/* Component */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
