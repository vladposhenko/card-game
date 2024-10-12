import { createSlice } from "@reduxjs/toolkit";
import { ILevelItem } from "../models";
import { LEVELS_DATA } from "../data";

export interface AppState {
  currentLevel: ILevelItem
}

const initialState: AppState = {
  currentLevel: LEVELS_DATA[0],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentLevel: (state, action) => {
        state.currentLevel = action.payload
    }
  },
});

export const { setCurrentLevel } = appSlice.actions;

export default appSlice.reducer;
