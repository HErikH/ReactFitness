import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Typography} from '@mui/material'

function ExerciseCard({ exercise }) {
    return ( 
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}> 
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack direction='row' >
                <Button sx={{ 
                ml: '21px', 
                color: '#fff', 
                backgroundColor: '#ffa9a9',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize' }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ 
                ml: '21px', 
                color: '#fff', 
                backgroundColor: '#fcc757',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize' }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography 
            mt='11px' 
            ml='21px' 
            fontSize='22px'
            color='#000' 
            fontWeight='bold'
            pb='10px'
            textTransform='capitalize'>
                {exercise.name}
            </Typography>
        </Link>
     );
}

export default ExerciseCard;