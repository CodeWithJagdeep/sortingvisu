import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Page/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const _getRandomArray = () => {
    let sample = [];

    for (let i = 0; i < 12; i++) {
      let random = getRandomInt(160, 400);
      sample.push(random);
    }
    dispatch({
      type: "array",
      payload: sample,
    });
  };

  useEffect(() => {
    _getRandomArray();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
