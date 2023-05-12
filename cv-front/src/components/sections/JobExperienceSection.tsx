import { Paper, Stack } from "@mui/material";
import GenericCategory from "../categories/GenericCategory";
import JobExperienceTitle, {
  JobExperienceTitleProps,
} from "../categories/jobExperience/JobExperienceTitle";
import ProjectsDescription, {
  Project,
} from "../categories/jobExperience/ProjectsDescription";
import TasksDescription from "../categories/jobExperience/TasksDescription";

interface JobExperienceSectionProps {
  jobs: JobExperience[];
}

interface JobExperience extends JobExperienceTitleProps {
  tasks?: string[];
  projects?: Project[];
}

const JobExperienceSection = ({
  jobs,
}: JobExperienceSectionProps): JSX.Element => {
  const jobsElement = (
    <>
      {jobs.map(
        ({ position, company, startDate, endDate, tasks, projects }, index) => {
          return (
            <div key={index}>
              <JobExperienceTitle
                company={company}
                position={position}
                startDate={startDate}
                endDate={endDate}
              />

              <Stack direction="column" sx={{ pb: "1em", pl: "1em" }}>
                {tasks && <TasksDescription tasks={tasks} />}

                {projects && <ProjectsDescription projects={projects} />}
              </Stack>
            </div>
          );
        }
      )}
    </>
  );

  return (
    <Paper
      elevation={8}
      sx={{ backgroundColor: "primary.light", width: "max", p: "2em" }}
    >
      <GenericCategory title="Experience" content={jobsElement} />
    </Paper>
  );
};

export default JobExperienceSection;
