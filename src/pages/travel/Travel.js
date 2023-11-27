import classes from '../../components/css/Overall.module.css';
import Header from "../../components/header/Header";
import Story from "../../components/story/Story";
import { useEffect } from "react";
import { Fetchaction } from "../../redux/actions/Fetchaction";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../redux/actions/Fetchaction";
import Loader from "../../UI/loader/Loader";
import Explore from "../../components/explore/Explore";
import Card from "../../UI/card/Card";

const Travel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearItem());
    dispatch(Fetchaction("travel"));
  }, [dispatch]);
  const data = useSelector((state) => state.Homeslice.item);
  const newstorydata = data?.[0]?.articles?.slice(0, 6);
  const newstorydata1 = data?.[0]?.articles?.slice(10, 13);
  const newstorydata2 = data?.[0]?.articles?.slice(21, 24);
  const newexploredata = data?.[0]?.articles?.[15];
  const Loading = useSelector((state) => state.Homeslice.isLoading);
  return (
    <>
      {!Loading && (
        <div className={classes.container}>
          <div>
            <Header />
          </div>
          <div className={classes.heading}>
            <h1>Top Stories</h1>
          </div>
          <div className={classes.story}>
            {newstorydata?.map((i) => (
              <Story
                key={Math.random()}
                title={i.title}
                img={i.urlToImage}
                readmore={i.url}
              />
            ))}
          </div>
          <div className={classes.heading}>
            <h1>Insight: Must-read sporting stories</h1>
          </div>
          <div className={classes.explore}>
            <Explore
              key={Math.random()}
              description={newexploredata?.description}
              img={newexploredata?.urlToImage}
              readmore={newexploredata?.url}
            />
            <div className={classes.explore1}>
              {newstorydata1?.map((i) => (
                <Story
                  key={Math.random()}
                  title={i.title}
                  img={i.urlToImage}
                  readmore={i.url}
                />
              ))}
            </div>
          </div>
          <div className={classes.heading}>
            <h1>More to Explore</h1>
          </div>
          <div className={classes.card}>
            {newstorydata2?.map((i) => (
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
      {Loading && <Loader />}
    </>
  );
};
export default Travel;
