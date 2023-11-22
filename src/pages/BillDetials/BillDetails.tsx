import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SERVER_URL } from '../../config/config';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import { Box, Button, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

export default function BillDetails() {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<any>({})
  const [billId] = React.useState('PPS123');
  const [date, setDate] = React.useState(new Date());
  const componentRef = useRef<any>(null);
  console.log(id);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await axios.get(`${SERVER_URL}/api/students/${id}`);
        setStudent(result.data.student);
        // console.log(result.data.student);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };
    getPosts();
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  console.log(student.bailStatus);

  return (
    <Box>
      <form >
        < Paper className='text-center text-4xl mb-5  py-2 '>  Student billing  Information </ Paper>
        <Grid container spacing={2}>

          <Grid item xs={6}>
            {
              student?.studentName != undefined &&
              <TextField
                label="Student Name"
                fullWidth
                defaultValue={student?.studentName}
              />
            }
          </Grid>

          <Grid item xs={6}>
            {
              student?.fatherName != undefined &&
              <TextField
                label="Father Name"
                fullWidth
                defaultValue={student?.fatherName}
              />
            }
          </Grid>

          <Grid item xs={6}>
            {
              student?.motherName != undefined &&
              <TextField
                label="Mother Name"
                fullWidth
                defaultValue={student?.motherName}

              />
            }
          </Grid>

          <Grid item xs={6}>
            {
              student?.gender != undefined &&
              <TextField
                label="Gender"
                fullWidth
                select
                defaultValue={student?.gender}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            }
          </Grid>

          <Grid item xs={6}>
            {
              student?.studentClass != undefined &&
              <TextField
                label="Class"
                fullWidth
                defaultValue={student?.studentClass}
                select

              >
                <MenuItem value="One">ONE</MenuItem>
                <MenuItem value="Two">Two</MenuItem>
                <MenuItem value="Three">Three</MenuItem>
                <MenuItem value="Four">Four</MenuItem>
                <MenuItem value="Five">Five</MenuItem>
              </TextField>
            }
          </Grid>
          <Grid item xs={6}>
            {
              student?.section != undefined &&
              <TextField
                label="Section"
                fullWidth
                defaultValue={student?.section}
                select

              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
                <MenuItem value="C">C</MenuItem>

              </TextField>
            }
          </Grid>

          <Grid item xs={6}>
            {
              student?.classRoll != undefined &&
              <TextField
                label="Class Roll"
                defaultValue={student?.classRoll}
                fullWidth

              />
            }
          </Grid>

          <Grid item xs={6}>
            {
              student?.email != undefined &&
              <TextField
                label="Email"
                fullWidth
                defaultValue={student?.email}

              />
            }
          </Grid>

          <Grid item xs={6}>
            {
              student?.phone != undefined &&
              <TextField
                label="Phone"
                fullWidth
                defaultValue={student?.phone}

              />
            }
          </Grid>

          <Grid item xs={6}>
            {
              student?.address != undefined &&
              <TextField
                label="Address"
                fullWidth
                defaultValue={student?.address}

              />
            }
          </Grid>

          <Grid item xs={6}>
            {

              <TextField
                label="Month"
                fullWidth

                select

              >
                <MenuItem value="january">January</MenuItem>
                <MenuItem value="february">February</MenuItem>
                <MenuItem value="march">March</MenuItem>
                <MenuItem value="april">April</MenuItem>
                <MenuItem value="may">May</MenuItem>
                <MenuItem value="june">June</MenuItem>
                <MenuItem value="july">July</MenuItem>
                <MenuItem value="august">August</MenuItem>
                <MenuItem value="september">September</MenuItem>
                <MenuItem value="october">October</MenuItem>
                <MenuItem value="november">November</MenuItem>
                <MenuItem value="december">December
                </MenuItem>


              </TextField>
            }
          </Grid>

          <Grid item xs={6}>
            {

              <TextField
                label="Amount"
                fullWidth
                type='number'


              />
            }
          </Grid>

          <Grid item xs={12}>
            <p className='text-xl'>Student Photo</p>
            <img className='h-40 w-40 border-2' src={student?.image} alt="" />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Paid
            </Button>
          </Grid>

        </Grid>
      </form>

      {/* invoice section */}

      <Paper ref={componentRef} className='w-3/4 mx-auto py-5'>

        <h1 className='text-2xl font-medium text-center'> Programming Agency Public School </h1>
        <p className='text-center'>Hatiya, Ulipur, Kurigram</p>
        <p className='text-center'>Establish: 2022</p>
        <Box className="flex justify-between px-5">
          <p>Bill id: {billId}</p>
          <p>Date: {date.toLocaleString()}</p>
        </Box>
        <TableContainer  >
          <Table aria-label="simple table">
            <TableBody>
              <TableCell  >
                Student Name
              </TableCell>
              <TableCell  >: {student?.studentName}</TableCell>
            </TableBody>
            <TableBody>
              <TableCell  >
                Father Name
              </TableCell>
              <TableCell  >: {student?.fatherName}</TableCell>
            </TableBody>
            <TableBody>
              <TableCell  >
                Address
              </TableCell>
              <TableCell  >: {student?.address}</TableCell>
            </TableBody>
            <TableBody>
              <TableCell  >
                Class
              </TableCell>
              <TableCell  >: {student?.studentClass}</TableCell>
            </TableBody>
            <TableBody>
              <TableCell  >
                Roll
              </TableCell>
              <TableCell  >: {student?.classRoll}</TableCell>
            </TableBody>
            <TableBody>
              <TableCell  >
                Section
              </TableCell>
              <TableCell  >: {student?.section}</TableCell>
            </TableBody>
            <TableBody>
              <TableCell  >
                Month
              </TableCell>
              <TableCell  >: {student?.month}</TableCell>
            </TableBody>
            <TableBody>
              <TableCell  >
                Amount
              </TableCell>
              <TableCell  >: {student?.amount}</TableCell>
            </TableBody>
          </Table>
        </TableContainer>


      </Paper>
      <Box className="flex justify-end">
        <ReactToPrint
          trigger={() => <Button variant='contained'>Print</Button>}
          content={() => componentRef.current} // Pass the ref to content
          documentTitle='new document'
          pageStyle="print"
        />
      </Box>

    </Box >
  )
}
