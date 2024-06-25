import { IImagesState } from "./slice";

export const selectImages = (state: IImagesState) => state.images;
export const selectIsLoading = (state: IImagesState) => state.isLoading;
