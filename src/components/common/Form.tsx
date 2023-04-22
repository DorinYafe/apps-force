import Input from '@mui/material/Input';
import { Button, ButtonsContainer } from './Button';
import { User } from '../../interfaces/user';

interface Props {
    user: User | null;
    isClosed: () => void;
}

const Form = ({ user, isClosed }: Props) => {
    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', margin: 'auto' }}>
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
                <Input
                    required
                    id="email"
                    name="email"
                    defaultValue={`${user?.email}`}
                />
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
        </form>
    )
};

export { Form };