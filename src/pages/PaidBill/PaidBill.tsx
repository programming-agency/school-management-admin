import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableCell, TableBody, Button, Menu, Box, Avatar, FormControl, Select, MenuItem, OutlinedInput, InputAdornment, Paper, SelectChangeEvent, } from '@mui/material'
import axios from 'axios';
import { SERVER_URL } from '../../config/config';

import { GridSearchIcon } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

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


export const PaidBill = () => {

  const [students, setStudent] = useState<Student[]>([]);
  const [name, setName] = React.useState('def');
  const [search, setSearch] = useState('');
  const [filterdata, setFilterData] = useState<Student[]>([]);
  const Navigate = useNavigate();


  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await axios(`${SERVER_URL}/api/students`);
        setStudent(result.data);
        setFilterData(result.data)
        // console.log(result.data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };
    getPosts();
  }, []);

  // console.log(students);

  const reverseStudent = [...students].reverse();

  const handleChange = (event: SelectChangeEvent) => {
    const selectorName = event.target.value as string;
    setName(selectorName);

    if (selectorName === 'def') {
      // If 'Filter' is selected, show all students
      setFilterData(reverseStudent);
    } else {
      // Filter students based on the selected class
      const filteredData = students.filter((student) => student.studentClass === selectorName);
      setFilterData(filteredData);
    }
  };

  const handleRowClick = (studentId: string) => {
    // console.log(studentId);
    Navigate(`/app/billPaid/${studentId}`)

  }


  // console.log(name);
  return (
    <Box>
      <Paper className='flex gap-4 p-4' elevation={0.0}>
        <FormControl sx={{ width: "25%" }}>
          <Select
            value={name}
            onChange={handleChange}
          >
            <MenuItem value="def" disabled >Filter</MenuItem>
            <MenuItem value="One">ONE</MenuItem>
            <MenuItem value="Two">TWO</MenuItem>
            <MenuItem value="Three">THREE</MenuItem>
            <MenuItem value="Four">FOUR</MenuItem>
            <MenuItem value="Five">FIVE</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <OutlinedInput
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search ...'
            startAdornment={<InputAdornment position="start">
              <GridSearchIcon sx={{ color: 'action.active', mr: 1, }} />
            </InputAdornment>}
          />
        </FormControl>
        <Button variant='contained' size='large'>Search</Button>
      </Paper>
      {/* Table data */}
      <TableContainer >
        <Table aria-label="spanning table">
          {/* <TableHead >
            <TableCell align='center'>Id</TableCell>
            <TableCell align='center'>Profile</TableCell>
            <TableCell align='center'> Name</TableCell>
            <TableCell align='center'> Coll</TableCell>
            <TableCell align='center'>Class</TableCell>
            <TableCell align='center'>Roll</TableCell>
            <TableCell align='center'>Section</TableCell>
            <TableCell align='center'>Address</TableCell>
            <TableCell align='center'> Action </TableCell>
          </TableHead> */}
          {
            filterdata.filter((student) => {
              return search.toLowerCase() === '' ? student : student.studentName.toLowerCase().includes(search)
            }).map((student, index) => (
              <TableBody key={index} onClick={() => handleRowClick(student._id)}>
                <TableCell align='center' >{index + 1}</TableCell>
                <TableCell align='center' ><Avatar alt="student Photo" src={student.image} /> </TableCell>
                <TableCell align='center' >{student.studentName}</TableCell>
                <TableCell align='center' > {student.phone}</TableCell>
                <TableCell align='center'>{student.studentClass}</TableCell>
                <TableCell align='center' >{student.classRoll}</TableCell>
                <TableCell align='center'> {student.section}</TableCell>
                <TableCell align='center'>{student.address}</TableCell>
                {/* <TableCell align='center'>

                  <StudentActionComponents setStudent={setStudent} student={student} />
                </TableCell> */}
              </TableBody>
            ))
          }


        </Table>
      </TableContainer >
    </Box >
  )
}
