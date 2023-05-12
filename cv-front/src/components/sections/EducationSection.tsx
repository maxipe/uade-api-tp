import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const EducationSection = (): JSX.Element => {
  const careerUade = (
    <Box sx={{ fontWeight: "bold", display: "inline" }}>
      Software Engineering - UADE
    </Box>
  );
  const careerUba = (
    <Box sx={{ fontWeight: "bold", display: "inline" }}>
      Software Engineering - UBA
    </Box>
  );
  return (
    <Paper
      elevation={8}
      sx={{ backgroundColor: "primary.light", width: "max", p: "2em" }}
    >
      <Stack direction="column" spacing={0}>
        <Typography variant="h6">Education</Typography>
        <>
          <Typography variant="body1" component="div">
            {careerUade}
          </Typography>
          <Typography variant="body2">2021-2024 (Expected)</Typography>
        </>
        <>
          <Typography variant="body1" component="div">
            {careerUba}
          </Typography>
          <Typography variant="body2">2010 - Transfered</Typography>
        </>
      </Stack>
    </Paper>
  );
};

export default EducationSection;
