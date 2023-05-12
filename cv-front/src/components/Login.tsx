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

const Login = (): JSX.Element => {
  const navigation = useNavigate();
  return (
    <Paper elevation={8} sx={{ backgroundColor: "primary.light" }}>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{ p: "1em" }}
      >
        <Typography variant="h2">Login</Typography>
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
          Login
        </Button>
      </Stack>
    </Paper>
  );
};

export default Login;
