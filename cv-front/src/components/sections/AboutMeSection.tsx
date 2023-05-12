import { Paper } from "@mui/material";
import SimpleCategory from "../categories/SimpleCategory";

const AboutMeSection = (): JSX.Element => {
  return (
    <Paper
      elevation={8}
      sx={{ backgroundColor: "primary.light", width: "max", p: "2em" }}
    >
      <SimpleCategory
        title="About Me"
        content="A polyglot programmer, passionate about delivering value through high quality software and enriching the end user experience. An avid learner and enthusiast about exploring new languages and frameworks."
      />
    </Paper>
  );
};

export default AboutMeSection;
