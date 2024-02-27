import "../css/paymentpage.css"
const Paymentpage = () => {
    return (
        <>
            <div className="heading-payment">Payment</div>
            <hr />
            <div className="payment-options-price-details">
                <div className="payment-options">
                    <div className="payment-options-heading">PAYMENT OPTION</div>
                    <div className="phonepay-option">
                        <input type="radio" name="paymentoptions" />
                        <img src="./images/phonepe.png" alt="phonepe img" />
                        <span>Phonepe UPI 88XXXXXX270@ybl</span>
                        {/* <button>Continue</button> */}
                    </div>
                    <hr />
                    <div className="googlepay-option">
                        <input type="radio" name="paymentoptions" />
                        <img src="./images/googlepay.png" alt="google pay img"/>
                        <span>UPI</span>

                    </div>
                    <hr />
                    <div className="credit-debit-atm">
                        <input type="radio" name="paymentoptions" />
                        <img src="./images/rupay.png" alt="rupay img"/>
                        <div>
                            <span>Credit / Debit / ATM Card</span>
                            <div className="rbi-guidelines">Add and secure  cards as per RBI guidelines</div>
                        </div>

                    </div>
                    <hr />
                    <div className="cash-on">
                        <input type="radio" name="paymentoptions" />
                        <img src="./images/cashon.jpeg" alt="cash on delivery img" />
                        <span>Cash on Delivery</span>

                    </div>
                    <hr />
                </div>

                {/* part 2 */}

                <div className="prices-details-category">
                    <div className="prices-details-category-div">

                        <h1 className="price-details">PRICE DETAILS</h1>
                        <br/>
                        <div className="all-payment-detail">

                            <div className="main-product-price">
                                Price (2 items)
                                <span> ₹33,998</span >
                            </div>

                            <hr />

                            <div className="delivery-charges">
                                Delivery Charges
                                <span> Free</span >
                            </div>
                            <hr />
                            <div className="packaging-charges">
                                Packaging charges 
                                <h4>₹60</h4>
                            </div>
                            <hr />

                            <div className="amount-payable">
                                <h3>Amount Payable</h3>
                                <h4>₹34,058</h4>
                            </div>
                            
                        </div>
                        <div className="proceed-to-pay">
                                PROCEED TO PAY
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Paymentpage;