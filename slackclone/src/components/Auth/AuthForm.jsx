import Card from "../UI/Card"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from "../../store/auth-slice";
import { useEffect } from "react";

export const AuthForm = () => {
    const {  userInfo, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const nav = useNavigate();
    const {
        value: nameValue,
        onChange: nameChangeHandler,
    } = useInput((value) => value.trim().length > 0);


    const {
        value: passValue,
        onChange: passChangeHandler,
    } = useInput((value) => value.trim().length > 0);

    const submittedHandler = (e) => {
        e.preventDefault();
        dispatch(userLogin({ username: nameValue, password: passValue }));

    }

    useEffect(() => {
        if (userInfo) {
            nav('/chat')
        }
    }, [nav, userInfo])

    return (
        <Card>
            <Typography variant="h4"
                fontFamily={'Montserrat'}
                fontWeight={500}
                textTransform={"uppercase"} textAlign={"center"} gutterBottom >
                Sign in
            </Typography>

            <form onSubmit={submittedHandler}>
                <Grid container spacing={2}>
                    <Grid xs={12} justifyContent={"center"}>
                        <TextField
                            sx={{ width: "100%" }}
                            autoComplete="username"
                            id="username"
                            label="Username"
                            onChange={nameChangeHandler}
                            value={nameValue}
                            variant="outlined" required />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            value={passValue}
                            onChange={passChangeHandler}
                            sx={{ width: "100%" }}
                            autoComplete="current-password"
                            id="password" label="Password" variant="outlined" required type="password" />
                    </Grid>

                    <Grid xs={12}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        marginBlock={1.2}
                    >
                        <Button
                            type="submit"
                            variant="contained">accept</Button>
                    </Grid>
                </Grid>
                {error &&
                    <Grid display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}>
                        <span style={{ textAlign: 'center', color: 'red' }}>{error}</span>
                    </Grid>
                }
            </form>
        </Card>
    )
}
