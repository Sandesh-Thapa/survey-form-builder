import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import CreateForm from './pages/CreateForm';
import Homepage from './pages/Homepage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <Link className="navbar-brand" to="/">Form Builder</Link>
          </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-form" element={<CreateForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
