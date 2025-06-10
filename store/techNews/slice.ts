import { HackerNewsItem } from "@/models/hackerNewsItem";
import { createSlice } from "@reduxjs/toolkit";

type TechNewsState = {
  techListIds: number[];
  techListWithDetails: HackerNewsItem[];
  selectedNews: HackerNewsItem | undefined;
  loading: boolean;
  error?: string;
};

const initialState: TechNewsState = {
  techListIds: [],
  techListWithDetails: [],
  selectedNews: undefined,
  loading: false,
  error: undefined
};

const TechNewsSlice = createSlice({
  name: "techNews",
  initialState,
  reducers: {
    setTechListIds: (state, action) => {
      state.techListIds = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTechListWithDetails: (state, action) => {
      state.techListWithDetails = action.payload;
    },
    setSelectedNews: (state, action) => {
      state.selectedNews = action.payload;
    },
  },
});

export const { setTechListIds,setLoading,setError,setTechListWithDetails,setSelectedNews } = TechNewsSlice.actions;
export default TechNewsSlice.reducer;