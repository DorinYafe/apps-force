import React, { useEffect, useState } from 'react';
import useGetUsers from '../hooks/useGetUsers';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button, Container, MuiAvatar, MuiCard, Title, BasicModal, MuiLoader, MuiError } from './common';
import Header from './Header';

import { User as UserInterface } from '../interfaces/user';

const User: React.FC = () => {
    const { isLoading, isError, data, users } = useGetUsers();
    const [usersList, setUsersList] = useState<UserInterface[]>([]);
    const [user, setUser] = useState<UserInterface | null>(null);
    const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);

    const openBasicModal = () => {
        setIsBasicModalOpen(true);
    }

    const closeBasicModal = () => {
        setIsBasicModalOpen(false);
        setUser(null);
    }

    const handleClick = (user: UserInterface) => {
        setUser(user);
        openBasicModal();
    }

    useEffect(() => {
        //TODO:
        //extract users from localStorage and render it instead of data
        setUsersList(data);
        console.log(usersList)
    }, [data, users, usersList]);

    return (
        <Container>
            <Header />
            {isBasicModalOpen && <BasicModal isOpen={isBasicModalOpen} isClosed={closeBasicModal} user={user} setUser={setUser} />}
            {isLoading ? <MuiLoader /> : isError ? <MuiError /> :
                usersList && usersList.map((user: UserInterface) => {
                    return (
                        <div key={user.login.uuid}>
                            <MuiCard>
                                <MuiAvatar alt={user.name.first} src={user.picture.medium} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {`${user.name.title} ${user.name.first} ${user.name.last}`}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <Title>From:</Title>
                                        {
                                            `${user.location.street.name} ${user.location.street.number}, 
                                        ${user.location.city}, 
                                        ${user.location.country}`
                                        }
                                    </Typography>
                                    <Divider />
                                    <Typography variant="body2" color="text.secondary">
                                        <Title>You can reach them at...</Title>
                                        {` ${user.email}`}
                                    </Typography>
                                    <Button onClick={() => handleClick(user)} >Edit</Button>
                                </CardContent>
                            </MuiCard>
                        </div>
                    )
                })}
        </Container>
    )
};

export default User;