import { Provider } from "react-redux";
import NavBar from "./components/nav/Navbar";
import MainStore from "./redux/MainStore";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";

function App() {

  return <>
    <Provider store={MainStore}>
      <div className="min-h-screen">
        <NavBar />
        
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Provider>



  </>
}

export default App