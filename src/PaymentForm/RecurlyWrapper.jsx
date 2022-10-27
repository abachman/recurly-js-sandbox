import { PaymentForm } from "./PaymentForm";
import { Elements, RecurlyProvider } from "@recurly/react-recurly";

const RECURLY_PUBLIC_KEY = "ewr1-hsOAL9QykVGxKus3HouFp8";

export const RecurlyWrapper = () => {
  return (
    <RecurlyProvider publicKey={RECURLY_PUBLIC_KEY}>
      <Elements>
        <PaymentForm />
      </Elements>
    </RecurlyProvider>
  );
};
