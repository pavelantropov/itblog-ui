import * as React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createBlogPost } from "./blogPostApi";

export default function CreateBlogPost() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleChangeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  const handlePost = () => {
    createBlogPost({
      title,
      body,
    });
  };

  return (
    <>
      <Typography variant="h1" component="div" gutterBottom>
        Create a blog post
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mb: 2.5 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="title-input"
          label="Title"
          value={title}
          onChange={handleChangeTitle}
          variant="filled"
        />
        <TextField
          id="body-input"
          label="Write something..."
          multiline
          value={body}
          onChange={handleChangeBody}
          variant="standard"
          fullWidth
        />
        <Button variant="contained" onClick={handlePost}>
          Post
        </Button>
      </Box>
    </>
  );
}
