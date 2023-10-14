import React from 'react'
import { Box, } from "@mui/material"
type ComponentProps = {
    total?: string,
    employ?: number,
}

export default function DashBoardCard({ total, employ  }: ComponentProps) {
    return (
        <Box className='p-[22px]'>
            <Box className="flex  justify-between items-start gap-10">
                <Box className="text-base text-white whitespace-nowrap">{total}</Box>
                <Box className=" w-[34px]"> <img src="/style.jpg" alt="" /> </Box>
            </Box>
            <Box className='text-[22px] mt-5 text-white  font-semibold'><span>{employ}</span> </Box>
        </Box>
    )
}
