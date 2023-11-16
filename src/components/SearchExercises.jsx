import React, { useEffect, useState} from 'react';
import { Box, Stack, Button, TextField, Typography } from '@mui/material'
import { fetchData, exercisesOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        async function fetchExercises() {
            const bodyPartsData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
            exercisesOptions
            )
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercises()
    }, [])
    async function handleSearch() {
        if (search) {
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                exercisesOptions
            )
        const searchedExercises = exercisesData.filter((exercise) => {
            return exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search) 
        })
        setSearch('')
        setExercises(searchedExercises)
      }
    }
    return ( 
        <Stack alignItems='center' mt='37px' 
        justifyContent='center' padding='20px'>

            <Typography fontWeight='700' mb='50px' textAlign='center'
            sx={{
                fontSize: { lg: '44px', xs: '30px' }
            }}>
            Awesome Exercises You <br />
            Should Know
            </Typography>

            <Box position='relative' mb='72px'>
            <TextField 
            sx={{
                input: { 
                    fontWeight: 700,
                    border: 'none',
                    borderRadius: '4px'
                },
                width: { lg: '800px', md: '500px', xs: '350px' },
                backgroundColor: '#FFF',
                borderRadius: '40px'
            }}
            height='76px'
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises'
            type='text' />
            <Button className='search-btn'
            sx={{
                position: 'absolute',
                right: 0,
                width: { lg: '175px', xs: '80px' },
                height: '56px',
                fontSize: { lg: '20px', xs: '14px' },
                backgroundColor: '#FF2625',
                color: '#FFF',
                textTransform: 'none',
            }}
            onClick={handleSearch} >
            Search
            </Button>
            </Box>

            <Box sx={{width: '100%', position: 'relative', padding: '20px'}}>
                <HorizontalScrollbar data={bodyParts}
                bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
            </Box>
        </Stack>
     );
}

export default SearchExercises;