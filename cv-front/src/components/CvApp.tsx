import { Grid, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import BasicInfoSection from "./sections/BasicInfoSection";
import AboutMeSection from "./sections/AboutMeSection";
import JobExperienceSection from "./sections/JobExperienceSection";
import jobs from "../jobs";
import KnowledgeSection from "./sections/KnowledgeSection";
import ContactMeSection from "./sections/ContactMeSection";
import EducationSection from "./sections/EducationSection";

const CvApp = (): JSX.Element => {
  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Grid container direction="row" spacing={4} justifyContent="center">
        <Grid item xs={12} sm={5} lg={3} xl={2} sx={{ minHeight: "100" }}>
          <BasicInfoSection />
        </Grid>
        <Grid item xs={12} sm={7} lg={9} xl={9}>
          <Stack direction="column" spacing={2}>
            <AboutMeSection />
            <JobExperienceSection jobs={jobs} />
            <EducationSection />
            <KnowledgeSection />
            <ContactMeSection />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CvApp;
