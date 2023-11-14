import { Box, Button, Grid, TextField } from "@mui/material"
import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form"
import { SERVER_URL } from "../../config/config"
import { useEffect, useState } from "react"


interface IFormInput {
  createNotices: string

}
type Notice = {
  createNotices: string

}


export default function Notices() {
  const [notices, setNotices] = useState<Notice[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(`${SERVER_URL}/api/createNotices`, data)
      console.log("Notices Create Successfully", response.data);
    } catch (error) {
      console.error("Error Create Notices", error)
    }
  }

  const reversedNotices = [...notices].reverse();
  console.log(reversedNotices);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await axios(`${SERVER_URL}/api/createNotices`);
        setNotices(result.data);
        // console.log(result.data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    };
    getPosts();
  }, []);

  // console.log(notices);
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className='text-4xl text-center pb-4'> Create a New Notices</Box>
        <Grid item xs={6}>
          <TextField
            label="Create Notices"
            fullWidth

            minRows={3}
            {...register("createNotices", { required: 'Create Notices Name is required' })}
            error={Boolean(errors.createNotices)}
            helperText={errors.createNotices && errors.createNotices.message}
          />
        </Grid>

        <Grid className="flex justify-end pt-5" item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </form>
      <Box>
        <Box className="text-3xl  mb-10 text-center">Recently Public Notices </Box>
        {reversedNotices.map((notice, index) => (
          <Box className='text-xl pt-5' key={index}>{notice.createNotices}</Box>
        ))}
      </Box>
    </Box>
  )
}