import React from 'react'
import { Box, Paper, Button, FormControl, Select, MenuItem, SelectChangeEvent, OutlinedInput, InputAdornment, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import { Link } from 'react-router-dom';
import { Paths } from '../../constants/paths';
import { TeacherTable } from '../../components/Tabel/TeacherTabel';





export const Teacher = () => {
    const [Name, setName] = React.useState('def');

    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };

    return (
        <Box>
            <Box className='flex justify-between items-center px-'>
                <Typography variant="h6" component="div">Invoice</Typography>
                <Link to={Paths.ADD_TEACHER}>
                    <Button variant='contained' size="large" color="primary" startIcon={<AddIcon />}>
                        Add  Teacher
                    </Button>
                </Link>

            </Box>


            {/* search bar */}
            <Box>
                <Paper className='flex gap-4 p-4' elevation={0.0}>
                    <FormControl sx={{ width: "25%" }}>
                        <Select
                            value={Name}
                            onChange={handleChange}
                        >
                            <MenuItem value="def" disabled >Filter</MenuItem>
                            <MenuItem value="Recent">Recent</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <OutlinedInput placeholder='Search ...'
                            startAdornment={<InputAdornment position="start">
                                <SearchIcon sx={{ color: 'action.active', mr: 1, }} />
                            </InputAdornment>}
                        />
                    </FormControl>
                    <Button variant='contained' size='large'>Search</Button>
                </Paper>
            </Box>
            {/* show Teacher */}


            <Box>
                < TeacherTable />
            </Box>


        </Box>
    )
}
