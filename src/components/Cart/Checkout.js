import { useRef } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = nameInputRef.current.value;

  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name"> Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street"> Your Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal"> Your Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city"> Your City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <button type="button" onClick={() => props.onCancel()}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
