import { Box, Typography } from "@mui/material";

export interface JobExperienceTitleProps {
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
}

const JobExperienceTitle = ({
  position,
  company,
  startDate,
  endDate,
}: JobExperienceTitleProps): JSX.Element => {
  const datesElement = (
    <>
      {startDate} - {endDate ?? "Present"}
    </>
  );

  const positionElement = (
    <Box sx={{ fontWeight: "bold", display: "inline" }}>{position}</Box>
  );
  return (
    <>
      <Typography variant="body1" component="div">
        {datesElement} : {positionElement} - {company}
      </Typography>
    </>
  );
};

export default JobExperienceTitle;
