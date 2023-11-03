import { Button, Menu } from '@mui/material'
import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { SERVER_URL } from '../config/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Props = {
    student: any,
    setStudent: any,
}

export default function StudentActionComponents({ student, setStudent }: Props) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const Navigate = useNavigate();
    // const { id } = useParams<{ id: string }>();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleEdit = (_id: string) => {
        console.log(_id);
        Navigate(`/app/updateStudent/${_id}`)

        console.log('Click edit');
    };

    const handleDelete = async (_id: string) => {
        try {
            await axios.delete(`${SERVER_URL}/api/students/${_id}`);
            setStudent((prevStudents: any) => prevStudents.filter((student: any) => student._id !== _id));

        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };
    return (
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
                onClick={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleEdit(student._id)}>
                    <EditIcon />
                </MenuItem>
                <MenuItem onClick={() => handleDelete(student._id)}>
                    <DeleteIcon />
                </MenuItem>


            </Menu>
        </div>
    )
}
