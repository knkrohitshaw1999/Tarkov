import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AdliUtrle0N0u324d9fO64GUYaMfc2yf-jS-7AkLf8F5EXdBGDtIjd60_5KAm6e70Dn4qcZRAuqLGn-8",
        currency: "USD",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: parseFloat(amount).toFixed(2),
                },
              },
            ],
          });
        }}
        onApprove={async (data) => {
          try {
            const res = await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/api/paypal/capture`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  orderID: data.orderID,
                }),
              },
            );

            if (!res.ok) {
              const errorData = await res.json();
              throw new Error(errorData.message || "Payment capture failed");
            }

            const details = await res.json();

            onSuccess({
              orderID: data.orderID,
              details,
            });
          } catch (err) {
            console.error(err);
            onError(err);
          }
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
