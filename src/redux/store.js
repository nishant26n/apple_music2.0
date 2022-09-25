import { configureStore } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/ShazamCore";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },

  middleware: (getDefualtMiddleware) =>
    getDefualtMiddleware().concat(shazamCoreApi.middleware),
});
