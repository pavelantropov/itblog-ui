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
      {blogPosts.length > 0 &&
        blogPosts.map((blogPost, index) => (
          <BlogPostPreview
            key={`blogPost_${index}`}
            blogPostId={blogPost.id}
            title={blogPost.title}
            body={blogPost.body}
            creationDate={blogPost.creationDate}
          />
        ))}
    </>
  );
}
