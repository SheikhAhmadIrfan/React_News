//It is a little bit simpe and not responsice

import logo from "../../assets/images/logo.jpeg";
import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes.headercontainer}>
      <div className={classes.one}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.vertical}></div>
      <ul className={classes.ul}>
        <li>Home</li>
        <li>News</li>
        <li>Sport</li>
        <li>Reel</li>
        <li>WorkLife</li>
        <li>Travel</li>
        <li>Future</li>
        <li>Culture</li>
      </ul>
    </div>
  );
};
export default Header;
