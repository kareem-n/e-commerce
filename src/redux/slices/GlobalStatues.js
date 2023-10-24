import { createSlice } from "@reduxjs/toolkit";

const GlobalStatues = createSlice({
  name: "global-statues",
  initialState: {
    sideBarToggleState: false,
    searchToggle: false,
  },
  reducers: {
    setSideBarToggleState: (state, action) => {
      state.sideBarToggleState = action.payload;
    },
    setSearchToggle: (state, action) => {
      state.searchToggle = action.payload;
    },
  },
});

export default GlobalStatues.reducer;

export const { setSideBarToggleState, setSearchToggle } = GlobalStatues.actions;
