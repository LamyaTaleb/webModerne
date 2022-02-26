import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import Footer from "./components/foter"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import {  signin } from "./components/Pages/signin";
import {  signup } from "./components/Pages/signup";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={signin} />
            <Route path="/signup" component={signup} />
          </Switch>
        </div>
        <Footer />
       
      </Router>
    
    
      
    </>
  );
}

export default App;

