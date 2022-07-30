import React, { Component } from 'react';
import LiveChat from 'react-livechat'

class Footer extends Component {

    render() {
        return (
            <>
            <div><LiveChat license={13079334} /></div>
            <div className = 'footer'>
                 <div className = 'container'>
                     <div className = 'row'>
                         <div className = 'col-md-3'>
                             <div className = 'footer-sec'> 
                                    <h4 className = 'py-3'>How to start?</h4>
                                    <p>Open an account</p>
                                    <p>Easy and convenient purchase and withdrawal</p>
                             </div>
                             <div className = 'footer-icon'>
                                 <h4 className = 'py-3'>Social</h4>
                                  <img src = './image/twiter (1).png' alt = 'alt' width = '50px' className = 'px-1'/>
                                  <img src = './image/instragam.png' alt = 'alt' width = '50px' className = 'px-1'/>
                             </div>
                            
                         </div>
                         <div className = 'col-md-2'>
                             <div className = 'footer-sec'> 
                                    <h4 className = 'py-3'>About us</h4>
                                    <p>Terms and conditions</p>
                                    <p>Privacy Policy</p>
                                    <p>Trading terms</p>
                                    <p>Risk statement</p>
                                    <p>Referral program</p>
                                    <p>Referral FAQ</p>
                                    
                             </div>
                        </div>
                        <div className = 'col-md-2'>
                             <div className = 'footer-sec'> 
                                    <h4 className = 'py-3'>Support</h4>
                                    <p>Cloud Mining 2020</p>
                                    <p>Mining Basics</p>
                                    <p>Cryptocurrency</p>
                                    <p>Comparison</p>
                                    <p>Referral program</p>                           
                             </div>
                        </div>
                        <div className = 'col-md-3'>
                             <div className = 'footer-sec'> 
                                    <h4 className = 'py-3'>Knowledge Base</h4>
                                    <p>Cloud Mining</p>
                                    <p>Bitcoin Mining</p>
                                    <p>Trading terms</p>
                                    <p>Litecoin Mining</p>
                                    
                             </div>
                        </div>
                        <div className = 'col-md-2'>
                             <div className = 'footer-sec'> 
                                    <h4 className = 'py-3'></h4>
                                    <p>Grin Mining</p>
                                    <p>zCash Mining</p>
                                    <p>Litecoin </p>
                                
                                    
                             </div>
                        </div>
                     </div>
                 </div>
            </div>
            <div className = 'footer-bar text-center'>
                     <h5>Copy @ 2021 CloudXmine || All rights reserved</h5>
                 </div>
            </>
        );
    }
}

export default Footer;