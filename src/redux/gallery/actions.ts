import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IImagesResponse } from "../../types";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "44604102-a78f4a26367cf0bc57b232e92";
// const API_KEY = "44629555-61c284bee48d3d3f5ab0f64cf";

export const GALLERY_SLICE_NAME = "gallery";

interface GetImagesParams {
  page?: number;
  imagesType?: string;
  colors?: string;
  order?: string;
  orientation?: string;
  searchQuery?: string;
}

export const getImagesAsync = createAsyncThunk<
  IImagesResponse,
  GetImagesParams,
  { rejectValue: string }
>(
  `${GALLERY_SLICE_NAME}/fetchImages`,
  async (
    {
      imagesType,
      colors,
      order,
      orientation,
      searchQuery,
      page,
    }: GetImagesParams,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get<IImagesResponse>(
        `${BASE_URL}?key=${API_KEY}&image_type=${imagesType}&page=${page}&colors=${colors}&order=${order}&orientation=${orientation}&q=${searchQuery}`
      );

      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorText = error.response.data?.error;

        alert(errorText);

        return rejectWithValue(errorText);
      }

      return rejectWithValue("An unknown error occurred");
    }
  }
);
