export interface BlogPost {
  blogPostId?: string;
  title?: string;
  body?: string;
  creationDate?: Date;
}

export interface FetchBlogPostResponse {
  blogPost: BlogPost;
}