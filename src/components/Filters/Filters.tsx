import { FC } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Grid } from "@mui/material";

interface FilterProps {
  colors: string;
  setColors: (colors: string) => void;
  orientation: string;
  setOrientation: (orientation: string) => void;
  order: string;
  setOrder: (order: string) => void;
  clearFilters: () => void;
  setPage: (page: number) => void;
}

const colorOptions = [
  "grayscale",
  "transparent",
  "red",
  "orange",
  "yellow",
  "green",
  "turquoise",
  "blue",
  "lilac",
  "pink",
  "white",
  "gray",
  "black",
  "brown",
];

const orientationOptions = ["all", "horizontal", "vertical"];
const orderOptions = ["popular", "latest"];

export const Filters: FC<FilterProps> = ({
  colors,
  setColors,
  orientation,
  setOrientation,
  order,
  setOrder,
  clearFilters,
  setPage,
}) => {
  const handleColorChange = (event: SelectChangeEvent) => {
    setColors(event.target.value);
    setPage(1);
  };

  const handleOrientationChange = (event: SelectChangeEvent) => {
    setOrientation(event.target.value);
    setPage(1);
  };

  const handleOrderChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value);
    setPage(1);
  };

  return (
    <Grid container spacing={2} alignItems="center" sx={{ marginTop: 1 }}>
      <Grid item xs={12} sm={4} md={3}>
        <FormControl fullWidth>
          <InputLabel id="color-select-label">Color</InputLabel>
          <Select
            labelId="color-select-label"
            value={colors}
            label="Color"
            onChange={handleColorChange}
          >
            {colorOptions.map((color) => (
              <MenuItem key={color} value={color}>
                {color}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <FormControl fullWidth>
          <InputLabel id="orientation-select-label">Orientation</InputLabel>
          <Select
            labelId="orientation-select-label"
            value={orientation}
            label="Orientation"
            onChange={handleOrientationChange}
          >
            {orientationOptions.map((orientation) => (
              <MenuItem key={orientation} value={orientation}>
                {orientation}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <FormControl fullWidth>
          <InputLabel id="order-select-label">Order</InputLabel>
          <Select
            labelId="order-select-label"
            value={order}
            label="Order"
            onChange={handleOrderChange}
          >
            {orderOptions.map((order) => (
              <MenuItem key={order} value={order}>
                {order}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <Box display="flex">
          <Button variant="contained" color="secondary" onClick={clearFilters}>
            Clear Filters
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
