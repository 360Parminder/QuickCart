import './App.css';
import { AuthProvider } from "./Context/UserAuth";
import { UserDataProvider } from './Context/UserData';

import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  return (
    <AuthProvider>
      <UserDataProvider>
        <AppRoutes />
      </UserDataProvider>
    </AuthProvider>
    
  
  );
  
}

export default App;