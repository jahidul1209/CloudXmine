import React, { Component } from 'react';
var backgroundImage = {
    width: "100%",
    height: "70vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.jpg'})`,
    backgroundSize: 'cover',
  }


class Privacy extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div>
                <div className = 'price-slider' style = {backgroundImage}>
                     <div className = 'container'>
                         <div className = 'price-title text-center'>
                             <h1>PRIVACY POLICY </h1>
                             <p>CloudXmine does its utmost to ensure the privacy, confidentiality and security of its clients are preserved both throughout their interaction with the company and afterwards, to the fullest extent achievable by the company. </p>    
                         </div>
                     </div>
                 </div>
                 <div className = 'container privacy-policy pt-5 pb-5'>
                     <p> When clients register with CloudXmine they acknowledge their willingness to share with the company certain private information which we use for the purpose of confirming the client’s identity and ensuring the security of their purchases and account. This information is collected in line with our stringent verification procedures which are used to deter international money laundering operations and to ensure the security and safety of our customer’s activity throughout.</p>

                    <p> Our clients undertake to supply us with true, updated and accurate information about their identity. Furthermore, they are required to state categorically that they are registering and acting on their own behalf and are not seeking at any time to act any manner which could be considered fraudulent nor are they seeking to impersonate any other individuals for any purposes whatsoever.</p>

                    <p> CloudXmine’s data collection procedures include the collection of client’s freely disclosed information as shared with the company, in addition to the placement of cookies for the purposes of gathering data about the manner in which client’s interact with the CloudXmine website. These tools for gathering client’s information are employed for the purpose of ensuring the customer’s own security and all data collected by the company is shared only with individuals within the company who are involved with the verification of customer account information for the express purpose of ensuring the customer’s confidentiality and security.</p>

                     <p>CloudXmine will never disclose any private or otherwise confidential information in regards to our clients and former clients to third parties without the express, written consent of our clients, except in such specific cases in which disclosure is a requirement under law, or is otherwise necessary in order to perform verification analysis on the client’s identity for the purposes of safeguarding their account and securing their personal information.</p>

                     <p> By registering with CloudXmine and through the voluntary interaction they undertake with CloudXmine’s products and services the clients confirm and agree that they consent to the use of all or part of the information they provide concerning their CloudXmine client's account, the transactions they undertake through it and the interactions which they perform with the company on behalf of the company. All interactions the customer undertakes with the company will be stored by the company for the purposes of record and as such may be employed by the company in such cases that disputes arise between clients and company.</p>

                     <p> CloudXmine does its utmost to ensure the confidentiality of its clients personal information including the implementation of data protection procedures designed to ensure client confidentiality. CloudXmine ensures that its data protection policy is regularly updated in order to ensure that client’s confidential information is continually safeguarded.</p>

                     <p> From time to time CloudXmine may contact clients whether by phone or email for the purpose of offering them further information about CloudXmine cloud mining service. In addition the company may, on occasion, seek to contact clients, whether by phone or by email, for the purpose of informing them of unique promotional offerings provided by CloudXmine for the client. Clients consent to the receipt of such contact when they consent to our terms and conditions of use when registering with CloudXmine. Any person wishing to opt out of further contact with CloudXmine at anytime whatsoever is entitled to do so, simply by contacting the company whether by phone or email and requesting that no further contact on behalf of the company will be made.</p>   
                 </div>
            </div>
        );
    }
}

export default Privacy;