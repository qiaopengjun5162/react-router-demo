import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NeedAuth from "./components/NeedAuth";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
    const auth = useSelector((state) => state.auth);
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
