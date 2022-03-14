import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useParams } from "react-router-dom";
import { fetchBlogPost } from "./blogPostApi";
import { BlogPost } from "./types";

export default function BlogPostPage() {
  const { blogPostId } = useParams();
  const [blogPost, setBlogPost] = React.useState<BlogPost>();

  React.useEffect(() => {
    fetchBlogPost(blogPostId!).then((res) => setBlogPost(res.blogPost));
  }, [blogPostId]);

  return (
    <>
      <Typography variant="h1">{blogPost?.title ?? "***"}</Typography>
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
          <Chip 
            key={`blogPost_${index}`} 
            label={tag} 
            sx={{ mr: 0.5 }} 
          />
        ))}
    </>
  );
}
