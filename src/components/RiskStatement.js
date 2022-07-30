import React, { Component } from 'react';
var backgroundImage = {
    width: "100%",
    height: "70vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.jpg'})`,
    backgroundSize: 'cover',
  }


class RiskStatement extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div>
                <div className = 'price-slider' style = {backgroundImage}>
                     <div className = 'container'>
                         <div className = 'price-title text-center'>
                             <h1>RISK STATEMENT</h1>
                             <p>All investments carry risk. Different investment strategies carry different levels of risk depending on the financial products that make up the strategy. Generally, financial products with the potential for the highest returns may also carry the highest risk.</p>    
                         </div>
                     </div>
                 </div>
                 <div className = 'container privacy-policy pt-5 pb-5'>
                     <p> All investments carry risk. Different investment strategies carry different levels of risk depending on the financial products that make up the strategy. Generally, financial products with the potential for the highest returns may also carry the highest risk.</p>

                    <p> Your level of acceptable risk will vary compared to other investors’ risk appetite and will depend on a range of factors such as your age, your investment timeframe, how comfortable you feel about exposing your capital to risk, the nature and size of other investments you hold and the extent to which CFDs/options fit into your overall financial plan.</p>

                    <p> The nature of CFDs/options allows BROKER to have a control or influence over the performance or return of investment on CFDs/options. It is important to note that no return is guaranteed. Future returns may differ from past returns and Clients may lose some or all of their money invested. Additionally, laws (including tax laws) that affect CFDs/options may change in the future which may have an adverse effect on your returns.</p>

                     <p>Trading CFDs/options offered by BROKER involves a high level of risk due to its speculative nature. Accordingly, we strongly recommend that you obtain your own financial, legal, taxation and other professional advice to determine whether these products are an appropriate investment for you.</p>

                     <p> BROKER limits your potential loss to the amount of money deposited in your account by using a fixed amount, that may be lost and which is disclosed to the Client before buying an option or CFD. However, as a result of a variety of unsuccessful trades you may still sustain losses in amount of entire capital in your account (deposit). Therefore, only risk capital should be invested i.e. money you can afford to lose.</p>

                     <p>This section include the significant risks that may affect your investments with BROKER.</p>   
                 </div>
            </div>
        );
    }
}

export default RiskStatement;