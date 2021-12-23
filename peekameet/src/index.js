import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { AuthContextProvider } from "./store/AuthProvider";
import { UserContextProvider } from "./store/UserDetailsProvider";
import store from "./redux/createStore";

ReactDOM.render(
  <>
    <Provider store={store}>
      <AuthContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserContextProvider>
      </AuthContextProvider>
    </Provider>
  </>,
  document.getElementById("root")
);
