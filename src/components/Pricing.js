import React, { Component , useState } from 'react';

var backgroundImage = {
    width: "100%",
    height: "70vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.jpg'})`,
    backgroundSize: 'cover',
  }
  
class Pricing extends Component {
        
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {

        return (
            <div>
                 <div className = 'price-slider' style = {backgroundImage}>
                     <div className = 'container'>
                         <div className = 'price-title text-center'>
                             <h1>Pricing</h1>
                             <p>Pricing We offer you the most profitable and reliable cloud mining contracts by,providing daily payouts for all the contracts in the currency of the contract. Start cryptocurrency and stablecoins cloud mining today, and get the first payout tomorrow!</p>
                             <button type="button" class="btn btn-primary bbtn mt-4">Start Mining Now</button>
                         </div>
                     </div>
                 </div>
      <section class="pricing py-5">
            <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="card mb-5 mb-lg-0">
                      <div class="card-body">
                        <h5 class="card-title text-muted text-uppercase text-center">BRONZE</h5>
                        <hr></hr>
                        <h4>Bronze account features:</h4>
                        <ul class="fa-ul pt-4">
                        <li><span class="fa-li"></span>SHA-256</li>
                        <li><span class="fa-li"></span>10 GH/s = 1.237$ 0.866$</li>
                        <li><span class="fa-li"></span>Maintenance fee: 0.001$ / 10 GH/s / 24h</li>
                        <li><span class="fa-li"></span>Payouts - every day</li>
                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Min. contract: 500 GH/s</li>
                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Min. contract: 5000 GH/s</li>
                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                            Reports</li>
                        </ul>
                        <div class="d-grid">
                           <a href="#" class="btn btn-primary text-uppercase">Button</a>
                        </div>
                     </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card mb-5 mb-lg-0">
                    <div class="card-body">
                        <h5 class="card-title text-muted text-uppercase text-center">SILVER</h5>
                        <hr></hr>
                        <h4>Silver account features:</h4>
                        <ul class="fa-ul pt-4">
                        <li><span class="fa-li"></span>SHA-256</li>
                        <li><span class="fa-li"></span>10 GH/s = 1.237$ 0.866$</li>
                        <li><span class="fa-li"></span>Maintenance fee: 0.001$ / 10 GH/s / 24h</li>
                        <li><span class="fa-li"></span>Payouts - every day</li>
                        <li><span class="fa-li"></span>Unlimited Private Projects</li>
                        <li><span class="fa-li"></span>Dedicated Phone Support</li>
                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                            Reports</li>
                        </ul>
                        <div class="d-grid">
                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-muted text-uppercase text-center">GOLD</h5>
                        <hr></hr>
                        <h4>Gold account features:</h4>
                        <ul class="fa-ul pt-4">
                        <li><span class="fa-li"></span>SHA-256</li>
                        <li><span class="fa-li"></span>10 GH/s = 1.237$ 0.866$</li>
                        <li><span class="fa-li"></span>Maintenance fee: 0.001$ / 10 GH/s / 24h</li>
                        <li><span class="fa-li"></span>Payouts - every day</li>
                        <li><span class="fa-li"></span>Unlimited Private Projects</li>
                        <li><span class="fa-li"></span>Dedicated Phone Support</li>
                        <li><span class="fa-li"></span>Monthly Status Reports</li>
                        </ul>
                        <div class="d-grid">
                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
     
            </div>
        );
    }
}

export default Pricing;