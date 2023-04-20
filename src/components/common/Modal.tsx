import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { User } from '../../interfaces/user';
import { MuiTextField } from './TextField';

interface Props {
    isOpen: boolean;
    isClosed: () => void;
    user: User | null;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BasicModal = ({ isOpen, isClosed, user }: Props) => {
    console.log(user)
    return (
        <div>
            <Modal
                open={isOpen}
                onClose={isClosed}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                    component="form"
                    noValidate
                    autoComplete="off">
                    <div>
                        <MuiTextField
                            required
                            id="title"
                            label="Title is required"
                            defaultValue={user?.name.title}
                            width="20%"
                        />
                        <MuiTextField
                            required
                            id="first"
                            label="Forename is required"
                            defaultValue={user?.name.first}
                            width="32%"
                        />
                        <MuiTextField
                            required
                            id="last"
                            label="Surname is required"
                            defaultValue={user?.name.last}
                            width="32%"
                        />
                    </div>
                    <div>
                        <MuiTextField
                            required
                            id="email"
                            label="Email is required"
                            defaultValue={`${user?.email}`}
                            width="93.5%"
                        />
                    </div>
                    <div>
                        <MuiTextField
                            required
                            id="streetName"
                            label="Street is required"
                            defaultValue={user?.location.street.name}
                            width="20%"
                        />
                        <MuiTextField
                            required
                            id="streetNumber"
                            label="Number is required"
                            defaultValue={user?.location.street.number}
                            width="20%"
                        />
                        <MuiTextField
                            required
                            id="city"
                            label="City is required"
                            defaultValue={user?.location.city}
                            width="20%"
                        />
                        <MuiTextField
                            required
                            id="country"
                            label="Country is required"
                            defaultValue={user?.location.country}
                            width="20%"
                        />
                    </div>

                </Box>
            </Modal>
        </div>
    );
}

export { BasicModal }