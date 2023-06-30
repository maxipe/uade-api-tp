import { Alert, Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContactTable, { ContactDataEntry } from "./basic/ContactTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../config";

const ContactRequests = (): JSX.Element => {
  const [entries, setEntries] = useState<ContactDataEntry[]>([]);

  const [error, setError] = useState<string | undefined>();

  const navigation = useNavigate();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const token = localStorage.getItem("token") as string;
        const response = await axios.get(
          config.backendUrl + "/contact-requests",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.status == 200) {
          setEntries(response.data as ContactDataEntry[]);
        }
      } catch (error) {
        setError("Unknown error");
      }
    };
    void makeRequest();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigation("/login");
    }
  }, [navigation]);

  const logout = () => {
    localStorage.removeItem("token");
    navigation("/");
  };

  return (
    <>
      <Paper elevation={8} sx={{ backgroundColor: "primary.light" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            sx={{ p: "1em" }}
          >
            <Typography variant="h2">Contact Requests</Typography>

            <ContactTable rows={entries} />

            <Button id="submit" variant="contained" onClick={logout}>
              Log out
            </Button>
            {error ? <Alert severity="error">{error}</Alert> : <></>}
          </Stack>
        </Box>
      </Paper>
    </>
  );
};

export default ContactRequests;
