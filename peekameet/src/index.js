import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import './index.css';
import App from './App';
// import { AuthContextProvider } from './components/store/auth-context';
import {AuthContextProvider} from './store/AuthProvider';
// import { SignInContextProvider } from './store/SignInProvider';

ReactDOM.render(
  <>
  <AuthContextProvider>
  {/* <SignInContextProvider> */}
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
  {/* </SignInContextProvider> */}
  </>,
  document.getElementById('root')
);
