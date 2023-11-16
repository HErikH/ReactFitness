import React from 'react';
import { Stack, Button, Typography } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
import { StackedBarChart } from '@mui/icons-material';


function Detail({ exerciseDetail }) {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        },
    ]
    return ( 
        <Stack gap='60px' sx={{ 
            flexDirection: { lg: 'row' }, 
            alignItems: 'center',
            p: '20px' }} >
            <img src={gifUrl} alt={name}  className='detail-image' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography textTransform='capitalize' variant='h5'>
                {name}
                </Typography>
                <Typography textTransform='capitalize'  variant='h6'>
                Exercises keep you strong .  {name} {' '}
                is one of the best exercises to target your {target} . 
                It will help you improve your mood and gain energy .
                </Typography>
                {extraDetail.map((item, index) => {
                    return (
                    <Stack key={index} 
                    alignItems='center' 
                    direction='row' 
                    gap='24px'>
                        <Button sx={{ width: '100px', 
                        height: '100px', 
                        backgroundColor: '#FFF2db', 
                        borderRadius: '50%' }}>
                            <img src={item.icon} alt={bodyPart} style={{ 
                            width: '50px', 
                            height: '50px' }} />
                        </Button>
                        <Typography textTransform='capitalize' variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack> )
                })}
            </Stack>
        </Stack>
     );
}

export default Detail;