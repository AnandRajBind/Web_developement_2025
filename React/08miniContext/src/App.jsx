import "./App.css";
import UserContextProvider from "./context/UserContexProvider";
 
import Login from "./components/Login";
import Profile from "./components/Profile";
function App() {
  return (
    <UserContextProvider>
      <h1> Anand Raj </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
