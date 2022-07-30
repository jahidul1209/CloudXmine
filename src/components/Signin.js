import React, { Component } from 'react';
var backgroundImage = {
    width: "100%",
    height: "115vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.jpg'})`,
    backgroundSize: 'cover',
  }

class Signin extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div>
               <div className = 'price-slider' style = {backgroundImage}>  
                 <div className = 'sign-in-form'> 
                    <form>
                    <div className = 'text-center pb-3'>
                           <h3 className = 'loginh3'>Login to your account</h3>
                    </div>
                        

                        <div className="form-group mt-5"> 
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group mt-4">
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group mt-4">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label px-3" htmlFor="customCheck1">Stay logged in</label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary bbtn mt-4">Sign in</button>
                        <p className="forgot-password text-right pt-3">
                            Forgot <a href="#">password?</a>
                        </p>
                        </form>
                        </div>   
                 </div>
            </div>  
        );
    }
}

export default Signin;