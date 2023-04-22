import { useQuery } from 'react-query';
import axios from 'axios';

const useGetUsers = () => {
    const { isLoading, isError, data, error, refetch } = useQuery(["userReq"], () =>
        axios.get("https://randomuser.me/api/?results=10")
            .then((res) => res.data.results)
    );

    return [isLoading, isError, data, error, refetch];
};

export default useGetUsers;
