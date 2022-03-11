import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { fetchBlogPosts } from "./blogPostApi";
import BlogPostPreview from "./BlogPostPreview";
import { BlogPost } from "./types";

export default function BlogPostsList() {
  const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    fetchBlogPosts().then((res) => setBlogPosts(res.blogPosts));
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 1000, ml: "3vw", mt: "3vh" }}>
        {blogPosts.length > 0 &&
          blogPosts.map((blogPost, index) => (
            <>
              <BlogPostPreview
                key={`blogPost_${index}`}
                blogPostId={blogPost.blogPostId}
                title={blogPost.title}
                body={blogPost.body}
                creationDate={blogPost.creationDate}
              />
              <Divider sx={{ mt: "2vh", mb: "1vh" }} />
            </>
          ))}
      </Box>
    </>
  );
}
