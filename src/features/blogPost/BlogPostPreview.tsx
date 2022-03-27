import {
  Chip, //
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { BlogPost } from "./types";

export default function BlogPostPreview(blogPost: BlogPost) {
  return (
    <>
      <Typography variant="h2" component="h2">
        <Link href={blogPost.id}>{blogPost.title ?? "***"}</Link>
      </Typography>
      <Typography variant="body2">
        Posted:{" "}
        {blogPost?.creationDate
          ? blogPost.creationDate.toLocaleString() //
          : "-"}
      </Typography>
      <Typography variant="body2" mb={2}>
        Last update:{" "}
        {blogPost?.lastUpdateDate
          ? blogPost.lastUpdateDate.toLocaleString() //
          : "-"}
      </Typography>
      <Typography variant="body1" mb={1.5}>
        {blogPost?.body ?? "-"}
      </Typography>
      <Typography variant="body1" mb={1.5}>
        @{blogPost?.author ?? "Anonimous"}
      </Typography>
      {blogPost?.tags &&
        blogPost.tags.length > 0 &&
        blogPost.tags.map((tag, index) => (
          <Chip key={`blogPost_${index}`} label={tag} sx={{ mr: 0.5 }} />
        ))}
      <Divider sx={{ mt: "20px", mb: "10px" }} />
    </>
  );
}
