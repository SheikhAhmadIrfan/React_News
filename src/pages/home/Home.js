import classes from "./Home.module.css";
import Header from "../../components/header/Header";
import Card from "../../UI/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Fetchaction, clearItem } from "../../redux/actions/Fetchaction";
import Loader from "../../UI/loader/Loader";
import Notify from "../../UI/notify/Notify";
import { Homesliceactions } from "../../redux/slices/Homeslice";

const Home = () => {
  const [value, setValue] = useState("nature");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Fetchaction("politics"));
  }, [dispatch]);

  const homedata = useSelector((state) => state.Homeslice.item);
  const Loading = useSelector((state) => state.Homeslice.isLoading);
  const Error = useSelector((state) => state.Homeslice.err);
  const newhomedata = homedata?.[0]?.articles?.slice(0, 20);

  const handleSearch = () => {
    if (value.match(/[0-9]/)) {
      dispatch(Homesliceactions.toggleError({
        flag:true,
        title:"You have entered a number,Kindly Enter String."
      }));
      return;
    } else {
      dispatch(clearItem());
      dispatch(Fetchaction(value)).then((action) => {
        if (action.payload.articles.length === 0) {
          dispatch(Homesliceactions.toggleError({
            flag:true,
            title:"No articles found for the given search query."
          }));
        }
      });
    }
  };

  return (
    <>
      {!Loading && !Error && (
        <div className={classes.homecontainer}>
          <div>
            <Header />
          </div>
          <div className={classes.homeinput}>
            <input
              type="text"
              placeholder="Search Here"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className={classes.homeheading}>
            <h2>Latest News</h2>
          </div>
          <div className={classes.homecards}>
            {newhomedata?.map((i) => (
              <Card
                key={Math.random()}
                title={i.title}
                description={i.description}
                publish={i.publishedAt}
                img={i.urlToImage}
                readmore={i.url}
              />
            ))}
          </div>
        </div>
      )}
      {Loading && !Error && <Loader />}
      {Error && <Notify />}
    </>
  );
};

export default Home;
