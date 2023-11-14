import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { SERVER_URL } from '../../config/config';
import { Box, Button, Grid, MenuItem, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

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


export default function UpdateTeacher() {

    const [teacher, setTeacher] = useState<any>({});
    const [imageURL, setImageURL] = useState<string>('');
    const [file, setFile] = useState<File | undefined>();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const { id } = useParams<{ id: string }>();

    const Navigate = useNavigate();

    useEffect(() => {
        const getTeacherData = async () => {
            try {
                const result = await axios.get(`${SERVER_URL}/api/teachers/${id}`);
                setTeacher(result.data.teacher);
            } catch (error) {
                console.error('Error fetching teacher:', error);
            }
        };

        getTeacherData();
    }, [id]);

    function handleImage(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            setFile(target.files[0]);
            setImageURL(URL.createObjectURL(target.files[0]));
        }
    }

    const onSubmit = async (data: FormData) => {
        if (!file) {
            // If the file is not changed, use the existing image URL
            try {
                const response = await axios.put(`${SERVER_URL}/api/teachers/${id}`, { ...data, image: teacher.image });
                console.log(' teacher Information updated successfully', response.data);
                // Navigate('/app/students')
            } catch (error) {
                console.error('Error updating student data', error);
            }
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'seytcuol');
        formData.append('api_key', '512147963287944');

        try {
            const imageUploadResult = await fetch('https://api.cloudinary.com/v1_1/dofqwdx2y/image/upload', {
                method: 'POST',
                body: formData,
            }).then((r) => r.json());

            const imageUrlToUpdate = imageUploadResult.secure_url;

            const response = await axios.put(`${SERVER_URL}/api/teachers/${id}`, { ...data, image: imageUrlToUpdate });

            console.log('Teacher Information updated successfully', response.data);
            Navigate("/")
        } catch (error) {
            console.error('error updating teacher data', error)
        }
    };


    return (
        <Box>
            <Box className="text-4xl text-center mb-5"> Update  Teacher</Box>

            <form onSubmit={handleSubmit(onSubmit)}>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {teacher?.name != undefined &&
                            <TextField
                                label="Name"
                                defaultValue={teacher?.name}
                                fullWidth
                                {...register("name", { required: 'Name is required' })}
                                error={Boolean(errors.name)}
                                helperText={errors.name && errors.name.message}
                            />
                        }
                    </Grid>
                    <Grid item xs={6}>

                        {
                            teacher?.email != undefined &&
                            <TextField
                                label="Email"
                                fullWidth
                                defaultValue={teacher?.email}
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
                        }
                    </Grid>

                    <Grid item xs={6}>
                        {
                            teacher?.phone != undefined &&
                            <TextField
                                label="Phone"
                                fullWidth
                                defaultValue={teacher?.phone}

                                {...register("phone", { required: 'Phone is required' })}
                                error={Boolean(errors.phone)}
                                helperText={errors.phone && errors.phone.message}
                            />
                        }

                    </Grid>



                    <Grid item xs={6}>
                        {
                            teacher?.age != undefined && <TextField
                                label="Age"
                                fullWidth
                                type="number"
                                defaultValue={teacher?.age}
                                {...register("age", { required: 'Age is required' })}
                                error={Boolean(errors.age)}
                                helperText={errors.age && errors.age.message}
                            />
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            teacher?.gender != undefined &&
                            <TextField
                                label="Gender"
                                fullWidth
                                defaultValue={teacher?.gender}
                                select
                                {...register("gender", { required: 'Gender is required' })}
                                error={Boolean(errors.gender)}
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </TextField>

                        }

                    </Grid>

                    <Grid item xs={6}>
                        {
                            teacher?.bloodGroup != undefined && <TextField
                                label="Blood Group"
                                fullWidth
                                defaultValue={teacher?.bloodGroup}
                                select
                                {...register("bloodGroup", { required: 'Blood Group is required' })}
                                error={Boolean(errors.bloodGroup)}
                            >
                                <MenuItem value="A+">A+</MenuItem>
                                <MenuItem value="B+">B+</MenuItem>
                                <MenuItem value="AB+">AB+</MenuItem>
                                <MenuItem value="O+">O+</MenuItem>
                            </TextField>
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            teacher?.education != undefined && <TextField
                                label="Education"
                                fullWidth
                                defaultValue={teacher?.education}
                                {...register("education", { required: 'Education is required' })}
                                error={Boolean(errors.education)}
                                helperText={errors.education && errors.education.message}
                            />
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            teacher?.dateOfBirth != undefined &&
                            <TextField
                                label="Date of Birth"
                                fullWidth
                                defaultValue={teacher?.dateOfBirth}
                                type="date"
                                InputLabelProps={{ shrink: true }} // Add this line
                                {...register("dateOfBirth", { required: 'Date of Birth is required' })}
                                error={Boolean(errors.dateOfBirth)}
                                helperText={errors.dateOfBirth && errors.dateOfBirth.message}
                            />
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            teacher?.position != undefined &&
                            <TextField
                                label="Position"
                                fullWidth
                                defaultValue={teacher?.position}
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
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            teacher?.subject != undefined &&
                            <TextField
                                label="Subject"
                                fullWidth
                                defaultValue={teacher?.subject}
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
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            teacher?.joinDate != undefined &&
                            <TextField
                                label="Join Date"
                                fullWidth
                                defaultValue={teacher?.joinDate}
                                type="date"
                                InputLabelProps={{ shrink: true }} // Add this line
                                {...register("joinDate", { required: 'Join Date is required' })}
                                error={Boolean(errors.joinDate)}
                                helperText={errors.joinDate && errors.joinDate.message}
                            />
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            teacher?.idNumber != undefined &&
                            <TextField
                                label="NID Card Number"
                                fullWidth
                                defaultValue={teacher?.idNumber} type="number" // Set type as "date"
                                {...register("idNumber", { required: 'ID Card Number  is required' })}
                                error={Boolean(errors.idNumber)}
                                helperText={errors.idNumber && errors.idNumber.message}
                            />
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            teacher?.address != undefined &&
                            <TextField
                                label="Address"
                                fullWidth
                                defaultValue={teacher?.address}
                                {...register("address", { required: 'Address is required' })}
                                error={Boolean(errors.address)}
                                helperText={errors.address && errors.address.message}
                            />
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            teacher?.image != undefined && <input type="file" accept="image/*" name="image" id="" onChange={handleImage} />
                        }
                    </Grid>

                    {imageURL && ( // Display the image only when imageURL is not empty
                        <Grid item xs={12}>
                            <img src={imageURL} alt="Uploaded" placeholder='photo' className='h-40 w-40 border-2' style={{ maxWidth: '100%' }} />
                        </Grid>
                    )}

                    <Grid item xs={12}>
                        <p className='text-xl'>Student Photo</p>
                        <img className='h-40 w-40 border-2' src={teacher?.image} alt="" />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>

        </Box>
    )
}
