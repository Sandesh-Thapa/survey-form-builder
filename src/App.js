import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
// import CreateForm from './pages/CreateForm';
import Homepage from './pages/Homepage';
// import SurveyForm from './components/SurveyForm'
import './App.css'
import FormBuilder from './components/FormBuilder';

function App() {
  return (
    // <SurveyForm />
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <Link className="navbar-brand" to="#">Form Builder</Link>
          </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/create-form" element={<CreateForm />} /> */}
        <Route path="/create-form" element={<FormBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
