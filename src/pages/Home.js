import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={false} sm={4} md={6} lg={6}>
          <Typography variant="h1">Home</Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction='row' spacing={2}>
            <Button variant="contained" onClick={() => navigate("login")}>
              Login
            </Button>
            <Button variant="contained" onClick={() => navigate("register")}>
              Register
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
