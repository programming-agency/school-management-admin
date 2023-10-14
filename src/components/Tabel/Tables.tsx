import React from 'react'
import { TableContainer, Table, TableHead, TableCell, TableBody, Button, Menu, } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const Tables = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableContainer >
      <Table aria-label="spanning table">
        <TableHead >
          <TableCell align='left'>Profile</TableCell>
          <TableCell align='left'> Name</TableCell>
          <TableCell align='left'> Address</TableCell>
          <TableCell align='left'>Coll</TableCell>
          <TableCell align='left'> Email</TableCell>
          <TableCell align='left'> Position</TableCell>
          <TableCell align='left'> Action </TableCell>
        </TableHead>
        <TableBody>
          <TableCell align='left' ><img className='h-10' src="/teachericon.png" alt="" />  </TableCell>
          <TableCell align='left' >Mr. Nimur Hasan</TableCell>
          <TableCell align='left' > Hatiya,Ulipur</TableCell>
          <TableCell align='left' >01777441366</TableCell>
          <TableCell align='left'>nhasan@gmail.com </TableCell>
          <TableCell align='left'>Assistant Teacher</TableCell>
          <TableCell align='left'>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>  <EditIcon /></MenuItem>
                <MenuItem onClick={handleClose}>  <DeleteIcon /></MenuItem>

              </Menu>
            </div>

          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align='left' ><img className='h-10' src="/teachericon.png" alt="" />  </TableCell>
          <TableCell align='left' >Mr. Nimur Hasan</TableCell>
          <TableCell align='left' > Hatiya,Ulipur</TableCell>
          <TableCell align='left' >01777441366</TableCell>
          <TableCell align='left'>nhasan@gmail.com </TableCell>
          <TableCell align='left'>Assistant Teacher</TableCell>
          <TableCell align='left'>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>  <EditIcon /></MenuItem>
                <MenuItem onClick={handleClose}>  <DeleteIcon /></MenuItem>

              </Menu>
            </div>

          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align='left' ><img className='h-10' src="/teachericon.png" alt="" />  </TableCell>
          <TableCell align='left' >Mr. Nimur Hasan</TableCell>
          <TableCell align='left' > Hatiya,Ulipur</TableCell>
          <TableCell align='left' >01777441366</TableCell>
          <TableCell align='left'>nhasan@gmail.com </TableCell>
          <TableCell align='left'>Assistant Teacher</TableCell>
          <TableCell align='left'>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>  <EditIcon /></MenuItem>
                <MenuItem onClick={handleClose}>  <DeleteIcon /></MenuItem>

              </Menu>
            </div>

          </TableCell>
        </TableBody>
        <TableBody>
          <TableCell align='left' ><img className='h-10' src="/teachericon.png" alt="" />  </TableCell>
          <TableCell align='left' >Mr. Nimur Hasan</TableCell>
          <TableCell align='left' > Hatiya,Ulipur</TableCell>
          <TableCell align='left' >01777441366</TableCell>
          <TableCell align='left'>nhasan@gmail.com </TableCell>
          <TableCell align='left'>Assistant Teacher</TableCell>
          <TableCell align='left'>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>  <EditIcon /></MenuItem>
                <MenuItem onClick={handleClose}>  <DeleteIcon /></MenuItem>

              </Menu>
            </div>

          </TableCell>
        </TableBody>
       
      </Table>
    </TableContainer>
  )
}
