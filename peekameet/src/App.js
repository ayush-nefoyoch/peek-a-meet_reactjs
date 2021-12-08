import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import AuthContext from './store/AuthProvider';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';

import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
    <Layout>
      <Routes>
      <Route path='/' exact element = {authCtx.isLoggedIn ? <ProfilePage /> : <AuthPage/>}></Route>
        <Route path='/auth' element={!authCtx.isLoggedIn && <AuthPage />}></Route>
        <Route path='/profile' element = {authCtx.isLoggedIn ? <ProfilePage/> : <Navigate to = "/auth" />}>
        </Route>
      </Routes>
    </Layout>
    </>
  );
}

export default App;
