import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import AuthContext from './store/AuthProvider';
// import  SignInContext  from './store/SignInProvider';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';

import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  const authCtx = useContext(AuthContext);
  // const authCtx = useContext(SignInContext);
  // console.log( authCtx.data)
  return (
    <>
    <Layout>
      <Routes>
      <Route path='/' exact element = {<AuthPage/>}></Route>
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
