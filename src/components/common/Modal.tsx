import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FormikForm } from '../common';

import { UpdateUser, User } from '../../interfaces/user';

interface Props {
    isOpen: boolean;
    isClosed: () => void;
    user?: User | null;
    setUser?: any;
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

const BasicModal = ({ isOpen, isClosed, user, setUser }: Props) => {

    const handleSubmit = (values: UpdateUser) => {
        if (values) {
            setUser({
                name: {
                    title: values.title,
                    first: values.firstName,
                    last: values.lastName,
                },
                email: values.email,
                location: {
                    street: {
                        number: values.streetNumber,
                        name: values.streetName,
                    },
                    city: values.city,
                    country: values.country,
                },
            })
        }
    };

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
                    component="div"
                >
                    <FormikForm user={user} isClosed={isClosed} handleSubmit={handleSubmit} />
                </Box>
            </Modal>
        </div>
    );
}

export { BasicModal }