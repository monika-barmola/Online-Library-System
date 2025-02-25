import { createSlice } from "@reduxjs/toolkit";

/*const initialState = {
  books: [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", description: "A novel set in the 1920s", rating: 4.5 },
    { id: 2, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", description: "A sci-fi classic", rating: 4.7 },
  ],
};*/

const initialState = {
  books: [
    { id: 1, title: "Atomic Habits", author: "James Clear", category: "Self-help" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction" },
    { id: 3, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "History" },
    { id: 4, title: "The Psychology of Money", author: "Morgan Housel", category: "Finance" },
    { id: 5, title: "Deep Work", author: "Cal Newport", category: "Productivity" },
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

