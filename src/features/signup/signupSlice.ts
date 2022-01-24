import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchCount } from './singupAPI';

export interface SignUpState {
  signupType?: string;
  email?: string;
  phone?: string;
  isVerified?: boolean;
  status?: 'idle' | 'loading' | 'failed';
}

const initialState: SignUpState = {
  signupType: '',
  email: '',
  phone: '',
  isVerified: false,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addSignup(state, action: PayloadAction<SignUpState>) {
      state.signupType = action.payload.signupType;
      if(action.payload.signupType === 'email'){
        state.email = action.payload.email;
      }else if(action.payload.signupType === 'phone'){
        state.phone = action.payload.phone;
      }
    },
    addVerification(state, action: PayloadAction<boolean>) {
      state.isVerified = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        //state.value += action.payload;
      });
  },
});

export const { addSignup, addVerification } = signupSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const signupData = (state: RootState) => state.signup;


export default signupSlice.reducer;
