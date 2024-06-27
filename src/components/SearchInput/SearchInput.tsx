import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Button,
  InputAdornment,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchInputProps {
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  setSearchQuery,
  setPage,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
    setPage(1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setInputValue("");
    setSearchQuery("");
    setPage(1);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      sx={{ marginTop: 2 }}
    >
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: inputValue && (
            <InputAdornment position="end">
              <IconButton
                aria-label="clear search"
                onClick={handleClear}
                edge="end"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          flexGrow: 1,
          marginRight: 1,
          maxWidth: { xs: "100%", sm: "100%", md: "600px" },
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};
