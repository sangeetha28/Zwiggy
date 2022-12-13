import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
import { useState } from "react";

const Checkout = (props) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const isNotEmpty = (value) => value.trim() !== "";

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
    reset: streetInputReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: postalCodeInputHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: postalCodeInputReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: cityInputReset,
  } = useInput(isNotEmpty);

  const confirmHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredStreetIsValid ||
      !enteredPostalCodeIsValid ||
      !enteredCityIsValid
    ) {
      setIsFormValid(false);
      return;
    }

    nameInputReset();
    streetInputReset();
    postalCodeInputReset();
    cityInputReset();
  };

  const nameInputClasses = nameInputHasError ? "invalid" : "control";
  const streetInputClasses = streetInputHasError ? "invalid" : "control";
  const postalInputClasses = postalCodeInputHasError ? "invalid" : "control";
  const cityInputClasses = cityInputHasError ? "invalid" : "control";

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes[nameInputClasses]}>
        <label htmlFor="name"> Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputHasError && <p>Name must not be Empty</p>}
      </div>
      <div className={classes[streetInputClasses]}>
        <label htmlFor="street"> Your Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetInputBlurHandler}
        />
        {streetInputHasError && <p>Street must not be Empty</p>}
      </div>
      <div className={classes[postalInputClasses]}>
        <label htmlFor="postal"> Your Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostalCode}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeInputHasError && <p>Postal Code not be Empty</p>}
      </div>
      <div className={classes[cityInputClasses]}>
        <label htmlFor="city"> Your City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityInputBlurHandler}
        />
        {cityInputHasError && <p>City must not be Empty</p>}
      </div>
      <button type="button" onClick={() => props.onCancel()}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
