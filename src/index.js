import reactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const root = reactDom.createRoot(document.getElementById("root"));

// https://reactrouter.com/en/main/router-components/browser-router
root.render(
    <Router>
        <App />
    </Router>
);
