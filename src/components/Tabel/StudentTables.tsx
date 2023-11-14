import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableCell, TableBody, Button, Menu, Box, Avatar, } from '@mui/material'
import axios from 'axios';
import { SERVER_URL } from '../../config/config';
import StudentActionComponents from '../StudentActionComponents';

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

  // Add other properties here
}


export const StudentTable = () => {
  const [students, setStudent] = useState<Student[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await axios(`${SERVER_URL}/api/students`);
        setStudent(result.data);
        // console.log(result.data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };
    getPosts();
  }, []);

  // console.log(students);

  const reverseStudent = [...students].reverse();



  return (
    <Box>
      <TableContainer >
        <Table aria-label="spanning table">
          <TableHead >
            <TableCell align='center'>Id</TableCell>
            <TableCell align='center'>Profile</TableCell>
            <TableCell align='center'> Name</TableCell>
            <TableCell align='center'> Coll</TableCell>
            <TableCell align='center'>Class</TableCell>
            <TableCell align='center'>Roll</TableCell>
            <TableCell align='center'>Section</TableCell>
            <TableCell align='center'>Address</TableCell>
            <TableCell align='center'> Action </TableCell>
          </TableHead>
          {
            reverseStudent.map((student, index) => (
              <TableBody key={index}>
                <TableCell align='center' ># {index + 1}</TableCell>
                <TableCell align='center' ><Avatar alt="student Photo" src={student.image} /> </TableCell>
                <TableCell align='center' >{student.studentName}</TableCell>
                <TableCell align='center' > {student.phone}</TableCell>
                <TableCell align='center'>{student.studentClass}</TableCell>
                <TableCell align='center' >{student.classRoll}</TableCell>
                <TableCell align='center'> {student.section}</TableCell>
                <TableCell align='center'>{student.address}</TableCell>
                <TableCell align='center'>

                  <StudentActionComponents setStudent={setStudent} student={student} />
                </TableCell>
              </TableBody>
            ))
          }


        </Table>
      </TableContainer >
    </Box >
  )
}
