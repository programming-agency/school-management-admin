import * as React from 'react';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const columns: GridColDef[] = [

  { field: 'id', headerName: 'ID', width: 30 },

  {
    field: 'profile',
    headerName: 'Profile',
    width: 50,
    renderCell: (params) => (
      <img
        src={params.value} // Assuming 'profile' field contains the image URL
        alt="Profile"
        style={{ width: 30, height: 30 }} // Adjust the size as needed
      />
    ),
  },

  { field: 'name', headerName: 'name', width: 150 },

  { field: 'fatherName', headerName: 'FatherName', width: 150 },

  {
    field: 'age',
    headerName: 'Age',
    type: 'string',
    width: 40,
  },
  {
    field: 'number',
    headerName: 'Number',
    type: 'number',
    width: 120,
  },

  {
    field: 'class',
    headerName: 'Class',
    width: 90,
  },
  {
    field: 'section',
    headerName: 'Section',
    width: 90,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 120,
    renderCell: (params) => (
      <div>
        <Button  > <EditIcon /></Button>
        <Button  ><DeleteIcon /></Button>

        {/* <EditIcon onClick={() => handleEdit(params.row.id)} />
        <DeleteIcon onClick={() => handleDelete(params.row.id)} /> */}
      </div>
    ),
  },

];

const rows = [
  { id: 1, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },
  { id: 2, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },
  { id: 3, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },
  { id: 4, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },
  { id: 5, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },
  { id: 6, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },
  { id: 7, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },
  { id: 8, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },
  { id: 9, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },
  { id: 10, name: 'Hashebur Rahman', fatherName: 'Giyas uddin ', number: "01777441366", age: 35, section: "A", class: 'One', profile: "https://res.cloudinary.com/dofqwdx2y/image/upload/v1698591267/q14yrig2rslsywrzl7ca.png" },

];

export default function TestTable() {


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}