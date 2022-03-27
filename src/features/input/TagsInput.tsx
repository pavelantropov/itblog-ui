import { Cancel } from "@mui/icons-material";
import {
  Box, //
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface TagProps {
  tagName: string;
}

const Tag = ({ tagName }: TagProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
      }}
    >
      <Stack
        direction="row"
        gap={1}
        sx={{
          padding: "0.4rem",
          margin: "0 0.5rem 0 0",
        }}
      >
        <Typography>{tagName}</Typography>
        <Cancel sx={{ cursor: "pointer" }} />
      </Stack>
    </Box>
  );
};

export default function TagsInput() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputTag, setInputTag] = useState("");

  const handleChangeInputTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTag(event.target.value);
    if (inputTag.charAt(inputTag.length - 1) === ",") {
      if (inputTag.length > 1) {
        setTags([...tags, inputTag.substring(0, inputTag.length - 1)]);
      }

      setInputTag("");
    }
  };

  return (
    <Box>
      <TextField
        id="tags-input"
        fullWidth
        variant="outlined"
        size="small"
        margin="none"
        placeholder="add tags separated with ,"
        value={inputTag}
        onChange={handleChangeInputTag}
        InputProps={{
          startAdornment: (
            <Box sx={{ display: "flex" }}>
              {tags &&
                tags.length > 0 &&
                tags.map((tag, index) => (
                  <Tag
                    key={"tag_" + index} //
                    tagName={tag}
                  />
                ))}
            </Box>
          ),
        }}
      />
    </Box>
  );
}
