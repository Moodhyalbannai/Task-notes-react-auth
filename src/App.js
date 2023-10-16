import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { checkToken } from "./api/auth";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Note from "./pages/Note";
import Notes from "./pages/Notes";
import Register from "./pages/Register";
import Users from "./pages/Users";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);
  const isLoggedIn = checkToken();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App font-mono ">
        <Navbar />
        <h1 className="text-[50px] text-white">{`${isLoggedIn}`}</h1>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/notes" Component={Notes} />
          <Route path="/notes/:noteId" Component={Note} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/users" Component={Users} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
