import {createSlice} from '@reduxjs/toolkit';

//3.Creation du redux

  export const userSlice = createSlice({
    name: 'user',
    //INITIAL_STATE
    initialState: {
      user: null,
    },

    reducers: {
      login: (state = userSlice, action) => {
        state.user = action.payload;
      },
      logout: (state = userSlice, action) => {
        state.user = null;
      }
    }
  });

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
