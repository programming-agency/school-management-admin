import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { SERVER_URL } from '../../config/config';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


interface FormData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
  education: string;
  address: string;
  image: string;
  position: string;
  dateOfBirth: string;
  idNumber: number;
  joinDate: string;
  subject: string;
  bloodGroup: string;
}

export const AddTeacher = () => {
  const [file, setFile] = useState<File | undefined>()
  const [imageURL, setImageURL] = useState<string>('');
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const navigate = useNavigate();


  function handleImage(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLIFrameElement & {
      files: FileList
    }
    setFile(target.files[0]);
    setImageURL(URL.createObjectURL(target.files[0]));
  }


  const onSubmit = async (data: FormData) => {
    // console.log(data);

    if (typeof file === "undefined") return

    const formData = new FormData();
    formData.append('file', file)
    formData.append('upload_preset', "seytcuol")
    formData.append('api_key', "512147963287944")
    // console.log(file);

    const result = await fetch('https://api.cloudinary.com/v1_1/dofqwdx2y/image/upload', {
      method: "POST",
      body: formData
    }).then(r => r.json());
    console.log("result", result.secure_url);
    // setImageURL(result.secure_url);
    // console.log("result", result.secure_url);

    try {
      const response = await axios.post(`${SERVER_URL}/api/teachers`, { ...data, image: result.secure_url });
      console.log('Data uploaded successfully', response.data);
      navigate("/app/teacher")
    } catch (error) {
      console.error('Error uploading data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className='text-center text-4xl mb-5 border-b-2 '> Add New  Teacher </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Name"
            fullWidth
            {...register("name", { required: 'Name is required' })}
            error={Boolean(errors.name)}
            helperText={errors.name && errors.name.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            fullWidth
            {...register("email", {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone"
            fullWidth
            {...register("phone", { required: 'Phone is required' })}
            error={Boolean(errors.phone)}
            helperText={errors.phone && errors.phone.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Age"
            fullWidth
            type="number"
            {...register("age", { required: 'Age is required' })}
            error={Boolean(errors.age)}
            helperText={errors.age && errors.age.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Gender"
            fullWidth
            select
            {...register("gender", { required: 'Gender is required' })}
            error={Boolean(errors.gender)}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Blood Group"
            fullWidth
            select
            {...register("bloodGroup", { required: 'Blood Group is required' })}
            error={Boolean(errors.bloodGroup)}
          >
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Education"
            fullWidth
            {...register("education", { required: 'Education is required' })}
            error={Boolean(errors.education)}
            helperText={errors.education && errors.education.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date of Birth"
            fullWidth
            type="date"
            InputLabelProps={{ shrink: true }} // Add this line
            {...register("dateOfBirth", { required: 'Date of Birth is required' })}
            error={Boolean(errors.dateOfBirth)}
            helperText={errors.dateOfBirth && errors.dateOfBirth.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Position"
            fullWidth
            select
            {...register("position", { required: 'position is required' })}
            error={Boolean(errors.position)}
          >
            <MenuItem value="Head Teacher">Head Teacher</MenuItem>
            <MenuItem value="Ass. HeadTeacher">Ass. HeadTeacher</MenuItem>
            <MenuItem value="Teacher">Teacher</MenuItem>
            <MenuItem value="Ass.Teacher">Ass.Teacher</MenuItem>
            <MenuItem value="Pion">Pion</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Subject"
            fullWidth
            select
            {...register("subject", { required: 'subject is required' })}
            error={Boolean(errors.subject)}
          >
            <MenuItem value="Bangla">Bangla</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Math">Math</MenuItem>
            <MenuItem value="Ict">ICT</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="Islam">Islam</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Join Date"
            fullWidth
            type="date"
            InputLabelProps={{ shrink: true }} // Add this line
            {...register("joinDate", { required: 'Join Date is required' })}
            error={Boolean(errors.joinDate)}
            helperText={errors.joinDate && errors.joinDate.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="NID Card Number"
            fullWidth
            type="number" // Set type as "date"
            {...register("idNumber", { required: 'ID Card Number  is required' })}
            error={Boolean(errors.idNumber)}
            helperText={errors.idNumber && errors.idNumber.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Address"
            fullWidth
            {...register("address", { required: 'Address is required' })}
            error={Boolean(errors.address)}
            helperText={errors.address && errors.address.message}
          />
        </Grid>
        <Grid item xs={6}>
          <input type="file" accept="image/*" name="image" id="" onChange={handleImage} />
        </Grid>

        {imageURL && ( // Display the image only when imageURL is not empty
          <Grid item xs={12}>
            <img src={imageURL} alt="Uploaded" placeholder='photo' className='h-40 w-40 border-2' style={{ maxWidth: '100%' }} />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
