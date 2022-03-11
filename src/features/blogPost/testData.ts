import { BlogPost } from "./types";

export const DefaultBlogPosts: BlogPost[] = [
  {
    blogPostId: "1",
    title: "Test blog post",
    body: "My name is Pavel Antropov and I'm the author of this blog. I hope that the support of the blog will help me to improve my knowledge and understanding of the various important topics connected with full-stack .NET development, as writing these posts I'm going to repeat and research the corresponding information.",
    creationDate: new Date(),
  },
  {
    blogPostId: "2",
    title: "Hello world",
    body: "Hello world!",
    creationDate: new Date(),
  },
];