import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "Pages/Detail";
import Home from "Pages/Home";
import BaseContext from "Store/Contexts/BaseContext";
import { initialState, reducer } from "Store/Reducers/BaseReducer";
import { ReducerWithoutAction, useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(
    reducer as ReducerWithoutAction<any>,
    initialState
  );

  return (
    <BaseContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<Detail />} />
        </Routes>
      </Router>
    </BaseContext.Provider>
  );
}

export default App;
