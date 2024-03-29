import React, { useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
  const storedInfo=localStorage.getItem("isLoggedIn");
  if(storedInfo==="1")
  {
    setIsLoggedIn(true);
  }
  },[])
  
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn","1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn","0");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} 
      onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
