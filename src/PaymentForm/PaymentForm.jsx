import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  CardElement,
  useRecurly,
  RiskDataCollector,
} from "@recurly/react-recurly";
import { useCallback } from "react";

export const PaymentForm = () => {
  const formEl = useRef(null);
  const recurly = useRecurly();

  const handleSubmit = useCallback(
    (evt) => {
      console.log("[handleSubmit]");
      evt.preventDefault();
      recurly.token(formEl.current, (err, token) => {
        if (err) {
          console.error("there was an error getting a token", err);
        } else {
          console.log("got token:", token);
        }
      });
    },
    [recurly, formEl]
  );

  const handleError = useCallback((error) => {
    console.error("kount RiskDataCollector error");
    console.error(error);
  }, []);

  return (
    <>
      <form ref={formEl} onSubmit={handleSubmit}>
        <p>
          <label>First Name</label>
          <input
            id="first_name"
            type="text"
            data-recurly="first_name"
            placeholder="First name"
          />
        </p>
        <p>
          <label>Last Name</label>
          <input
            id="last_name"
            type="text"
            data-recurly="last_name"
            placeholder="Last name"
          />
        </p>
        <CardElement />
        <RiskDataCollector strategy="kount" onError={handleError} />
        <button role="button" type="submit">
          Submit
        </button>
      </form>

      <p>
        <Link to="/info">Information</Link>
      </p>
    </>
  );
};
