import { List, ListItem, Typography } from "@mui/material";

interface TasksDescriptionProps {
  tasks: string[];
}

const TasksDescription = ({ tasks }: TasksDescriptionProps): JSX.Element => {
  return (
    <List sx={{ listStyleType: "disc", paddingLeft: 2 }}>
      {tasks.map((task, index) => {
        return (
          <ListItem key={index} sx={{ display: "list-item" }} disablePadding>
            <Typography variant="body2">{task}</Typography>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TasksDescription;
