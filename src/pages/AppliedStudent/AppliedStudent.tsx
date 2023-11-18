import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../config/config';
import { Avatar, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

interface Student {
    studentName: string;
    image: string;
    section: string;
    phone: string;
    address: string;
    email: string;
    subject: string;
    _id: string;
    classRoll: string;
    studentClass: string;
    status: string;

    // Add other properties here
}

export default function AppliedStudent() {
    const [students, setStudent] = useState<Student[]>([]);
    const Navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await axios(`${SERVER_URL}/api/appliedStudent`);
                setStudent(result.data);
                // console.log(result.data);
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };
        getPosts();
    }, []);

    const reversedStudent = [...students].reverse();

    // handle edt and update 
    const handleEdit = async (_id: string) => {

        // console.log(_id);

        try {
            const data = { status: 'complete' };

            const updateStudent = await axios.put(`${SERVER_URL}/api/appliedStudent/${_id}`, data)
            console.log("Student Information Update", updateStudent.data);
            console.log(updateStudent);
        } catch (error) {
            console.error('error updating data', error)
        }
        Navigate(`/app/appliedStudent/${_id}`)
    };

    // console.log(reversedStudent);

    // console.log(students);

    return (
        <Box>
            <Box className="text-center text-3xl uppercase pb-5 "> All Applied Student</Box>
            <Box>
                <TableContainer >
                    <Table aria-label="spanning table">
                        <TableHead >
                            <TableCell align='center'>SL</TableCell>
                            <TableCell align='center'>Profile</TableCell>
                            <TableCell align='center'> Name</TableCell>
                            <TableCell align='center'> Coll</TableCell>
                            <TableCell align='center'>Address</TableCell>

                            <TableCell align='center'>status</TableCell>
                            <TableCell align='center'> Action </TableCell>
                        </TableHead>
                        {
                            reversedStudent.map((student, index) => (
                                <TableBody key={index}>
                                    <TableCell align='center' ># {index + 1}</TableCell>
                                    <TableCell align='center' ><Avatar alt="student Photo" src={student.image} /> </TableCell>
                                    <TableCell align='center' >{student.studentName} 
                                    </TableCell>
                                    <TableCell align='center' >{student.phone}</TableCell>
                                    <TableCell align='center'>{student.address}</TableCell>
                                    <TableCell align='center'> <Button
                                     color={student.status === 'pending' ? 'error' : 'success'}
                                     variant='contained'>{student.status}</Button></TableCell>

                                    <TableCell align='center'>
                                        <Button variant='contained' onClick={() => handleEdit(student._id)}
                                            disabled={student.status === 'complete'}
                                        >Confirm</Button>
                                    </TableCell>

                                </TableBody>
                            ))
                        }


                    </Table>
                </TableContainer >
            </Box >
        </Box>
    )
}
