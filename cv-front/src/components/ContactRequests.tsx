import { Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactRequests = (): JSX.Element => {
  const navigation = useNavigate();
  return (
    <>
      <Paper elevation={8} sx={{ backgroundColor: "primary.light" }}>
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          sx={{ p: "1em" }}
        >
          <Typography variant="h2">Contact Requests</Typography>
        </Stack>
      </Paper>
      <Paper
        elevation={8}
        sx={{ backgroundColor: "primary.light", marginTop: "2em" }}
      >
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          sx={{ p: "1em" }}
        >
          <div>
            <Typography variant="h5">Juan Perez</Typography>
            <Typography variant="body1">jperez@example.com</Typography>
            <Typography variant="body1">+5491154037763</Typography>
          </div>

          <div>
            <Typography variant="h5">Pedro Diaz</Typography>
            <Typography variant="body1">pdiaz@example.com</Typography>
            <Typography variant="body1">+5491155445544</Typography>
          </div>

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
      </Paper>
    </>
  );
};

export default ContactRequests;
