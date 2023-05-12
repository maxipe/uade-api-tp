import { Grid, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import LeftSidePanel from "./LeftSidePanel";
import AboutMeSection from "./sections/AboutMeSection";
import JobExperienceSection from "./sections/JobExperienceSection";
import jobs from "../jobs";
import KnowledgeSection from "./sections/KnowledgeSection";

const CvApp = (): JSX.Element => {
  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Grid container direction="row" spacing={4} justifyContent="center">
        <Grid item xs={12} sm={5} lg={3} xl={2}>
          <LeftSidePanel />
        </Grid>
        <Grid item xs={12} sm={7} lg={7} xl={6}>
          <Stack direction="column" spacing={2}>
            <AboutMeSection />
            <JobExperienceSection jobs={jobs} />
            <KnowledgeSection />
            {/* <EducationSection /> */}
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CvApp;
