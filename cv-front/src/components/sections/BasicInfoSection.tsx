import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import GenericCategory from "../categories/GenericCategory";
import SimpleCategory from "../categories/SimpleCategory";

const BasicInfoSection = (): JSX.Element => {
  return (
    <Paper
      elevation={8}
      sx={{ backgroundColor: "primary.light", minHeight: "100%" }}
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{ p: "1em" }}
      >
        <Paper elevation={0} sx={{ backgroundColor: "inherit", p: 1 }}>
          <Typography variant="h4">Maximiliano Peña</Typography>
          <Typography variant="h5">Software Developer</Typography>
        </Paper>

        <Box
          component="img"
          sx={{
            objectFit: "fill",
            paddingX: "1em",
            borderRadius: "100%",
          }}
          alignSelf="normal"
          alt="Photo of Maximiliano Peña"
          src="/Me.png"
        />

        <Paper elevation={0} sx={{ backgroundColor: "inherit", p: 1 }}>
          <Stack direction="column" spacing={2}>
            <SimpleCategory title="Email" content={"maxipenia@gmail.com"} />
            <SimpleCategory
              title="Location"
              content={"Buenos Aires, Argentina"}
            />

            <SimpleCategory title="Phone" content="+54-911-54037763" />

            <GenericCategory
              title="LinkedIn"
              content={
                <Link
                  href="https://www.linkedin.com/in/maximilianope"
                  sx={{ color: "black" }}
                >
                  https://www.linkedin.com/in/maximilianope
                </Link>
              }
            />

            <SimpleCategory
              title="Languages"
              content={["Spanish", "English"]}
            />
            <SimpleCategory
              title="Nationality"
              content="Argentinean & Spanish"
            />

            <SimpleCategory title="Date of birth" content="1992-01-21" />
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default BasicInfoSection;
