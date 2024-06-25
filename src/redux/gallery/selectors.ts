import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectImagesState = (state: RootState) => state.images;

export const selectImages = createSelector(
  selectImagesState,
  (imagesState) => imagesState.images
);

export const selectIsLoading = createSelector(
  selectImagesState,
  (imagesState) => imagesState.isLoading
);
