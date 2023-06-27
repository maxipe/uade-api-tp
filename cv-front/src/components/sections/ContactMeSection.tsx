import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ContactMeSection = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const requestContact = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <Paper
      elevation={8}
      sx={{ backgroundColor: "primary.light", width: "max", p: "2em" }}
    >
      <Stack direction="column" spacing={2}>
        <Typography variant="h6">Contact Me</Typography>

        <TextField
          id="name"
          label="Full Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={onChangeName}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={onChangeEmail}
        />
        <TextField
          id="phone"
          label="Phone"
          variant="outlined"
          fullWidth
          value={phone}
          onChange={onChangePhone}
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          minRows={3}
          maxRows={3}
          value={message}
          onChange={onChangeMessage}
        />
        <Button id="submit" variant="contained" onClick={requestContact}>
          Request Contact
        </Button>
      </Stack>
    </Paper>
  );
};

export default ContactMeSection;
