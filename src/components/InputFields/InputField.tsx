import React from 'react'
import { TextField } from '@mui/material'

export default function InputField({...rest}) {
  return (
    <TextField 
        {...rest}
        variant='filled'
        sx={{backgroundColor: '#fff'}}
    />
  )
}
