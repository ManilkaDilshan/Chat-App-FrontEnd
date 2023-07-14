import axios from "axios"
import Routes from "./routes/Routes";
import { UserContextProvider } from "./contex/UserContext.jsx";

function App() {
  axios.defaults.baseURL = 'http://localhost:6001';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
