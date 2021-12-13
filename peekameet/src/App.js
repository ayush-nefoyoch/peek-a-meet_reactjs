import { useContext } from 'react';
import Layout from './components/Layout/Layout';
import AuthContext from './store/AuthProvider';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import { Route, Routes, Navigate } from "react-router-dom";
import { Notes } from './components/Layout/UserProfile/Notes';
import { Details } from './components/Layout/UserProfile/Details';

function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn)
  return (
    <>
    <Layout>
      <Routes>
      <Route path='/' exact element = {<AuthPage/>}></Route>
      {/* <Route path='/' exact element = {authCtx.isLoggedIn ? <ProfilePage /> : <AuthPage/>}></Route> */}
        <Route path='/auth' element={!authCtx.isLoggedIn && <AuthPage />}></Route>
        <Route path='/profile' element = {authCtx.isLoggedIn ? <Details/> : <Navigate to = "/auth" />}></Route>
        <Route path='/notes' element = {authCtx.isLoggedIn ? <Notes/> : <AuthPage/>}></Route>
        <Route path='/details' element = {authCtx.isLoggedIn ? <Details/> : <Navigate to = "/auth" />}></Route>
      </Routes>
    </Layout>
    </>
  );
}

export default App;
