import {createSlice} from '@reduxjs/toolkit';

// Slice
const auth = createSlice({
  name: 'expenses',
  initialState: {
    userName: null,
    email: null,
    password: null,
  },
  reducers: {
    valueSuccess: (state, action) => {
      state.userName = action.payload;
      state.email = action.payload;
      state.password = action.payload;
    },
  },
});
export default auth.reducer;

// Action
const {valueSuccess} = auth.actions;
export const setAuthValue = value => async dispatch => {
  try {
    dispatch(valueSuccess(value));
  } catch (e) {
    return console.error(e.message);
  }
};
