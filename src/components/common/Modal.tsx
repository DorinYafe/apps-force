import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Form } from '../common';

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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BasicModal = ({ isOpen, isClosed, user }: Props) => {

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
                    autoComplete="off"
                >
                    <Form user={user} isClosed={isClosed} />
                </Box>
            </Modal>
        </div>
    );
}

export { BasicModal }