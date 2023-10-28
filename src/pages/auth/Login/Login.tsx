import React from 'react'
import { Box, Paper, TextField, Button, FilledInput, FormControl, InputLabel, IconButton, InputAdornment, } from '@mui/material'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../../config/config';

interface FormData {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Please Type Your Password")

});

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormData) => {
    console.log(data);

    try {
      const response = await axios.post(`${SERVER_URL}/api/login`, data)
      console.log("User Login Successfully", response.data);
    } catch (error) {
      console.log(error);
    }
  };


  // Show password start
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  // Show Password end

  return (
    <Box className='p-10 h-screen'>
      <Paper className='h-full'>
        <Box className="flex h-full gap-10 justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="flex-col p-10 w-[650px] gap-5 flex" >
            <Box className="text-center my-5 text-4xl font-semibold">
              Admin Log In !!!
            </Box>

            <Box >
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            </Box>
            <Box>
              <FormControl variant="filled" fullWidth error={Boolean(errors.password)}>
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  {...register("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <p className="text-[red]">{errors.password.message}</p>
                )}
              </FormControl>

            </Box>

            <Button variant="contained" type="submit">Login</Button>
            <Box className="text-center">I Have No Account, Please <Link className='text-red-500' to='/auth/register'>Register</Link> </Box>
          </form>
          {/* image section */}
          <Box sx={{ backgroundImage: 'url(/auth-bg.jpg)' }} className='flex-grow bg-cover bg-center bg-no-repeat h-full bg-blue-400' />
        </Box>
      </Paper>
    </Box>
  )
}
