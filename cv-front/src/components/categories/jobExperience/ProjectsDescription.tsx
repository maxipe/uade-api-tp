import { List, ListItem, Typography } from "@mui/material";

export interface Project {
  name: string;
  tasks: string[];
}

interface ProjectsDescriptionProps {
  projects: Project[];
}

const ProjectsDescription = ({
  projects,
}: ProjectsDescriptionProps): JSX.Element => {
  return (
    <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
      {projects.map((project) => {
        return (
          <ListItem
            key={project.name}
            sx={{ display: "list-item" }}
            disablePadding
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              {project.name}:
            </Typography>

            <List sx={{ listStyleType: "circle", paddingLeft: 2 }}>
              {project.tasks.map((task, index) => {
                return (
                  <ListItem
                    key={index}
                    sx={{ display: "list-item" }}
                    disablePadding
                  >
                    <Typography variant="body2">{task}</Typography>
                  </ListItem>
                );
              })}
            </List>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ProjectsDescription;
