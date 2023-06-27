import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = (): JSX.Element => {
  const navigation = useNavigate();
  return (
    <Paper elevation={8} sx={{ backgroundColor: "primary.light" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper elevation={8} sx={{ backgroundColor: "white" }}>
          <Stack
            direction="column"
            spacing={4}
            m={4}
            alignItems="center"
            sx={{ p: "1em" }}
          >
            <Typography variant="h2">Register</Typography>
            <TextField id="username" label="Username" variant="outlined" />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            />
            <Button
              id="submit"
              variant="contained"
              onClick={() => {
                navigation("/contact-requests");
              }}
            >
              Register
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Register;
