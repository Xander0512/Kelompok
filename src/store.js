import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create bookings slice
const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: [],
  reducers: {
    addBooking: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    deleteBooking: (state, action) => {
      return state.filter(booking => booking.id !== action.payload);
    }
  }
});

// Create authentication slice
const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    }
  }
});

export const { addBooking, deleteBooking } = bookingsSlice.actions;
export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    bookings: bookingsSlice.reducer,
    auth: authSlice.reducer,
  }
});

export default store;
