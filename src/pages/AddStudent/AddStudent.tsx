import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

interface FormData {
    studentName: string;
    fatherName: string;
    motherName: string;
    gender: string;
    address: string;
    image: File;
    studentClass: string;
    classRoll: string;
    email: string;
    phone: string;
    dateOfBirth: string;
}

export const AddStudent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [imageURL, setImageURL] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageURL(imageURL);
        }
    };

    const onSubmit: SubmitHandler<FormData> = (data) => {
        // You can handle the uploaded image in the `data.image` property.
        // You may want to send it to your server or perform any other actions.
        console.log('Form Data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </TextField>
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
                    <input
                        type="file"
                        accept="image/*"
                        {...register("image", { required: 'Image is required' })}
                        onChange={handleFileChange}
                    />
                    {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                </Grid>
                {imageURL && (
                    <Grid item xs={6}>
                        <img src={imageURL} alt="Selected" style={{ maxWidth: '100%' }} />
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
