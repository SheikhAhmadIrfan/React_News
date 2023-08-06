import classes from "./Story.module.css";
const Story = (props) => {
  return (
    <div
      className={classes.storycontainer}
      onClick={() => (window.location.href = props.readmore)}
    >
      <div className={classes.storyimg}>
        {props.img ? (
          <img src={props.img} alt="Not found" />
        ) : (
          <img
            src="https://i.insider.com/64667e05fb9a9d0018c91f62?width=1200&format=jpeg"
            alt="Default"
          />
        )}
      </div>
      <div className={classes.storypara}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};
export default Story;
