import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import userReducer from "../features/user/userSlice";
import moiveReducer from '../features/movie/movieSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    movie :moiveReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
