import { Box, Paper, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const KnowledgeSection = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const sections = [
    {
      name: "Languages",
      values: ["C#", "Javascript", "Typescript", "Python", "Java"],
    },
    {
      name: "Soft Skills",
      values: [
        "Hard working",
        "Creative",
        "Objective oriented",
        "Client focused",
      ],
    },
    {
      name: "Frameworks & Libraries",
      values: [".NET", "React", "Node", "ExpressJS", "NestJS"],
    },
    {
      name: "ORM's",
      values: ["Entity Framework", "NHibernate", "Prisma"],
    },
    {
      name: "Databases",
      values: ["MySQL", "SQL Server", "PostgreSQL"],
    },
    {
      name: "Testing",
      values: ["NUnit", "XUnit", "Cypress"],
    },
    {
      name: "CI/CD",
      values: ["Jenkins", "Azure DevOps", "GitHub Actions"],
    },
  ];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper
      elevation={8}
      sx={{ backgroundColor: "primary.light", width: "max", p: "2em" }}
    >
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{ color: "black" }}
        >
          {sections.map((section, index) => {
            return <Tab key={index} value={index} label={section.name} />;
          })}
        </Tabs>
      </Box>

      {sections.map((section, index) => {
        return (
          <TabPanel key={"tab-" + index.toString()} value={value} index={index}>
            {section.values.map((value: string, index: number) => {
              return (
                <Typography key={index} variant="body1">
                  {value}
                </Typography>
              );
            })}
          </TabPanel>
        );
      })}
    </Paper>
  );
};

export default KnowledgeSection;
