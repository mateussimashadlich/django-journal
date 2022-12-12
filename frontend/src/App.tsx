import { Button } from "@mui/material";
import { useState } from "react";
import { Login } from "./components/Login/Login";
import { Publications } from "./components/Publications/Publications";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <div className="App">
      {token ? (
        <>
          <Button
            variant="contained"
            style={{ float: "right", margin: 24 }}
            onClick={() => {
              localStorage.removeItem("token");
              setToken("");
            }}
          >
            Logout
          </Button>
          <Publications />
        </>
      ) : (
        <Login callback={(token: string) => setToken(token)} />
      )}
    </div>
  );
}

export default App;
