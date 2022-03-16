import "./App.css";
import BlogPostPage from "./features/blogPost/BlogPost";
import Layout from "./features/layout/Layout";
import { Routes, Route } from "react-router-dom";
import CreateBlogPost from "./features/blogPost/CreateBlogPost";
import BlogPostsList from "./features/blogPost/BlogPostsList";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BlogPostsList />} />
            <Route path=":blogPostId" element={<BlogPostPage />} />
            <Route path="create" element={<CreateBlogPost />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
