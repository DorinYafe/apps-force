import { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import { MuiTextField } from './TextField';
import { Button, ButtonsContainer } from '../common';

import { User } from '../../interfaces/user';

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
    const [updatedUser, setUpdatedUser] = useState(user);

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
                        <Input
                            required
                            id="title"
                            name="title"
                            defaultValue={user?.name.title}
                        />
                        <Input
                            required
                            id="firstName"
                            name="firstName"
                            defaultValue={user?.name.first}
                        />
                        <Input
                            required
                            id="lastName"
                            name="lastName"
                            defaultValue={user?.name.last}
                        />
                    </div>
                    <div>
                        <Input
                            required
                            id="email"
                            name="email"
                            defaultValue={`${user?.email}`}
                        />
                    </div>
                    <div>
                        <Input
                            required
                            id="streetName"
                            name="streetName"
                            defaultValue={user?.location.street.name}
                        />
                        <Input
                            required
                            id="streetNumber"
                            name="streetNumber"
                            defaultValue={user?.location.street.number}
                        />
                        <Input
                            required
                            id="city"
                            name="city"
                            defaultValue={user?.location.city}
                        />
                        <Input
                            required
                            id="country"
                            name="country"
                            defaultValue={user?.location.country}
                        />
                    </div>
                    <ButtonsContainer>
                        <Button type='button' onClick={() => console.log(user)}>Save</Button>
                        <Button type='button' onClick={isClosed}>Close</Button>
                    </ButtonsContainer>
                </Box>
            </Modal>
        </div>
    );
}

export { BasicModal }