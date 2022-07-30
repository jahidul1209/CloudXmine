import React, { Component } from 'react';
var backgroundImage = {
    width: "100%",
    height: "70vh",
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + './image/background.jpg'})`,
    backgroundSize: 'cover',
  }


class TermsCondition extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div>
                <div className = 'price-slider' style = {backgroundImage}>
                     <div className = 'container'>
                         <div className = 'price-title text-center'>
                             <h1>TERMS AND CONDITIONS</h1>
                             <p>The financial services provided by this website carry a high level of risk and can result in the loss of all of your funds.  </p>    
                         </div>
                     </div>
                 </div>
                 <div className = 'container privacy-policy pt-5 pb-5'>
                     <p> The financial services provided by this website carry a high level of risk and can result in the loss of all of your funds. You should never invest money that you cannot afford to lose. Please ensure you read our terms and conditions before making any operation in our trading platform. Under no circumstances the company has any liability to any person or entity for any loss or damage cause by operations on this website. CloudXmine nor its agents or partners are not registered and do not provide any services on the USA territory.</p>

                    <p> The Website and Content may be available in multiple languages. The English version is the original version and the only one binding on CloudXmine; it shall prevail on any other version in case of discrepancy. CloudXmine shall not be responsible for any erroneous, inadequate, or misleading translations from the original version into other languages.</p>

                    <h4>1. Payment Procedures</h4>
                    <p>1.1. Client shall fund his trading account within 90 calendar days from the date of its opening in an amount not less than define terms for the type of account (minimum initial deposit).</p>
                    <p>1.2. The Company has the right to close/cancel an account with the balance less than 1 cent (one-hundredth of a US dollar), if the above account balance existed for more than 90 calendar days.</p>
                    <p>1.3. Client may request withdrawal of funds from his trading account in the amount not used to cover the margin, but not more than current balance. , provided that all positions of the Client are closed, all sums due to the Company have been paid.</p>
                    <p>1.4. Client places a funds withdrawal order using the Company website’s interface. Company is not responsible for any third party access to the Client personal information and withdrawal orders. Once an order has been received, the withdrawal amount may be deducted from the Client’s trading account.</p>
                    <p>1.5. In some cases, and considering that third parties, i.e., payment service providers, are involved in funds transfer, e.g., payment institutions, banks, card processing schemes etc., fund transfer may take up to five banking days after receiving a Client’s order. The security service of the company has the right to hold the order up to 10 business days, previously having notified the Client.</p>
                    <p>1.6. The Client will be given the Company’s banking details to transfer funds to his trading account via the Company’s website, or may place an account funding order in electronic (placed using the Company website’s interface) or written form.</p>
                    <p>1.7. When funding his account, the Client shall use the Company’s current banking or electronic wallet details, received at the Company’s website only and effective on the payment date. Current banking details mean details received within 24 (twenty four) hours prior to payment. The Company cannot be held responsible for the funds which the Client transferred using banking details different from current, and does not offer investigation and refund of Client’s payment and cannot credit these funds to Client’s trading balance. Trading deposit funding orders may be issued, and current banking details may be received in the appropriate section of trader’s web entry on the payment day.</p>
                    <p>1.8. The Client agrees to pay Deposit/withdrawal fees, i.e.,to pay any banking or money transfer fees associated with any transfer, settlement or movement of funds or assets on the Client’s behalf</p>
                    <p>1.9.When the trading account balance is funded using online payment systems, Client may order withdrawal only to the same payment system which he has used to fund his trading account in the corresponding currency or it's equivalent. Trading profit may be withdrawn to any of the payment systems (up to a Client’s wish).</p>
                    <p>1.10. When the trading account balance is funded using direct bank transfer, funds will be credited within 1 working day (after the transfer was actually credited to Company account). The minimum funding amount is 5000 (EUR or USD). Clients who fund their account using direct bank transfer may order withdrawal only to the account from which the payment was done. An upfront bank transfer fee 50 USD will be applied (for international bank transfer).</p>
                    <p>1.11. Company reserves the right to reject a request for withdrawal in case of an explicit intention to exchange customer funds from one payment system to another.</p>
                    <p>1.12. Account balance funding using a third person credit card is prohibited.</p>
                    <p>1.13. If case of funding by using Visa/Mastercard, withdrawals can be done via bank transfer, or by using a specially issued Master card, sent to client by ordered mail.</p>
                    <h4>2. Customer and Company Responsibilities</h4>
                    <p>2.1. Client is notified and agrees that the Company cannot be held liable for Client’s actions or inactions during conversion operations. Responsibility for trading account monitoring is the Client’s duty.</p>
                    <p>2.2. Company reserves the right to amend this Agreement notifying the Client about it at least 2 business days prior to the effective date of these amendments. Posting the relevant information on the main page of the <span><a href = 'www.CloudXmine.com'>www.CloudXmine.com</a></span> website for the period of at least 3 days is also considered as notification. The Client undertakes to consult and review regularly the <span><a href = 'www.CloudXmine.com'>www.CloudXmine.com</a></span> website to be timely informed about any changes in respect of this Agreement and the Services in particular.</p>
                    <p>2.3. All rights and obligations of the Company and the Client represent a long-term commitment, which remains in force up until the Company receives a Client’s notice of termination of this Agreement or closing his trading account.</p>
                    <p>2.4. Company cannot be held responsible for non-fulfilment of any obligations involving quality of online communication of information to the Client terminal or use of information, software, and interfaces of websites which do not belong to the Company.</p>
                    <p>2.5. Client realizes that any market recommendations and information communicated to the Client by the Company, its representatives, or third parties do not constitute as an offer to make operation/transaction.</p>
                    <p>2.6. Client realizes that</p>
                    <p> a) any payments which Client makes using the banking details received earlier than 24 hours prior to the payment execution time or not at the appropriate sections of the Company website, which differ from the Company’s current banking details do not entail the Company’s liability or obligations concerning investigation, refund or credit of this payment to the Client’s trading balance.</p>
                    <p>b) any actions committed by the Client or third parties (by Client’s fault or with Client’s participation), which destabilize the Company’s business or performance of the Company’s services, equipment, or software may result in the Company’s refusal (on the basis of private law) of servicing the Client’s current trading account and cancellation of all trading orders, with full refund of the remaining deposit. Company must notify the Client about the reasons for the above decision. Company also may reject such Client’s new registration in the future.</p>
                    <p>2.7. Persons under 18 years or under the age of majority, which is legally allowed to participate in financial trading, can not use the services of the Website.</p>
                    <p>2.8. The Client declares and guarantees that: 
                        <ul>
                            <li> he is sane,</li>
                            <li>his age is minimum 18 years old,</li>
                            <li>information which Client provided to the Company is true and correct,</li>
                            <li>he shall notify the Company about any and all changes in this information within one day after the change took place,</li>
                            <li>the e-mail address used by the Client is not in use by anyone else. Any and all notices, requests, complaints, and information received from this address are considered as sent by the Client.</li>
                        </ul>
                    </p>    
                    <p>2.9. Company may request from Client a confirmation of accuracy of the personal account data for a due diligence and in the event of a withdrawal request. Company may request a notarized copy of the Client’s ID and the document proving his place of residence. Inability to provide requested documents may result in the Company’s refusal (on the basis of private law) of servicing the Client’s current trading account and cancellation of all trading orders, with full refund of the remaining deposit. Company must notify the Client about the reasons for the above decision. Company also may reject such Client’s new registration in the future.</p>
                    <p>2.10. Client agrees to provide all documents and notices, notarize documents, and take all other actions which the Company may request in accordance with the Anti Money Laundering Policy</p>
                    <p>2.11. In case of double registration of the same Client, the Company has the right to cancel duplicated registrations, cancel opened positions and withdrawal requests. All duplicated accounts will be frozen for investigation purposes.</p>
                    <h4>3. Customer risk notice</h4>
                    <p>3.1. Client understands that the risk of suffering trading losses may be quite significant. Client should analyze his financial capabilities before engaging in trading operations.</p>
                    <p>3.2. Client realizes that he may completely lose his all initial funds and any additional funds used when trading on the market.</p>
                    <p>3.3. Client agrees that the company cannot be held responsible for Client’s losses caused, directly or indirectly, by the government restrictions, restrictions of foreign exchange or market rules, suspension of trading, military operations, or other conditions usually called the ‘force majeure circumstances’ which lie beyond the company’s control.</p>
                    <p>3.4. Client was informed about additional risks associated with the specifics of functioning of e-trade systems and the problems of Internet communication nodes.</p>
                    <p>3.5. Client bears full responsibility for the risks associated with the storage of trading account access data, and must ensure that third parties cannot access the trade terminals. Client’s losses and risks associated with the restoration of access to the trading account imposes no obligations on the Company, other than to provide new access data to the Client after identification procedure.</p>
                    <h4>4. Terms of transactions</h4>
                    <p>4.1. Trade is executed at prices offered to the Client, which are shown in the window of Clients’ trading terminal.</p>
                    <p>4.2. Company may decline the Clients’ request to open a new position, if the balance on his trading account is not sufficient to place a minimal trade.</p>
                    <p>4.3. Company may suspend its operations or revise client’s trades for the following reasons: failures on part of Internet access providers, failures in information flows, hacker attacks, and other illegal actions against the Company’s servers and equipment, force majeure circumstances, and suspension of trading on financial markets which concerns financial instruments used by the Company.</p>
                    <p>4.4. Company may revise (change) an executed trade upon discovery of software malfunction within 5 trading sessions after malfunction was discovered. In this case, Client will be provided by a market prices history from at least 2 independent quotes sources.</p>
                    <p>4.5. The Company has the right to cancel Clients’ trading orders and reject service provision, if fraud attempts were done in order to make profit using particularities of trading conditions and trading equipment, including registrations in CloudXmine affiliate programs with a purpose of getting an extra profit from trading activity, where trading account holder and affiliate account holder is the same person, or trading account and affiliate account is operated by the same person.</p>
                    <p>4.6. Under certain trading conditions, the Client should note that it may be impossible to execute an Order at their requested price. In such cases the Company reserves the right to execute the Order at the first available price. Such instances may occur during times of high market volatility and price fluctuations e.g. when the price of an asset rises or falls in one trading session to such an extent that, under the rules of the relevant exchange, trading is suspended or restricted.In the event that the Company is unable to proceed with an Order in relation to price or size or any reason, the Order will be executed at the first available price or not executed at all. In addition, please note, that the Company is entitled, at any time and at its discretion, without giving any notice or explanation to the Client, to decline or refuse to transmit or arrange for the execution of any Order or request of the Client in circumstances explained in the Terms & Conditions.The Company does not accept any orders outside of the market hours of the relevant underlying financial instrument.</p>
                    <h4>5. Disputes, complaints and inquiries</h4>
                    <p>5.1. The parties will try to settle all disputes by negotiation. The Company may accept Client’s complaints for review, if these complaints were expressed in writing and received within three calendar days after the dispute occurrence date.</p>
                    <p>5.2. Client’s inquiries will be considered as official and treated, if these inquiries were placed and received by the Company via the Company’s website interface, by e-mail sent to the addresses of the Company’s corresponding services, or by regular mail. Inquiries placed using online communication programs, such as Skype or similar, cannot be considered as official.</p>
                    <p>5.3. The Company will review Client’s complaints within ten business days after receiving from the Client all necessary and sufficient information which concerns this complaint.</p>
                    <p>5.4. In the event of disagreements concerning Client’s operations or the state of his trading account, the parties will review the protocols of Client’s operations using Company’s data.</p>
                    <p>5.5. If the Client will breach any of the above paragraphs, the Company reserves the right to restrict the Client access to its services and make a refund of the Client’s available deposit. Termination of service and refund of the deposit will come into effect upon expiration of 5 banking days after the Client was sent a notice by e-mail provided at the time of registration of trading account.</p>
                    <p>5.6. In case of failure to reach an agreement through negotiations and correspondence within 3 (three) months from the date of the initiation of a dispute its further consideration will be directed towards the justifiability in accordance with the laws of the Marshall Islands.</p>
                    <h4>6. Know your customer</h4>
                    <p>6.1. The Company has the right to request the customer to confirm his identity and information provided upon registration. At any time Client can be asked to provide an electronic copy, certified copy or notarized copy of a passport (at the discretion of the Company).</p>
                    <p>6.2. If the Client has not received a request to provide the documents, the procedure of enhanced verification is not mandatory, but the Client can voluntarily send a copy of the passport or other proof of identity.</p>
                    <p>6.3. In the case customer registration data (name, address or telephone number) have changed, the customer shall immediately notify the Company’s customer service asking to change the data.</p>
                    <p>6.4. All withdrawal requests should be processed to the same account, from where trading deposit was initially transferred.</p>
                    <p>6.5. Customer acknowledges that the registration data, referred to him for opening an account can be used by the Company in the fight against money laundering.</p>
                    <p>6.6. Customer is responsible for the authenticity of submitted documents (copies) and recognizes the right of the Company, in case of doubt about their authenticity, to contact authorities of the issuer of the document to verify its authenticity and if it detects a falsification of the document, Company has the right to place an account on hold and conduct an investigation.</p>
                    <h4>7. Communicating with Clients</h4>
                    <p>7.1. The Company may communicate with the Client by using:
                        - E-mail address provided by the Client
                        - Phone number provided by the Client
                        - Postal address provided by the Client
                        - Company Web site www.CloudXmine.com
                        The Company will use the details specified by the customer provided upon registration. Client must immediately notify the Company of any changes in contact information.
                        </p>
                    <p>7.2. Any correspondence (documents, announcements, notifications, confirmations, reports, etc.) will be considered as received by the Client:
                            - after one hour after sending to Client’s e-mail address
                            - Immediately after sending the internal mail in the trading platform
                            - Immediately after the telephone conversation with the Client
                            - After one day after placing announcement in the Company Web site.
                            </p>
                    <h4>8. Termination of the agreement</h4>
                    <p>8.1. Following agreement becomes effective as of its acceptance by the Client.</p>
                    <p>8.2. This agreement will be terminated if following occurs:
                        - In the case of expression of the wish by one of the parties to terminate this Agreement;
                        - In case of breach by the Client the terms specified in the Agreement, the Company may terminate this Agreement unilaterally by notifying the customer of such termination and returning to Client remaining funds from his/her trading account at the time of termination. Also, company reserves the rights to cancel all trading orders previously done by the Client.
                        </p>
                    <p>8.3. If the Company terminates the activities under this Agreement:
                            - Company warns the Client one month prior to such termination;
                            - The Company pays the Client the Client’s funds, which are on the account at the time of activity termination, as quickly as possible.
                            </p>
                    <p>8.4. In case of death of the Client:
                        - The right to demand withdrawal of funds from the Client’s trading account transferred to the heirs;
                        - The right to use trading account and the right to conduct operations in the financial markets by heirs is not transmitted.
                        </p>
                    <p>8.5. Customer agrees that the Company reserves the right at its sole discretion, suspend or discontinue all or part of the Client’s access the services by an appropriate notice by means of communication. In this case, this Agreement shall be terminated and Company terminates providing services to the Client</p>
                    <h4>9. Anti-Money Laundering Procedure</h4>
                    <p>No person shall abuse this site for the purpose of money laundering. CloudXmine may employ best-practice anti-money laundering (AML) procedures. CloudXmine reserves the right to refuse to do business with, to discontinue to do business with, and to reverse the transactions of, clients who do not accept or conform to the following AML requirements and policies:
                    • Clients must provide all requested information upon registration.
                    • Funds will only be paid to the individual who initially registered to open a live account and specifically only to the originating credit card or account on file
                    • When a client maintains an account by means of telegraphic deposits, funds will only be distributed to the holder of the originating bank account. When making deposits in this manner, it is the responsibility of the Client to ensure that the client’s account number and registered name of the account owner accompany all transfers to CloudXmine.
                    • When a client transfer funds to the account by means of credit/debit card deposits, funds will only be distributed to the individual whose name appears on the card used to make the deposit and only be paid back to the same card.
                    • Only one account is allowed per person. No funds may be collected on accounts opened in false names or on multiple accounts opened by the same person.
                    • CloudXmine may, from time to time, at its sole discretion, require a client to provide additional proof of identity such as notarized copy of passport or other means of identity verification as it deems required under the circumstances and may at its sole discretion suspend an account with cancelling of all previously done trading orders, until such proof has been provided to its satisfaction.
                    Any suspicious or fraudulent transactions will be immediately reported to the relevant authorities.
                    10. Bonus Policy
                    CloudXmine offers a number of attractive reward features to its new and subsisting clients. Bonuses and one time trading credits awarded to clients are part of CloudXmine’s promotional programmes. These bonuses are limited time offers and the terms and conditions associated with bonus rewards are subject to change.
                    CloudXmine reserves the right to refuse, cancel or change the bonus at any time without any prior notice. Any indication of fraud, manipulation, cash-back arbitrage or other forms of deceitful or fraudulent activity based on the provision of the bonus will render the account inactive along with any and all profits or losses garnered.
                    Bonuses are optional and client is not required to take a bonus. During initial deposit, client may send a request to support@CloudXmine.com to accept no bonus and therefore is exempt to any conditions pertaining to bonuses, however the rest of the terms in this Agreement still apply. Should client mistakenly accept a bonus, client must notify customer support within 3 working days, and must place no trades. In such an instance, CloudXmine will remove bonus from client account and client shall not be held to the terms relating to bonuses, however all terms and conditions will still apply.
                    11. Withdrawal Procedure and Fees
                    CloudXmine finance department handles all withdrawal requests submitted. From the time the request is made, CloudXmine normally process each withdrawal request within 1 hour. However, in case of shortage of data on the client side, or delays on third-party side, the processing time may be longer.
                    The CloudXmine finance team will determine the method of withdrawal. Client cannot request to change a withdrawal method. All funds must be returned to the source of the original deposit. However, in some cases, this may not be possible (such as in cases where the original deposit source was a MasterCard). CloudXmine’s finance department will venture to find the optimal method of processing clients withdrawal.
                    Identification is required for all withdrawals, regardless of the withdrawal amount. If the account is initially funded by credit or debit card, or is at any point funded using a credit or debit card, CloudXmine will require a copy of the front and back of the credit card used, hiding sensitive authentication data, a government issued photo ID (such as a drivers license or passport) and a 3-months recent proof of address (such a bank statement or utility bill), if needed. Mobile phone bills and other general mail will not satisfy this requirement. If the CloudXmine account has been funded using multiple credit or debit cards, the CloudXmine finance department will require copies of all cards used before a withdrawal is approved.
                    Notwithstanding the above, if the withdrawal amount and/or the cumulative withdrawal amount, is or exceeds $1,800 or €1,800, no funds shall be transferred until the client’s identity, and age have been verified.
                    If the account is initially funded by wire transfer, or is at any point funded by wire transfer, a copy of the bank statement from the originating account showing the transfer will be required. Should the name on the bank statement differ from the person named on the CloudXmine account, further documentation showing the connection between the user and the bank account will be required.
                    If the account is funded by an e-wallet (such as Qiwi), the client will be required to submit a photo ID and proof of address (as described above) where the address of the document submitted matches that on the users account at CloudXmine.
                    When sending required documents, please follow these guidelines:
                    - Please always send colour copies, scans or photographs
                    - Please do not enlarge, shrink or otherwise manipulate the size of the subject matter
                    - When sending copies of cards, please conceal the middle 8 numbers on the card. Please ensure the first and last four digits are visible. Cards sent showing all digits will be deleted immediately.
                    - When sending bank statements, please ensure the name and address information are visible, as well as the transfer sent to the company. You should then conceal all other information.
                    If the withdrawal amount, or cumulative withdrawal amount on the account, exceeds €1,800 or $1,800 (depending on account currency), CloudXmine’s finance department will require certified copies of all identification documents, regardless of whether uncertified copies have previously been submitted.
                    Documents must be certified as true original copies by a notary public, or at the post office.
                    No withdrawals will be processed until such time as the CloudXmine finance department has obtained all required identification and verified their authenticity. Once identification has been obtained once (or in the case of higher limit withdrawals, twice), ID will not need to be provided again with the exception of if additional payment methods or cards are used to fund the account, in which case copies of further cards or bank statements will need to be provided.
                    Once the withdrawal has been approved, please allow an additional up to 5-6 working days for the funds to show in a client account. Please note that larger withdrawal amounts may take additional time as they may be subject to fraud checks by the processing and receiving banks. These additional checks are not performed by, or at the request of, CloudXmine and we do not have control over this process.
                    Any withdrawal that must be completed by international wire transfer will be charged an upfront $50 transfer fee.
                    For funds, which were not active, i.e., with which Client has not made 1x turnover, maintenance fee of 20% on each of the withdrawal amounts apply, which shall be paid by the Client.
                    12. Deposits
                    In order to fund a trading account at CloudXmine, client can do so by bank transfer, using an e-wallet (such as Qiwi) or by utilising one of the following major credit or debit cards: Visa and MasterCard. Cash deposits are strictly prohibited.
                    CloudXmine charges no fees to the client to deposit using any approved deposit method.
                    Please also note that some card issuers may charge a fee to make a deposit into your CloudXmine account. Please check the terms and conditions of your card, or call your issuer directly, if you think your issuer or bank may charge you a fee. Any charges issued by the bank or issuer must be disputed directly with them, as CloudXmine has no say or input on these fees.
                    Once a deposit request via bank transfer is submitted, it can take CloudXmine up to 3 business days to process the request and verify the funds have been received.
                    A deposit request via credit, debit card or via e-wallets into a trading account will be processed within 3 hours. From time to time, issuing banks may place security blocks on cards – clients may need to call their bank to have these blocks removed.
                    The trader can impose self-deposit limits by contacting the CloudXmine support team via email payments@CloudXmine.com.
                    13. Fees and Charges
                    The amount that is displayed as client “Payout” is free from fees. Accordingly, the “Payout” amount will be the exact amount credited into your trading account.
                    Client may access all records of transactions on line at no charge.
                    There is no charge to open or maintain an account at CloudXmine. However, if the client fails to transact at least one trade in any calendar month, an account service fee of $10 per month will be levied.
                    In the case that no transaction has been recorded on a trader’s account for twelve months, CloudXmine may remit the balance in that account to the client.
                    In order for a client to claim funds from a dormant account, closed, blocked or excluded account, one must contact CloudXmine by email on payments@CloudXmine.com
                    Client expressly authorise CloudXmine to collect any account fees due and owing pursuant to these terms and conditions by debiting the client credit card on file, or by debited the client’s trading account.
                    14. “First 3 risk free trades” service
                    If the total of the first three transactions is negative, CloudXmine will compensate the loss in the form of bonus and bonus rules will apply. Compensation of risk free trades can not exceed the amount of initial deposit. To use this service, you need to apply for it in advance. Simply contact your account manager and negotiate details.
                    15. Cancellation Policy
                    CloudXmine reserves the right in its sole discretion, to refuse or cancel services, and/or refuse to distribute profits to any person for legitimate reasons, including, without limitation:
                    if CloudXmine has reason to believe that a person’s activities on the Site may be illegal;
                    if CloudXmine may be harmed by any fiscal or pecuniary damage due to anyone’s activities;
                    if CloudXmine consider that one or more operations on the Site were made in violation of this Agreement;
                    if client has failed to provide CloudXmine with the Know Your Client (KYC) documents.
                    Client can request cancellation of service at any time, in case if there are no trading positions opened. If trading positions are opened, client has to close it or wait till expiration . All withdrawal requests has to be treated based on standard withdrawal conditions, described in paragraph 1.
                    Terminology
                    Trade – purchase of the CFD.
                    CFD – object of trade based on a change in a price of an asset in a specified period of time.
                    Financial instruments – available for trading CFD types as currencies, indexes, stocks, commodities.
                    Opened position – purchased CFD under influence of a market risk.
                    DueDiligence – set of procedures to identify the Client and verify his personal information.
                    Equity – current account state, calculated by formula: balance + floatingprofit — floatingloss.
                    Balance – amount on the Clients or brokers trading account, not counting floatingprofit or floatingloss.
                    In the Agreement any reference to an individual person shall include corporate entities, unincorporated associations, partnerships and individuals.
                    Headings and notes in the Agreement are for reference only and shall not affect the contents and interpretation of the Agreement.
                    In the Agreement references to any law shall include references to any statutory modification or re-enactment thereof or to any regulation or order made under such law, statute or enactment (or under such a modification or re-enactment).
                    16. Terms for trading CFDs
                    Price: The price for a given contract is calculated by reference to the price of the relevant underlying financial instrument. For any given CFD, the Company will quote two prices: the higher price (ASK) at which the Client can buy (go long) that CFD, and the lower price (BID) at which the Client can sell (go short) that CFD. Collectively, the ASK and BID prices are referred to as the Company’s prices and can be found on the Company’s trading platform.
                    The difference between the lower and the higher price of a given CFD is the spread.
                    Prices will be obtained from reputable third-party price feeders and provided by the Company. Prices are updated frequently as the limitations of technology and communication links allow.
                    The Company ensures that the Client will receive the best price by guaranteeing that the calculation of the quoted prices is made with reference and compared to a range of underlying price providers and data sources. The Company additionally ensures to monitor its Execution Venue(s) on an ongoing basis and review their performance at least annually to confirm that relevant and competitive pricing is offered.
                    Please note that despite taking reasonable steps to obtaining best possible results for Clients, the Company is unable to guarantee, when executing orders, that the prices offered will be more favourable that prices that might be available elsewhere.
                    Under certain trading conditions, the Client should note that it may be impossible to execute an Order at their requested price. In such cases the Company reserves the right to execute the Order at the first available price. Such instances may occur during times of high market volatility and price fluctuations e.g. when the price of an asset rises or falls in one trading session to such an extent that, under the rules of the relevant exchange, trading is suspended or restricted.
                    Costs: In most circumstances, a spread is applied. The spread is dynamic for certain Financial Instruments, and may take into account such factors as liquidity in external markets for the underlying financial instrument and competitive pricing. The Company reserves the right to charge the Client a swap fee (of 0.07% of the face value of the position) for keeping a position open overnight. This swap fee can be subject to changes in the future. The swap fee is calculated as the rounded result of the following formula: ((23%)/360) + Libor rate.
                    The Company reserves the right to charge a commission for opening an unleveraged Cryptocurrency CFD trading position which shall vary from 1% to 2.5% of the transaction. For leveraged CFD cryptocurrency positions, the Company will charge a commission fee of up to 5% of the transaction.
                    In certain circumstances (such as increased volatility or illiquidity in relation to the underlying market concerned) the Company reserves the right to alter the spreads offered.
                    In other circumstances, clients may be charged overnight funding premiums.
                    The Company reserves the right to, at any time, apply such charges in the future with prior notice to the Client. Such notice may be sent personally to the Client and/or posted on the Company’s website in the section General Fees. Should the Company at any period of time decide not to charge any costs, it shall not be construed as a waiver of its rights to apply them in the future.
                     
                    Speed of Execution: The Company strives to offer a high speed of execution however, in certain circumstances, for example low internet speed or market volatility, the quoted price may no longer be representative of the underlying market price and may result in the Client placing his/her Order at a delay, this may result in orders being executed at a better or worse prevailing price offered by the Company.
                     
                    Likelihood of Execution: The Company arranges for the execution of Client orders with the Execution Venue, as such, execution may at times be difficult. The likelihood of execution depends on the availability of the prices of the Execution Venue(s). In some instances, it may not be possible to arrange an Order for execution during abnormal market conditions. This can occur, but is not limited to, the following examples: overnight, during news times, the opening of trading sessions, volatile markets (where prices may move significantly up or down and away from declared prices), where there is rapid price movement, where there is insufficient liquidity for the execution of the specific volume at the declared price or a force majeure event has occurred.
                    In the event that the Company is unable to proceed with an Order in relation to price or size or any reason, the Order will be executed at the first available price or not executed at all. In addition, please note, that the Company is entitled, at any time and at its discretion, without giving any notice or explanation to the Client, to decline or refuse to transmit or arrange for the execution of any Order or request of the Client in circumstances explained in the Terms & Conditions.
                    The Company does not accept any orders outside of the market hours of the relevant underlying financial instrument.
                    Likelihood of Settlement: The Company shall proceed to the settlement of all transactions upon execution of such transactions. The CFDs offered by the Company do not involve the delivery of the underlying asset, so they are not settled physically as there would be for example if the Client had bought Shares. All CFDs are cash settled.
                    The Company shall proceed with the settlement of all transactions upon the execution and/or time of expiration of the specific transaction.
                    Size of Order: All orders are placed in monetary values. The Client is able to place an order as long as they have enough balance in their trading account. The minimum size of an Order may be different for each type of CFD, please refer to the Company’s trading platform for the value of the minimum size of an Order in each CFD, as well as the value of the maximum size of a single Order.
                    If the Client wishes to execute a large Order, in some cases the price may become less favourable. The Company reserves the right to decline an Order in case the size of the Order is large and cannot be filled by the Company.
                    Market Impact: Some factors may rapidly affect the price of the underlying instrument/product from which the Company’s quoted price is derived and may also affect other factors listed herein. The Company will take all reasonable steps to obtain the best possible result for its Clients.
                    The Company does not consider the above list exhaustive and the order in which the above factors are presented shall not be taken as priority factor.
                    Different Types of CFDs: The Company offers the following types of CFDs on its platform:
                    Forex: CFDs in currency pairs (FX)
                    CFD stocks
                    "Crypto": CFDs in Cryptocurrencies
                    Types of Orders: The Client may give instruction to execute or initiate a trade with the Company by way of:
                    Market Order: whereby the Client gives instructions to immediately buy or sell at the best available price.
                    Execution Practices in CFDs
                    Slippage: You are warned that Slippage may occur when trading in CFDs. Slippage is the difference between the expected price of an Order, and the price the Order is actually executed at. In some situations, at the time an Order is presented for execution, the specific price shown to the Client may not be available; therefore, the Order will be executed close to or a number of pips away from the Client’s requested price.
                    Slippage can occur at times of low liquidity or high volatility (e.g. after economic events or news announcements) and is a normal element of trading in CFDs.
                    Leverage (Multiplier): The use of the multiplier tool in CFD trading enables the client to trade in the markets and increase proportionally the returns of his/her invested amount, in relation to the returns in the market. However, the maximum loss a client can incur from a trade is limited to his/her original investment amount meaning the remaining amount of his/her equity is secured. The Company applies a maximum multiplier of 1:100 for all clients by default, in line with relevant legislation.
                    E.g. (for long positions with 1:50 multiplier): A trader decides to invest €1,000 (Investment Amount) on the upwards movement of EUR/USD. He/she also chooses to use a multiplier of 50 for this trade. After one day, the trader decides to close the position. At that moment, the price of EUR/USD moved from 1.153250 (opening price) to 1.158000 (closing price) or otherwise 0.41188%. The realised profit for the client will be €205.94 or otherwise 20.594%. To better understand the calculations, the invested capital increased by the percentage move in the market multiplied by the multiplier (0.41188% x 50 = 20.594%).
                    (Closing Price / Opening Price -1) x Multiplier x Investment Amount = Profit/Loss
                    i.e. (1.158000 / 1.153250 -1) x 50 x 1000 = 205.93973553 or €205.94
                    For short positions: i.e (1-closing price / opening price) Multiplier Investment Amount = Profit/Loss.
                    Without the use of the multiplier tool the trader’s profit would have been 4.1187947106 or €4.12.
                    In the opposite scenario, if the market had moved against his/her position, the realised losses would have been larger with the use of the multiplier compared to a position opened without the use of it. To demonstrate with the same example, if the market had moved 1% down from the opening price of 1.153250, because of the use of the multiplier tool, the invested capital will decrease by 50% (1% x 50).
                    i.e. 1% x 50 x 1000 = €500
                    Without the use of the multiplier tool, the trader’s losses would have been €10.
                    If the trader had used a lower multiplier both the profit and loss amount in the examples above, would have been smaller as well.
                    E.g. Using a multiplier of 20, the realised profit in the first example would be (1.158000 / 1.153250 -1) x 20 x 1000 = 82.374 or €82.40 and 1% x 20 x €1,000 = €200 for the second example.
                    As it will be explained more in Maintenance Margin section the trader will never lose more that the investment amount of a position.
                    It should be noted that the Company may offer higher multipliers to clients it considers to possess the necessary knowledge, experience and understanding of the high risks involved with trading with leverage. Leverage restrictions may apply to certain instruments and/or jurisdictions.
                    Warning: Trading CFDs carries a high level of risk since the multiplier tool (leverage) can work both in your advantage and disadvantage. As a result, it may not be suitable for all investors because you may lose all your invested capital.
                    Maintenance Margin: The Maintenance Margin is the minimum amount of equity in a position required to maintain the open position. Should this amount fall below 5% of the initial investment, the Company will automatically close the position.
                    E.g. Using the data from the previous example with €1,000 investment in EURUSD and using a multiplier of 50, the maintenance margin is calculated as 5% x €1,000 = €50. Therefore, the maximum loss the trader can occur, before their position is closed by the Company is 95% or €950 (If the trader has not already closed the position themselves).
                    The price when the position will be closed by the Company, and only if the trader hasn’t decided to already close the position, is 1.131338. At this price, the remaining amount of the investment will have reached the maintenance margin.
                    To better understand the calculations the return in the market when 95% of the investment amount will be lost is 1.9% on the downside since the position is long the EURUSD.
                    Maximum Loss / multiplier = return in market.
                    i.e. 95% / 50 = 1.9%*
                    For an opening price of 1.153250, a 1.9% decline will cause the price to move to 1.131338.
                    Opening Price x (1 – return in market) = price when position will be closed.
                    i.e. 1.153250 x (1-1.9%) = 1.131338
                    In majority of situations, position will be automatically closed as soon as it declines by 95%. It can happen that the position will be closed in a range between 95% and 100%, such situations can occur at times of low liquidity or high volatility (e.g. after economic events or news announcements) and is a normal element of trading in CFDs.
                    In case of 100% loss, calculations will be like this:
                    Maximum Loss / multiplier = return in market
                    i.e. 100%/50 = 2%
                    For an opening price of 1.153250, a 1.9% decline will cause the price to move to 1.130185
                    Opening Price x (1 – return in market) = price when position will be closed
                    i.e. 1.153250 x (1-2%) = 1.130185

                    </p>


                 </div>
            </div>
        );
    }
}

export default TermsCondition;