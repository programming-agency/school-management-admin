import React from 'react'
import { Box, Button, Typography } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';
import { Paths } from '../../constants/paths';
import { TeacherTable } from '../../components/Tabel/TeacherTabel';





export const Teacher = () => {


    return (
        <Box>
            <Box className='flex justify-between items-center px-'>
                <Typography variant="h6" component="div"> Our Teacher</Typography>
                <Link to={Paths.ADD_TEACHER}>
                    <Button variant='contained' size="large" color="primary" startIcon={<AddIcon />}>
                        Add  Teacher
                    </Button>
                </Link>

            </Box>
            {/* show Teacher */}
            <Box>
                < TeacherTable />
            </Box>


        </Box>
    )
}
