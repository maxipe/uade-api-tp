import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config";

const Register = (): JSX.Element => {
  const [error, setError] = useState<string | undefined>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submit = async () => {
    try {
      const response = await axios.post(config.backendUrl + "/users/register", {
        username,
        password,
      });
      if (response.status == 200) {
        navigation("/login");
      }
    } catch (error) {
      const axiosError = error as AxiosError;

      const apiResponse = axiosError.response?.data as {
        message: string | undefined;
      };

      setError(apiResponse.message ?? "Unknown error");
    }
  };

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
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={onChangeUsername}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            <Button id="submit" variant="contained" onClick={submit}>
              Register
            </Button>
            {error ? <Alert severity="error">{error}</Alert> : <></>}
          </Stack>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Register;
