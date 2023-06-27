import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContactTable, { ContactDataEntry } from "./basic/ContactTable";

const ContactRequests = (): JSX.Element => {
  const entries: ContactDataEntry[] = [
    {
      name: "John Doe",
      email: "jdoe@example.com",
      phone: "+5491154037763",
      message: "I want to hire you",
    },
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "+5491155445544",
      message: "I want to hire you too",
    },
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "+5491155445544",
      message: "I want to hire you too",
    },
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "+5491155445544",
      message: "I want to hire you too",
    },
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "+5491155445544",
      message: "I want to hire you too",
    },
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "+5491155445544",
      message: "I want to hire you too",
    },
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "+5491155445544",
      message: "I want to hire you too",
    },
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "+5491155445544",
      message: "I want to hire you too",
    },
  ];

  const navigation = useNavigate();
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
            {/* <Paper elevation={8} sx={{ backgroundColor: "white", p: 4 }}> */}
            <ContactTable rows={entries} />
            {/* </Paper> */}
            <Button
              id="submit"
              variant="contained"
              onClick={() => {
                navigation("/");
              }}
            >
              Log out
            </Button>
          </Stack>
        </Box>
      </Paper>
    </>
  );
};

export default ContactRequests;
