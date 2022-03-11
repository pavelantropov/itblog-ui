import { Link, Typography } from "@mui/material";
import * as React from "react";

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
    </>
  );
}
