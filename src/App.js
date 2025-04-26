import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import PreviewPage from './pages/PreviewPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css'; // Make sure TailwindCSS is loaded

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex-grow p-6">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={FormPage} />
            <Route path="/preview" component={PreviewPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
