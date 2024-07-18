import { createSlice } from "@reduxjs/toolkit";

// State awal
const initialState = {
  appearance: {
    mode: "light",
    isDark: false,
  },
  phone: null, // Añadido para almacenar el phone
};


// Slice
const settingsSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    changeAppearance: (state, action) => {
      const { mode, isDark } = action.payload;
      state.appearance = {
        mode,
        isDark,
      };
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

// Actions
export const { changeAppearance, setPhone } = settingsSlice.actions;
// Reducer
export default settingsSlice.reducer;
