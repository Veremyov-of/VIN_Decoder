import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

//style
import "./global.css";

//components
import Search from './components/Search/Search';
import Info from './components/Info/Info';
import Variables from './components/Variables/Variables';
import { variablesAddAction } from './store/asyncActions/variables';



function App() {
  const dispatch = useDispatch();
  const info = useSelector(state => state.data.history);
  const variablesInfo = useSelector(state => state.data.variables);
  useEffect(() => {
    dispatch(variablesAddAction());
  },[]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Search/>} />
        {info.map((item, index) => (
          <Route key={index} path={`/${item.link}`} element={<Info item={item.info} />} />
        ))}
        {variablesInfo.map((item, index) => (
          <Route key={index} path={`/${item.ID}`} element={<Variables item={item} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
