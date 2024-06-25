// import { instance } from "src/services/api-client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IImagesResponse } from "../../types";
// import { IClone } from "src/@types/clones";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "44604102-a78f4a26367cf0bc57b232e92";

export const GALLERY_SLICE_NAME = "gallery";

export const getImagesAsync = createAsyncThunk<
  IImagesResponse,
  void,
  { rejectValue: string }
>(`${GALLERY_SLICE_NAME}/fetchImages`, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<IImagesResponse>(
      `${BASE_URL}?key=${API_KEY}&image_type`
    ); // add url

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorText = error.response.data?.error;

      alert(errorText);

      return rejectWithValue(errorText);
    }

    return rejectWithValue("An unknown error occurred");
  }
});
