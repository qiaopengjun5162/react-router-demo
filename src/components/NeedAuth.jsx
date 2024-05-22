
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const NeedAuth = (props) => {
    const auth = useSelector((state) => state.auth);
    const location = useLocation()

    return auth.isLogged ? (
        props.children
    ) : (
        <Navigate to={"/auth-form"} replace state={{ from: location }} />
    );
};

NeedAuth.propTypes = {
    children: PropTypes.node.isRequired,
};



export default NeedAuth;
