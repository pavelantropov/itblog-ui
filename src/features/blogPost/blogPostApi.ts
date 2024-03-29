import { DefaultBlogPosts } from "./testData";
import {
  BlogPost,
  CreateBlogPostRequest,
  CreateBlogPostResponse,
  FetchBlogPostsResponse,
} from "./types";

export async function fetchBlogPost(
  blogPostId: string
): Promise<BlogPost | undefined> {
  if (process.env.NODE_ENV === "test") {
    return new Promise<BlogPost | undefined>((resolve) => {
      let blogPost;

      DefaultBlogPosts.forEach((post) => {
        if (post.id === blogPostId) blogPost = post;
      });

      resolve(blogPost);
    });
  } else {
    return await fetch(`${process.env.REACT_APP_API_URL}/api/blogPosts/${blogPostId}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    }).then((res) => res.json());
  }
}

export async function fetchBlogPosts(): Promise<FetchBlogPostsResponse> {
  if (process.env.NODE_ENV === "test") {
    return new Promise<FetchBlogPostsResponse>((resolve) => {
      resolve({
        blogPosts: DefaultBlogPosts,
      } as FetchBlogPostsResponse);
    });
  } else {
    return await fetch(`${process.env.REACT_APP_API_URL}/api/blogPosts`, {
      method: "GET",
      headers: { Accept: "application/json" },
    }).then((res) => res.json());
  }
}

export async function createBlogPost(
  params: CreateBlogPostRequest
): Promise<CreateBlogPostResponse> {
  if (process.env.NODE_ENV === "test") {
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
