import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/Constants";

const ChannelCard = ({ channelDetail, marginTop, border }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        border:'.5px solid rgba(211, 211, 211, 0.445)' && border, // This border is from channelDetail component
        width: {
          md: "320px",
          sm: "356px",
        },
        height:'326px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:'auto',
        marginTop,
                
        // here we get marginTop from cardDetails as props so that this property only works in cardDetails only
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 1 ,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography Varient="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 15,
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>
          
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount).toLocaleString()}
              {" Subscribers"}
            </Typography>
          )}
          
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
