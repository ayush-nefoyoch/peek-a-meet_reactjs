import { useContext } from "react";
import Layout from "./components/Layout/Layout";
import AuthContext from "./store/AuthProvider";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes, Navigate } from "react-router-dom";
import { Notes } from "./components/Layout/UserProfile/Notes";
import { InputSection } from "./components/User/Notes/InputSection";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact element={<AuthPage />}></Route>
          <Route
            path="/auth"
            element={!authCtx.isLoggedIn && <AuthPage />}
          ></Route>
          <Route
            path="/profile"
            element={
              authCtx.isLoggedIn ? <ProfilePage /> : <Navigate to="/auth" />
            }
          ></Route>
          <Route
            path="/notes"
            element={authCtx.isLoggedIn ? <Notes /> : <AuthPage />}
          ></Route>
          <Route
            path="/details"
            element={
              authCtx.isLoggedIn ? <ProfilePage /> : <Navigate to="/auth" />
            }
          ></Route>
          <Route
            path="/usernote"
            element={
              authCtx.isLoggedIn ? <InputSection /> : <Navigate to="/auth" />
            }
          ></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
