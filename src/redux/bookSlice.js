import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", description: "A novel set in the 1920s", rating: 4.5 },
    { id: 2, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", description: "A sci-fi classic", rating: 4.7 },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
