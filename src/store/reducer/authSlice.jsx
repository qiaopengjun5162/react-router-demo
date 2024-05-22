import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: () => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));

        if (token && user) {
            return {
                isLogged: true,
                token: token,
                user: user,
            };
        } else {
            return {
                isLogged: false,
                token: null,
                user: null,
            };
        }
    },
    reducers: {
        login(state, action) {
            state.isLogged = true;
            state.token = action.payload.token;
            state.user = action.payload.user;

            localStorage.setItem("token", state.token);
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        logout(state) {
            state.isLogged = false;
            state.token = null;
            state.user = null;

            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});

export const { login, logout } = authSlice.actions;
