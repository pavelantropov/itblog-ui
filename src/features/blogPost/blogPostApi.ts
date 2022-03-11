import { DefaultBlogPosts } from "./testData";
import {
  CreateBlogPostRequest,
  CreateBlogPostResponse,
  FetchBlogPostResponse,
  FetchBlogPostsResponse,
} from "./types";

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

export async function createBlogPost(
  params: CreateBlogPostRequest
): Promise<CreateBlogPostResponse> {
  if (process.env.NODE_ENV === "test" || true) {
    return new Promise<CreateBlogPostResponse>((resolve) => {
      resolve({} as CreateBlogPostResponse);
    });
  } else {
    return await fetch(`${process.env.REACT_APP_API_URL}/api/blogPosts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
  }
}
