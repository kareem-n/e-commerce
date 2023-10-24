import { configureStore } from "@reduxjs/toolkit";
import GlobalStatues from "./slices/GlobalStatues";

const MainStore = configureStore({
  reducer: {
    global: GlobalStatues,
  },
});

export default MainStore ;
