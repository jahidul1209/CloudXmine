import React, { Component , useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Modal,Button ,Col,Row} from 'react-bootstrap';



var backgroundImage = {
    width: "100%",
    height: "160vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.jpg'})`,
    backgroundSize: 'cover',

  };

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectValue: "",
          selectYear: "",
          show : true,
        };
    }

     calculatorDropdownSHA = (e)=> {
        this.setState({ selectValue: e.target.value });
      }
        calculatorDropdownYear = (e)=> {
        this.setState({ selectYear: e.target.value });
      }

    render() {
      
    // Mining  And trading
      const  ControlledTabs = () => {
          const [key, setKey] = useState('Mining');


          return (
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="Mining" title="Mining">
                             <div className = 'Mining'>
                                 <div className = 'row'>
                                     <div className ='col-md-4'>
                                            <div className = 'mining-box'>
                                                <div className = 'number-01'>
                                                    <h1>1</h1>
                                                </div>
                                                <div className = 'mining-body'> 
                                                    <img src= './image/registration-icon-10.jpg'  alt="alt"/>
                                                            <h3 className = 'py-2'>Sign up</h3>
                                                            <p>Fill in the form and get ready to start mining in under than 1 minute</p>
                                                </div>
                                            </div>
                                      </div>
                                      <div className ='col-md-4'>
                                            <div className = 'mining-box'>
                                                <div className = 'number-01'>
                                                    <h1>2</h1>
                                                </div>
                                                <div className = 'mining-body'> 
                                                    <img src= './image/digital-wallet-e-payment-logo-design-vector-28823812.jpg'  alt="alt"/>
                                                            <h3 className = 'py-2'>Purchase a contract</h3>
                                                            <p>Fill in the form and get ready to start mining in under than 1 minute</p>
                                                </div>
                                            </div>
                                      </div>
                                      <div className ='col-md-4'>
                                            <div className = 'mining-box'>
                                                <div className = 'number-01'>
                                                    <h1>3</h1>
                                                </div>
                                                <div className = 'mining-body'> 
                                                    <img src= './image/cash-paid-rubber-stamp-vector-12438203.jpg'  alt="alt"/>
                                                            <h3 className = 'py-2'>Get paid</h3>
                                                            <p>Fill in the form and get ready to start mining in under than 1 minute</p>
                                                </div>
                                            </div>
                                      </div>
                                 </div>
                             </div>
                   </Tab>
              <Tab eventKey="Trading" title="Trading">
                      <div className = 'trading'>
                                 <div className = 'row'>
                                     <div className ='col-md-4'>
                                            <div className = 'trading-box'>
                                                <div className = 'number-02'>
                                                    <h1>1</h1>
                                                </div>
                                                <div className = 'trading-body'> 
                                                    <img src= './image/registration-icon-10.jpg'  alt="alt"/>
                                                            <h3 className = 'py-2'>Fund your account</h3>
                                                            <p>Fill in the form and get ready to start mining in under than 1 minute</p>
                                                </div>
                                            </div>
                                      </div>
                                      <div className ='col-md-4'>
                                            <div className = 'trading-box'>
                                                <div className = 'number-02'>
                                                    <h1>2</h1>
                                                </div>
                                                <div className = 'trading-body'> 
                                                    <img src= './image/payment-icon-5646.png'  alt="alt"/>
                                                            <h3 className = 'py-2'>Start trading</h3>
                                                            <p>Fill in the form and get ready to start mining in under than 1 minute</p>
                                                </div>
                                            </div>
                                      </div>
                                      <div className ='col-md-4'>
                                            <div className = 'trading-box'>
                                                <div className = 'number-02'>
                                                    <h1>3</h1>
                                                </div>
                                                <div className = 'trading-body'> 
                                                    <img src= './image/215830.png'  alt="alt"/>
                                                            <h3 className = 'py-2'>Withdraw funds</h3>
                                                            <p>Fill in the form and get ready to start mining in under than 1 minute</p>
                                                </div>
                                            </div>
                                      </div>
                                 </div>
                             </div>
              </Tab>
            </Tabs>
          );
        }

        // Mining Contract
      const  MinigContract = () => {
        const [key, setKey] = useState('1-year-contract');
      
        return (
          <Tabs
            id="controlled-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 minig-contracts"
          >
            <Tab eventKey="1-year-contract" title="1 YEAR CONTRACT">
                           <div className = 'container year-contract'>
                                    <div className = 'row'> 
                                        <div className = 'col-md-2 pricing tile'>    
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title" style = {{visibility:'hidden'}}>No</div>
                                                </div>
                                                <div className="calc-row calc-row_mod" >
                                                    <div className="calc-td calc-td_title">Mining strategy:</div>
                                                </div>
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title">Min. hashrate:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Maintenance fee:</div>
                                                </div>
                                                <div className="calc-row"> 
                                                <div className="calc-td calc-td_title">Payouts:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Availability:</div>
                                                </div>
                                                <div className="calc-row calc-modern">
                                                    <div className="calc-td calc-td_title">Contract price:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Potential income per contract period:</div>
                                                </div>
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title"></div>
                                                </div>
                                          </div>
                                    
                                        <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 major coins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 2.883</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256 PRO</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">50-100 altcoins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 1.093</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256 BCH</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">100-150 altcoins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 0.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">USDT</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">200 major coins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 1.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">ETHEREUM</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">ETH</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 0.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>                        
                                    </div>
                                 </div>
            </Tab>
            <Tab eventKey="2-year-contract" title="2 YEAR CONTRACT">
                    <div className = 'container year-contract'>
                    <div className = 'row'> 
                                        <div className = 'col-md-2 pricing tile'>    
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title" style = {{visibility:'hidden'}}>No</div>
                                                </div>
                                                <div className="calc-row calc-row_mod" >
                                                    <div className="calc-td calc-td_title">Mining strategy:</div>
                                                </div>
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title">Min. hashrate:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Maintenance fee:</div>
                                                </div>
                                                <div className="calc-row"> 
                                                <div className="calc-td calc-td_title">Payouts:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Availability:</div>
                                                </div>
                                                <div className="calc-row calc-modern">
                                                    <div className="calc-td calc-td_title">Contract price:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Potential income per contract period:</div>
                                                </div>
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title"></div>
                                                </div>
                                          </div>
                                    
                                        <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 major coins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 8.883</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256 PRO</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">50-108 altcoins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  17 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 1.893</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256 BCH</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">100-150 altcoins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 0.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">USDT</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">280 major coins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">7.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 1.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">ETHEREUM</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">ETH</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">70 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.901$  90 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$9.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 0.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>                        
                                    </div>
                    </div>
        
            </Tab>

            <Tab eventKey="5-year-contract" title="5 YEAR CONTRACT">
                    <div className = 'container year-contract'>
                    <div className = 'row'> 
                                        <div className = 'col-md-2 pricing tile'>    
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title" style = {{visibility:'hidden'}}>No</div>
                                                </div>
                                                <div className="calc-row calc-row_mod" >
                                                    <div className="calc-td calc-td_title">Mining strategy:</div>
                                                </div>
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title">Min. hashrate:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Maintenance fee:</div>
                                                </div>
                                                <div className="calc-row"> 
                                                <div className="calc-td calc-td_title">Payouts:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Availability:</div>
                                                </div>
                                                <div className="calc-row calc-modern">
                                                    <div className="calc-td calc-td_title">Contract price:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Potential income per contract period:</div>
                                                </div>
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title"></div>
                                                </div>
                                          </div>
                                    
                                        <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">30 major coins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">9.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 2.883</div>
                                                        <div class="calc-td calc-td_small">per 90 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 425%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256 PRO</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">50-100 altcoins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">6.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 1.093</div>
                                                        <div class="calc-td calc-td_small">per 60 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>

                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">USDT</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">200 major coins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 8.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 95%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">ETHEREUM</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">ETH</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">20 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">1.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">Daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 8.983</div>
                                                        <div class="calc-td calc-td_small">per 30 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 25%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>                        
                                    </div>
                    </div>
        
            </Tab>
            <Tab eventKey="lifetime" title="LIFETIME">
                           <div className = 'container year-contract'>
                           <div className = 'row'> 
                                        <div className = 'col-md-2 pricing tile'>    
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title" style = {{visibility:'hidden'}}>No</div>
                                                </div>
                                                <div className="calc-row calc-row_mod" >
                                                    <div className="calc-td calc-td_title">Mining strategy:</div>
                                                </div>
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title">Min. hashrate:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Maintenance fee:</div>
                                                </div>
                                                <div className="calc-row"> 
                                                <div className="calc-td calc-td_title">Payouts:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Availability:</div>
                                                </div>
                                                <div className="calc-row calc-modern">
                                                    <div className="calc-td calc-td_title">Contract price:</div>
                                                </div>
                                                <div className="calc-row calc-row_mod">
                                                    <div className="calc-td calc-td_title">Potential income per contract period:</div>
                                                </div>
                                                <div className="calc-row">
                                                    <div className="calc-td calc-td_title"></div>
                                                </div>
                                          </div>
                                    
                                        <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 major coins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 2.883</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256 PRO</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">50-100 altcoins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 1.093</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">SHA-256 BCH</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">100-150 altcoins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 0.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">USDT</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">200 major coins</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 1.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className = 'col-md-2 pricing text-center'>
                                                <div class="calc-column"  aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide61" aria-describedby="slick-slide-control61">
                                                <div class="calc-row colc-modsha">
                                                    <div class="calc-td calc-td_head">ETHEREUM</div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">ETH</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">0.001$  10 GH/s / 24h</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">                                                  
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">daily in BTC</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod">
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            In Stock
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner">
                                                    <div class="calc-td calc-td_small calc-td_line">from <span>$1.405</span></div>
                                                            <div class="calc-td calc-td_count">$ 0.983</div>
                                                        <div class="calc-td calc-td_small">per 10 GH/s</div>
                                                    </div>
                                                </div>
                                                <div class="calc-row calc-row_mod re">    
                                                    <div class="calc-td-inner">
                                                        <div class="calc-td">
                                                            up to 125%
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="calc-row">
                                                    <div class="calc-td-inner calc-td-inner_full">
                                                        <div class="calc-td calc-td_link"><a href="#simplecalc" class="auto-calclink" tabindex="-1">Mining calculator</a></div>
                                                        <div class="calc-td pt-3">
                                                        <a href="/ext-register" class="btn auto-buylink" tabindex="-1">Buy now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>                        
                                    </div>
                               
                           </div>
            </Tab>
          </Tabs>
        );
      }
        return (
            <div>
                {/* Slider Section */}
                <section className = 'home-slider text-center ' style = {backgroundImage}>
                    <div className = 'slider-heading'>               
                        <h4 className = 'slider-title'>
                              Mine. Trade. Double Up.
                        </h4>
                         <p className = 'slider-par'>CloudXmine platform combines cloud mining with daily payments and Forex margin trading, 
                          options and cryptocurrencies, giving the opportunity to multiply potential income.</p>
                    </div>
                    <div className="head-picture">
                         <div className="head-pic head-pic_1"><img src="./image/head-1.png" alt="alt"/></div>
                         <div className="head-pic head-pic_2"><img src="./image/head-2.png" alt="alt"/></div>
                    </div>
                </section> 

                <div>
                    <Modal
                            show={this.state.show}
                            onHide={() => this.setState({ show: false})}
                            dialogClassName="modal-90w"
                            aria-labelledby="contained-modal-title-vcenter"
                     >
                        <Modal.Header closeButton >
                        </Modal.Header>
                        <Modal.Body> <img className = 'popupmasses' src= './image/popup.png'  alt="alt"/>  </Modal.Body>
                    </Modal>
             </div>
                {/* Start Mining or Trading   */}
                <section className ='mining-trading'>
                    <div className ='container pt-5 pb-5'>
                    <div className = 'mining-title text-center'>
                        <h1>3 Easy Steps to Start Mining or Trading</h1>
                    </div>
                    <div className = 'miniTrading'>
                               <ControlledTabs/>
                    </div>
                 </div>
                </section>
                {/* Cloud Mining */}
                <section className = 'cloud-mining-section'>
                    <div className = 'container text-center pt-5 pb-t'>
                        <div className = 'cloud-mining-title '>
                            <h1>Cloud Mining</h1>
                        </div>
                        <div className = 'cloud-mining-para'>
                            <p>Cloud mining has been a controversy in the world of cryptocurrency over the past few years. It’s obvious that cloud mining draws plenty of adherents from all over the world.
                            Despite the rising popularity, there are still millions of crypto miners who either have not seen the benefit of Litecoin mining in the cloud or have not been convinced that this type of cloud mining is the best way to go.
                            
                            </p>
                        </div>

                        <div className = 'row pt-5'>
                            <div className ='col-md-5'>
                                <div className = 'row'>
                                    <div className = 'col-md-6'> 
                                        <div className = 'minigdetails text-center'>
                                           <img className = 'miningimg' src= './image/PQ_Icons-16.png'  alt="alt"/>
                                           <h5 className = 'py-2'>Daily payouts</h5>
                                           <p>in BTC, ETH</p>
                                         </div>
                                    </div>
                                    <div className = 'col-md-6'> 
                                        <div className = 'minigdetails text-center'>
                                           <img className = 'miningimg' src= './image/registration-icon-10.jpg'  alt="alt"/>
                                           <h5 className = 'py-2'>"Pro" contract</h5>
                                           <p>extra 20% interest per year*</p>
                                         </div>
                                    </div>
                                </div>
                                <div className = 'row mt-5'>
                                    <div className = 'col-md-6'> 
                                        <div className = 'minigdetails text-center'>
                                           <img className = 'miningimg' src= './image/215830.png'  alt="alt"/>
                                           <h5 className = 'py-2'>Income Booster</h5>
                                           <p>Auto reinvest and earn up 180% a year</p>
                                         </div>
                                    </div>
                                    <div className = 'col-md-6'> 
                                        <div className = 'minigdetails text-center'>
                                           <img className = 'miningimg' src= './image/pngegqg.png'  alt="alt"/>
                                           <h5 className = 'py-2'>24/7 live support</h5>
                                           <p>With reponse time under 2 min</p>
                                         </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary bbtn mt-4">Start Mining Now</button>
                            </div>

                            <div className = 'col-md-7 pt-5'>
                                    <img className = 'miningchart' src= './image/mining.png'  alt="alt"/>
                            </div>
                        </div>
                        <div className = 'underninig text-center py-5 px-5'>
                            <p>*SHA-256 PRO advanced mining algorithm helps us to manage payouts with income up to 20% higher than standard SHA-256 contract.</p>
                        </div>
                    </div>
                </section>
                <div className = 'banarinmage text-center'>
                        <img  src= './image/banarimag.PNG'  alt="alt"/>
                </div>
                {/* Our Mining Contracts */}
                <section className = 'mining-contracts-section pt-5 pb-5'>
                    <div className = 'container'>
                    <div className = 'mining-contract text-center'>
                        <h1>Our Mining Contracts</h1>
                        <p>We offer you the most profitable and reliable cloud mining contracts by providing
                               daily payouts for all the contracts in the currency of the contract.
                                  Start cryptocurrency and stablecoins cloud mining today, and get the first payout tomorrow!</p>
                    </div>
                    </div>
                    <MinigContract/>
                    
                </section>
                {/* Mining Income Calculator */}
                <section className = 'miningi-income-calculator'>
                <div className = 'container text-center pt-5 pb-t'>
        <div className = 'cloud-mining-title '>
            <h1>Mining Income Calculator</h1>
        </div>
        <div className = 'mining-calculator mt-5'>
            <div className = 'row calculators pt-4'>
                <div className = 'col-md-6 calculat'>
                    <div className = 'calculator-contract'>
                            <div className = 'selectOp'>
                            <p style = {{marginRight:'10px'}}>Contract: </p>
                             <select class="form-select" aria-label="Default select example" onChange={this.calculatorDropdownSHA}>      
                                    <option value="11.5">SHA-256</option>
                                    <option value="5.8">SHA-256 Pro</option>
                                    <option value="2.5">SHA-256 BCH</option>
                                    <option value="0.9">USDT</option>
                                    <option value="0.02">Ethereum</option>
                              </select>                                                 
                            </div>
                            <div className = 'selectOp'>
                                <p style = {{marginRight:'10px'}}> Validity: </p>
                                 <select class="form-select" aria-label="Default select example" onChange={this.calculatorDropdownYear}>      
                                    <option value="1">1 Year</option>
                                    <option value="2">2 Years</option>
                                    <option value="5">5 Years</option>
                                    <option value="12">Life Time</option>
                                  </select>
                              </div>
                    </div>
                    <h1 className = 'doller5000'>5000$</h1>
                </div>
                <button type="button" class="btn btn-primary bbtn rr mt-4">=</button>
                <div className = 'col-md-6'>
                    <div className = 'calculator-contract'>
                          <p>Power</p>  
                    </div>
                    <h1 className = 'doller5000'>{this.state.selectValue * 5000 * this.state.selectYear} GH/s</h1>
                </div>
              </div>
              </div>      
              <div className = 'pt-5'>
               <div className = 'row'>
                    <div className = 'col-md-4'>
                        <div className = 'calcbox'>
                            <div className = 'colsIncome'>
                                <h5>DAILY INCOME</h5>
                                <h2>${Math.round(this.state.selectValue * this.state.selectYear)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-md-4'>
                        <div className = 'calcbox'>
                            <div className = 'colsIncome'>
                                <h5>MONTHLY INCOME</h5>
                                <h2>${Math.round(this.state.selectValue * this.state.selectYear *30)}</h2>
                            </div>
                        </div>
                    </div>
                    <div className = 'col-md-4'>
                        <div className = 'calcbox'>
                            <div className = 'colsIncome'>
                                <h5>ANNUAL INCOME</h5>
                                <h2>${Math.round(this.state.selectValue * this.state.selectYear * 365)}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    <div className = 'underninig text-center py-5 px-5'>
                               <p>*This forecast is indicative and does not include resell of altcoins and maintenance fee</p>
                    </div>
                   
                </section>

            {/* Trading */}
                 <section className = 'cloud-mining-section'>
                    <div className = 'container text-center pt-5 pb-t'>
                        <div className = 'cloud-mining-title '>
                            <h1>Trading</h1>
                        </div>
                        <div className = 'cloud-mining-para'>
                            <p>Trade Crypto, Forex CFDs and earn up to 95% extra income in 60 seconds on CloudXmine platform.Copy trades of the most successful traders and earn even more!</p>
                        </div>

                        <div className = 'row pt-5'>
                            <div className = 'col-md-7 pt-5'>
                              <img className = 'tradingchart' src= './image/traiding.png'  alt="alt"/>
                            </div>
                            <div className ='col-md-5'>
                                <div className = 'row'>
                                    <div className = 'col-md-6'> 
                                        <div className = 'minigdetails text-center'>
                                           <img className = 'miningimg' src= './image/PQ_Icons-16.png'  alt="alt"/>
                                           <h5 className = 'py-2'>Highest Payouts</h5>
                                           <p>Earn up to 95% in 60 seconds when trading options</p>
                                         </div>
                                    </div>
                                    <div className = 'col-md-6'> 
                                        <div className = 'minigdetails text-center'>
                                           <img className = 'miningimg' src= './image/registration-icon-10.jpg'  alt="alt"/>
                                           <h5 className = 'py-2'>Copy Trading</h5>
                                           <p>Copy the best traders automatically and earn more</p>
                                         </div>
                                    </div>
                                </div>
                                <div className = 'row mt-5'>
                                    <div className = 'col-md-6'> 
                                        <div className = 'minigdetails text-center'>
                                           <img className = 'miningimg' src= './image/215830.png'  alt="alt"/>
                                           <h5 className = 'py-2'>Flexible Leverage</h5>
                                           <p>From 1:3 and up to 1:100 for any trading startegy</p>
                                         </div>
                                    </div>
                                    <div className = 'col-md-6'> 
                                        <div className = 'minigdetails text-center'>
                                           <img className = 'miningimg' src= './image/pngegqg.png'  alt="alt"/>
                                           <h5 className = 'py-2'>Contracts Pledging</h5>
                                           <p>Get up to 100% of contract cost on your trading account balance.</p>
                                         </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary bbtn mt-4">Start Trading Now</button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Pledge Your Mining Contract */} 
                <section className = 'pledge-mining-contract mt-5 pt-5 pb-5'>
                        <div className = 'container text-center pt-5 pb-t '>
                             <div className = 'Pledge-mining-title '>
                                 <h1>Pledge Your Mining Contract</h1>
                             </div>
                             <div className = 'Pledge-mining-para'>
                                 <p>Trade Crypto, Forex CFDs and earn up to 95% extra income in 60 seconds on CloudXmine platform.Copy trades of the most successful traders and earn even more!</p>
                             </div>
                       
                             <div className  = 'pledging-works pt-5'>
                                    <h1>How Does Mining Contract Pledging Works</h1>
                                    <div className = 'row pt-5 pb-5'>
                                        <div className = 'col-md-3'>
                                            <div  className = 'pledge-work'>
                                                      <img className = 'miningimg trad' src= './image/215830.png'  alt="alt"/>
                                                      <h4>Pledge your contract</h4>
                                                      <p>Get up to 100% from your contract cost</p>
                                            </div>
                                        </div>
                                        <div className = 'col-md-3'>
                                            <div  className = 'pledge-work'>
                                                      <img className = 'miningimg trad' src= './image/registration-icon-10.jpg'  alt="alt"/>
                                                      <h4>Get funds</h4>
                                                      <p>Get trading funds to your account immediately</p>
                                            </div>
                                        </div>
                                        <div className = 'col-md-3'>
                                            <div  className = 'pledge-work'>
                                                      <img className = 'miningimg trad' src= './image/pngegqg.png'  alt="alt"/>
                                                      <h4>Trade and multiply</h4>
                                                      <p>Get up to 100% from your contract cost</p>
                                            </div>
                                        </div>
                                        <div className = 'col-md-3'>
                                            <div  className = 'pledge-work'>
                                                      <img className = 'miningimg trad' src= './image/Daco_4201955.png'  alt="alt"/>
                                                      <h4>Repay your contract</h4>
                                                      <p>And continue earning profit from mining, while already multiplying profit by trading</p>
                                            </div>
                                        </div>
                                    </div>
                             </div>
                        </div>
                </section>

        {/* No Previous Experience in Trading? */}
            <section className = 'previous-experience-section'>
                <div className = 'container  pt-5 pb-5'>
                        <div className = 'Previous-mining-title  text-center'>
                           <h1>No Previous Experience in Trading?</h1>
                           <p>Just start copying the most successful traders!</p>
                        </div>
                    <div className = 'previous-trading'>
                        <div className = "row pt-5">
                                <div className = 'col-md-6'>
                                    <img  className = 'traider' src = './image/traider.png' alt = 'alt'/>
                                </div>
                                <div className = 'col-md-6   px-5'>
                                    <div className = 'choose-trading pb-4'> 
                                        <h5 style = {{color:'#44acff'}}>HOW TO COPY TRADES?</h5>
                                    </div>
                                    <div className = 'chose-trade'>
                                        <h3>Choose trader to copy trades</h3>
                                        <p>Select one or several traders from our most successful traders.</p>
                                    </div>
                                    <div className = 'chose-trade'>
                                        <h3>Monitor your earnings</h3>
                                        <p>Select one or several traders from our most successful traders.</p>
                                    </div>
                                    <div className = 'chose-trade'>
                                        <h3> Withdraw your profit</h3>
                                        <p>Select one or several traders from our most successful traders.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* How to Buy Power and Withdraw Profit */}
            <section className = 'buy-power-withdraw mt-5'>
                 <div className = 'container text-center pt-5 pb-5'>
                        <div className = 'Withdraw-title'>
                           <h1>How to Buy Power and Withdraw Profit</h1>
                           <p>Easy and convenient purchase and withdrawal methods without any commission!</p>
                        </div>
                        <div className = 'logoicom'>
                                 <img  src= './image/logo-1.svg'  alt="alt"/>
                                 <img  src= './image/logo-2.svg'  alt="alt"/>
                                 <img  src= './image/logo-3.svg'  alt="alt"/>
                                 <img  src= './image/logo-4.svg'  alt="alt"/>
                                 <img  src= './image/logo-5.svg'  alt="alt"/>
                                 <img  src= './image/logo-6.svg'  alt="alt"/>
                       </div> 
                        <button type="button" class="btn btn-primary bbtn mt-4">OPEN ACCOUNT NOW</button>
                  </div>
                
             </section>
            </div>
        );
    }
}

export default Home;