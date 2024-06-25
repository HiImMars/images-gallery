import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { IImagesState } from "./slice";
import { getImagesAsync } from "./actions";
import { IImagesResponse } from "../../types";

type ActionReducerMapBuilderWithClonesState =
  ActionReducerMapBuilder<IImagesState>;

export const getImagesReducer = (
  builder: ActionReducerMapBuilderWithClonesState
): void => {
  builder.addCase(getImagesAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getImagesAsync.fulfilled,
    (state, actions: PayloadAction<IImagesResponse>) => {
      state.isLoading = false;
      state.images = actions.payload;
    }
  );

  builder.addCase(getImagesAsync.rejected, (state) => {
    state.isLoading = false;
    state.images = null;
  });
};
