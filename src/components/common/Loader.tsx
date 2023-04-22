import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '../common';

const MuiLoader = () => {
    return (
        <Container style={{ display: "flex", alignItems: "center", height: "100vh" }}>
            <CircularProgress
                size={68}
                sx={{
                    color: "green",
                    margin: "auto",
                    zIndex: 1,
                }}
            />
        </Container>
    )
};

export { MuiLoader };