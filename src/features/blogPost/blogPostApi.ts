import { DefaultBlogPosts } from "./testData";
import { FetchBlogPostResponse, FetchBlogPostsResponse } from "./types";

export function fetchBlogPost(
  blogPostId: string
): Promise<FetchBlogPostResponse> {
  if (process.env.NODE_ENV === "test" || true) {
    return new Promise<FetchBlogPostResponse>((resolve) => {
      let blogPost;

      DefaultBlogPosts.forEach(post => {
        if (post.blogPostId === blogPostId)
          blogPost = post;
      });

      resolve({
        blogPost: blogPost ?? DefaultBlogPosts[0],
      } as FetchBlogPostResponse);
    });
  } else {
    throw new Error("Not implemented");
  }
}

export function fetchBlogPosts(): Promise<FetchBlogPostsResponse> {
  if (process.env.NODE_ENV === "test" || true) {
    return new Promise<FetchBlogPostsResponse>((resolve) => {
      resolve({
        blogPosts: DefaultBlogPosts,
      } as FetchBlogPostsResponse);
    });
  } else {
    throw new Error("Not implemented");
  }
}
