import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { User as UserInterface } from '../interfaces/user';
import { Button, Container, MuiAvatar, MuiCard, Title, BasicModal } from './common';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const User: React.FC = () => {
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [user, setUser] = useState<UserInterface | null>(null);
    const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);
    const { isLoading, isError, data, error, refetch } = useQuery(["userReq"], () =>
        axios.get("https://randomuser.me/api/?results=10")
            .then((res) => setUsers(res.data.results))
    )

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

    return (
        <Container>
            {isBasicModalOpen && <BasicModal isOpen={isBasicModalOpen} isClosed={closeBasicModal} user={user} />}
            {users && users.map((user: UserInterface) => {
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