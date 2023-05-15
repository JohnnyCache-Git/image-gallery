import { createSlice } from "@reduxjs/toolkit";
import { ImageResource } from "./image.resource";
import { apiSlice } from "./images.api";

const initialState: { images: ImageResource[] } = { images: [] };

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    getImages: (state, action) => {
      state = { ...state, images: action.payload };
    },
    toggleFavoriteImage: (state, action) => {
      const index = state.images.findIndex(
        (image) => image.id === action.payload
      );
      state.images[index].favorited = !state.images[index].favorited;
    },
    deleteImage: (state, action) => {
      state.images = [...state.images.filter((i) => i.id !== action.payload)];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getImages.matchFulfilled,
      (state, action) => {
        state.images = action.payload;
      }
    );
  },
});

export const selectImages = (state: { images: { images: ImageResource[] } }) =>
  state.images.images;

export const { getImages, toggleFavoriteImage, deleteImage } =
  imagesSlice.actions;
