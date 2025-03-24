import "./App.css";
import UserContextProvider from "./context/UserContexProvider";

function App() {
  return (
    <UserContextProvider>
      <h1> Anand Raj </h1>
    </UserContextProvider>
  );
}

export default App;
