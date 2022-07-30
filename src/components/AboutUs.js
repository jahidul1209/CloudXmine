import React, { Component } from 'react';

var backgroundImage = {
    width: "100%",
    height: "70vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.jpg'})`,
    backgroundSize: 'cover',

  }
class AboutUs extends Component {
    render() {
        return (
            <div>
                 <div className = 'price-slider' style = {backgroundImage}>
                     <div className = 'container'>
                         <div className = 'price-title text-center'>
                             <h1>About Us</h1>
                             <p>CloudXmine  was founded at the end of 2016 by the team of experts in blockchain programming and IT 
                                 engineers. The current members of our altcoins mining team come from different scientific disciplines, 
                                 but our common faith in cryptocurrencies has brought us together.</p>
                             <button type="button" class="btn btn-primary bbtn mt-4">Start Mining Now</button>
                         </div>
                     </div>
                 </div>
                 <div className = 'container mt-5 mb-5'>
                     <div className = 'row'>
                         <div className = 'col-md-6 px-5'>
                            <div className = 'about-01 pb-4'>
                                <h2>Write to us</h2>
                                <p>Please complete the form below and our customer service will contact you back as soon as possible.You can contact our customer support 24/7 via</p>
                            </div>
                            <div className = 'about-form'>
                            <form>
                                <div class="mb-5">
                                    <input type="text" class="form-control" id="form-name"  placeholder='Name*'/>
                                </div>
                                <div class="mb-5">    
                                    <input type="email" class="form-control" id="form-email" placeholder='Email*'/>
                                </div>
                                <div class="mb-5">    
                                    <input type="text" class="form-control" id="form-phone" placeholder='Phone Number*'/>
                                </div>
                                <div class="mb-5">   
                                    <textarea class="form-control" id="form-area" rows="3" placeholder='Messege'></textarea>
                                </div>
                                     <button type="submit" class="btn btn-primary bbtn">SUBMIT</button>
                                </form>
                            </div>
                         </div> 
                         <div className = 'col-md-6 px-5'>
                                 <div className = 'about-02'>
                                    <h2>Location of the biggest data centers</h2>
                                 </div>
                                 <div className = 'row'> 
                                  <div className = 'col-md-6'>
                                    <div className = 'locations mt-5'>
                                         <img src ='./image/map.png' alt = 'alt' width = '30px'/>
                                         <p>Canada</p>
                                     </div>
                                     <div className = 'locations mt-4'>
                                         <img src ='./image/map.png' alt = 'alt' width = '30px'/>
                                         <p>Georgia</p>
                                     </div>
                                     <div className = 'locations mt-4'>
                                         <img src ='./image/map.png' alt = 'alt' width = '30px'/>
                                         <p>Russia</p>
                                     </div>
                                </div>
                                 <div className = 'col-md-6'>
                                     <div className = 'locations mt-5'>
                                         <img src ='./image/map.png' alt = 'alt' width = '30px'/>
                                         <p>Canada</p>
                                     </div>
                                     <div className = 'locations mt-4'>
                                         <img src ='./image/map.png' alt = 'alt' width = '30px'/>
                                         <p>Georgia</p>
                                     </div>
                                     <div className = 'locations mt-4'>
                                         <img src ='./image/map.png' alt = 'alt' width = '30px'/>
                                         <p>Russia</p>
                                     </div>
                                </div>
                            </div>
                            <div className = 'arresss mt-5'>
                                <h2>Customer Support service phone numbers</h2>
                                <div className = 'add-phone mt-5'>
                                        <img src ='./image/vippng.com-call-png-2123391.png' alt = 'alt' width = '50px' className = 'mapimg'/>
                                        <p className = 'assdd'>United Kingdom: +44 1224 459763</p>
                                </div>
                                <div className = 'add-phone mt-2'>
                                        <img src ='./image/vippng.com-call-png-2123391.png' alt = 'alt' width = '50px' className = 'mapimg'/>
                                        <p className = 'assdd'>United Kingdom: +44 1224 459763</p>
                                </div>
                            </div>
                         </div>
                     </div>
                 </div>
            </div>
        );
    }
}

export default AboutUs