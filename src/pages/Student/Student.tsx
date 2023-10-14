import React from 'react'
import { Box, Paper, Button, FormControl, Select, MenuItem, SelectChangeEvent, OutlinedInput, InputAdornment, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Tables } from '../../components/Tabel/Tables';
import { Link } from 'react-router-dom';
import { Paths } from '../../constants/paths';


export const Student = () => {
    const [Name, setName] = React.useState('def');

    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };
    return (
        <Box>
            {/* title */}
            <Box>
                <Box className='flex justify-between items-center px-'>
                    <Typography variant="h6" component="div">Invoice</Typography>
                    <Link to={Paths.ADD_STUDENT}>
                        <Button variant='contained' size="large" color="primary" startIcon={<AddIcon />}>
                            Add Student
                        </Button>
                    </Link>
                </Box>
            </Box>

            <Box>
                {/* search bar */}
                <Paper className='flex gap-4 p-4' elevation={0.0}>
                    <FormControl sx={{ width: "25%" }}>
                        <Select
                            value={Name}
                            onChange={handleChange}
                        >
                            <MenuItem value="def" disabled >Filter</MenuItem>
                            <MenuItem value="Recent">ONE</MenuItem>
                            <MenuItem value="Recent">TWO</MenuItem>
                            <MenuItem value="Recent">THREE</MenuItem>
                            <MenuItem value="Recent">FOUR</MenuItem>
                            <MenuItem value="Recent">FIVE</MenuItem>
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
            <Box>
                <Tables />
            </Box>

        </Box>
    )
}
