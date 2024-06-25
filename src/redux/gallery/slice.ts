import { createSlice } from "@reduxjs/toolkit";
import { IImagesResponse } from "../../types";
import { GALLERY_SLICE_NAME } from "./actions";
import { getImagesReducer } from "./reducers";

export interface IImagesState {
  isLoading: boolean;
  images: IImagesResponse | null;
}

const initialState: IImagesState = {
  isLoading: false,
  images: null,
};

export const { reducer: images } = createSlice({
  name: GALLERY_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getImagesReducer(builder);
  },
});
