import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

import mealsImage from "../../assets/meals.jpeg";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Hot Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.mainimage}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};

export default Header;
