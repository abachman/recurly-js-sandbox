import { PaymentForm } from "./PaymentForm";
import { Elements, RecurlyProvider } from "@recurly/react-recurly";

const RECURLY_PUBLIC_KEY = "ewr1-YYr0JsQKITjLmeqHAb7L0U"; // reasonable

export const RecurlyWrapper = () => {
  return (
    <RecurlyProvider
      publicKey={RECURLY_PUBLIC_KEY}
      fraud={{ kount: { dataCollector: true } }}
    >
      <Elements>
        <PaymentForm />
      </Elements>
    </RecurlyProvider>
  );
};
