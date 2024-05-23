import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NeedAuth from "./components/NeedAuth";
import useAutoLogout from "./hooks/useAutoLogout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
    useAutoLogout();
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/profile"
                    element={
                        <NeedAuth> <ProfilePage /></NeedAuth>
                    }
                />
                <Route path="/auth-form" element={<AuthPage />} />
            </Routes>
        </Layout>
    );
};

export default App;
