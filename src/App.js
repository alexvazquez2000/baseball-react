import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Players from './components/Players'
import Parents from './components/Parents'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
