import React from 'react';
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader';

function ExerciseVideos({ exerciseVideos, name }) {
    if(!exerciseVideos.length) return <Loader />

    return ( 
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} padding='20px'>
            <Typography variant='h3' mb='33px'>
                Watch <span style={{color: '#ff2625', 
                textTransform: 'capitalize'}}>{name} </span> 
                exercise videos
            </Typography>
            <Stack justifyContent='center' alignItems='center' 
                flexWrap='wrap' sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '40px', sx: '0' }
                }} > 
                {exerciseVideos && exerciseVideos.slice(0, 6).map((item) => {
                    return <a className='exercise-video' 
                    key={item.video.videoId}
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target='_blank'
                    rel='noreferrer'>
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant='h5' color='#000'>
                                {item.video.title}
                            </Typography>
                            <Typography variant='h6' color='#000'>
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                })} 
            </Stack>
        </Box>
     );
}

export default ExerciseVideos;