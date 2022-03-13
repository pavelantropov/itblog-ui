export interface BlogPost {
  id: string;
  title?: string;
  body?: string;
  creationDate?: Date;
}

export interface FetchBlogPostResponse {
  blogPost: BlogPost;
}

export interface FetchBlogPostsResponse {
  blogPosts: BlogPost[];
}

export interface CreateBlogPostRequest {
  title: string;
  body: string;
}

export interface CreateBlogPostResponse {}
