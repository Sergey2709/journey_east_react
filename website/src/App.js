import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Info from "./components/Info";
import Form from './components/Form';
// import Error from './components/Error';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/info" component={Info} />
          <Route path="/form" component={Form} />
          {/* <Route component={Error} /> */}
        </Switch>
      </Router>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
