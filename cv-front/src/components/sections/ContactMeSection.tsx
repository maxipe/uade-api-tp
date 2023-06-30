import {
  Alert,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { config } from "../../config";

const ContactMeSection = (): JSX.Element => {
  const [error, setError] = useState<string | undefined>();
  const [showMessageSent, setShowMessageSent] = useState(false);
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

  const requestContact = async () => {
    try {
      const response = await axios.post(
        config.backendUrl + "/contact-requests",
        {
          name,
          email,
          phone,
          message,
        }
      );
      if (response.status == 201) {
        setShowMessageSent(true);
      }
    } catch (error) {
      setError("Unknown error");
    }

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
        {showMessageSent ? (
          <Alert severity="success" onClose={() => setShowMessageSent(false)}>
            Message sent!
          </Alert>
        ) : (
          <></>
        )}
        {error ? <Alert severity="error">{error}</Alert> : <></>}
      </Stack>
    </Paper>
  );
};

export default ContactMeSection;
