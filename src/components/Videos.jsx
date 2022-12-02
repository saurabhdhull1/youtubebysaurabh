import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {

  if(!videos?.length) return <div color="#fff" >Loading...</div>

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2} >
      {videos.map( (item, index) => (
        <Box key={index} sx={{
          objectFit:'contain',
          width:'320px',
          borderRadius:'10px',
        }} > 
          {item.id.channelId && <ChannelCard channelDetail={ item } /> }
          {item.id.videoId && <VideoCard video={ item } /> }
        </Box>
      ))}
    </Stack>
  )
};

export default Videos;
