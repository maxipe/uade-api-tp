import { Box, Paper, Stack, Typography } from "@mui/material";
import SimpleCategory from "./categories/SimpleCategory";

const LeftSidePanel = (): JSX.Element => {
  return (
    <Paper elevation={8} sx={{ backgroundColor: "primary.light" }}>
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

            <SimpleCategory
              title="Languages"
              content={["Spanish", "English"]}
            />
            <SimpleCategory
              title="Nationality"
              content="Argentinean, Uruguayan & Spanish"
            />

            <SimpleCategory title="Date of birth" content="1992-01-21" />
            <SimpleCategory
              title="Programming Languages"
              content={["C#", "Javascript", "Typescript", "Python", "Java"]}
            />
            <SimpleCategory
              title="Frameworks and Libraries"
              content={[".NET", "React", "Node", "ExpressJS", "NestJS"]}
            />
            <SimpleCategory
              title="ORM's"
              content={["Entity Framework", "NHibernate", "Prisma"]}
            />
            <SimpleCategory
              title="Databases"
              content={["MySQL", "SQL Server", "PostgreSQL"]}
            />
            <SimpleCategory
              title="Testing Tools"
              content={["NUnit", "XUnit", "Cypress"]}
            />
            <SimpleCategory
              title="Continuous Integration"
              content={["Jenkins", "Azure DevOps", "GitHub Actions"]}
            />
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default LeftSidePanel;
