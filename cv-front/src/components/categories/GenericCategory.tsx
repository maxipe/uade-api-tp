import { Typography } from "@mui/material";

interface CategoryProps {
  title: string;
  content: JSX.Element;
}

const GenericCategory = ({ title, content }: CategoryProps): JSX.Element => {
  return (
    <div>
      <Typography variant="h6">{title}</Typography>
      {content}
    </div>
  );
};

export default GenericCategory;
