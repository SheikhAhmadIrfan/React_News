import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const Fetchaction = createAsyncThunk("fetchdata", async (value) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${value}&apiKey=66aeca4f137942f3a2fbd3e0ef9bd073`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const clearItem = createAction("clearItem");
