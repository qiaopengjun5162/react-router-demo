import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NeedAuth from "./components/NeedAuth";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { logout } from "./store/reducer/authSlice";

const App = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const timeout = auth.expirationTime - Date.now()

        if (timeout < 1000) {
            dispatch(logout())
            return
        }

        const timer = setTimeout(() => {
            dispatch(logout())
        }, timeout);


        return () => {
            clearTimeout(timer)
        }
    }, [auth.expirationTime, dispatch])

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/profile"
                    element={
                        //     auth.isLogged ? (
                        //         <ProfilePage />
                        //     ) : (
                        //         <Navigate to={"/auth-form"} replace />
                        //     )

                        <NeedAuth> <ProfilePage /></NeedAuth>
                    }
                />
                <Route path="/auth-form" element={<AuthPage />} />
            </Routes>
        </Layout>
    );
};

export default App;
