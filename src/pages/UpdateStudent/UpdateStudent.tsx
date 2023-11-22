import { Box } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { SERVER_URL } from '../../config/config';
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
    studentClass: string;
    classRoll: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    bloodGroup: string;
    section: string;
    image: string;
}

export default function UpdateStudent() {
    const [file, setFile] = useState<File | undefined>()
    const [imageURL, setImageURL] = useState<string>('');
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [student, setStudent] = useState<any>({})
    const { id } = useParams<{ id: string }>();
    // console.log(id);

    const Navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await axios.put(`${SERVER_URL}/api/students/${id}`);
                setStudent(result.data.student);
                // console.log(result.data.student);
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };
        getPosts();
    }, []);

    function handleImage(e: React.FormEvent<HTMLInputElement>) {
        const target = e.target as HTMLIFrameElement & {
            files: FileList
        }
        setFile(target.files[0]);
        setImageURL(URL.createObjectURL(target.files[0]));
    }
    const onSubmit = async (data: FormData) => {
        if (!file) {
            // If the file is not changed, use the existing image URL
            try {
                const response = await axios.put(`${SERVER_URL}/api/students/${id}`, { ...data, image: student.image });
                console.log('Student Information updated successfully', response.data);
                Navigate('/app/students')
            } catch (error) {
                console.error('Error updating student data', error);
            }
            return;
        }

        // If the file is changed, upload the new image to Cloudinary
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', "seytcuol");
        formData.append('api_key', "512147963287944");

        try {
            const imageUploadResult = await fetch('https://api.cloudinary.com/v1_1/dofqwdx2y/image/upload', {
                method: "POST",
                body: formData
            }).then(r => r.json());

            console.log("Cloudinary result", imageUploadResult.secure_url);

            const imageUrlToUpdate = imageUploadResult.secure_url ;

            const response = await axios.put(`${SERVER_URL}/api/students/${id}`, { ...data, image: imageUrlToUpdate });

            console.log('Student Information updated successfully', response.data);
            Navigate('/') // Uncomment this line if you want to navigate after a successful update.
        } catch (error) {
            console.error('Error updating student data', error);
        }
    };

    // console.log(student.image);
    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box className='text-center text-4xl mb-5 border-b-2 '>Update Student Information </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {
                            student?.studentName != undefined &&
                            <TextField
                                label="Student Name"
                                fullWidth
                                defaultValue={student?.studentName}
                                {...register("studentName", { required: 'Student Name is required' })}
                                error={Boolean(errors.studentName)}
                                helperText={errors.studentName && errors.studentName.message}
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
                                {...register("fatherName", { required: 'Father Name is required' })}
                                error={Boolean(errors.fatherName)}
                                helperText={errors.fatherName && errors.fatherName.message}
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
                                {...register("motherName", { required: 'Mother Name is required' })}
                                error={Boolean(errors.motherName)}
                                helperText={errors.motherName && errors.motherName.message}
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
                            student?.dateOfBirth != undefined &&
                            <TextField
                                label="Date of Birth"
                                fullWidth
                                type="date"
                                defaultValue={student?.dateOfBirth}
                                InputLabelProps={{ shrink: true }}
                                {...register("dateOfBirth", { required: 'Date of Birth is required' })}
                                error={Boolean(errors.dateOfBirth)}
                                helperText={errors.dateOfBirth && errors.dateOfBirth.message}
                            />
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
                                {...register("studentClass", { required: 'Class is required' })}
                                error={Boolean(errors.studentClass)}
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
                                {...register("section", { required: 'Class is required' })}
                                error={Boolean(errors.section)}
                            >
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="B">B</MenuItem>
                                <MenuItem value="C">C</MenuItem>

                            </TextField>
                        }
                    </Grid>
                    <Grid item xs={6}>
                        {
                            student?.bloodGroup != undefined &&
                            <TextField
                                label="Blood Group"
                                fullWidth
                                select
                                defaultValue={student.bloodGroup}
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
                            student?.classRoll != undefined &&
                            <TextField
                                label="Class Roll"
                                defaultValue={student?.classRoll}
                                fullWidth
                                {...register("classRoll", { required: 'Class Roll is required' })}
                                error={Boolean(errors.classRoll)}
                                helperText={errors.classRoll && errors.classRoll.message}
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
                                {...register("email", { required: 'Email is required' })}
                                error={Boolean(errors.email)}
                                helperText={errors.email && errors.email.message}
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
                                {...register("phone", { required: 'Phone is required' })}
                                error={Boolean(errors.phone)}
                                helperText={errors.phone && errors.phone.message}
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
                                {...register("address", { required: 'Address is required' })}
                                error={Boolean(errors.address)}
                                helperText={errors.address && errors.address.message}
                            />
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <p className='text-xl'>Student Photo</p>
                        <img className='h-40 w-40 border-2' src={student?.image} alt="" />
                    </Grid>
                    {imageURL && ( // Display the image only when imageURL is not empty
                        <Grid item xs={12}>
                            <p className='text-xl'> New Photo</p>
                            <img src={imageURL} alt="Uploaded" placeholder='photo' className='h-40 w-40 border-2' style={{ maxWidth: '100%' }} />
                        </Grid>
                    )}

                    <Grid item xs={6}>
                        <input type="file" accept="image/*" name="image" id="" onChange={handleImage} />
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
