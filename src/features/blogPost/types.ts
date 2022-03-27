export interface BlogPost {
  id: string;
  title?: string;
  body?: string;
  creationDate?: Date;
  lastUpdateDate?: Date;
  tags?: string[];
  author?: string;
	isDeleted?: boolean;
}

export interface FetchBlogPostsResponse {
  blogPosts: BlogPost[];
}

export interface CreateBlogPostRequest {
  title: string;
  body: string;
  tags: string[];
}

export interface CreateBlogPostResponse {}
