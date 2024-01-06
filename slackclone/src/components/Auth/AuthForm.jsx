import Card from "../UI/Card"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate}  from "react-router-dom";
export const AuthForm = () => {
    
    const nav = useNavigate();
    const onCLick = () => {
        nav("/home")
      }
    
    return (
        <Card>
            <Typography variant="h4"
                fontFamily={'Montserrat'}
                fontWeight={500}
                textTransform={"uppercase"} textAlign={"center"} gutterBottom >
                Sign in
            </Typography>

            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} justifyContent={"center"}>
                        <TextField
                            sx={{ width: "100%" }}
                            autoComplete="username"
                            id="username" label="Username" variant="outlined" required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ width: "100%" }}
                            autoComplete="current-password"
                            id="password" label="Password" variant="outlined" required type="password" />
                    </Grid>
                    <Grid item xs={12}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        marginBlock={1.2}
                    >
                        <Button
                            onClick={onCLick}
                            variant="contained">accept</Button>
                    </Grid>
                </Grid>
            </form>
        </Card>
    )
}
