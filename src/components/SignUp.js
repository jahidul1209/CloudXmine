import React, { Component } from "react";
import { Link } from "react-router-dom";

var backgroundImage = {
    width: "100%",
    height: "145vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.jpg'})`,
    backgroundSize: 'cover',
  }

export default class SignUp extends Component {
    render() {
        return (
        <div className = 'price-slider' style = {backgroundImage}>  
            <div className = 'sign-in-form'> 
            <form>
                <div className = 'text-center pb-3'>
                        <h3 className = 'loginh3'>Open an account</h3>
                </div>

                <div className="form-group mt-4">
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group mt-4">
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group mt-4">
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group mt-4">
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div class="login-check-wrap login-check-wrap_mod mt-4">
                    <div class="login-check">
                        <input type="checkbox" className="checkbox" id="checkbox" name="agree"/>
                        <label for="checkbox" className = 'px-3'>
                            I have read and agree to <Link to ="./cloudXmine/terms-condition">the Terms and Conditions</Link>
                        </label>
                       </div>
                         <div className="login-check">
                            <input type="checkbox" className="checkbox" name="en_agree" id="checkbox2"/>
                            <label for="checkbox2"  className = 'px-3'>I confirm, this service is provided to me outside US territory</label>
                        </div>
                                                                
                    <div className="login-check">
                        <input type="checkbox" className="checkbox" name="en_agree" id="checkbox2"/>
                        <label for="checkbox3"  className = 'px-3'>
                            I have read and agree with <Link to ="./cloudXmine/privacy-policy">Privacy Policy</Link>
                        </label>
                     </div>
                     <div className="login-check">
                        <input type="checkbox" className="checkbox" name="en_agree" id="checkbox2"/>
                        <label for="checkbox3"  className = 'px-3'>
                            I also have read and agree with <Link to="./cloudXmine/risk-policy">Risk policy</Link>
                        </label>
                     </div>
                </div>
                <button type="submit" class="btn btn-primary bbtn mt-4">Register</button>
                <p className="forgot-password text-right pt-3">
                    Already registered <a href="#">log in?</a>
                </p>
             </form>

            </div>
          </div>
        );
    }
}