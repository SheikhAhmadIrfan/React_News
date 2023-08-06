//It is a little bit simpe and not responsice

import logo from "../../assets/images/logo.jpeg";
import classes from './Header.module.css'
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate();
  return (
    <div className={classes.headercontainer}>
      <div className={classes.one}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.vertical}></div>
      <ul className={classes.ul}>
        <li onClick={()=>navigate('/')}>Home</li>
        <li onClick={()=>navigate('/tech')}>Tech</li>
        <li onClick={()=>navigate('/sports')}>Sport</li>
        <li onClick={()=>navigate('/worklife')}>WorkLife</li>
        <li onClick={()=>navigate('/travel')}>Travel</li>
        <li onClick={()=>navigate('/future')}>Future</li>
        <li onClick={()=>navigate('/culture')}>Culture</li>
      </ul>
    </div>
  );
};
export default Header;
