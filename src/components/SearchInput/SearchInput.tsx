import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import TextField from "@mui/material/TextField";

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

  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      InputProps={{
        endAdornment: (
          <button
            onClick={handleSearch}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              outline: "none",
            }}
          >
            Search
          </button>
        ),
      }}
    />
  );
};
