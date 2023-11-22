import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableCell, TableBody, Button, Menu, Box, Avatar, FormControl, Select, MenuItem, OutlinedInput, InputAdornment, Paper, SelectChangeEvent, } from '@mui/material'
import axios from 'axios';
import { SERVER_URL } from '../../config/config';

import { GridSearchIcon } from '@mui/x-data-grid';

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
  bailStatus: object;


  // Add other properties here
}


export const Accounts = () => {
  const [students, setStudent] = useState<Student[]>([]);
  const [name, setName] = React.useState('def');
  const [search, setSearch] = useState('');
  const [filterdata, setFilterData] = useState<Student[]>([]);


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


  console.log(name);
  return (
    <Box>
      <Paper elevation={0.0} className='text-3xl text-center py-5  my-3'> Student Monthly Account Status</Paper>
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
          <TableHead >
            <TableCell align='center'>SL</TableCell>
            <TableCell align='center'>Profile</TableCell>
            <TableCell align='center'> Name</TableCell>
            <TableCell align='center'>Jan </TableCell>
            <TableCell align='center'>Feb</TableCell>
            <TableCell align='center'>Mar</TableCell>
            <TableCell align='center'>Apr</TableCell>
            <TableCell align='center'>May</TableCell>
            <TableCell align='center'>Jun</TableCell>
            <TableCell align='center'>July</TableCell>
            <TableCell align='center'>Aug</TableCell>
            <TableCell align='center'>Sept</TableCell>
            <TableCell align='center'>Oct</TableCell>
            <TableCell align='center'>Nov</TableCell>
            <TableCell align='center'>Dec</TableCell>
          </TableHead>
          {
            filterdata.filter((student) => {
              return search.toLowerCase() === '' ? student : student.studentName.toLowerCase().includes(search)
            }).map((student, index) => (
              <TableBody key={index}>
                <TableCell align='center' >{index + 1}</TableCell>
                <TableCell align='center' ><Avatar alt="student Photo" src={student.image} /> </TableCell>
                <TableCell align='center' >{student.studentName}</TableCell>
                {
                  student && typeof student.bailStatus === 'object' &&
                  Object.entries(student.bailStatus).map(([month, status], index) => (
                    <TableCell key={index} align='center'>
                      <Button variant='contained' color={status === 'Paid' ? 'success' : 'error'}>
                        {status}
                      </Button>
                    </TableCell>
                  ))
                }
              </TableBody>
            ))
          }


        </Table>
      </TableContainer >
    </Box >
  )
}
