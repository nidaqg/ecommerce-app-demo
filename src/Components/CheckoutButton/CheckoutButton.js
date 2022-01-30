import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const CheckoutButton = ({price}) => {
    //stripe requires amount in cents so convert dollar value into cents
    const priceForStripe = price * 100;
    //get publishable key gtom stripe
    const publishableKey="pk_test_51KNfRADqYqXcSnAc88shuAaWo2dMsbtEnEJitYdbVIgQeFWS6X8zxnXF7QL0vbj0olNx1YTjf2E6D1xawJjXwm7N00TKl5qUIl";
    //the token handles the payment so calls something on the backend. For now 
    //we will just log it
    const onToken = (token) => {
        alert("Payment successful!")
    }

    return (
        <StripeCheckout
        label="Checkout Now"
        name="Crown Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />

    )
}

