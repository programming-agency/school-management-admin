import React from 'react'
import { Box, Button, Typography } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Paths } from '../../constants/paths';
import { StudentTable } from '../../components/Tabel/StudentTables';




export const Student = () => {

    return (
        <Box>
            {/* title */}
            <Box>
                <Box className='flex justify-between items-center px-'>
                    <Typography variant="h6" component="div">Our Student</Typography>
                    <Link to={Paths.ADD_STUDENT}>
                        <Button variant='contained' size="large" color="primary" startIcon={<AddIcon />}>
                            Add Student
                        </Button>
                    </Link>
                </Box>
            </Box>


            <Box>
                <StudentTable />
            </Box>

        </Box>
    )
}
