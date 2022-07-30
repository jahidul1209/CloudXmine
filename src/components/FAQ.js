import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'


var backgroundImage = {
    width: "100%",
    height: "70vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.jpg'})`,
    backgroundSize: 'cover',

  }
class FQA extends Component {
    render() {
        return (
            <div>
                 <div className = 'price-slider' style = {backgroundImage}>
                     <div className = 'container'>
                         <div className = 'price-title text-center'>
                             <h1> FAQ </h1>
                             <p>If you couldn't find answer on your questions,<br></br>
                                  please contact our 24/7 live chat customer support.</p>
                              <button type="button" class="btn btn-primary bbtn mt-4">CONTACT MANAGER</button>
                         </div>
                     </div>
                 </div>
                 <div className = 'accordion mt-5 mb-5'>
                     <div  className = 'container'>
                     <Accordion defaultActiveKey="" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is CloudXmine?</Accordion.Header>
                                <Accordion.Body>
                                CloudXmine is smart cloud mining service, deriving from mining efficiency and costs of a physical cryptocurrencies mining. We provide smart cloud mining service, developed and masterminded by various cryptocurrency enthusiansts and blockchain experts in order to provide affordable and most efficient mining service with frequent payouts for both small and large investors.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How do I get started with CloudXmine?</Accordion.Header>
                                <Accordion.Body>
                                To get started, please Sign up and purchase hashrate contract. You don't need any special hardware or software or even to keep your own computer on to do cloud mining. Your contacts performance is deriving from mining efficiency and costs of a physical cryptocurrencies mining.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What is cryptocurrency?</Accordion.Header>
                                <Accordion.Body>
                                A cryptocurrency (or crypto currency) is a digital asset designed to work as a medium of exchange and store of value using cryptography to secure the transactions and to control the creation of additional units of the currency. Cryptocurrencies are classified as a subset of digital currencies and are also classified as a subset of alternative currencies and virtual currencies.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What is maintenance fee?</Accordion.Header>
                                <Accordion.Body>
                                Maintenance fee is a commission for managing all the mining hardware, including electricity costs and administrative expenditures. You can find commissions table in Pricing section.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What is GH/s?</Accordion.Header>
                                <Accordion.Body>
                                GH/s (gigahashes per second) - measurement unit of hashrate (computing power). Hashrate is the speed at which a computer is completing an operation in the cryptographic code. Which directly influences mining payout. The greater your hashrate, the more Bitcoin you'll be able to mine.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>How do I earn money with cloud mining?</Accordion.Header>
                                <Accordion.Body>
                                You are purchasing cloud mining contracts based on mining hardware efficiency and costs. You will be receiving returns on daily basis depending on hashrate amount of your contract.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>How long do I need to wait for my payouts?</Accordion.Header>
                                <Accordion.Body>
                                Your cloud mining payouts will be automatically credited on your IQMining balance every day at 00:00 GMT time. However sometimes due to system override there might be a delay of up to 24 hours.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Is there a minimum or maximum purchase amount?</Accordion.Header>
                                <Accordion.Body>
                                Minimum purchase amounts differs for every contract, you may find it on our pricing page. If you are looking to invest more than 100,000$ please request to contact a manager at support@iqmining.com or in our live chat.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>What is the difference between contract levels?</Accordion.Header>
                                <Accordion.Body>
                                Depending on amount of your purchase your contract will be labeled with contract level, the larger is your purchase the lower is the average price per GH/s. Diamond level purchases will grant you lifetime Diamond Club membership and all of its benefits. For more information about Diamond Club please click here.
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                     </div>
                 </div>

                 <div className = 'text-center mt-4 mb-5'>
                       <button type="button" class="btn btn-primary bbtn">START MINING NOW</button>
                 </div>
            </div>
        );
    }
}

export default FQA;