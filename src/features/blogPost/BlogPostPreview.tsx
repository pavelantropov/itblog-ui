import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface BlogPostPreviewProps {
  blogPostId: string;
  title?: string;
  body?: string;
  creationDate?: Date;
}

export default function BlogPostPreview({
  blogPostId,
  title,
  body,
  creationDate,
}: BlogPostPreviewProps) {
  return (
    <>
      <Typography variant="h1" component="div" gutterBottom>
        <Link href={blogPostId}>
          {title ?? "***"}
        </Link>
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Posted: {creationDate ? creationDate.toLocaleString() : "unknown"}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {body ?? "-"}
      </Typography>
      <Divider sx={{ mt: "20px", mb: "10px" }} />
    </>
  );
}
