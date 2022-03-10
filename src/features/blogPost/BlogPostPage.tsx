import { Typography, Box } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { fetchBlogPost } from "./blogPostApi";
import { BlogPost } from "./types";

export default function BlogPostPage() {
  const { blogPostId } = useParams();
  const [blogPost, setBlogPost] = React.useState<BlogPost>();

  React.useEffect(() => {
    fetchBlogPost(blogPostId!).then((res) => setBlogPost(res.blogPost));
  }, [blogPost]);

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 1000, ml: "3vw", mt: "3vh" }}>
        <Typography variant="h1" component="div" gutterBottom>
          {blogPost?.title ?? "***"}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Posted:{" "}
          {blogPost?.creationDate ? blogPost.creationDate.toLocaleDateString() : "unknown"}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {blogPost?.body ?? "-"}
        </Typography>
      </Box>
    </>
  );
}
