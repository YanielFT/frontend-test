
import { AuthForm } from '../components/Auth/AuthForm'

import Container from '@mui/material/Container';
export const Login = () => {
    return (
        <Container
            sx={{
                width: "100%",
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "6rem"
            }}>
            <AuthForm />
        </Container>
    )
}
