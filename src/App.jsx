import './App.scss';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Inner } from './pages/Inner/Inner';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inner" element={<Inner />} />
      </Routes>
    </Router>
  );
}

export default App;
