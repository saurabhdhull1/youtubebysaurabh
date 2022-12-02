import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { featchFromAPI } from "../utils/featchFromAPI";
// import { color } from "@mui/system";


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  
  const { id } = useParams(); // here we are getting Ids
  
  // console.log(channelDetail , videos)

  useEffect(() => {
    // get first channel 
    featchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    // getting channel videos 
    // order = date will arrange videos according to date
    featchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items)); 
  }, [id]);

  return (
  <Box Height="95vh" width='100vw' >
    <Box>
      <div style={{
        zIndex:10,
        background:'linear-gradient(36deg, #fc1503, #A100FFFF)',
        height:'250px'
      }} >
      </div>
      <ChannelCard channelDetail={ channelDetail } marginTop="-130px" border="0px" />
      {/* here we are passing css property as props so that this property only works in cardDetails */}
    </Box>

      <Box 
      p='2'
      sx={{
         width:'100vw',
        display:'grid',
        placeItems:'center'
      }} >
        
        <Videos videos={videos} /> 
      </Box>

    </Box>
)};

export default ChannelDetail;
