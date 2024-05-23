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
                expirationTime: + localStorage.getItem("expirationTime")
            };
        } else {
            return {
                isLogged: false,
                token: null,
                user: null,
                expirationTime: 0, // 登录状态失效时间
            };
        }
    },
    reducers: {
        login(state, action) {
            state.isLogged = true;
            state.token = action.payload.token;
            state.user = action.payload.user;

            // 设置登录状态失效时间
            const currentTime = Date.now();
            const timeout = 1000 * 60 * 60 * 24 * 7; // 7天 
            const expirationTime = currentTime + timeout;

            state.expirationTime = expirationTime;
            localStorage.setItem("expirationTime", expirationTime + "");

            localStorage.setItem("token", state.token);
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        logout(state) {
            state.isLogged = false;
            state.token = null;
            state.user = null;

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            localStorage.removeItem("expirationTime");
        },
    },
});

export const { login, logout } = authSlice.actions;
