import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Mutation is allowed in Redux Toolkit
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // PayloadAction can be an object too
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        // You can handle loading state here if needed
        console.log(`incrementAsync pending... STATE: ${state.value}`);
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  // Action name has to be defined explicitly
  // as action is defined before the reducer
  "counter/incrementAsync",
  async (amount: number) => {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(amount);
      }, 2000);
    });
  }
);

// Redux Toolkit generates actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
