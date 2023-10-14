import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <Box>
        <Outlet />
    </Box>
  )
}
