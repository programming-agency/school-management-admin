import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import DashboardIcon from './icons/DashboardIcon'
import { Link, useLocation } from 'react-router-dom'
import { Paths } from '../../../constants/paths'
import { StudentIcon } from './icons/StudentIcon'
import { NoticeIcon } from './icons/NoticeIcon'
import { TeacherIcon } from './icons/TeacherIcon'
import AppliedIcon from './icons/AppliedIcon'



export default function Sidebar() {

  const location = useLocation()
  const pathname = location.pathname;

  return (
    <Box>
      <List>
        <Link to={Paths.DASHBOARD}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.DASHBOARD && 'border-r-[2px]'}`}>Dashboard</Box>} />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>
      <List>
        <Link to={Paths.NOTICES}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NoticeIcon />
              </ListItemIcon>
              <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.NOTICES && 'border-r-[2px]'}`}>Notice Board</Box>} />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>
      <List>
        <Link to={Paths.TEACHER}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TeacherIcon />
              </ListItemIcon>
              <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.TEACHER && 'border-r-[2px]'}`}>Teachers</Box>} />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>
      <List>
        <Link to={Paths.STUDENT}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StudentIcon />
              </ListItemIcon>
              <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.STUDENT && 'border-r-[2px]'}`}>Students</Box>} />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>
      <List>
        <Link to={Paths.APPLIED}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AppliedIcon />
              </ListItemIcon>
              <ListItemText primary={<Box className={`min-w-[160px] ${pathname == Paths.APPLIED && 'border-r-[2px]'}`}>Applied Students</Box>} />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>

    </Box>
  )
}
