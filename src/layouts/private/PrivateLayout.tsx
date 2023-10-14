import React from 'react'
import { Box, Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Appbar from './components/Appbar'
import Sidebar from './components/Sidebar'
 
 

type ComponentProps = {

}

export default function PrivateLayout({ }: ComponentProps) {
  return (
    <Box>
      {/* Appbar start */}
      <Appbar />
      {/* Appbar end */}

      <Box className="flex">

        {/* Sidebar start */}
        <Paper className='w-[256px] min-h-screen'>
          <Sidebar />
        </Paper>
        {/* Sidebar end */}

          {/* Content start */}
          <Box className="flex-grow p-6">            
            <Outlet/>                    
          </Box>
          {/* Content end */}

      </Box>

    </Box>
  )
}
