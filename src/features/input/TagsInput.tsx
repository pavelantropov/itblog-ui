import React from "react";
import {
  Box, //
  Chip,
  Stack,
  TextField,
} from "@mui/material";

interface TagProps {
  tagName: string;
  handleRemove: Function;
}

interface TagsInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Tag = ({
  tagName, //
  handleRemove: handleRemoveTag,
}: TagProps) => {
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
        <Chip
          label={tagName}
          onDelete={() => handleRemoveTag(tagName)}
          sx={{ cursor: "pointer" }}
        />
      </Stack>
    </Box>
  );
};

export default function TagsInput({
  tags, //
  setTags,
}: TagsInputProps) {
  const [inputTag, setInputTag] = React.useState("");

  const handleChangeInputTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTag(event.target.value);
    if (inputTag.charAt(inputTag.length - 1) === ",") {
      if (inputTag.length > 1) {
        setTags([...tags, inputTag.substring(0, inputTag.length - 1)]);
      }

      setInputTag("");
    }
  };

  const handleRemoveTag = (tagName: string) => {
    setTags(tags.filter((tag) => tag !== tagName));
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
                    handleRemove={handleRemoveTag}
                  />
                ))}
            </Box>
          ),
        }}
      />
    </Box>
  );
}
