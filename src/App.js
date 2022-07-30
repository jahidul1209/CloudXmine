import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import Privacy from './components/Privacy';
import RiskStatement from './components/RiskStatement';
import TermsCondition from './components/TermsCondition';
function App() {
  return (
    <div className="App">
            <Router>
              <Header  />
                <Switch>
                <Route exact path="/" component= {Home} />          
                  <Route path="/pricing"  component= {Pricing}/>
                  <Route path="/faq"  component= {FAQ}/>
                  <Route path="/about-us"  component= {AboutUs}/>
                  <Route path="/sign-in"  component= {Signin}/>
                  <Route path="/sign-up"  component= {SignUp}/>
                  <Route path="/privacy-policy"  component= {Privacy}/>
                  <Route path="/risk-policy"  component= {RiskStatement}/>
                  <Route path="/terms-condition"  component={TermsCondition}/>
                </Switch>
                <Footer/>
            </Router> 
    </div>
  );
}

export default App;
