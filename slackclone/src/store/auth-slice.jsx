import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { getUserByNameAndPass } from '../lib/api';



export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {

            const data = await getUserByNameAndPass({ username, password });
            // store user's token in local storage
            if (data != null) {
                localStorage.setItem('userToken', data.id)

            } else throw new Error('Error with the username or/and password')

            return data;

        } catch (error) {
            // return custom error message from API if any
            return rejectWithValue(error.message)
        }
    }

)


// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken') // delete token from storage
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
        setCredentials: (state, { payload }) => {
            state.userInfo = payload
        },
    },
    extraReducers: builder => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true
            state.error = null
        },
            builder.addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload
                //state.userToken = payload.token
                state.userToken = payload
            }),
            builder.addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            }),
        )
    },

})


const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export default authReducer