import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      {/* Provider to inject store in our application */}
      <Provider store={store}>
        <BrowserRouter>
          {/* As we want to see navbar in all pages so put them outside */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
