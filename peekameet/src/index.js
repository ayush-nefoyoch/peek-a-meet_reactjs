import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {AuthContextProvider} from './store/AuthProvider';
import {UserContextProvider} from './store/UserDetailsProvider';

ReactDOM.render(
  <>
  <AuthContextProvider>
  <UserContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserContextProvider>
  </AuthContextProvider>
  </>,
  document.getElementById('root')
);
