import { createSlice } from "@reduxjs/toolkit";

const GlobalStatues = createSlice({
  name: "global-statues",
  initialState: {
    sideBarToggleState: false,
    searchToggle: false,
    NavbarCategoryToggle: false,
  },
  reducers: {
    setSideBarToggleState: (state, action) => {
      state.sideBarToggleState = action.payload;
    },
    setSearchToggle: (state, action) => {
      state.searchToggle = action.payload;
    },
    setNavbarCategoryToggle: (state, action) => {
      state.NavbarCategoryToggle = action.payload;
    },
  },
});

export default GlobalStatues.reducer;

export const {
  setSideBarToggleState,
  setSearchToggle,
  setNavbarCategoryToggle,
} = GlobalStatues.actions;
