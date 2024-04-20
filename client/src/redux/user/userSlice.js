import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
<<<<<<< HEAD
        updateStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        updateSuccess: (state, action) => {
=======
        updateStart: (state)=>{
            state.loading = true;
            state.error = null;
        },
        updateSuccess: (state, action)=>{
>>>>>>> 0fc7f6d5c5a3c8732662a3d4cd363ba858269c4f
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
<<<<<<< HEAD
        updateFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
})

export const { signInStart, signInSuccess, signInFailure, updateStart, updateSuccess, updateFailure,
                deleteUserStart, deleteUserFailure, deleteUserSuccess } = userSlice.actions;
=======
        updateFailure: (state, action)=>{
            state.loading= false;
            state.error = action.payload;
        },
    },
})

export const { signInStart, signInSuccess, signInFailure, updateFailure, updateStart, updateSuccess } = userSlice.actions;
>>>>>>> 0fc7f6d5c5a3c8732662a3d4cd363ba858269c4f

export default userSlice.reducer;