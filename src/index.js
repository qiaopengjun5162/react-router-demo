import reactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const root = reactDom.createRoot(document.getElementById("root"));

// https://reactrouter.com/en/main/router-components/browser-router
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
