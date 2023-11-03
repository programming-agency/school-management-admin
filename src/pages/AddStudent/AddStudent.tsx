import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { SERVER_URL } from '../../config/config';
import { Box } from '@mui/material';


interface FormData {
    studentName: string;
    fatherName: string;
    motherName: string;
    gender: string;
    address: string;
    studentClass: string;
    classRoll: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    bloodGroup: string;
    section: string;
    image: string;
}

export const AddStudent = () => {
    const [file, setFile] = useState<File | undefined>()
    const [imageURL, setImageURL] = useState<string>('');
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

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
        // console.log("result", result.secure_url);

        try {
            const response = await axios.post(`${SERVER_URL}/api/students`, { ...data, image: result.secure_url });
            console.log('Data uploaded successfully', response.data);
        } catch (error) {
            console.error('Error uploading data', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className='text-center text-4xl mb-5 border-b-2 '> Add New  Student </Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="Student Name"
                        fullWidth
                        {...register("studentName", { required: 'Student Name is required' })}
                        error={Boolean(errors.studentName)}
                        helperText={errors.studentName && errors.studentName.message}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Father Name"
                        fullWidth
                        {...register("fatherName", { required: 'Father Name is required' })}
                        error={Boolean(errors.fatherName)}
                        helperText={errors.fatherName && errors.fatherName.message}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Mother Name"
                        fullWidth
                        {...register("motherName", { required: 'Mother Name is required' })}
                        error={Boolean(errors.motherName)}
                        helperText={errors.motherName && errors.motherName.message}
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
                        label="Date of Birth"
                        fullWidth
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        {...register("dateOfBirth", { required: 'Date of Birth is required' })}
                        error={Boolean(errors.dateOfBirth)}
                        helperText={errors.dateOfBirth && errors.dateOfBirth.message}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Class"
                        fullWidth
                        select
                        {...register("studentClass", { required: 'Class is required' })}
                        error={Boolean(errors.studentClass)}
                    >
                        <MenuItem value="One">ONE</MenuItem>
                        <MenuItem value="Two">Two</MenuItem>
                        <MenuItem value="Three">Three</MenuItem>
                        <MenuItem value="Four">Four</MenuItem>
                        <MenuItem value="Five">Five</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Section"
                        fullWidth
                        select
                        {...register("section", { required: 'Class is required' })}
                        error={Boolean(errors.section)}
                    >
                        <MenuItem value="A">A</MenuItem>
                        <MenuItem value="B">B</MenuItem>
                        <MenuItem value="C">C</MenuItem>

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
                        label="Class Roll"
                        fullWidth
                        {...register("classRoll", { required: 'Class Roll is required' })}
                        error={Boolean(errors.classRoll)}
                        helperText={errors.classRoll && errors.classRoll.message}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Email"
                        fullWidth
                        {...register("email", { required: 'Email is required' })}
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
