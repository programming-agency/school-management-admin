import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableCell, TableBody, Box, Avatar, } from '@mui/material'
import axios from 'axios';
import { SERVER_URL } from '../../config/config';
import TeacherActionComponents from '../TeacherActionComponents';

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

    console.log(teachers);

    return (
        <Box>
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
                        teachers.map((teacher, index) => (
                            <TableBody key={index}>
                                <TableCell align='center' className='whitespace-nowrap'># {index + 1}</TableCell>
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
