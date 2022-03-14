import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
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
          ? blogPost.creationDate.toLocaleString()
          : "unknown"}
      </Typography>
      <Typography variant="body2" mb={2}>
        Last update:{" "}
        {blogPost?.lastUpdateDate
          ? blogPost.lastUpdateDate.toLocaleString()
          : "unknown"}
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
