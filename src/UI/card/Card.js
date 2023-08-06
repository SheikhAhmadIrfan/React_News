import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.cardcontainer}>
      <div className={classes.cardimg}>
        {props.img ? (
          <img src={props.img} alt="Not found" />
        ) : (
          <img src="https://i.insider.com/64667e05fb9a9d0018c91f62?width=1200&format=jpeg" alt="Default" />
        )}
      </div>
      <div className={classes.cardone}>
        <h3>Title</h3>
        <p>{props.title}</p>
      </div>
      <div className={classes.cardone}>
        <h3>Description</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.cardone}>
        <h3>Time</h3>
        <p>{props.publish}</p>
      </div>
      <div className={classes.cardbutton}>
        <button onClick={()=>{
          window.location.href = props.readmore
        }} >Read More</button>
      </div>
    </div>
  );
};
export default Card;
