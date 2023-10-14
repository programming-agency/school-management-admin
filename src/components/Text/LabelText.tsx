import React from 'react'
import { Box, Typography } from '@mui/material'

type ComponentProps = {
    children: React.ReactNode
 }

export default function LabelText({children, ...rest}:ComponentProps) {
  return (
    <Typography {...rest}>
        {children}
    </Typography>
  )
}
