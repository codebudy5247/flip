import { Fragment} from "react";
import "./App.css";
import Header from "./components/header/Navvar";
import Signup from "./pages/signup/Signup";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/Home";
import NotistackProvider from "./components/NootificationProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

function App() {

  return (
    <Router>
      <Fragment>
        <NotistackProvider>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </NotistackProvider>
      </Fragment>
    </Router>
  );
}

export default App;
