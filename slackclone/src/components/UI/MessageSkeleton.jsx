
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

export default function MessageSkeleton() {
    return (
        <Grid marginTop={2} container spacing={2}>
            <Grid marginTop={1} width={'55px'} xs={2} >
                <Skeleton variant="rectangular" width={40} height={40} />
            </Grid>
            <Grid xs>
                <Stack direction={"row"}
                    spacing={1}
                >
                    <Skeleton variant="text" width={'40rem'} />
                </Stack>
                <Skeleton variant="rectangular" width={'60rem'} height={'15rem'} />

            </Grid>

        </Grid>
    );
}

