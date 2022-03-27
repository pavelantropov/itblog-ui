import React, { useState } from "react";
import {
  Box, //
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { createBlogPost } from "./blogPostApi";
import TagsInput from "../input/TagsInput";

export default function CreateBlogPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);

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
      tags,
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
          placeholder="Write something..."
          variant="outlined"
          multiline
          minRows={12}
          value={body}
          onChange={handleChangeBody}
          fullWidth
        />
        <TagsInput
          tags={tags}
          setTags={setTags}
        />
        <Button variant="contained" onClick={handlePost}>
          Post
        </Button>
      </Box>
    </>
  );
}
