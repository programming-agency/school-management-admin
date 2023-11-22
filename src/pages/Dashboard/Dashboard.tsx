import React from 'react'
import { Box, Paper, } from '@mui/material'

import DashBoardCard from '../../components/DashBoardCard/DashBoardCard'

import DonutChart from '../../components/PieChart/DonutChart';



export default function Dashboard() {

  return (
    <Box >
      {/* card  */}
      <Box className="my-2 font-bold"> Dashboard</Box>
      <Box className="grid grid-cols-4 gap-[33px]">
        <Box className="bg-[#50D27E] col-span-1 rounded-[10px]">
          <DashBoardCard total='Students' employ={450} />
        </Box>
        <Box className="bg-[#F87E26] col-span-1 rounded-[10px]">
          <DashBoardCard total='Teacher' employ={50} />
        </Box>
        <Box className="bg-[#2152F8] col-span-1 rounded-[10px]">
          <DashBoardCard total='Notices' employ={10} />
        </Box>
        <Box className="bg-[#AD32E4] col-span-1 rounded-[10px]">
          <DashBoardCard total='Result' employ={10} />
        </Box>
      </Box>

      <Box className='  mt-[40px]   '>
        {/*  progress */}

        <Box className="w-full">
          <Paper className='w-full'>
            <Box>
              <Box className="font-semibold text-center px-3 py-3"> Student Performance</Box>
              {/* Chart */}
              <DonutChart />
              {/* details */}
              <Box className='p-3 my-5'>
                {/* <Box className='flex py-2 justify-between'>
                  <Box className="flex items-center justify-center  w-[50%] gap-2 ">
                    <Box className='h-4 w-4 rounded-full   bg-[#2152F8]'></Box>
                    <Box className="text-[14px]  ">Today</Box>
                  </Box>
                  <Box className="flex items-center justify-center w-[50%] gap-2 ">
                    <Box className='h-4 w-4 rounded-full bg-[#50D27E]'></Box>
                    <Box className="text-[14px]  ">Yesterday</Box>
                  </Box>
                </Box> */}
                <Box className='flex gap-5'>
                  <Box className="flex items-center justify-center w-[50%] gap-2 ">
                    <Box className='h-4 w-4 rounded-full   bg-[#2152F8]'></Box>
                    <Box className="text-[14px]  ">Today......</Box>
                  </Box>
                  <Box className="flex items-center   w-[50%] gap-2 ">
                    <Box className='h-4 w-4 rounded-full bg-[#50D27E]'></Box>
                    <Box className="text-[14px]  ">Yesterday</Box>
                  </Box>
                </Box>
                <Box className='flex gap-5'>
                  <Box className="flex items-center justify-center w-[50%] gap-2 ">
                    <Box className='h-4 w-4 rounded-full bg-[orange]'></Box>
                    <Box className="text-[14px]  ">16/11/2023</Box>
                  </Box>
                  <Box className="flex items-center   w-[50%] gap-2 ">
                    <Box className='h-4 w-4 rounded-full bg-[red]'></Box>
                    <Box className="text-[14px]  ">15/11/2023</Box>
                  </Box>
                </Box>

              </Box>
            </Box>

          </Paper>
        </Box>
      </Box>

    </Box>
  )
}
