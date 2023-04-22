import { useQuery } from 'react-query';
import axios from 'axios';
import { UpdateUser, User } from '../interfaces/user';

const useGetUsers = () => {
    const { isLoading, isError, data, error, refetch } = useQuery(["userReq"], () =>
        axios.get("https://randomuser.me/api/?results=10")
            .then((res) => res.data.results)
    );

    const users = data && data.map((user: User) => ({
        title: user.name.title,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        streetName: user.location.street.name,
        streetNumber: user.location.street.number,
        city: user.location.city,
        country: user.location.country,
    }))

    localStorage.setItem('users', JSON.stringify(users));

    return { isLoading, isError, data, error, refetch, users };
};

export default useGetUsers;
