import classes from "./Explore.module.css";
const Explore = (props) => {
  return (
    <div
      className={classes.explorecontainer}
      onClick={() => (window.location.href = props.readmore)}
    >
      <div className={classes.exploreimage}>
        {props.img ? (
          <img src={props.img} alt="Not found" />
        ) : (
          <img
            src="https://i.insider.com/64667e05fb9a9d0018c91f62?width=1200&format=jpeg"
            alt="Default"
          />
        )}
      </div>
      <div className={classes.exploreheading}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Explore;
