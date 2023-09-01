import "./styles/Global.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import ApiGitHub from "./pages/ApiGitHub";
import { UserContext, UserContextProvider } from "./contexts/UserContext";
import Projetos from "./pages/Projetos";
import { useContext } from "react";
import Graficos from "./pages/Graficos";

export function PrivateRoute({ children }) {
  const { logado } = useContext(UserContext);

  if (!logado) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <UserContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ApiGitHub />} />
          <Route
            path="/projetos"
            element={
              <PrivateRoute>
                <Projetos />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Graficos />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
