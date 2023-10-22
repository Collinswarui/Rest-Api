import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create new goal
export const  createGoal = createAsyncThunk('goals/create',
async (goalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.createGoal(goalData, token)
    } catch (error) {
       const message = 
       (error.response && 
        error.response.data&&
        error.message.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})

export const goalSlice = createSlice({
    name: 'gaol',
    initialState,
    reducers:{
        reset: () => initialState
    }
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer