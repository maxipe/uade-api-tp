import { Typography } from "@mui/material";
import GenericCategory from "./GenericCategory";

interface CategoryProps {
  title: string;
  content: string[] | string;
}

const SimpleCategory = ({ title, content }: CategoryProps): JSX.Element => {
  const parsedContent: string[] =
    content instanceof Array ? content : [content];

  const contentElement = (
    <>
      {parsedContent.map((content: string, index: number) => (
        <Typography key={index} variant="body1">
          {content}
        </Typography>
      ))}
    </>
  );

  return <GenericCategory title={title} content={contentElement} />;
};

export default SimpleCategory;
