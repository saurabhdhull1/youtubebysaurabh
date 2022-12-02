import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos"
import { featchFromAPI } from "../utils/featchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideo] = useState(null);
  const { id } = useParams();
  // here we are extracting Title, channelId, channelTitle, viewCount, likeCount

  useEffect(() => {
    featchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    // type video means we want to get only videos not channels
    featchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((data) => setVideo(data.items));
  }, [id]);

  if (!videoDetail?.snippet) {
    return <div color="#fff" >Loading...</div>
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            <Typography color="#fff" variant="h5" p={2}>
              {title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  sx={{ color: "#fff" }}
                  variant={{ sm: "subtitle1", md: "h5" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: 12,
                      color: "gray",
                      ml: "5px",
                    }}
                  />
                </Typography>
              </Link>

              <Stack
                direction={{ sm: "column", md: "row" }}
                gap="20px"
                alignItems="center"
              >
                <Typography variant="body1" sx={{ opacity: "0.5" }}>
                  {parseInt(viewCount).toLocaleString() + " views"}
                  {/* here toLocaleString basically putting comma to make it readable  */}
                </Typography>
                <Typography variant="body1" sx={{ opacity: "0.5" }}>
                  {parseInt(likeCount).toLocaleString() + " Likes"}
                  {/* here toLocaleString basically putting comma to make it readable  */}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box
        
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          p={2}
          sx={{ color: "white", borderTop:'.5px solid rgba(211, 211, 211, 0.445)' }}
        >
        <span style={{ color: "#Fc1503" }}>Related videos</span>
        </Typography>
        <Videos videos={videos}  />
      </Box>
    </Box>
  );
};

export default VideoDetail;
