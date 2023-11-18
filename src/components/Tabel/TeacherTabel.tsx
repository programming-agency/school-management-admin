import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableCell, TableBody, Box, Avatar, Paper, FormControl, Select, MenuItem, OutlinedInput, InputAdornment, Button, SelectChangeEvent, } from '@mui/material'
import axios from 'axios';
import { SERVER_URL } from '../../config/config';
import TeacherActionComponents from '../TeacherActionComponents';
import { GridSearchIcon } from '@mui/x-data-grid';
import { setServers } from 'dns';

interface Teacher {
    name: string;
    image: string;
    position: string;
    phone: string;
    address: string;
    email: string;
    subject: string;
    _id: string;

}
export const TeacherTable = () => {
    const [teachers, setTeacher] = useState<Teacher[]>([]);
    const [name, setName] = React.useState('def');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await axios(`${SERVER_URL}/api/teachers`);
                setTeacher(result.data);
                // console.log(result.data);
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };
        getPosts();
    }, []);
    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };
    const reverseTeacher = [...teachers].reverse();
    // console.log(teachers);
    // console.log(search);
    console.log(name);

    return (
        <Box>
            <Box>
                {/* search bar */}
                <Paper className='flex gap-4 p-4' elevation={0.0}>
                    <FormControl sx={{ width: "25%" }}>
                        <Select
                            value={name}
                            onChange={handleChange}
                        >
                            <MenuItem value="def" disabled >Filter</MenuItem>
                            <MenuItem value="Recent">Recent</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>

                        <OutlinedInput
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search ...'
                            startAdornment=
                            {<InputAdornment position="start">
                                <GridSearchIcon sx={{ color: 'action.active', mr: 1, }} />
                            </InputAdornment>}
                        />
                    </FormControl>
                    <Button variant='contained' size='large'>Search</Button>
                </Paper>
            </Box>
            <TableContainer >
                <Table aria-label="spanning table">
                    <TableHead >
                        <TableCell align='center'>Id</TableCell>
                        <TableCell align='center'>Profile</TableCell>
                        <TableCell align='center'> Name</TableCell>
                        <TableCell align='center'> Address</TableCell>
                        <TableCell align='center'>Coll</TableCell>
                        <TableCell align='center'> Email</TableCell>
                        <TableCell align='center'> Position</TableCell>
                        <TableCell align='center'> Subject</TableCell>
                        <TableCell align='center'> Action </TableCell>
                    </TableHead>
                    {
                        reverseTeacher.filter((teacher) => {
                            return search.toLowerCase() === '' ? teacher : teacher.name.toLowerCase().includes(search)
                        }).map((teacher, index) => (
                            <TableBody key={index}>
                                <TableCell align='center' className='whitespace-nowrap'>{index + 1}</TableCell>
                                <TableCell align='center' ><Avatar alt="Teacher Photo" src={teacher.image} /> </TableCell>
                                <TableCell align='center' >{teacher.name}</TableCell>
                                <TableCell align='center' > {teacher.address}</TableCell>
                                <TableCell align='center' >{teacher.phone}</TableCell>
                                <TableCell align='center'>{teacher.email}</TableCell>
                                <TableCell align='center'> {teacher.position}</TableCell>
                                <TableCell align='center'>{teacher.subject}</TableCell>
                                <TableCell align='center'>
                                    <TeacherActionComponents setTeacher={setTeacher} teacher={teacher} />

                                </TableCell>
                            </TableBody>
                        ))
                    }


                </Table>
            </TableContainer >
        </Box >
    )
}
