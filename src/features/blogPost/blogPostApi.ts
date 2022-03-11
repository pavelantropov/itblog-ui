import { DefaultBlogPosts } from "./testData";
import { FetchBlogPostResponse, FetchBlogPostsResponse } from "./types";

export function fetchBlogPost(
  blogPostId: string
): Promise<FetchBlogPostResponse> {
  if (process.env.NODE_ENV === "test" || true) {
    return new Promise<FetchBlogPostResponse>((resolve) => {
      const blogPost = {
        title: "Test blog post",
        body: "My name is Pavel Antropov and I'm the author of this blog. I hope that the support of the blog will help me to improve my knowledge and understanding of the various important topics connected with full-stack .NET development, as writing these posts I'm going to repeat and research the corresponding information.",
        creationDate: new Date(),
      };

      resolve({
        blogPost,
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
