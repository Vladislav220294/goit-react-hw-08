import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        loading: false,
        error: false,
    isRefreshing: false,
    },
    extraReducers: (builder) => builder.addCase(register.pending, (state) => {
                state.error = false;
                state.loading = true;
    }).addCase(register.fulfilled, (state, action) => {
                state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    }).addCase(register.rejected, (state) => {
                state.loading = false;
                state.error = true;
            }).addCase(logIn.pending, (state) => {
                state.error = false;
                state.loading = true;
    }).addCase(logIn.fulfilled, (state, action) => {
                state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    }).addCase(logIn.rejected, (state) => {
                state.loading = false;
                state.error = true;
            }).addCase(logOut.pending, (state) => {
                state.error = false;
                state.loading = true;
    }).addCase(logOut.fulfilled, (state, action) => {
                state.loading = false;
        state.user = {
            name: null,
            email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
    }).addCase(logOut.rejected, (state) => {
                state.loading = false;
                state.error = true;
    }).addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
                state.error = false;
                state.loading = true;
    }).addCase(refreshUser.fulfilled, (state, action) => {
                state.loading = false;
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
    }).addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
                state.loading = false;
                state.error = true;
            })
})
export default authSlice.reducer;