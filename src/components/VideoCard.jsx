import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
// import { border, borderRadius } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/Constants'


const videoCard = ({ video: { id: { videoId }, snippet}}) => {
  return (
    <Card sx={{
        maxWidth:{
            md:"320px",
            sm:"320px",
            xs:"320px"
        },
        background:'rgba(255, 255, 255, 0.10)',
        boxShadow:"none",
        borderRadius:'10px',
        zIndex:'0'
        // border:'1px solid #fc1503'
    }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
            <CardMedia 
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                src={snippet?.title}
                alt="Thumbnail Not Found"
                sx={{
                    width:385,
                    height:180,
                    borderBottom:'.5px solid rgba(211, 211, 211, 0.445)'
                }}
                />
        </Link>
        <CardContent
        sx={{
            backgroundColor:'transparent',
            height:'106px',
            // backdropFilter: "blur(50px)",
            zIndex:'0'
        }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
                <Typography variant='subtitle1' fontWeight='bold' color='#fff' >
                    { snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50) }
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl } >
                <Typography variant='subtitle2' fontWeight='bold' color='gray' >
                    { snippet?.channelTitle || demoChannelTitle }
                    <CheckCircle  
                        sx={{
                            fontSize:12,
                            color:'gray',
                            ml:'5px'
                        }}
                    />
                </Typography>
            </Link> 
        </CardContent>
    </Card>
  )
}

export default videoCard