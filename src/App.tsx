import "./App.css";
import BlogPostPage from "./features/blogPost/BlogPostPage";
import Layout from "./features/layout/Layout";
import { Routes, Route } from "react-router-dom";
import CreateBlogPost from "./features/blogPost/CreateBlogPost";
import BlogPostsList from "./features/blogPost/BlogPostsList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BlogPostsList />} />
          <Route path=":blogPostId" element={<BlogPostPage />} />
          <Route path="create" element={<CreateBlogPost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
