// import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import MenuItem from '@mui/material/MenuItem';
// import axios from 'axios';
// import { BaseUrl } from '../../components/BaseUrl/BaseUrl';
// import cloudinary from '../../config/cloudinaryConfig';


// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   gender: string;
//   age: number;
//   education: string;
//   address: string;
//   image: FileList | null;
//   position: string;
//   dateOfBirth: string;
//   idNumber: number;
// }

// export const AddTeacher = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = async (data) => {
//     try {
//       if (data.image && data.image.length > 0) {
//         // Upload the image to Cloudinary
//         const imageFile = data.image[0];
//         const formData = new FormData();
//         formData.append('file', imageFile);

//         const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/upload', {
//           method: 'POST',
//           body: formData,
//         });

//         if (response.ok) {
//           const result = await response.json();
//           data.image = result.secure_url;
//           const response = await axios.post(`${BaseUrl}/api/teachers`, { ...data, image: result.secure_url });
//           console.log('Data uploaded successfully', response.data);
//         } catch (error) {
//           console.error('Error uploading data', error);
//         }
//       } else {
//         console.error('Error uploading image to Cloudinary');
//         return;
//       }
//     }

//       // Post the data to your API
    
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <TextField
//             label="Name"
//             fullWidth
//             {...register("name", { required: 'Name is required' })}
//             error={Boolean(errors.name)}
//             helperText={errors.name && errors.name.message}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Email"
//             fullWidth
//             {...register("email", {
//               required: 'Email is required',
//               pattern: {
//                 value: /\S+@\S+\.\S+/,
//                 message: 'Invalid email address',
//               },
//             })}
//             error={Boolean(errors.email)}
//             helperText={errors.email && errors.email.message}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Phone"
//             fullWidth
//             {...register("phone", { required: 'Phone is required' })}
//             error={Boolean(errors.phone)}
//             helperText={errors.phone && errors.phone.message}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Gender"
//             fullWidth
//             select
//             {...register("gender", { required: 'Gender is required' })}
//             error={Boolean(errors.gender)}
//           >
//             <MenuItem value="male">Male</MenuItem>
//             <MenuItem value="female">Female</MenuItem>
//           </TextField>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Age"
//             fullWidth
//             type="number"
//             {...register("age", { required: 'Age is required' })}
//             error={Boolean(errors.age)}
//             helperText={errors.age && errors.age.message}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Education"
//             fullWidth
//             {...register("education", { required: 'Education is required' })}
//             error={Boolean(errors.education)}
//             helperText={errors.education && errors.education.message}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Date of Birth"
//             fullWidth
//             type="date"
//             InputLabelProps={{ shrink: true }} // Add this line
//             {...register("dateOfBirth", { required: 'Date of Birth is required' })}
//             error={Boolean(errors.dateOfBirth)}
//             helperText={errors.dateOfBirth && errors.dateOfBirth.message}
//           />
//         </Grid>

//         <Grid item xs={6}>
//           <TextField
//             label="ID Card Number"
//             fullWidth
//             type="number" // Set type as "date"
//             {...register("idNumber", { required: 'ID Card Number  is required' })}
//             error={Boolean(errors.idNumber)}
//             helperText={errors.idNumber && errors.idNumber.message}
//           />
//         </Grid>

//         <Grid item xs={6}>
//           <TextField
//             label="position"
//             fullWidth
//             select
//             {...register("position", { required: 'position is required' })}
//             error={Boolean(errors.position)}
//           >
//             <MenuItem value="Head Teacher">Head Teacher</MenuItem>
//             <MenuItem value="Ass. HeadTeacher">Ass. HeadTeacher</MenuItem>
//             <MenuItem value="Teacher">Teacher</MenuItem>
//             <MenuItem value="Ass.Teacher">Ass.Teacher</MenuItem>
//             <MenuItem value="Pion">Pion</MenuItem>
//           </TextField>
//         </Grid>

//         <Grid item xs={6}>
//           <TextField
//             label="Address"
//             fullWidth
//             {...register("address", { required: 'Address is required' })}
//             error={Boolean(errors.address)}
//             helperText={errors.address && errors.address.message}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <input
//             type="file"
//             accept="image/*"
//             {...register("image")}
//           />
//           {errors.image && (
//             <p className="text-red-500">Image is required</p>
//           )}
//         </Grid>

//         {/* {imageURL && (
//           <Grid item xs={12}>
//             <img src={imageURL} alt="Selected" style={{ maxWidth: '100%' }} />
//           </Grid>
//         )} */}
//         <Grid item xs={12}>
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </Grid>
//       </Grid>
//     </form >
//   );
// };
import React from 'react'

export default function test() {
  return (
    <div>test</div>
  )
}

