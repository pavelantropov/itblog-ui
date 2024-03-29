import React, { useState } from "react";
import { fetchBlogPosts } from "./blogPostApi";
import BlogPostPreview from "./BlogPostPreview";
import { BlogPost } from "./types";

export default function BlogPostsList() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  React.useEffect(() => {
    fetchBlogPosts().then((res) => setBlogPosts(res.blogPosts));
  }, []);

  return (
    <>
      {blogPosts.length > 0 &&
        blogPosts.map((blogPost, index) => (
          <BlogPostPreview
            key={`blogPost_${index}`}
            {...blogPost}
          />
        ))}
    </>
  );
}
