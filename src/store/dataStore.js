import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an initial state for your data
const initialState = {
	items: [],
	status: "idle",
	error: null,
};

// Create an async thunk to fetch data from the API
export const fetchItems = createAsyncThunk("data/fetchItems", async () => {
	// eslint-disable-next-line no-useless-catch
	try {
		const response = await fetch("YOUR_API_ENDPOINT");
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
});

// Create a data slice
const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchItems.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchItems.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default dataSlice.reducer;
